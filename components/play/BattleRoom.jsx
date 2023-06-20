import { useGameState } from "../../utils/context/GameStateContext";
import { useState, useEffect } from "react";
import {
  moveOrder,
  calculateMove,
  opponentMoveSelect,
  moveFetcher,
  itemFetcher,
} from "../../game/helpers/combat";
import { padMoves } from "@/utils/helpers/padMoves";
import HealthBar from "./HealthBar";
import MoveItem from "../common/MoveItem";
import InventoryWindow from "./InventoryWindow";
import InventoryButton from "./InventoryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import ResultPopup from "./ResultPopup";
import Image from "next/image";
import BattleHistory from "./BattleHistory";
import { properName } from "@/utils/helpers/properName";
import { earnItem } from "@/prisma/helpers/earnItem";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Room(props) {
  const { setMode, setShowAchievementPopup } = props;
  const {
    gameState,
    nextRoom,
    setBattleWon,
    popup,
    setPopup,
    sprites,
    setSprites,
    playAnim,
    dealDamage,
    dealHeal,
    changeStat,
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
    windowClose,
    windowToggle,
    isMenuOpen,
    skipToBoss,
    handleAchievement,
    roomAchievement,
  } = useGameState();
  const { user } = useUser();
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

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
      // let currentAchievement = {...roomAchievement};
      handleAchievement(roomAchievement);
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

  async function playStatDown(self) {
    let key = `${self}Nerf`;
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
        if (moveEffects.statChanges.target === "target") {
          await playStatDown(target);
          changeStat(target, moveEffects.statChanges);
        } else if (moveEffects.statChanges.target === "self") {
          await playStatUp(self);
          changeStat(self, moveEffects.statChanges);
        }
      }
    } else if (move.category.includes("stats")) {
      if (moveEffects.statChanges) {
        if (moveEffects.statChanges.target === "target") {
          await playStatDown(target);
          changeStat(target, moveEffects.statChanges);
        } else if (moveEffects.statChanges.target === "self") {
          await playStatUp(self);
          changeStat(self, moveEffects.statChanges);
        }
      }
    } else if (move.category === "unique") {
      await playAttack(self, self);
    } else if (move.category === "healing") {
      await playStatUp(self);
      dealHeal(self, moveEffects.heal);
    }
    return false;
  }

  // Executes player move selection, calling previously defined helpers
  async function executeTurn(charMove, char, opponentMove, opponent) {
    setButtonsDisabled(true);
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
        if (moveEffects.miss === true) {
          if (turn.move.target === "user") {
            setBattleHistory((prev) => [...prev, `But it failed!\n`]);
          } else {
            setBattleHistory((prev) => [
              ...prev,
              `${turn.target.proper_name} avoided the attack!\n`,
            ]);
          }
        } else if (moveEffects.effectiveness === "immune") {
          setBattleHistory((prev) => [
            ...prev,
            `It had no effect on ${turn.target.proper_name}!\n`,
          ]);
        } else if (moveEffects.effectiveness === "not-very") {
          setBattleHistory((prev) => [
            ...prev,
            `It's not very effective on ${turn.target.proper_name}\n`,
          ]);
        } else if (moveEffects.effectiveness === "super") {
          setBattleHistory((prev) => [
            ...prev,
            `It's super effective on ${turn.target.proper_name}\n`,
          ]);
        }
        if (moveEffects.heal > 0) {
          setBattleHistory((prev) => [
            ...prev,
            `${turn.user.proper_name} recovered some HP!\n`,
          ]);
        }
        if (moveEffects.heal < 0) {
          setBattleHistory((prev) => [
            ...prev,
            `${turn.user.proper_name} is damaged by recoil!\n`,
          ]);
        }
        if (
          moveEffects.critical === true &&
          moveEffects.effectiveness !== "immune"
        ) {
          setBattleHistory((prev) => [...prev, `A critical hit!\n`]);
        }
        if (moveEffects.statChanges) {
          if (moveEffects.statChanges.target === "self") {
            setBattleHistory((prev) => [
              ...prev,
              `${turn.user.proper_name}'s ${properName(
                turn.move.stat_changes[0].stat
              )} went up!\n`,
            ]);
          } else {
            setBattleHistory((prev) => [
              ...prev,
              `${turn.target.proper_name}'s ${properName(
                turn.move.stat_changes[0].stat
              )} went down!\n`,
            ]);
          }
        }
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
    }
    setButtonsDisabled(false);
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
            onClick={() => {
              if (buttonsDisabled) return;
              executeTurn(
                move,
                gameState.player,
                opponentMoveSelect(gameState.opponent),
                gameState.opponent
              );
            }}
            disabled={buttonsDisabled}
            className={buttonsDisabled ? "disabled-button" : ""}
          >
            <MoveItem id={move.name} move={move} loc="game" />
          </button>
        );
      }
    }),
    "button"
  );

  const items = gameState.itemList.map((item) => (
    <button
      key={item.name}
      onClick={() => {
        if (buttonsDisabled) return;
        if (item.quantity < 1) return;
        const itemObj = itemFetcher(item.name);
        executeTurn(
          itemObj,
          gameState.player,
          opponentMoveSelect(gameState.opponent),
          gameState.opponent
        );
        //decrement item in db and state
        earnItem(user, item.name, -1);
        item.quantity--;
        windowClose("inventory");
      }}
      disabled={buttonsDisabled}
      className={buttonsDisabled || item.quantity < 1 ? "disabled-button" : ""}
    >
      <div className="item">
        <span className="item-name">{item.name}</span>
        <span className="item-quantity">{item.quantity}</span>
      </div>
    </button>
  ));
  return (
    <div
      className="battle-room"
      style={{ backgroundImage: BACKGROUND, backgroundColor: BACKGROUND_COL }}
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
        <ResultPopup
          result="win"
          setMode={setMode}
          nextRoom={nextRoom}
          setShowAchievementPopup={setShowAchievementPopup}
        />
      )}
      {popup.defeat && (
        <ResultPopup
          result="loss"
          setMode={setMode}
          loseGame={loseGame}
          setShowAchievementPopup={setShowAchievementPopup}
        />
      )}
      <div className="battle-floor">
        <div
          className={`pokemon self ${showPlayer ? "show" : ""}`}
          style={{
            backgroundImage: `url(${PLAYER}?${gifReloadKeyPlayer})`,
          }}
        >
          <HealthBar
            player={true}
            poke={gameState.player.proper_name}
            value={gameState.player.current_hp}
            maxValue={gameState.player.stats.hp}
          />
          <div className="effects">
            {sprites.playerBuff && <FontAwesomeIcon icon={faArrowUp} />}
          </div>
          <div className="effects">
            {sprites.playerNerf && <FontAwesomeIcon icon={faArrowDown} />}
          </div>
        </div>
        <div
          className={`pokemon opponent ${showOpponent ? "show" : ""}`}
          style={{
            backgroundImage: `url(${OPPONENT}?${gifReloadKeyOpponent})`,
          }}
        >
          <HealthBar
            player={false}
            poke={gameState.opponent.proper_name}
            value={gameState.opponent.current_hp}
            maxValue={gameState.opponent.stats.hp}
          />
          <div className="effects">
            {sprites.opponentBuff && <FontAwesomeIcon icon={faArrowUp} />}
          </div>
          <div className="effects">
            {sprites.opponentNerf && <FontAwesomeIcon icon={faArrowDown} />}
          </div>
        </div>
      </div>
      <div className="battle-history-menu">
        <BattleHistory />
      </div>
      <InventoryWindow
        handleClick={() => windowClose("inventory")}
        isMenuOpen={isMenuOpen}
        items={items}
      />
      <InventoryButton handleClick={() => windowToggle("inventory")} />
      <div className="move-select">
        {playerMoves}
        {/* <button onClick={nextRoom}>NEXT</button>{" "}
        <button onClick={skipToBoss}>SKIP TO BOSS</button> */}
      </div>
    </div>
  );
}
