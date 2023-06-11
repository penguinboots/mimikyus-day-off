export default function ResultPopup(props) {
  const { result, nextRoom, setMode, loseGame } = props;

  function handleLoss() {
    setMode("DASH");
    loseGame();
  }

  function handleWin() {
    setMode("DASH");
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
