import { useGameState } from "@/utils/context/GameStateContext";
import localFont from "next/font/local";
import { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { getAchievements } from "@/prisma/helpers/getAchievements";
import { earnAchievement } from "@/prisma/helpers/earnAchievement";
import { achievementFetcher } from "@/game/helpers/combat/achievementFetcher";
const vt = localFont({ src: "../../public/fonts/VT323-Regular.ttf" });
export default function ResultPopup(props) {
  const { result, nextRoom, setMode, loseGame, setShowAchievementPopup } = props;
  const { setSelectedMusic, gameState } = useGameState();
  const [userAchievements, setUserAchievements] = useState([]);
  const {user, isLoading} = useUser()
  const roomAchievement = achievementFetcher(gameState.currentRoom.achievement)
  useEffect(() => {
    if (!isLoading){
    const fetchUserAchievements = async () => {
      getAchievements(user).then(
      ({ achievements })=>{
        setUserAchievements(achievements)
      }
      );
    };  
      fetchUserAchievements()
    };
  }, [user]);
  const handleAchievement = (achievement) => {
    if (userAchievements) {
      let matchingAchievement = false
      for (const userAchievement of userAchievements) {
        if (userAchievement.name === achievement.name) {
          matchingAchievement = userAchievement
        }
        break;
      }
      if (matchingAchievement.collected === false) {
        setShowAchievementPopup(true);
        earnAchievement(user, achievement.name);
        setTimeout(() => setShowAchievementPopup(false), 1000);
      }
    }
  };
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
    handleAchievement(roomAchievement)
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
