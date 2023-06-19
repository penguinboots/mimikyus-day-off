import { useGameState } from "@/utils/context/GameStateContext";
import { useState } from "react";
import EndGamePopup from "./EndGamePopup";

export default function EndGameRoom(props) {
  const { setMode, setSelectedMusic } = props;
  const { gameState, winGame } = useGameState();
  const [endPopUp, setEndPopUp] = useState(false);

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
      {endPopUp && <EndGamePopup handleGameComplete={handleGameComplete} />}
      <button
        className={`complete-button ${endPopUp ? "disabled" : ""}`}
        onClick={endPopUp ? undefined : () => setEndPopUp(true)}
      >
        THE END!
      </button>
    </div>
  );
}
