import { learnMove } from "@/prisma/helpers/learnMove";
import { earnAchievement } from "@/prisma/helpers/earnAchievement"
import { createUser } from "@/prisma/helpers/createUser";
import { useUser } from "@auth0/nextjs-auth0/client";
import { earnItem } from "@/prisma/helpers/earnItem";
export default function Room(props) {
  const { user, error, isLoading} = useUser()
  return (
    <div className="treasure-room">
      <div className="treasure-floor">
      <button onClick={()=> {earnItem(user, "berry", 1)}}>
          Click to get a berry
        </button>
      <button onClick={()=> {createUser(user)}}>
          Click to create user based on auth0 login
        </button>
        <br></br>
        <button onClick={()=> {earnAchievement(user, "crimes against munchlax")}}>
          Click to Update Achievement
        </button>
        <br></br>
        <button onClick={()=> {learnMove(user, 'play-rough')}}>
          Click to Learn Play Rough
        </button>
        <br></br>
        <button onClick={()=> {learnMove(user, 'shadow-sneak')}}>
          Click to Learn Shadow Sneak
        </button>
        <br></br>
        <div>THIS IS A TREASURE CHEST</div>
      </div>
      <button onClick={props.nextRoom}>NEXT ROOM</button>
    </div>
  );
}
