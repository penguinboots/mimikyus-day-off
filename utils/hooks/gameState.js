import { dungeon } from "@/game/pregenerated/dungeon1";
import { useState } from "react";

export default function useGameState() {
  // this state primarily manages the data relating the user and their place in the game
  const [gameState, setGameState] = useState({
    currentFloor: dungeon.floor_1,
    currentRoom: dungeon.floor_1.room_1,
  });

  // these states primarily manage the visual aspects of the game
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

  // helper for nextRoom()
  // behaviour not yet set up for clearing final floor
  function nextFloor(nextFl) {
    console.log("next floor:", nextFl)
    setGameState((prev) => ({
      ...prev,
      currentFloor: dungeon[nextFl],
      currentRoom: dungeon[nextFl]["room_1"],
    }))
  }

  // called when isBattleOver returns a victory
  function nextRoom() {
    // If the current room has a following room, set state to that room
    if (gameState.currentRoom.next_room) {
      setGameState((prev) => ({
        ...prev,
        currentRoom: prev.currentFloor[prev.currentRoom.next_room],
      }));
    } else { // If the current room does not have a following room, call nextFoor
      nextFloor(gameState.currentFloor.next_floor);
    }
  }


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
    setSprites,
    nextRoom
  }
}