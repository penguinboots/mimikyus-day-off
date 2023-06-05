//import { PrismaClient } from '@prisma/client';
import { useState, useEffect, useRef } from 'react';
// Auth0
import { useUser } from '@auth0/nextjs-auth0/client';
// Components
import Landing from '@/components/home/Landing';
import Dashboard from '@/components/home/Dashboard/Dashboard';
import Login from '@/components/home/Login';
import Play from '@/components/play/Play'
// Assets
import DashboardMusic from '../public/audio/DashboardMusic.mp3';
// Hooks
import useIsMusicPlaying from "@/utils/hooks/isMusicPlaying";

export default function Home() {
  // Authentication
  const { user, error, isLoading } = useUser();
  // View Mode
  const [mode, setMode] = useState("LANDING");
  // Music
  const audioRef = useRef(null);
  const originalVolumeRef = useRef(1.0);
  const { isMusicPlaying, handleMusicToggle } = useIsMusicPlaying(audioRef, originalVolumeRef);
  // Music Toggle
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
            isMusicPlaying={isMusicPlaying}
            handleMusicToggle={handleMusicToggle}
          />
        }
        {mode === "PLAY" &&
          <Play
            setMode={setMode}
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