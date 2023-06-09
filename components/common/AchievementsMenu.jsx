import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Achievement from "./Achievement";
const achievementList = require("../../game/data/achievements.json");

export default function AchievementsMenu(props) {
  const achievementsData = [];
  for (const key in achievementList) {
    if (achievementList.hasOwnProperty(key)) {
      const value = achievementList[key];
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
