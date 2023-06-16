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
import { getItems } from "@/prisma/helpers/getItems";
import { getMoves } from "@/prisma/helpers/getMoves";
import { properName } from "@/utils/helpers/properName";
const vt = localFont({ src: "../../public/fonts/VT323-Regular.ttf" });

export default function Room(props) {
  const { user, error, isLoading } = useUser();
  const { gameState, setGameState } = useGameState();
  const BACKGROUND = gameState.currentRoom.background;
  const BACKGROUND_COL = gameState.currentRoom.color;

  const [chosenOption, setChosenOption] = useState(null);
  const [hasSelected, setHasSelected] = useState(false);
  const [storeMoves, setStoreMoves] = useState([]);


  useEffect(() => {
    if (chosenOption !== null) {
      setHasSelected(true);
    }
  }, [chosenOption]);
  const handleContinue = () => {
    // Fire different functions based on chosenOption
    switch (chosenOption) {
      //Item Cases
      case "Berry":
        earnItem(user, "berry", 1)
        .then(() => {
          return getItems(user);
        })
        .then(({ items }) => {
          setGameState((prev) => ({
            ...prev,
            itemList: items,
          }))
        })
        break;
      //Move Cases
      case "Swords Dance":
        learnMove(user, "swords-dance")
        break;
      case "Draining Kiss":
        learnMove(user, "draining-kiss")
        break;
      case "Play Rough":
        learnMove(user, "play-rough")
        break;
      case "Shadow Sneak":
        learnMove(user, "shadow-sneak")
        break;
      case "Charm":
        learnMove(user, "charm")
        break;
      case "Drain Punch":
        learnMove(user, "drain-punch")
        break;
      case "Shadow Ball":
        learnMove(user, "shadow-ball")
        break; 
      case "Shadow Claw":
        learnMove(user, "shadow-claw")
        break;
      //Stat Cases
      case "HP Up":
        // Call function for HP +10
        break;
      case "Protein":
        // Call function for Atk +10
        break;
      case "Iron":
        // Call function for Def +10
        break;
      case "Calcium":
        // Call function for SpAtk +10 
        break;
      case "Zinc":
        // Call function for SpDef +10
        break;
      case "Carbos":
        // Call function for Speed +10
        break;
    }
    // Continue to the next room (if hasSelected is true)
    if (hasSelected) {
      props.nextRoom();
    }
  };
  useEffect(() => {
    const dbMoves = [];

    getMoves(user)
      .then((movesObject) => {
        const { moves } = movesObject;
        moves.forEach((move) => {
          if (move.collected === false) {
            dbMoves.push(move);
          }
        });

        while (dbMoves.length > 2) {
          const randomIndex = Math.floor(Math.random() * dbMoves.length);
          dbMoves.splice(randomIndex, 1);
        }

        const formattedMoves = dbMoves.map((move) => properName(move.name));
        setStoreMoves(formattedMoves); // Update storeMoves with the formatted moves
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user]);
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
        type="gym-store"
        name="GYM"
        color="#fbb012"
        options={storeMoves}
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
        options={["Stat 1", "Stat 2"]}
        chosenOption={chosenOption}
        setChosenOption={(option) => {
          setChosenOption(option);
          setHasSelected(true); // Update hasSelected immediately
        }}
      />
    </div>
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