import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faFan } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useState, useEffect } from "react";
import Achievement from "./Achievement";
import { getAchievements } from "@/prisma/helpers/getAchievements";
import localFont from "next/font/local";

const vt = localFont({ src: "../../public/fonts/VT323-Regular.ttf" });
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
        const db_achievements = db_data.achievements;
        setplayerEarnedAchievements(db_achievements);
      } catch (error) {
        console.error("Error fetching achievements:", error);
      }
    };

    fetchData();
  }, [user]);

  // Generates earned Achievements from array of achievements
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
      <h2
        style={{
          fontFamily: vt.style.fontFamily,
        }}
      >
        ACHIEVEMENTS
      </h2>
      {achievements.length > 0 ? (
        <ul className="ach-list">{achievements}</ul>
      ) : (
        <div className="spinner-container">
          <FontAwesomeIcon className="spinner" icon={faFan} />
          <h4
            style={{
              fontFamily: vt.style.fontFamily,
              fontSize: "16px",
            }}
          >
            LOADING...
          </h4>
        </div>
      )}
    </div>
  );
}
