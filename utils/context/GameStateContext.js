import React, { createContext, useContext, useState } from 'react';
import { dungeon } from '@/game/pregenerated/dungeon1';

// Create the context
const GameStateContext = createContext();

// Create a custom hook to access the context
export function useGameState() {
  return useContext(GameStateContext);
}

// Create a provider component
export function GameStateProvider({ children }) {
  const { mimikyu } = require("../../game/pregenerated/fakePlayer");
  const player = mimikyu;

  const [gameState, setGameState] = useState({
    currentFloor: dungeon.floor_1,
    currentRoom: dungeon.floor_1.room_1,
    roomType: dungeon.floor_1.room_1.type,
    opponent: dungeon.floor_1.room_1.opponent,
    player: player,
  });

  const [battleHistory, setBattleHistory] = useState([]);

  const [turnMode, setTurnMode] = useState('player');
  const [battleWon, setBattleWon] = useState(false);
  const [popup, setPopup] = useState({
    intro: false,
    victory: false,
    defeat: false,
    treasure: false,
  });

  const [sprites, setSprites] = useState({
    player: "idle",
    opponent: "idle",
    playerBuff: null,
    opponentBuff: null,
  });

  const [gifReloadKeyPlayer, setGifReloadKeyPlayer] = useState(0);
  const [gifReloadKeyOpponent, setGifReloadKeyOpponent] = useState(0);
  const [showPlayer, setShowPlayer] = useState(false);
  const [showOpponent, setShowOpponent] = useState(false);

  const [selectedMusic, setSelectedMusic] = useState("00_pokemon_center.mp3");

  function nextFloor(nextFl) {
    const nextFloor = dungeon[nextFl];
    setGameState((prev) => ({
      ...prev,
      currentFloor: nextFloor,
      currentRoom: nextFloor.room_1,
      opponent: nextFloor.room_1.opponent,
      player: {
        ...prev.player,
        current_hp: player.current_hp,
        stat_changes: player.stat_changes
      }
    }));
    setBattleWon(false);
  }

  // Sets current room/floor to next in list, resets player HP/stats, 
  function nextRoom() {
    if (gameState.currentRoom.next_room) {
      const nextRoom = gameState.currentFloor[gameState.currentRoom.next_room];
      setGameState((prev) => ({
        ...prev,
        currentRoom: nextRoom,
        roomType: nextRoom.type,
        opponent: nextRoom.opponent,
        player: {
          ...prev.player,
          current_hp: player.current_hp,
          stat_changes: player.stat_changes
        }
      }));
    } else {
      nextFloor(gameState.currentFloor.next_floor);
    }
    setBattleWon(false);
    setPopup({
      intro: false,
      victory: false,
      defeat: false,
      treasure: false,
    });
  }

  function loseGame() {
    setGameState({
      currentFloor: dungeon.floor_1,
      currentRoom: dungeon.floor_1.room_1,
      roomType: dungeon.floor_1.room_1.type,
      opponent: dungeon.floor_1.room_1.opponent,
      player: {
          ...prev.player,
          current_hp: player.current_hp,
          stat_changes: player.stat_changes
        }
    });
    setBattleWon(false);
    setPopup({
      intro: false,
      victory: false,
      defeat: false,
      treasure: false,
    });
  }

  const dealDamage = (target, amt) => {
    setGameState((prev) => ({
      ...prev,
      [target]: {
        ...prev[target],
        current_hp: Math.floor(prev[target]["current_hp"] - amt),
      },
    }));
  }

  const dealHeal = (target, amt) => {
    setGameState((prev) => ({
      ...prev,
      [target]: {
        ...prev[target],
        current_hp: Math.floor(prev[target]["current_hp"] + amt),
      },
    }));
  }

  const playAnim = (char, anim) => {
    setSprites((prev) => ({
      ...prev,
      [char]: anim,
    }));
  }

  // Provide the state and functions through the context
  const value = {
    gameState,
    setGameState,
    turnMode,
    setTurnMode,
    battleWon,
    setBattleWon,
    popup,
    setPopup,
    sprites,
    setSprites,
    playAnim,
    nextRoom,
    dealDamage,
    dealHeal,
    battleHistory,
    setBattleHistory,
    gifReloadKeyPlayer,
    setGifReloadKeyPlayer,
    gifReloadKeyOpponent,
    setGifReloadKeyOpponent,
    showPlayer,
    setShowPlayer,
    showOpponent,
    setShowOpponent,
    loseGame,
    selectedMusic,
    setSelectedMusic
  };
  return (
    <GameStateContext.Provider value={value}>
      {children}
    </GameStateContext.Provider>
  );

}

export default GameStateContext;
