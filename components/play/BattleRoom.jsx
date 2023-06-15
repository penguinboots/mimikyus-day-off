import { useGameState } from "../../utils/context/GameStateContext";
import { useEffect } from "react";
import {
  moveOrder,
  calculateMove,
  opponentMoveSelect,
  moveFetcher,
} from "../../game/helpers/combat";
import { padMoves } from "@/utils/helpers/padMoves";
import HealthBar from "./HealthBar";
import MoveItem from "../common/MoveItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import ResultPopup from "./ResultPopup";
import Image from "next/image";

export default function Room(props) {
  const { setMode } = props;
  const {
    gameState,
    setGameState,
    roomType,
    setRoomType,
    nextRoom,
    turnMode,
    setTurnMode,
    battleWon,
    setBattleWon,
    popup,
    setPopup,
    sprites,
    setSprites,
    playAnim,
    dealDamage,
    dealHeal,
    battleHistory,
    setBattleHistory,
    gifReloadKeyPlayer,
    setGifReloadKeyPlayer,
    gifReloadKeyOpponent,
    setGifReloadKeyOpponent,
    showPlayer,
    setShowPlayer,
    showOpponent,
    setShowOpponent,
    loseGame,
    splash,
    setSplash,
    flashSplash,
  } = useGameState();

  const PLAYER = gameState.player.sprites[sprites.player].url; // idle, attack, hit
  const OPPONENT = gameState.opponent.sprites[sprites.opponent].url;
  const BACKGROUND = gameState.currentRoom.background;
  const BACKGROUND_COL = gameState.currentRoom.color;

  // Briefly shows VS splash on entering Play or new room
  useEffect(() => {
    flashSplash();
    return () => {
      setSplash(false);
    };
  }, [gameState.currentRoom]);

  // Resets gif animations to beginning after changes
  useEffect(() => {
    setGifReloadKeyPlayer((prevKey) => prevKey + 1);
    setShowPlayer(false);
    setTimeout(() => setShowPlayer(true), 0);
  }, [PLAYER]);
  useEffect(() => {
    setGifReloadKeyOpponent((prevKey) => prevKey + 1);
    setShowOpponent(false);
    setTimeout(() => setShowOpponent(true), 0);
  }, [OPPONENT]);

  // Checks for end-of-battle conditions, triggers endBattle sequence after delay
  useEffect(() => {
    if (gameState.opponent.current_hp <= 0) {
      setBattleWon(true);
      setTimeout(() => {
        endBattle(true);
      }, 1500);
    } else if (gameState.player.current_hp <= 0) {
      setBattleWon(false);
      setTimeout(() => {
        endBattle(false);
      }, 1500);
    }
  }, [gameState]);

  // Triggers popup based on battle outcome
  function endBattle(win) {
    if (win) {
      setPopup((prev) => ({
        ...prev,
        victory: true,
      }));
    } else if (!win) {
      setPopup((prev) => ({
        ...prev,
        defeat: true,
      }));
    }
  }

  // Play animations for attack
  async function playAttack(attacker, defender) {
    let attackDelay = gameState[attacker].sprites.attack.length;
    let hitDelay = gameState[defender].sprites.hit.length;
    playAnim(attacker, "attack");
    await new Promise((resolve) => {
      setTimeout(() => {
        playAnim(attacker, "idle");
        resolve();
      }, attackDelay);
    });
    await new Promise((resolve) => {
      playAnim(defender, "hit");
      resolve();
    });
    await new Promise((resolve) => {
      setTimeout(() => {
        playAnim(defender, "idle");
        resolve();
      }, hitDelay);
    });
  }

  // Play animations for non-attack move (needs new anims)
  async function playStatUp(self) {
    let key = `${self}Buff`;
    setSprites((prev) => ({
      ...prev,
      [key]: true,
    }));
    await new Promise((resolve) => {
      setTimeout(() => {
        setSprites((prev) => ({
          ...prev,
          [key]: false,
        }));
        resolve();
      }, 1500);
    });
  }

  // Executes the move, applying hp/stat changes
  async function doMove(move, moveEffects, target, self) {
    if (move.category.includes("damage")) {
      let resultHP = null;
      await playAttack(self, target);
      // Instead of checking current_hp (cannot get newest state), check math of damage dealt against old current_hp state
      if (moveEffects.damage) {
        resultHP = dealDamage(target, moveEffects.damage);
        if (resultHP <= 0) {
          return true;
        }
      }
      if (moveEffects.heal) {
        dealHeal(self, moveEffects.heal);
      }
      if (moveEffects.statChanges) {
        // apply stat changes
      }
    } else if (move.category.includes("stats")) {
      await playStatUp(self);
    } else if (move.category === "unique") {
      await playStatUp(self);
    }
    return false;
  }

  // Executes player move selection, calling previously defined helpers
  async function executeTurn(charMove, char, opponentMove, opponent) {
    let isBattleOver = false;
    let turns = moveOrder(charMove, char, opponentMove, opponent);
    for (let turn of turns) {
      let moveEffects = calculateMove(turn.move, turn.user, turn.target);
      // Execute the 2 moves in order, only if battle is not over
      if (!isBattleOver) {
        setBattleHistory((prev) => [
          ...prev,
          `${turn.user.name} used ${turn.move.name}!\n`,
        ]);
        // doMove calculates whether damage dealt will kill the target this turn
        if (turn.user === gameState.player) {
          if (
            (await doMove(turn.move, moveEffects, "opponent", "player")) ===
            true
          ) {
            isBattleOver = true;
            // Assumes target of attack is the only one taking damage (no recoil/struggle/poison effects)
            setBattleHistory((prev) => [
              ...prev,
              `${gameState.opponent.name} fainted!\n`,
            ]);
          }
        }
        if (turn.user === gameState.opponent) {
          if (
            (await doMove(turn.move, moveEffects, "player", "opponent")) ===
            true
          ) {
            isBattleOver = true;
            setBattleHistory((prev) => [
              ...prev,
              `${gameState.player.name} fainted!\n`,
            ]);
          }
        }
      }
    }
  }

  // Generates array of move objects from array of move name strings
  const playerMoveArray = [];
  gameState.player.moves.forEach((moveString) => {
    playerMoveArray.push(moveFetcher(moveString));
  });
  // Generates MoveItems from array of move objects
  let playerMoves = padMoves(
    playerMoveArray.map((move) => {
      if (move) {
        return (
          <button
            key={move.name}
            onClick={() =>
              executeTurn(
                move,
                gameState.player,
                opponentMoveSelect(gameState.opponent),
                gameState.opponent
              )
            }
          >
            <MoveItem id={move.name} move={move} loc="game" />
          </button>
        );
      }
    }),
    "button"
  );

  return (
    <div
      className="battle-room"
      style={{
        backgroundImage: BACKGROUND,
        backgroundColor: BACKGROUND_COL,
      }}
    >
      <div className="splash-wrapper">
        <Image
          className={`splash ${splash ? "show" : "hide"}`}
          alt="vs-splash"
          src={gameState.currentRoom.intro}
          width={1100}
          height={700}
        />
        <div className={`splash-shadow ${splash ? "show" : "hide"}`}></div>
      </div>
      {popup.victory && (
        <ResultPopup result="win" setMode={setMode} nextRoom={nextRoom} />
      )}
      {popup.defeat && (
        <ResultPopup result="loss" setMode={setMode} loseGame={loseGame} />
      )}
      <div className="battle-floor">
        <div
          className={`pokemon self ${showPlayer ? "show" : ""}`}
          style={{
            backgroundImage: `url(${PLAYER}?${gifReloadKeyPlayer})`,
          }}
        >
          {gameState.player.current_hp}/{gameState.player.stats.hp}
          <HealthBar
            player={true}
            poke={gameState.player.name}
            value={gameState.player.current_hp}
            maxValue={gameState.player.stats.hp}
          />
          <div className="effects">
            {sprites.playerBuff && <FontAwesomeIcon icon={faArrowUp} />}
          </div>
        </div>
        <div
          className={`pokemon opponent ${showOpponent ? "show" : ""}`}
          style={{
            backgroundImage: `url(${OPPONENT}?${gifReloadKeyOpponent})`,
          }}
        >
          {gameState.opponent.current_hp}/{gameState.opponent.stats.hp}
          <HealthBar
            player={false}
            poke={gameState.opponent.name}
            value={gameState.opponent.current_hp}
            maxValue={gameState.opponent.stats.hp}
          />
          <div className="effects">
            {sprites.opponentBuff && <FontAwesomeIcon icon={faArrowUp} />}
          </div>
        </div>
      </div>

      <div className="move-select">
        {playerMoves}
        <button onClick={nextRoom}>NEXT</button>
      </div>
    </div>
  );
}
