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
// Drawer
import { Drawer, Button } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';
import { items } from '@/game/data/items';

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
  // Drawer State
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [itemList, setItemList] = useState();
  
  const handleDrawerToggle = () => {
    setIsDrawerVisible(!isDrawerVisible);
  };
  
  useEffect(() => {
    const initializeUser = async () => {
      if (user) {
        try {
          let db_data = await getUserData(user);
          if (!db_data) {
            db_data = await createUser(user);
          }
          setMode("DASH");
          setGameState((prev) => ({
            ...prev,
            itemList: db_data.items
          }));
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
          <>
            <Button
              className="item-button"
              type="primary"
              shape="circle"
              icon={<ShoppingOutlined style={{ fontSize: '2.3rem' }} />}
              onClick={handleDrawerToggle}
              style={{ boxShadow: 'none', border: 'none', backgroundColor: 'transparent' }}
            />
            <Drawer
              title="ITEMS"
              placement="left"
              visible={isDrawerVisible}
              onClose={handleDrawerToggle}
              width={320}
              bodyStyle={{ padding: 0 }}
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(4px)', borderRight: 'none' }}
            >
            <div className="item-list">
              {gameState.itemList.map((item) => (
                <div key={item.name} className="item">
                  <span className="item-name">{item.name}</span>
                  <span className="item-quantity">{item.quantity}</span>
                </div>
              ))}
            </div>
            </Drawer>
            <Play
              audioRef={audioRef}
              mode={mode}
              setMode={setMode}
              isMusicPlaying={isMusicPlaying}
              handleMusicToggle={handleMusicToggle}
            />
          </>
        )}
      </div>
      <AudioPlayer audioRef={audioRef} mode={mode} isMusicPlaying={isMusicPlaying} />
    </div>
  );
}

