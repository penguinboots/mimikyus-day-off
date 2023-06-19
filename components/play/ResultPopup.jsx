import { useGameState } from "@/utils/context/GameStateContext";
import localFont from "next/font/local";

const vt = localFont({ src: "../../public/fonts/VT323-Regular.ttf" });

export default function ResultPopup(props) {
  const { result, nextRoom, setMode, loseGame } = props;
  const { setSelectedMusic, gameState } = useGameState();

  function handleLoss() {
    setMode("DASH");
    setSelectedMusic("00_pokemon_center.mp3");
    loseGame();
  }

  function handleWin() {
    setMode("DASH");
    setSelectedMusic("00_pokemon_center.mp3");
    nextRoom();
  }

  if (result === "win") {
    return (
      <div className="popup result-window">
        <h2 className="win-title"
          style={{
            fontFamily: vt.style.fontFamily,
          }}
        >
          YOU WON!
        </h2>
        <h3
          style={{
            fontFamily: vt.style.fontFamily,
          }}
        >
          {gameState.currentRoom.winMessage.toUpperCase()}
        </h3>
        <div className="window-controls">
          <button onClick={handleWin}>BACK TO HOME</button>
          <button onClick={nextRoom}>CONTINUE ON</button>
        </div>
      </div>
    );
  } else if (result === "loss") {
    return (
      <div className="popup result-window">
        <h2
          className="loss-title"
          style={{
            fontFamily: vt.style.fontFamily,
          }}
        >
          YOU LOST...
        </h2>
        <h3
          style={{
            fontFamily: vt.style.fontFamily,
          }}
        >
          {gameState.currentRoom.lossMessage.toUpperCase()}
        </h3>
        <div className="window-controls">
          <button onClick={handleLoss}>BACK TO HOME</button>
        </div>
      </div>
    );
  }
}
