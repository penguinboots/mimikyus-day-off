import { useGameState } from "../../utils/context/GameStateContext";
import { useState, useEffect } from "react";
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
import { faArrowUp, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ResultPopup from "./ResultPopup";
import Image from "next/image";
import BattleHistory from "./BattleHistory";
import ComicPopup from "../common/ComicPopup";
import { dungeon } from "@/game/pregenerated/dungeon1";

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
          `${turn.user.proper_name} used ${turn.move.proper_name}!\n`,
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
              `${gameState.opponent.proper_name} fainted!\n`,
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
              `${gameState.player.proper_name} fainted!\n`,
            ]);
          }
        }
      }
      if(moveEffects.effectiveness === "immune"){
        setBattleHistory((prev) => [
        ...prev,
        `It had no effect!\n`,
      ])} else if(moveEffects.effectiveness === "not-very"){
        setBattleHistory((prev) => [
        ...prev,
        `It's not very effective on ${gameState.opponent.proper_name}\n`,
      ])} else if(moveEffects.effectiveness === "super"){
        setBattleHistory((prev) => [
        ...prev,
        `It's super effective on ${gameState.opponent.proper_name}\n`,
      ])}
      if(moveEffects.critical === true && moveEffects.effectiveness !== "immune"){
        setBattleHistory((prev) => [
        ...prev,
        `A critical hit!\n`,
      ])};

      // if(moveEffects.statChanges !== {}){
      // setBattleHistory((prev) => [
      //   ...prev,
      //   `${moveEffects.statChanges.stat.target.proper_name}'s ${moveEffects.statChanges.stat} went up!}\n`,
      // ])};
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

  // state for popup, current image, and continue button
  const [showPopup, setShowPopup] = useState(false);
  const images = ['https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Oxford_blue.png/220px-Oxford_blue.png', 'https://htmlcolorcodes.com/assets/images/colors/orange-color-solid-background-1920x1080.png'];

  // show comics popup on room_1 of floor_1
  useEffect(() => {
    flashSplash();
    if (gameState.currentRoom === dungeon.floor_1.room_1) {
      setShowPopup(true);
    }
    return () => {
      setSplash(false);
      setShowPopup(false); // Hide the popup when leaving room_1
    };
  }, [gameState.currentRoom]);

  return (
    <div className={`battle-room ${showPopup ? "comics" : ""}`} style={{ backgroundImage: BACKGROUND, backgroundColor: BACKGROUND_COL }}>
      {showPopup && (
        <ComicPopup images={images} setShowPopup={setShowPopup} />
      )}
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
      <div className="battle-history-menu">
        <BattleHistory />          
      </div>
      <div className="move-select">
        {playerMoves}
        <button onClick={nextRoom}>NEXT</button>
      </div>
    </div>
  );
}
