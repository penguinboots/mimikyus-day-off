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
import { getCharacter } from '@/prisma/helpers/getCharacter';
import { mimikyu } from '@/game/pregenerated/fakePlayer';

export default function Home(props) {
  // Authentication
  const { user, error, isLoading } = useUser();
  // View Mode
  const [mode, setMode] = useState("LANDING");
  // Game State
  const { gameState, setGameState, setSelectedMusic } = useGameState();
  // Music
  const audioRef = useRef(null);
  const { isMusicPlaying, handleMusicToggle } = useIsMusicPlaying(audioRef, mode);
  const playerTemplate = { ...mimikyu }
  let db_data = null
  
  useEffect(() => {
    const initializeUser = async () => {
      if (user) {
        try {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          db_data = await getUserData(user);
          if (!db_data) {
            db_data = await createUser(user);
          }
          setMode("DASH");

          // Get user's character from db_data
          if (db_data && db_data.character) {
            const characterData = db_data.character;

            // Update the moves array of playerTemplate with non-null values from characterData
            const updatedMoves = [
              characterData.move_1,
              characterData.move_2,
              characterData.move_3,
              characterData.move_4
            ].filter(move => move);

            const updatedPlayerTemplate = {
              ...playerTemplate,
              moves: updatedMoves
            };

            setGameState((prev) => ({
              ...prev,
              player: updatedPlayerTemplate
            }));
          } else {
            console.error("Character data is missing or invalid");
            setGameState((prev) => ({
              ...prev,
              player: playerTemplate
            }));
          }
        } catch (error) {
          // If there's an error fetching user data or character data
          console.error("Error fetching data:", error);
          setGameState((prev) => ({
            ...prev,
            player: playerTemplate
          }));
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
        {mode === 'LANDING' && <Landing setMode={setMode} user={user} isLoading={isLoading}/>}
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