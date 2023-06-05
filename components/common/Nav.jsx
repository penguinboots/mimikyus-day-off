import { useState } from "react";
import Settings from "./Settings";
import AchievementsMenu from "./AchievementsMenu";
import IconButton from "./IconButton";

export default function Nav(props) {
  const { mute, setMute, settingOpen, settingClick, closeSettings, achOpen, achClick, achClose } = props;

  const handleMute = () => {
    setMute((prev) => !prev);
  };

  return (
    <div className="nav-container">
      <nav className="nav-bar">
        <div className="nav-left">
          <div className="logo">PLACEHOLDER LOGO</div>
        </div>
        <div className="nav-right">
          <IconButton buttonName="ACHIEVEMENTS" handleClick={achClick} />
          {achOpen && <AchievementsMenu handleClick={achClose} />}
          <IconButton buttonName="SETTINGS" handleClick={settingClick} />
          {settingOpen && <Settings handleClick={closeSettings} />}
          <IconButton
            buttonName={mute ? "MUTE_ON" : "MUTE_OFF"}
            handleClick={handleMute}
          />
        </div>
      </nav>
    </div>
  );
}
