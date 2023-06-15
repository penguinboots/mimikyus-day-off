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
// Drawer
import { Drawer, Button } from 'antd';
import { ShoppingOutlined, CloseOutlined } from '@ant-design/icons';
import { items } from '@/game/data/items';
export default function Home(props) {
  // Authentication
  const { user, error, isLoading } = useUser();
  console.log(user);
  // View Mode
  const [mode, setMode] = useState("LANDING");
  // Game State
  const { gameState, setGameState, setSelectedMusic } = useGameState();
  // Music
  const audioRef = useRef(null);
  const { isMusicPlaying, handleMusicToggle } = useIsMusicPlaying(audioRef, mode);
    // Drawer State
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);
    
    const handleDrawerToggle = () => {
      setIsDrawerVisible(!isDrawerVisible);
    };
  const playerTemplate = { ...mimikyu }
  let dbData = null
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
              player: updatedPlayerTemplate,
              itemList: dbData.items,
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
          <>
            <Button
              className="item-button"
              type="primary"
              shape="circle"
              icon={<ShoppingOutlined style={{ fontSize: '2.3rem' }} />}
              onClick={handleDrawerToggle}
              style={{
                position: 'absolute',
                bottom: '55px', // Adjust the value as per your requirement
                left: '55px', // Adjust the value as per your requirement
                boxShadow: 'none',
                border: 'none',
                backgroundColor: 'transparent',
              }}
            />
            <Drawer
              title={<span style={{ fontSize: '14px' }}>ITEMS</span>}
              placement="center"
              open={isDrawerVisible}
              onClose={handleDrawerToggle}
              width={300}
              bodyStyle={{
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0',
              }}
              headerStyle={{
                paddingBottom: '15px',
                paddingRight: '32px',
              }}
              closeIcon={<CloseOutlined style={{ fontSize: '16px' }} />}
              style={{
                position: 'fixed',
                top: '45%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '300px',
                height: '260px',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(4px)',
                border: 'none',
              }}
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