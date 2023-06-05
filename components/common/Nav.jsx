import { useState, useRef, useEffect } from 'react';
import Settings from './Settings';
import IconButton from './IconButton';
import DashboardMusic from '../../game/assets/audios/DashboardMusic.mp3';

export default function Nav(props) {
  const { mute } = props;
  const [settingOpen, setSettingOpen] = useState(false);
  const [isMusicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef(null);
  const originalVolumeRef = useRef(1.0);

  const settingClick = () => {
    setSettingOpen(prev => !prev);
  };

  const closeSettings = () => {
    setSettingOpen(false);
  };

  const handleMusicToggle = () => {
    if (!mute) {
      setMusicPlaying(prevState => !prevState);
      audioRef.current.volume = isMusicPlaying ? originalVolumeRef.current : 0.05;
    }
  };

  useEffect(() => {
    if (isMusicPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isMusicPlaying]);

  useEffect(() => {
    if (!audioRef.current.paused) {
      originalVolumeRef.current = audioRef.current.volume;
    }
  }, [mute]);

  return (
    <div className="nav-container">
      <nav className="nav-bar">
        <div className="nav-left">
          <div className="logo">PLACEHOLDER LOGO</div>
        </div>
        <div className="nav-right">
          <IconButton buttonName="ACHIEVEMENTS" />
          <IconButton buttonName="SETTINGS" handleClick={settingClick} />
          {settingOpen && <Settings handleClick={closeSettings} />}
          <IconButton
            buttonName={isMusicPlaying ? 'MUTE_ON' : 'MUTE_OFF'}
            handleClick={handleMusicToggle}
          />
        </div>
      </nav>
      <audio ref={audioRef} src={DashboardMusic} loop />
    </div>
  );
}

