import { learnMove } from "@/prisma/helpers/learnMove";
import { earnAchievement } from "@/prisma/helpers/earnAchievement";
import { createUser } from "@/prisma/helpers/createUser";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useGameState } from "@/utils/context/GameStateContext";
export default function Room(props) {
  const { user, error, isLoading } = useUser();
  const { gameState } = useGameState();
  const BACKGROUND = gameState.currentRoom.background;
  const BACKGROUND_COL = gameState.currentRoom.color;
  return (
    <div
      style={{
        backgroundImage: BACKGROUND,
        backgroundColor: BACKGROUND_COL,
      }}
      className="treasure-room"
    >
      <div className="treasure-floor">
        <button
          onClick={() => {
            createUser(user);
          }}
        >
          Click to create user based on auth0 login
        </button>
        <br></br>
        <button
          onClick={() => {
            earnAchievement(user, "crimes against munchlax");
          }}
        >
          Click to Update Achievement
        </button>
        <br></br>
        <button
          onClick={() => {
            learnMove(user, "play-rough");
          }}
        >
          Click to Learn Play Rough
        </button>
        <br></br>
        <button
          onClick={() => {
            learnMove(user, "shadow-sneak");
          }}
        >
          Click to Learn Shadow Sneak
        </button>
        <br></br>
        <div>THIS IS A TREASURE CHEST</div>
      </div>
      <button onClick={props.nextRoom}>NEXT ROOM</button>
    </div>
  );
}
