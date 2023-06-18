import { learnMove } from "@/prisma/helpers/learnMove";
import { earnItem } from "@/prisma/helpers/earnItem";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useGameState } from "@/utils/context/GameStateContext";
import StoreCard from "./StoreCard";
import { useState, useEffect } from "react";
import localFont from "next/font/local";
import { getItems } from "@/prisma/helpers/getItems";
import { getMoves } from "@/prisma/helpers/getMoves";
import { properName } from "@/utils/helpers/properName";
import { updateStat } from "@/prisma/helpers/updateStat";
import { getCharacter } from "@/prisma/helpers/getCharacter";
const vt = localFont({ src: "../../public/fonts/VT323-Regular.ttf" });

export default function Room() {
  const { user, error, isLoading } = useUser();
  const { gameState, setGameState, nextRoom } = useGameState();
  const BACKGROUND = gameState.currentRoom.background;
  const BACKGROUND_COL = gameState.currentRoom.color;

  // Actively selected item
  const [chosenOption, setChosenOption] = useState({
    store: null,
    item: null,
  });
  // Player has made any choice
  const [hasSelected, setHasSelected] = useState(false);
  // Available moves in store
  const [storeMoves, setStoreMoves] = useState([]);
  const [isStoreLoading, setIsStoreLoading] = useState(true);
  const [loadingNext, setLoadingNext] = useState(false);
  // Vitamins available in store
  const [vitamins, setVitamins] = useState([
    "HP Up",
    "Protein",
    "Iron",
    "Calcium",
    "Zinc",
    "Carbos",
  ]);

  // Makes continue button when any choice is made
  useEffect(() => {
    if (chosenOption.item !== null) {
      setHasSelected(true);
    }
  }, [chosenOption]);

  // Pick available vitamins
  if (vitamins.length > 2) {
    const randomIndexes = [];
    while (randomIndexes.length < 2) {
      const randomIndex = Math.floor(Math.random() * vitamins.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
    const selectedVitamins = randomIndexes.map((index) => vitamins[index]);
    setVitamins(selectedVitamins);
  }
  const roomItems = gameState.currentRoom.treasure.items.map((item)=>properName(item))
  // Pick available moves based on room's rewards and player's known moves
  const roomMoves = gameState.currentRoom.treasure.moves;
  useEffect(() => {
    const dbMoves = [];
    if (isLoading) {
      setIsStoreLoading(true);
    } else {
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
          setIsStoreLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsStoreLoading(false);
        });
    }
  }, [user]);

  // Takes full name, reduces to query string
  function reduceName(name) {
    return name.replace(/\s+/g, "-").toLowerCase();
  }

  // Returns stat related to given vitamin
  function getVitaminStat(vitamin) {
    switch (vitamin) {
      case "HP Up":
        return "hp";
      case "Protein":
        return "attack";
      case "Iron":
        return "defense";
      case "Calcium":
        return "special-attack";
      case "Zinc":
        return "special-defense";
      case "Carbos":
        return "speed";
    }
  }

  // Executes action based on store and option selected
  function executeChoice(store, choice) {
    return new Promise((resolve, reject) => {
      switch (store) {
        case "pokemon-center":
          earnItem(user, reduceName(choice), 1)
            .then(() => getItems(user))
            .then(({ items }) => {
              setGameState((prev) => ({
                ...prev,
                itemList: items,
              }));
              resolve();
            })
            .catch((error) => reject(error));
          break;
        case "gym-store":
          learnMove(user, reduceName(choice))
            .then(() => resolve())
            .catch((error) => reject(error));
          break;
        case "pokemart":
          let statToRaise = getVitaminStat(choice);
          // setGameState((prev) => ({
          //   ...prev,
          //   player: {
          //     ...prev.player,
          //     [statToRaise]: prev.player[statToRaise] + 10,
          //   },
          // }));
          // updateStat(user, statToRaise, 10)
          //   .then(() => resolve())
          //   .catch((error) => reject(error));
          updateStat(user, statToRaise, 10)
            .then(() => {
              return getCharacter(user);
            })
            .then(({ characters }) => {
              console.log(characters);
              let character = characters[0];
              setGameState((prev) => ({
                ...prev,
                player: {
                  ...prev.player,
                  current_hp: character.hp,
                  stats: {
                    hp: character.hp,
                    attack: character.attack,
                    defense: character.defense,
                    "special-attack": character.sp_atk,
                    "special-defense": character.sp_def,
                    speed: character.speed,
                  },
                },
              }));
              resolve();
            })
            .catch((error) => reject(error));
          break;
        default:
          reject(new Error("Invalid store"));
      }
    });
  }

  // Only calls nextRoom when executeChoice is complete
  const handleContinue = async () => {
    setLoadingNext(true);
    try {
      await executeChoice(chosenOption.store, chosenOption.item);
      nextRoom();
    } catch (error) {
      console.error("Error handling continue:", error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: BACKGROUND,
        backgroundColor: BACKGROUND_COL,
        position: "relative",
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
            options={roomItems}
            chosenOption={chosenOption}
            setChosenOption={(choice) => {
              setChosenOption({ store: "pokemon-center", item: choice });
            }}
            isStoreLoading={false}
          />
          <StoreCard
            type="gym-store"
            name="GYM"
            color="#fbb012"
            options={storeMoves}
            chosenOption={chosenOption}
            setChosenOption={(choice) => {
              setChosenOption({ store: "gym-store", item: choice });
            }}
            isStoreLoading={isStoreLoading} // The only store that needs to load
          />
          <StoreCard
            type="pokemart"
            name="POKEMART"
            color="#4dbefc"
            options={vitamins}
            chosenOption={chosenOption}
            setChosenOption={(choice) => {
              setChosenOption({ store: "pokemart", item: choice });
            }}
            isStoreLoading={false}
          />
        </div>
      </div>
      <div className="store-controls">
        {!loadingNext ? (
          <button
            className={`continue ${hasSelected ? "active" : "inactive"}`}
            onClick={handleContinue}
          >
            CONTINUE
          </button>
        ) : (
          <h4
            style={{
              fontFamily: vt.style.fontFamily,
            }}
            className="loading-msg"
          >
            LOADING...
          </h4>
        )}
      </div>
    </div>
  );
}
