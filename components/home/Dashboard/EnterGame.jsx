import { useGameState } from "@/utils/context/GameStateContext";

export default function EnterGame(props) {
  const { setMode, setSelectedMusic } = props;
  const { gameState, setSplash } = useGameState();

  const handleClick = () => {
    setMode("PLAY");
    setSelectedMusic(gameState.currentRoom.music);
  };

  return (
    <div className="enter-game-container">
      <div className="dungeon-pic">PLACEHOLDER PICTURE</div>
      <button onClick={handleClick}>ENTER GAME</button>
    </div>
  );
}
