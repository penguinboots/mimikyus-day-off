import { PrismaClient } from '@prisma/client';
import { useState, useEffect, useRef } from 'react';
// Auth0
import { useUser } from '@auth0/nextjs-auth0/client';
import achievements from '../game/data/achievements.json'
import { unlockables } from '@/game/data/unlockableMoves';
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

export async function getStaticProps() {
  const prisma = new PrismaClient();
  let db_user = null
  let db_character = null
  let db_achievements = []
  let db_moves = []
  //check if user exists
  db_user = await prisma.user.findUnique({
    where: { auth0Sub: 'auth0sub123' },
  });
  //If user exists, execute select statements and append them to export variables
  if (db_user) {
    db_character = await prisma.character.findFirst({
      where: { userId: db_user.id }
    })
    db_achievements = await prisma.achievement.findMany({
        where: { userId: db_user.id }
    })
    db_moves = await prisma.move.findMany({
      where: { userId: db_user.id }
    })
  //If user doesn't exist, create them and all relevent data, append to export variables
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
      data:{
        move_1: "Move 1",
        move_2: "Move 2",
        move_3: "Move 3",
        move_4: "Move 4",
        userId: db_user.id
      }
    })
    const achievementArray = Object.values(achievements)
    for (let i = 0; i < achievementArray.length; i++) {
      let achievement = achievementArray[i]
      const db_achievement = await prisma.achievement.create({
        data:{
          name: achievement.name,
          collected: achievement.collected,
          date_get: null,
          userId: db_user.id,
        },
      })
      db_achievements.push(db_achievement)
    };
    for (let i = 0; i < unlockables.length; i++) {
      let move = unlockables[i];
      const db_move = await prisma.move.create({
        data: {
          name: move.name,
          collected: move.collected,
          date_get: null,
          userId: db_user.id,
        },
      });
      db_moves.push(db_move);
    }
  }
  return {
    props: {
      db_user,
      db_character,
      db_achievements,
      db_moves,
    },
  };
}

export default function Home({
  db_user,
  db_character,
  db_achievements,
  db_moves,
}) {
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
            db_user={db_user}
            db_character={db_character}
            db_moves={db_moves}
            db_achievements={db_achievements}
          />
        )}
        {mode === 'PLAY' && (
          <Play
            setMode={setMode}
            isMusicPlaying={isMusicPlaying}
            handleMusicToggle={handleMusicToggle}
            db_user={db_user}
            db_character={db_character}
            db_moves={db_moves}
            db_achievements={db_achievements}
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

