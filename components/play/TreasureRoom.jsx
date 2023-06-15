import { learnMove } from "@/prisma/helpers/learnMove";
import { earnAchievement } from "@/prisma/helpers/earnAchievement";
import { createUser } from "@/prisma/helpers/createUser";
import { changeMoves } from "@/prisma/helpers/changeMoves";
import { earnItem } from "@/prisma/helpers/earnItem";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useGameState } from "@/utils/context/GameStateContext";
import StoreCard from "./StoreCard";
import { useState, useEffect } from "react";
import localFont from "next/font/local";
const vt = localFont({ src: "../../public/fonts/VT323-Regular.ttf" });

export default function Room(props) {
  const { user, error, isLoading } = useUser();
  const { gameState } = useGameState();
  const BACKGROUND = gameState.currentRoom.background;
  const BACKGROUND_COL = gameState.currentRoom.color;

  const [chosenOption, setChosenOption] = useState(null);
  const [hasSelected, setHasSelected] = useState(false);

  useEffect(() => {
    if (chosenOption !== null) {
      setHasSelected(true);
    }
  }, [chosenOption]);
  const handleContinue = () => {
    // Fire different functions based on chosenOption
    switch (chosenOption) {
      case "Berry":
        console.log("Berry Get!")
        earnItem(user, "berry", 1)
        break;
      case "Play Rough":
        learnMove(user, "play-rough")
        break;
      case "Shadow Sneak":
        learnMove(user, "shadow-sneak")
        break;
      case "Stat 1":
        // Call function for Stat 1 option
        break;
      case "Stat 2":
        // Call function for Stat 2 option
        break;
      default:
        // Handle the default case if needed
        break;
    }

    // Continue to the next room (if hasSelected is true)
    if (hasSelected) {
      props.nextRoom();
    }
  };
  return (
    <div
      style={{
        backgroundImage: BACKGROUND,
        backgroundColor: BACKGROUND_COL,
      }}
      className="treasure-room"
    >
      <div className="treasure-floor">
        <h2
          style={{
            fontFamily: vt.style.fontFamily,
          }}
        >
          PICK A REWARD!
        </h2>
        <div className="store-cards">
      <StoreCard
        type="pokemon-center"
        name="POKEMON CENTER"
        color="#e24631"
        options={["Berry"]}
        chosenOption={chosenOption}
        setChosenOption={(option) => {
          setChosenOption(option);
          setHasSelected(true); // Update hasSelected immediately
        }}
      />
      <StoreCard
        type="pokemart"
        name="POKEMART"
        color="#4dbefc"
        options={["Move 1", "Move 2"]}
        chosenOption={chosenOption}
        setChosenOption={(option) => {
          setChosenOption(option);
          setHasSelected(true); // Update hasSelected immediately
        }}
      />
      <StoreCard
        type="gym-store"
        name="GYM"
        color="#fbb012"
        options={["Stat 1", "Stat 2"]}
        chosenOption={chosenOption}
        setChosenOption={(option) => {
          setChosenOption(option);
          setHasSelected(true); // Update hasSelected immediately
        }}
      />
    </div>
        {/* <button onClick={()=> {earnItem(user, "berry", 1)}}>
            Click to get a berry
            </button>
            <button onClick={()=> {changeMoves(user, ["play-rough","charm","swords-dance","draining-kiss",])}}>
          Click to get new moveset
        </button>
        <br></br>
      <button onClick={()=> {createUser(user)}}>
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
        <div>THIS IS A TREASURE CHEST</div> */}
      </div>
      <button
      className={`continue ${hasSelected ? "active" : "inactive"}`}
      onClick={handleContinue}
    >
      CONTINUE
    </button>
    </div>
  );
}