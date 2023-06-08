import { useState } from "react";

export default function useGameState() {
  const [gameState, setGameState] = useState();
  
  const [roomType, setRoomType] = useState("battle"); // pull initial state from either local storage or user state/db
  const [turnMode, setTurnMode] = useState("player"); // when move is selected, state is set to "logic" -> back to "player" when logic is complete
  const [battleWon, setBattleWon] = useState(false); // set to false upon new battle room, true on defeating opponent (determines results popup)
  const [popup, setPopup] = useState({
    intro: false,
    victory: false,
    defeat: false,
    treasure: false,
  });
  const [sprites, setSprites] = useState({ // player and opponent active sprites
    player: `url("/mimikyu-standin.png")`,
    opponent: `url("/snorlax-standin.png")`
  });

  return {
    gameState,
    setGameState,
    roomType,
    setRoomType,
    turnMode,
    setTurnMode,
    battleWon,
    setBattleWon,
    popup,
    setPopup,
    sprites,
    setSprites
  }
}