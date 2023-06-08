import MoveItem from "../common/MoveItem";
import { useGameState } from "../../utils/context/GameStateContext";

export default function Room(props) {
  return (
    <div className="treasure-room">
      <div className="treasure-floor">
        <div>THIS IS A TREASURE CHEST</div>
      </div>
      <button onClick={props.nextRoom}>NEXT ROOM</button>
    </div>
  );
}
