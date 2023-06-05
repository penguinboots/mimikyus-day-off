import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.scss';
//import { PrismaClient } from '@prisma/client';
import { useState, useEffect, useRef } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Landing from '@/components/home/Landing';
import Dashboard from '@/components/home/Dashboard/Dashboard';
import Login from '@/components/home/Login';
import Play from '@/components/play/Play'
import DashboardMusic from '../game/assets/audios/DashboardMusic.mp3';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  // Authentication
  const { user, error, isLoading } = useUser();
  // View Mode
  const [mode, setMode] = useState("LANDING");
  // Settings
  const [settingOpen, setSettingOpen] = useState(false);
  // Achievements
  const [achOpen, setAchOpen] = useState(false);
  // Music
  const [isMusicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef(null);
  const originalVolumeRef = useRef(1.0);

  // Settings Popup Window
  const settingClick = () => {
    setSettingOpen((prev) => !prev);
  }
  const closeSettings = () => {
    setSettingOpen(false);
  }
  // Achievements Popup Window
  const achClick = () => {
    setAchOpen((prev) => !prev);
  }
  const achClose = () => {
    setAchOpen(false);
  }
  // Music Toggle
  const handleMusicToggle = () => {
    setMusicPlaying(prev => !prev);
    audioRef.current.volume = isMusicPlaying ? originalVolumeRef.current : 0.05;
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
  }, [isMusicPlaying]);

  // Skip landing if user is logged in
  useEffect(() => {
    if (user) {
      setMode("DASH");
    }
  }, [user]);

  return (
    <div className="app-wrapper">
      <div className="view-wrapper">
        {mode === "LANDING" &&
          <Landing setMode={setMode} user={user} />}
        {mode === "LOGIN" &&
          <Login />}
        {mode === "DASH" &&
          <Dashboard
            setMode={setMode}
            settingOpen={settingOpen}
            settingClick={settingClick}
            closeSettings={closeSettings}
            achOpen={achOpen}
            achClick={achClick}
            achClose={achClose}
            isMusicPlaying={isMusicPlaying}
            handleMusicToggle={handleMusicToggle}
          />
        }
        {mode === "PLAY" &&
          <Play
            setMode={setMode}
            settingOpen={settingOpen}
            settingClick={settingClick}
            closeSettings={closeSettings}
            achOpen={achOpen}
            setAchOpen={setAchOpen}
            achClick={achClick}
            achClose={achClose}
            isMusicPlaying={isMusicPlaying}
            handleMusicToggle={handleMusicToggle} />
        }
      </div>
      <audio ref={audioRef} src={DashboardMusic} loop />
    </div>
  )
}

// export async function getStaticProps() {
//   const prisma = new PrismaClient();

//   return {
//     props : {}
//   };
// }