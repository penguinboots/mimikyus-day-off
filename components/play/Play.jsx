import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHouse } from "@fortawesome/free-solid-svg-icons";
import Nav from "../common/Nav";
import BattleRoom from "./BattleRoom";
import TreasureRoom from "./TreasureRoom";
import { useGameState } from "../../utils/context/GameStateContext";
import AchievementPopup from "./AchievementPopup";
import { achievementFetcher } from "@/game/helpers/combat/achievementFetcher";

export default function Play(props) {
  const { mode, setMode, isMusicPlaying, handleMusicToggle, userAchievements } = props;
  const {
    gameState,
    nextRoom,
    setSelectedMusic,
    windowToggle,
    windowClose,
    isMenuOpen,
  } = useGameState();

  const returnToDash = () => {
    setMode("DASH");
    setSelectedMusic("00_pokemon_center.mp3");
  };
  console.log(userAchievements)
  //check if AchievementPopup needs to be rendered
  const achievementRender =  () => {
    // Find the matching achievement object in userAchievements
    const matchingAchievement = userAchievements.find(
      (achievement) => achievement.name === gameState.currentRoom.achievement
    ); 
    if (matchingAchievement && !matchingAchievement.collected) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="play-container">
      <Nav
        mode={mode}
        isMusicPlaying={isMusicPlaying}
        handleMusicToggle={handleMusicToggle}
        windowTitle="ROUTE 1"
      />
      <div className="play-viewport">
        <button className="dash-return" onClick={returnToDash}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <FontAwesomeIcon icon={faHouse} />
        </button>
        {gameState.roomType === "battle" && <BattleRoom setMode={setMode} />}
        {gameState.roomType === "treasure" && (
          <TreasureRoom
            returnToDash={returnToDash}
            nextRoom={nextRoom}
            gameState={gameState}
          />
        )}
      </div>
      <div className="achievement-pop">
        {achievementRender() && ( 
          <AchievementPopup 
            achievement={achievementFetcher(gameState.currentRoom.achievement)}
          />
        )}
      </div>
    </div>
  );
}
