import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useState, useEffect } from "react";
import Achievement from "./Achievement";
import { getAchievements } from "@/prisma/helpers/getAchievements";
const achievementList = require("../../game/data/achievements.json");

export default function AchievementsMenu(props) {
  const { user, error, isLoading } = useUser();
  // Introduce state for playerEarnedAchievementsArray
  const [playerEarnedAchievements, setplayerEarnedAchievements] = useState([]);
  // Fetch a new moves variable using a helper
  useEffect(() => {
    const fetchData = async () => {
      try {
        const db_data = await getAchievements(user);
        const db_achievements = db_data.achievements
        setplayerEarnedAchievements(db_achievements);
      } catch (error) {
        console.error('Error fetching achievements:', error);
      }
    };

    fetchData();
  }, [user]);

  // Generates earchAchievements from array of achievements
 console.log(playerEarnedAchievements)
  const achievementsData = [];
  for (const key in playerEarnedAchievements) {
    if (playerEarnedAchievements.hasOwnProperty(key)) {
      const value = playerEarnedAchievements[key];
      achievementsData.push(value);
    }
  }

  const achievements = achievementsData.map((ach) => {
    return <Achievement key={ach.name} achievement={ach} />;
  });

  return (
    <div className="popup achievement-container">
      <div className="close-window" onClick={props.handleClick}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <h2>Achievements</h2>
      <ul className="ach-list">{achievements}</ul>
    </div>
  );
}
