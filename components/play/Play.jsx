import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHouse } from "@fortawesome/free-solid-svg-icons";
import Nav from "../common/Nav";
import GameLogic from "./GameLogic";
import BattleRoom from "./BattleRoom";
import TreasureRoom from "./TreasureRoom";
import useGameState from "@/utils/hooks/gameState";

export default function Play(props) {
  const { setMode, isMusicPlaying, handleMusicToggle } = props;

  const returnToDash = () => {
    setMode("DASH");
  };

  const {
    gameState,
    setGameState,
    roomType,
    setRoomType,
    turnMode,
    setTurnMode,
    battleWon,
    setBattleWon,
    popup,
    setPopup,
    sprites,
    setSprites,
  } = useGameState();

  return (
    <div className="play-container">
      <Nav
        isMusicPlaying={isMusicPlaying}
        handleMusicToggle={handleMusicToggle}
      />
      <div className="play-viewport">
        <button className="dash-return" onClick={returnToDash}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <FontAwesomeIcon icon={faHouse} />
        </button>
        {roomType === "battle" &&
          <BattleRoom returnToDash={returnToDash}
        />}
        {roomType === "treasure" && 
          <TreasureRoom returnToDash={returnToDash}
        />}
      </div>
      <GameLogic />
    </div>
  );
}
