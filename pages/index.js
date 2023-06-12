import { PrismaClient } from '@prisma/client';
import { useState, useEffect, useRef } from 'react';
// Auth0
import { useUser } from '@auth0/nextjs-auth0/client';
import achievements from '../game/data/achievements.json'
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

export async function getStaticProps() {
  const prisma = new PrismaClient();
  let db_user = null
  let db_character = null
  let db_achievements = []
  db_user = await prisma.user.findUnique({
    where: { auth0Sub: 'auth0sub123' },
  });
  if (db_user) {
    db_character = await prisma.character.findFirst({
      where: { userId: db_user.id }
    })
    db_achievements = await prisma.achievement.findMany({
      where: { userId: db_user.id }
    })
  } else {
    db_user = await prisma.user.create({
      // data for the new user entered here
      data: {
        email: "example@example.com",
        auth0Sub: "auth0sub123",
        password: "password123",
        name: "John Doe",
      }
    });
    db_character = await prisma.character.create({
      data: {
        move_1: "Move 1",
        move_2: "Move 2",
        move_3: "Move 3",
        move_4: "Move 4",
        userId: db_user.id
      }
    })
    const achievementArray = Object.values(achievements)
    console.log(achievementArray)
    for (let i = 0; i < achievementArray.length; i++) {
      let achievement = achievementArray[i]
      const db_achievement = await prisma.achievement.create({
        data: {
          name: achievement.name,
          collected: achievement.collected,
          date_get: null,
          userId: db_user.id,
        },
      })
      db_achievements.push(db_achievement)
    };
  }
  return {
    props: {
      db_user,
      db_character,
      db_achievements
    },
  };
}

export default function Home({
  db_user,
  db_character,
  db_achievements,
}) {
  // Authentication
  const { user, error, isLoading } = useUser();
  // View Mode
  const [mode, setMode] = useState("LANDING");
  // Game State
  const { gameState } = useGameState();
  // Music
  const audioRef = useRef(null);
  const { isMusicPlaying, handleMusicToggle } = useIsMusicPlaying(audioRef, mode);

  // Skip landing if user is logged in
  useEffect(() => {
    if (user) {
      setMode("DASH");
    }
  }, [user]);


  return (
    <div className="app-wrapper">
      <div className="view-wrapper">
        {mode === 'LANDING' && <Landing setMode={setMode} user={user} />}
        {mode === 'LOGIN' && <Login />}
        {mode === 'DASH' && (
          <Dashboard
            audioRef={audioRef}
            mode={mode}
            setMode={setMode}
            isMusicPlaying={isMusicPlaying}
            handleMusicToggle={handleMusicToggle}
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
    </div>
  );
}

