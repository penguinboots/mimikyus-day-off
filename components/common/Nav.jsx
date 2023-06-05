import { useState } from "react";
import Settings from "../home/Dashboard/Settings";
import IconButton from "./IconButton";

export default function Nav(props) {
  const { mute, setMute } = props;

  const [ settingOpen, setSettingOpen ] = useState(false);

  const settingClick = () => {
    setSettingOpen((prev) => !prev);
  }

  const closeSettings = () => {
    setSettingOpen(false);
  }

  const handleMute = () => {
    setMute((prev) => !prev);
  }

  return (
    <div className="nav-container">
      <nav className="nav-bar">
        <div className="nav-left">
          <div className="logo">PLACEHOLDER LOGO</div>
        </div>
        <div className="nav-right">
          <IconButton buttonName="ACHIEVEMENTS"/>
          <IconButton buttonName="SETTINGS" handleClick={settingClick} />
          {settingOpen && <Settings handleClick={closeSettings} />}
          <IconButton buttonName={ mute ? "MUTE_ON" : "MUTE_OFF"} handleClick={handleMute} />
        </div>
      </nav>
    </div>
  );
}
