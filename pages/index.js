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
import { mimikyu } from '@/game/pregenerated/fakePlayer';
import AchievementsMenu from '@/components/common/AchievementsMenu';
import Settings from '@/components/common/Settings';
import { items } from '@/game/data/items';

let dbData = null
export default function Home() {
  // Authentication
  const { user, error, isLoading } = useUser();
  // View Mode
  const [mode, setMode] = useState("LANDING");
  // Game State
  const { gameState, setGameState, setSelectedMusic, isMenuOpen, windowToggle, windowClose } = useGameState();
  // Music
  const audioRef = useRef(null);
  const { isMusicPlaying, handleMusicToggle } = useIsMusicPlaying(audioRef, mode);
  
  // Initial player values, fill player values from database
  const playerTemplate = { ...mimikyu }
  useEffect(() => {
    const initializeUser = async () => {
      if (user) {
        try {
          dbData = await getUserData(user);
          if (!dbData) {
            dbData = await createUser(user);
          }
          setMode("DASH");
          // Get user's character from db_data
          if (dbData && dbData.character) {
            const characterData = dbData.character;
            console.log(characterData)
            // Update the moves array of playerTemplate with non-null values from characterData
            const updatedMoves = [
              characterData.move_1,
              characterData.move_2,
              characterData.move_3,
              characterData.move_4
            ].filter(move => move);

            const updatedPlayerTemplate = {
              ...playerTemplate,
              current_hp: characterData.hp,
              stats:{
                "hp": characterData.hp,
                "attack": characterData.attack,
                "defense": characterData.defense,
                "special-attack": characterData.sp_atk,
                "special-defense": characterData.sp_def,
                "speed": characterData.speed,
              },
              moves: updatedMoves
            };

            setGameState((prev) => ({
              ...prev,
              player: updatedPlayerTemplate,
              itemList: dbData.items,
            }));
          } else {
            console.error("Character data is missing or invalid");
            setGameState((prev) => ({
              ...prev,
              player: playerTemplate,
              itemList: items,
            }));
          }
        } catch (error) {
          // If there's an error fetching user data or character data
          console.error("Error fetching data:", error);
          setGameState((prev) => ({
            ...prev,
            player: playerTemplate,
            itemList: items,
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
        {mode === 'LANDING' && <Landing setMode={setMode} user={user} isLoading={isLoading} />}
        {mode === 'LOGIN' && <Login />}
        {mode === 'DASH' && (
          <Dashboard
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
            // userAchievements={dbData.achievements}
          />
        )}
        {isMenuOpen.achievements && (
          <AchievementsMenu handleClick={() => windowClose("achievements")} />
        )}
        {isMenuOpen.settings && (
          <Settings handleClick={() => windowClose("settings")} />
        )}
      </div>
      <AudioPlayer audioRef={audioRef} mode={mode} isMusicPlaying={isMusicPlaying} />
    </div>
  );
}