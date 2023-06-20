import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faFan } from "@fortawesome/free-solid-svg-icons";
import Achievement from "./Achievement";
import localFont from "next/font/local";
import { useGameState } from "@/utils/context/GameStateContext";
import { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

const vt = localFont({ src: "../../public/fonts/VT323-Regular.ttf" });

export default function AchievementsMenu(props) {
  const {user, isLoading} = useUser();
  const { userAchievements, fetchUserAchievements } = useGameState();

  useEffect(() => {
    if (!isLoading) {
      fetchUserAchievements();
    }
  }, [user]);

  const sortedAchievements = userAchievements.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  const achievements = sortedAchievements.map((ach) => {
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
