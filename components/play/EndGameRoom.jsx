import { useGameState } from "@/utils/context/GameStateContext";

export default function EndGameRoom() {
  const { gameState, setGameState, winGame } = useGameState();
  const BACKGROUND = gameState.currentRoom.background;
  const BACKGROUND_COL = gameState.currentRoom.color;

  return (
    <div
      className="end-game-room"
      style={{
        backgroundImage: BACKGROUND,
        backgroundColor: BACKGROUND_COL,
        position: "relative",
      }}
    >
      <div className="end-game-container">
        {/* YOUR CODE HERE ! */}
      </div>
    </div>
  );
}
