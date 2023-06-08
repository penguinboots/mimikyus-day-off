import useGameState from "@/utils/hooks/gameState"
import { useState } from "react";

export default function GameLogic() {
  const { gameState, setGameState } = useGameState();

  /*
  Game States:

    > Type of room -> "Battle", "Treasure"
      > eg. [ roomType, setRoomType ] -> "battle", "treasure"
    
    > Whether or not user can interact (eg. Player turn or Logic turn)
      > eg. [ turnMode, setTurnMode ] -> "player", "logic"

    > Whether the opponent is defeated
      > eg. [ battleWon, setBattleWon ] -> true, false

    > Popups at beginning/end of room
      > eg. [ popup, setPopup ] -> { intro: false, result: false, treasure: false }
          ***** <Popup /> *****
              > Intro to fight (with image) -> into battle
              > Victory message -> into next room
              > Defeat message -> back to dash
              > Treasure popup -> into next room
            - PROPS:
              - handleContinue -> handles button behaviour
              - roomType (state) & battleWon (state) -> determines what kind of popup (intro, victory/defeat, treasure)
  */



  return <div>GameLogic</div>;
}
