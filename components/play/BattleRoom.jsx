import MoveItem from "../common/MoveItem";
import useGameState from "@/utils/hooks/gameState";

const { floor_1 } = require("../../game/pregenerated/floors/floor1");

export default function Room(props) {
  const { returnToDash } = props;

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
    nextRoom,
  } = useGameState();

  // Modify to change active sprite
  const PLAYER = sprites.player;
  const OPPONENT = sprites.opponent;
  const BACKGROUND = gameState.currentRoom.background;

  // Gets called when player picks a move
  function executeTurn(char, charMove, opponent, opponentMove) {
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
        ></div>
        <div
          className="pokemon opponent"
          style={{
            backgroundImage: OPPONENT,
          }}
        >
          { gameState.currentRoom.opponent ? gameState.currentRoom.opponent.name : "TREASURE ROOM" }
        </div>
      </div>

      <div className="move-select">
        <MoveItem id="move1" loc="game" moveName="Move 1" />
        {/* onClick={() => executeTurn(character, character.move1, opponent, opponentMove )} */}
        <MoveItem id="move2" loc="game" moveName="Move 2" />
        <MoveItem id="move3" loc="game" moveName="Move 3" />
        <MoveItem id="move4" loc="game" moveName="Move 4" />
        <button onClick={nextRoom}>NEXT ROOM</button>
      </div>
    </div>
  );
}
