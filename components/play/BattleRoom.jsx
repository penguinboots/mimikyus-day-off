import MoveItem from "../common/MoveItem";
import useGameState from "@/utils/hooks/gameState";

const { floor_1 } = require("../../game/pregenerated/floors/floor1");

export default function Room() {
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
  } = useGameState();

  // Modify to change active sprite
  const PLAYER = sprites.player;
  const OPPONENT = sprites.opponent;
  const BACKGROUND = floor_1.room_1.background;

  function executeTurn() {
    
  }

  return (
    <div
      className="room battle-room"
      style={{
        backgroundImage: BACKGROUND,
      }}
    >
      <div className="battle-floor">
        {/* Do not touch!
                Pokemon sprites are loaded as background image.
                Change PLAYER & OPPONENT to modify active sprite. */}
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
        ></div>
      </div>

      <div className="move-select">
        <MoveItem id="move1" loc="game" moveName="Move 1" />
        {/* onClick={() => executeTurn(character, character.move1, opponent, opponentMove )} */}
        <MoveItem id="move2" loc="game" moveName="Move 2" />
        <MoveItem id="move3" loc="game" moveName="Move 3" />
        <MoveItem id="move4" loc="game" moveName="Move 4" />
      </div>
    </div>
  );
}
