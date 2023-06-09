import MoveItem from "../common/MoveItem";
import { useGameState } from "../../utils/context/GameStateContext";
import { useEffect } from "react";
import {
  moveOrder,
  calculateMove,
  opponentMoveSelect,
} from "../../game/helpers/combat";

export default function Room(props) {
  const { floor_1 } = require("../../game/pregenerated/floors/floor1");
  const { magikarp, snorlax1 } = require("../../game/pregenerated/floor1mons");
  const { returnToDash, nextRoom } = props;

  const {
    gameState,
    setGameState,
    roomType,
    setRoomType,
    turnMode,
    setTurnMode,
    battleWon,
    setBattleWon,
    popup,
    setPopup,
    sprites,
    setSprites,
    dealDamage,
    dealHeal,
    battleHistory,
    setBattleHistory,
  } = useGameState();

  // Modify to change active sprite
  const PLAYER = sprites.player;
  const OPPONENT = sprites.opponent;
  const BACKGROUND = gameState.currentRoom.background;

  // Checks for opponent HP <= 0
  useEffect(() => {
    if (gameState.opponent.current_hp <= 0) {
      setBattleWon(true);
      console.log("battle won");
    }
  }, [gameState.opponent, setBattleWon]);

  // Checks for player HP <= 0
  useEffect(() => {
    if (gameState.player.current_hp <= 0) {
      console.log("battle lost");
    }
  }, [gameState.player]);
  
  // Execute the move, applying hp/stat changes
  let doMove = (moveEffects, target, self) => {
    if (moveEffects.damage) {
      dealDamage(target, moveEffects.damage);
    }
    if (moveEffects.heal) {
      dealHeal(self, moveEffects.heal);
    }
    if (moveEffects.statChanges) {
      // apply stat changes
    }
  };

  // Gets called when player picks a move
  function executeTurn(charMove, char, opponentMove, opponent) {
    // Creates array of two moves, in order of action
    let turns = moveOrder(charMove, char, opponentMove, opponent);

    for (let turn of turns) {
      let moveEffects = calculateMove(turn.move, turn.user, turn.target);
      setBattleHistory((prev) => [
        ...prev,
        `${turn.user.name} used ${turn.move.name}!\n`,
      ]);
      if (turn.user === gameState.player) {
        doMove(moveEffects, "opponent", "player");
      }
      if (turn.user === gameState.opponent) {
        doMove(moveEffects, "player", "opponent");
      }
    }

    /*
      - setTurnMode("logic"), greys out or hides move UI
      **** first run ****
        - call doMove for first move
            - pass back some data to run anims?
        - animateMove()
            - sets attacking pokemon sprike to ATK, settimeout set back to IDLE
            - (after small delay) sets defending pokemon sprite to HIT, settimeout set back to IDLE
                - play impact particles, if implementing
        - animateHP(old, new) for target hit (or pass change value, math within)
            - animate HP bar -> most likely CSS width change based on some % math
            - run again for target attacking if it's healing
        - printMove()
            - use data from doMove to append a message to the battleHistory array
        - isBattleOver() - check if either char or opponent has HP = 0
            - if so, show victory or defeat screen
              - click OK on victory -> setGameState's current_room to the next room
                  - if next_room is null, set floor/room, return to dash
              - click OK on defeat -> setGameState's current_floor and current_room to floor_1 and room_1
          *** write a nextRoom() function to manage previous options ***
            - this should be a fairly large function that resets whatever needs to be reset and arranges states for the next room
      **** second run ****
        - call doMove for second move
        - animateMove()
        - animateHP()
        - printMove()
        - isBattleOver()

      - setTurnMode("player")

      **** ready to repeat ****
    */
  }

  return (
    <div
      className="battle-room"
      style={{
        backgroundImage: BACKGROUND,
      }}
    >
      <div className="battle-floor">
        <div
          className="pokemon self"
          style={{
            backgroundImage: PLAYER,
          }}
        >
          me: {gameState.player.name}
          <br />
          current HP: {gameState.player.current_hp}
        </div>
        <div
          className="pokemon opponent"
          style={{
            backgroundImage: OPPONENT,
          }}
        >
          opponent: {gameState.opponent.name}
          <br />
          current HP: {gameState.opponent.current_hp}
        </div>
      </div>

      <div className="move-select">
        <button
          onClick={() =>
            executeTurn(
              gameState.player.moves.bite,
              gameState.player,
              gameState.opponent.moves[opponentMoveSelect(gameState.opponent)],
              gameState.opponent
            )
          }
        >
          <MoveItem id="move1" loc="game" moveName="Move 1" />
        </button>
        <button>
          <MoveItem id="move2" loc="game" moveName="Move 2" />
        </button>
        <button>
          <MoveItem id="move3" loc="game" moveName="Move 3" />
        </button>
        <button>
          <MoveItem id="move4" loc="game" moveName="Move 4" />
        </button>
        <button onClick={nextRoom}>NEXT</button>
      </div>
    </div>
  );
}
