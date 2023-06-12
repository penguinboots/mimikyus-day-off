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
import { getUserData } from '@/prisma/helpers/getUserData';
import { createUser } from '@/prisma/helpers/createUser';

export default function Home(props) {
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

  console.log("Auth0 user:", user)
  useEffect(() => {
    const initializeUser = async () => {
      if (user) {
        try {
          let dbData = await getUserData(user);
          if (!dbData) {
            dbData = await createUser(user);
          }
          setMode("DASH");
        } catch (error) {
          console.error("Error:", error);
        }
      }
    };

    initializeUser();
  }, [user]);

  return (
    <div className="app-wrapper">
      <div className="view-wrapper">
        {mode === 'LANDING' && <Landing setMode={setMode} user={user} />}
        {mode === 'LOGIN' && <Login />}
        {mode === 'DASH' && (
          <Dashboard
            user={user}
            mode={mode}
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

