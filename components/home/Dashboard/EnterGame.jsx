import { useGameState } from "@/utils/context/GameStateContext";
import storyCover from "@/public/other/story_cover.png";
import Image from "next/image";

export default function EnterGame(props) {
  const { setMode, setSelectedMusic } = props;
  const { gameState } = useGameState();

  const handleClick = () => {
    setMode("PLAY");
    setSelectedMusic(gameState.currentRoom.music);
  };

  return (
    <div className="enter-game-container">
      <Image className="dungeon-pic" src={storyCover} alt="Pinwheel Toy"/>
      <button onClick={handleClick}>ENTER GAME</button>
    </div>
  );
}
