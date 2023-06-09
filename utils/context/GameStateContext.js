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
  const { magikarp, snorlax1 } = require("../../game/pregenerated/floor1mons");
  const player = snorlax1;

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
    player: `url("/mimikyu-standin.png")`,
    opponent: `url("/snorlax-standin.png")`,
  });

  function nextFloor(nextFl) {
    const nextFloor = dungeon[nextFl];
    setGameState((prev) => ({
      ...prev,
      currentFloor: nextFloor,
      currentRoom: nextFloor.room_1,
      opponent: nextFloor.room_1.opponent,
      player: player,
    }));
  }

  function nextRoom() {
    if (gameState.currentRoom.next_room) {
      const nextRoom = gameState.currentFloor[gameState.currentRoom.next_room];
      setGameState((prev) => ({
        ...prev,
        currentRoom: nextRoom,
        roomType: nextRoom.type,
        opponent: nextRoom.opponent,
        player: player,
      }));
    } else {
      nextFloor(gameState.currentFloor.next_floor);
    }
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
    nextRoom,
    dealDamage,
    dealHeal,
    battleHistory,
    setBattleHistory,
  };

  return (
    <GameStateContext.Provider value={value}>
      {children}
    </GameStateContext.Provider>
  );

}

export default GameStateContext;
