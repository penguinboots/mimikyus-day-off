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
import { updateStats } from "@/prisma/helpers/updateStats";
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
  useEffect(() => {
    updateStats(user, gameState.player.stats);
  }, [gameState.player.stats, updateStats]);
  
  const handleContinue = () => {
    // Fire different functions based on chosenOption
    switch (chosenOption) {
      //Item Cases
      case "Oran Berry":
        earnItem(user, "oran-berry", 1)
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
      case "Sitrus Berry":
        earnItem(user, "sitrus-berry", 1)
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
      case "Shadow Sneak":
        learnMove(user, "shadow-sneak")
        break;
      case "Psychic":
        learnMove(user, "psychic")
        break;
      case "Draining Kiss":
        learnMove(user, "draining-kiss")
        break;
      case "Charge Beam":
        learnMove(user, "charge-beam")
        break;
      case "Giga Drain":
        learnMove(user, "giga-drain")
        break;
      case "Dark Pulse":
        learnMove(user, "dark-pulse")
        break;
      case "Leech Life":
        learnMove(user, "leech-life")
        break;
      case "Charm":
        learnMove(user, "charm")
        break;
      case "Trailblaze":
        learnMove(user, "trailblaze")
        break;
      case "Wood Hammer":
        learnMove(user, "wood-hammer")
        break; 
      case "Screech":
        learnMove(user, "screech")
        break;
      case "Shadow Ball":
        learnMove(user, "shadow-ball")
        break; 
      case "Thunderbolt":
        learnMove(user, "thunderbolt")
        break;
      case "Swords Dance":
        learnMove(user, "swords-dance")
        break;
      case "Drain Punch":
        learnMove(user, "drain-punch")
        break;
      case "Dazzling Gleam":
        learnMove(user, "dazzling-gleam")
        break;
      case "Shadow Claw":
        learnMove(user, "shadow-claw")
        break;
      case "Play Rough":
        learnMove(user, "play-rough")
        break;
      //Stat Cases
      case "HP Up":
        setGameState((prev) => ({
          ...prev,
          player:{
            ...prev.player,
            stats:{
              ...prev.player.stats,
              "hp": prev.player.stats["hp"] + 10} 
          }
        }))
        break;
      case "Protein":
        setGameState((prev) => ({
          ...prev,
          player:{
            ...prev.player,
            stats:{
              ...prev.player.stats,
              "attack": prev.player.stats["attack"] + 10} 
          }
        }))
        break;
      case "Iron":
        setGameState((prev) => ({
          ...prev,
          player:{
            ...prev.player,
            stats:{
              ...prev.player.stats,
              "defense": prev.player.stats["defense"] + 10} 
          }
        }))
        break;
      case "Calcium":
        setGameState((prev) => ({
          ...prev,
          player:{
            ...prev.player,
            stats:{
              ...prev.player.stats,
              "special-attack": prev.player.stats["special-attack"] + 10} 
          }
        }))
        break;
      case "Zinc":
        setGameState((prev) => ({
          ...prev,
          player:{
            ...prev.player,
            stats:{
              ...prev.player.stats,
              "special-defense": prev.player.stats["special-defense"] + 10} 
          }
        }))
        break;
      case "Carbos":
        setGameState((prev) => ({
          ...prev,
          player:{
            ...prev.player,
            stats:{
              ...prev.player.stats,
              "speed": prev.player.stats["speed"] + 10} 
          }
        }))
        break;
    }
    // Continue to the next room (if hasSelected is true)
    if (hasSelected) {
      props.nextRoom();
    }
  };
  const roomMoves = gameState.currentRoom.treasure.moves
  const vitamins = ["HP Up", "Protein", "Iron", "Calcium", "Zinc", "Carbos"]
  useEffect(() => {
    const dbMoves = [];
    getMoves(user)
      .then((movesObject) => {
        const { moves } = movesObject;
        moves.forEach((move) => {
          if (move.collected === false && roomMoves.includes(move.name)) {
            dbMoves.push(move);
          }
        });
        while (dbMoves.length > 2) {
          const randomIndex = Math.floor(Math.random() * dbMoves.length);
          dbMoves.splice(randomIndex, 1);
        }
        const formattedMoves = dbMoves.map((move) => properName(move.name));
        setStoreMoves(formattedMoves);
      })
      .catch((error) => {
        console.error(error);
      });
    }, [user]);
    while (vitamins.length > 2) {
      const randomIndex = Math.floor(Math.random() * vitamins.length);
      vitamins.splice(randomIndex, 1);
    }
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
        options={["Oran Berry"]}
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
        options={vitamins}
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