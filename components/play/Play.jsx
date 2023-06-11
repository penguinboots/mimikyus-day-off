import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHouse } from "@fortawesome/free-solid-svg-icons";
import Nav from "../common/Nav";
import BattleRoom from "./BattleRoom";
import TreasureRoom from "./TreasureRoom";
import { useGameState } from "../../utils/context/GameStateContext";
export default function Play(props) {
  let { mode, setMode, isMusicPlaying, handleMusicToggle, db_user, db_character, db_moves, db_achievements } = props;
  const returnToDash = () => {
      setMode("DASH");
  };

  const { gameState, nextRoom } = useGameState();

  return (
    <div className="play-container">
      <Nav
        mode={mode}
        isMusicPlaying={isMusicPlaying}
        handleMusicToggle={handleMusicToggle}
        windowTitle="ROUTE 1"
      />
      <div className="play-viewport">
        <button className="dash-return" onClick={returnToDash}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <FontAwesomeIcon icon={faHouse} />
        </button>
        {gameState.roomType === "battle" && (
          <BattleRoom
            setMode={setMode}
          />
        )}
        {gameState.roomType === "treasure" && (
          <TreasureRoom
            returnToDash={returnToDash}
            nextRoom={nextRoom}
            gameState={gameState}
            db_user={db_user}
          />
        )}
      </div>
    </div>
  );
}
