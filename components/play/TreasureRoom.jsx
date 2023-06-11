import { learnMove } from "@/game/helpers/api/learnMove";
import { acquireAchievement } from "@/game/helpers/api/acquireAchievement"
export default function Room(props) {
  const { db_user } = props
  return (
    <div className="treasure-room">
      <div className="treasure-floor">
        <button onClick={acquireAchievement}>
          'Click to Update Achievement'
        </button>
        <br></br>
        <button onClick={()=> {learnMove(db_user, 'play-rough')}}>
          'Click to Learn Play Rough'
        </button>
        <br></br>
        <button onClick={()=> {learnMove(db_user, 'shadow-sneak')}}>
          'Click to Learn Shadow Sneak'
        </button>
        <br></br>
        <div>THIS IS A TREASURE CHEST</div>
      </div>
      <button onClick={props.nextRoom}>NEXT ROOM</button>
    </div>
  );
}
