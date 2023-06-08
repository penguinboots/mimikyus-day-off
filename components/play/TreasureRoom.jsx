import MoveItem from "../common/MoveItem";
import useGameState from "@/utils/hooks/gameState";

export default function Room() {
  const {
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
  } = useGameState();

  return (
    <div className="room treasure-room">
      <div className="treasure-floor">
        <div>THIS IS A TREASURE CHEST</div>
      </div>
    </div>
  );
}
