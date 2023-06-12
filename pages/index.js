import { useState, useEffect, useRef } from 'react';
// Auth0
import { useUser } from '@auth0/nextjs-auth0/client';
// Components
import Landing from '@/components/home/Landing';
import Dashboard from '@/components/home/Dashboard/Dashboard';
import Login from '@/components/home/Login';
import Play from '@/components/play/Play'
// Hooks
import useIsMusicPlaying from "@/utils/hooks/isMusicPlaying";
// Helpers
import { useGameState } from '@/utils/context/GameStateContext';
import AudioPlayer from '@/components/common/AudioPlayer';
import { getUserData } from '@/prisma/helpers/getUserData';
import { createUser } from '@/prisma/helpers/createUser';

export default function Home(props) {
  // Authentication
  const { user, error, isLoading } = useUser();
  // View Mode
  const [mode, setMode] = useState("LANDING");
  // Game State
  const { gameState, setSelectedMusic } = useGameState();
  // Music
  const audioRef = useRef(null);
  const { isMusicPlaying, handleMusicToggle } = useIsMusicPlaying(audioRef, mode);

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

  // Change music if room changes in Play
  useEffect(() => {
    if (mode === "PLAY") {
      setSelectedMusic(gameState.currentRoom.music);
    }
  }, [gameState.currentRoom, setSelectedMusic, mode]);

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
            setSelectedMusic={setSelectedMusic}
          />
        )}
        {mode === 'PLAY' && (
          <Play
            audioRef={audioRef}
            mode={mode}
            setMode={setMode}
            isMusicPlaying={isMusicPlaying}
            handleMusicToggle={handleMusicToggle}
          />
        )}
      </div>
      <AudioPlayer audioRef={audioRef} mode={mode} isMusicPlaying={isMusicPlaying} />
    </div>
  );
}

