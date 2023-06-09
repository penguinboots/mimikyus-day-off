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
  const dashboardVolumeRef = useRef(0.05);
  const playVolumeRef = useRef(0.05);
  const { isMusicPlaying, handleMusicToggle } = useIsMusicPlaying(
    mode === 'DASH' ? dashboardAudioRef : playAudioRef
  );
  
  // Music Toggle
  useEffect(() => {
    if (isMusicPlaying && mode === 'DASH' && dashboardAudioRef.current) {
        dashboardAudioRef.current.volume = dashboardVolumeRef.current;
        dashboardAudioRef.current.play();
    } else if (isMusicPlaying && mode === 'PLAY' && playAudioRef.current) {
        playAudioRef.current.volume = playVolumeRef.current;
        playAudioRef.current.play();
    } else {
        if (dashboardAudioRef.current) dashboardAudioRef.current.pause();
        if (playAudioRef.current) playAudioRef.current.pause();
    }
  }, [isMusicPlaying, mode]);

  // Save volume levels when unmounting or switching modes
  useEffect(() => {
    return () => {
      if (mode === 'DASH' && dashboardAudioRef.current) {
        dashboardVolumeRef.current = dashboardAudioRef.current.volume;
      } else if (mode === 'PLAY' && playAudioRef.current) {
        playVolumeRef.current = playAudioRef.current.volume;
      }
    };
  }, [mode]);

  // Skip landing if user is logged in
  useEffect(() => {
    if (user) {
      setMode("DASH");
    }
  }, [user]);

  // API request to getLoggedInUser
  useEffect(() => {
    if (user) {
      // Fetch logged-in user data
      const fetchData = async () => {
        try {
          const response = await fetch("/api/getLoggedInUser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ user }),
          });

          if (!response.ok) {
            throw new Error("Failed to fetch logged-in user data");
          }

          const data = await response.json();

          // Set the mode and do something with the data
          setMode("DASH");
          console.log("Logged-in user:", data.user);
          console.log("User achievements:", data.achievements);
          console.log("User characters:", data.characters);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }
  }, [user]);

  console.log("USER INFO: ", user);

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