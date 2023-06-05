export default function EnterGame(props) {
  const { setMode } = props;

  const handleClick = () => {
    setMode("PLAY");
  }

  return (
    <div className="enter-game-container">
      <div className="dungeon-pic">PLACEHOLDER PICTURE</div>
      <button onClick={handleClick}>ENTER GAME</button>
    </div>
  );
}
