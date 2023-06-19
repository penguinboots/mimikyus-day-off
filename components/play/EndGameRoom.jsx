import { useGameState } from "@/utils/context/GameStateContext";

export default function EndGameRoom(props) {
  const { setMode, setSelectedMusic } = props;
  const { gameState, winGame } = useGameState();

  const BACKGROUND = gameState.currentRoom.background;
  const BACKGROUND_COL = gameState.currentRoom.color;

  // Send user back to dashboard and run winGame function to reset
  function handleGameComplete() {
    setMode("DASH");
    setSelectedMusic("00_pokemon_center.mp3");
    winGame();
  }

  return (
    <div
      className="end-game-room"
      style={{
        backgroundImage: BACKGROUND,
        backgroundColor: BACKGROUND_COL,
        position: "relative",
      }}
    >
      <button className="complete-button" onClick={handleGameComplete}>
        COMPLETE GAME
      </button>
    </div>
  );
}
