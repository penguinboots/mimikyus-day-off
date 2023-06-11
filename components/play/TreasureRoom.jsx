import { learnMove } from "@/prisma/helpers/learnMove";
import { earnAchievement } from "@/prisma/helpers/earnAchievement"
export default function Room(props) {
  const { db_user } = props
  return (
    <div className="treasure-room">
      <div className="treasure-floor">
        <button onClick={earnAchievement}>
          Click to Update Achievement
        </button>
        <br></br>
        <button onClick={()=> {learnMove(db_user, 'play-rough')}}>
          Click to Learn Play Rough
        </button>
        <br></br>
        <button onClick={()=> {learnMove(db_user, 'shadow-sneak')}}>
          Click to Learn Shadow Sneak
        </button>
        <br></br>
        <div>THIS IS A TREASURE CHEST</div>
      </div>
      <button onClick={props.nextRoom}>NEXT ROOM</button>
    </div>
  );
}
