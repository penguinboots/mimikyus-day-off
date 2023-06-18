export default function EndGameRoom() {
  const { gameState, setGameState, winGame } = useGameState();
  const BACKGROUND = gameState.currentRoom.background;
  const BACKGROUND_COL = gameState.currentRoom.color;

  return (
    <div
      className="endGameRoom"
      style={{
        backgroundImage: BACKGROUND,
        backgroundColor: BACKGROUND_COL,
        position: "relative",
      }}
    >
      <div></div>
    </div>
  );
}
