import MoveItem from "../common/MoveItem";
import { useGameState } from "../../utils/context/GameStateContext";
import { useEffect, useState } from "react";
import {
  moveOrder,
  calculateMove,
  opponentMoveSelect,
  moveFetcher,
} from "../../game/helpers/combat";
import HealthBar from "./HealthBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { padMoves } from "@/utils/helpers/padMoves";

export default function Room() {
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
  } = useGameState();

  const PLAYER = gameState.player.sprites[sprites.player].url; // idle, attack, hit
  const OPPONENT = gameState.opponent.sprites[sprites.opponent].url;
  const BACKGROUND = gameState.currentRoom.background;
  const BACKGROUND_COL = gameState.currentRoom.color;

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

  // Checks for opponent HP <= 0
  useEffect(() => {
    if (gameState.opponent.current_hp <= 0) {
      // nextRoom();
    }
  }, [gameState.opponent, setBattleWon, nextRoom]);

  // Checks for player HP <= 0
  useEffect(() => {
    if (gameState.player.current_hp <= 0) {
      console.log("battle lost");
    }
  }, [gameState.player]);

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
      await playAttack(self, target);
      if (moveEffects.damage) {
        dealDamage(target, moveEffects.damage);
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
  }

  // Executes player move selection, calling previously defined helpers
  async function executeTurn(charMove, char, opponentMove, opponent) {
    let turns = moveOrder(charMove, char, opponentMove, opponent);
    for (let turn of turns) {
      let moveEffects = calculateMove(turn.move, turn.user, turn.target);
      setBattleHistory((prev) => [
        ...prev,
        `${turn.user.name} used ${turn.move.name}!\n`,
      ]);
      if (turn.user === gameState.player) {
        await doMove(turn.move, moveEffects, "opponent", "player");
      }
      if (turn.user === gameState.opponent) {
        await doMove(turn.move, moveEffects, "player", "opponent");
      }
    }
  }

  // Generates array of move objects from array of move name strings
  const playerMoveArray = [];
  gameState.player.moves.forEach((moveString) => {
    playerMoveArray.push(moveFetcher(moveString));
  });
  // Generates MoveItems from array of move objects
  let playerMoves = padMoves(playerMoveArray.map((move) => {
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
  }), "button");

  return (
    <div
      className="battle-room"
      style={{
        backgroundImage: BACKGROUND,
        backgroundColor: BACKGROUND_COL,
      }}
    >
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
