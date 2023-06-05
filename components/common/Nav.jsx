import { useState, useRef, useEffect } from 'react';
import Settings from './Settings';
import IconButton from './IconButton';
import AchievementsMenu from './AchievementsMenu';

export default function Nav(props) {
  const { isMusicPlaying, handleMusicToggle, settingOpen, settingClick, closeSettings, achOpen, achClick, achClose } = props;

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
            buttonName={isMusicPlaying ? "MUTE_OFF" : "MUTE_ON"}
            handleClick={handleMusicToggle}
          />
        </div>
      </nav>
    </div>
  );
}

