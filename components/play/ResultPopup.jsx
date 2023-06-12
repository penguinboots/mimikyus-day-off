import { useGameState } from "@/utils/context/GameStateContext";

export default function ResultPopup(props) {
  const { result, nextRoom, setMode, loseGame } = props;
  const { setSelectedMusic } = useGameState();

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
        <div>BATTLE WON</div>
        <div className="window-controls">
          <button onClick={handleWin}>BACK TO HOME</button>
          <button onClick={nextRoom}>CONTINUE ON</button>
        </div>
      </div>
    );
  } else if (result === "loss") {
    return (
      <div className="popup result-window">
        <div>BATTLE LOST</div>
        <div className="window-controls">
          <button onClick={handleLoss}>BACK TO HOME</button>
        </div>
      </div>
    );
  }
}
