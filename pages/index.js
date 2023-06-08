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
import dashboardMusic from '../public/audio/DashboardMusic.mp3';
import playMusic from '../public/audio/PlayMusic.mp3';
// Hooks
import useIsMusicPlaying from "@/utils/hooks/isMusicPlaying";

export default function Home() {
  // Authentication
  const { user, error, isLoading } = useUser();
  // View Mode
  const [mode, setMode] = useState("LANDING");
  // Music
  const dashboardAudioRef = useRef(null);
  const playAudioRef = useRef(null);
  const { isMusicPlaying, handleMusicToggle } = useIsMusicPlaying(
    mode === 'DASH' ? dashboardAudioRef : playAudioRef,
    mode
  );

  // Skip landing if user is logged in
  useEffect(() => {
    if (user) {
      setMode("DASH");
    }
  }, [user]);

  // Check which user is logged in from Auth0
  const getLoggedInUser = () => {
    if (user) {
      const { email, name, picture, sub } = user;
      console.log("Logged-in user:");
      console.log("Email:", email);
      console.log("Name:", name);
      console.log("Picture:", picture);
      console.log("User ID:", sub);
    }
  };

  // Calling useEffect to check logged in user from auth0
  useEffect(() => {
    getLoggedInUser();
  }, [user]);

  return (
    <div className="app-wrapper">
      <div className="view-wrapper">
        {mode === 'LANDING' && <Landing setMode={setMode} user={user} />}
        {mode === 'LOGIN' && <Login />}
        {mode === 'DASH' && (
          <Dashboard
            setMode={setMode}
            isMusicPlaying={isMusicPlaying}
            handleMusicToggle={handleMusicToggle}
          />
        )}
        {mode === 'PLAY' && (
          <Play
            setMode={setMode}
            isMusicPlaying={isMusicPlaying}
            handleMusicToggle={handleMusicToggle}
          />
        )}
      </div>
      {mode === 'DASH' && (
        <audio ref={dashboardAudioRef} src={dashboardMusic} loop />
      )}
      {mode === 'PLAY' && (
        <audio ref={playAudioRef} src={playMusic} loop />
      )}
    </div>
  );
}

// export async function getStaticProps() {
//   const prisma = new PrismaClient();

//   return {
//     props : {}
//   };
// }