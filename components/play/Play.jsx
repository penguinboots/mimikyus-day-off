import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHouse } from "@fortawesome/free-solid-svg-icons";
import Nav from "../common/Nav";
import GameLogic from "./GameLogic";
import BattleRoom from "./BattleRoom";
import TreasureRoom from "./TreasureRoom";
import { useGameState } from "../../utils/context/GameStateContext";
import { useEffect } from "react";

export default function Play(props) {
  const { setMode, isMusicPlaying, handleMusicToggle } = props;

  const returnToDash = () => {
    setMode("DASH");
  };

  const { gameState, nextRoom } = useGameState();

  return (
    <div className="play-container">
      <Nav
        isMusicPlaying={isMusicPlaying}
        handleMusicToggle={handleMusicToggle}
      />
      <div className="play-viewport">
        <button className="dash-return" onClick={returnToDash}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <FontAwesomeIcon icon={faHouse} />
        </button>
        {gameState.roomType === "battle" && (
          <BattleRoom
            returnToDash={returnToDash}
            nextRoom={nextRoom}
            gameState={gameState}
          />
        )}
        {gameState.roomType === "treasure" && (
          <TreasureRoom
            returnToDash={returnToDash}
            nextRoom={nextRoom}
            gameState={gameState}
          />
        )}
      </div>
      <GameLogic />
    </div>
  );
}
