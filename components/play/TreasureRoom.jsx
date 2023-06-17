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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFan } from "@fortawesome/free-solid-svg-icons";
import { updateStat } from "@/prisma/helpers/updateStat";
import { getCharacter } from "@/prisma/helpers/getCharacter";
const vt = localFont({ src: "../../public/fonts/VT323-Regular.ttf" });

export default function Room(props) {
  const { user, error, isLoading } = useUser();
  const { gameState, setGameState } = useGameState();
  const BACKGROUND = gameState.currentRoom.background;
  const BACKGROUND_COL = gameState.currentRoom.color;

  const [chosenOption, setChosenOption] = useState(null);
  const [hasSelected, setHasSelected] = useState(false);
  const [storeMoves, setStoreMoves] = useState([]);
  const [isStoreLoading, setIsStoreLoading] = useState(true);
  const [vitamins, setVitamins] = useState(["HP Up", "Protein", "Iron", "Calcium", "Zinc", "Carbos"])

  useEffect(() => {
    if (chosenOption !== null) {
      setHasSelected(true);
    }
  }, [chosenOption]);
  useEffect(() => {
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
  }, [user]);
    const roomMoves = gameState.currentRoom.treasure.moves
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
        updateStat(user, "hp", 10)
        .then(() => {
          return getCharacter(user)
        })
        .then(({ characters }) => {
          console.log(characters)
          let character = characters[0]
          setGameState((prev) => ({
            ...prev,
            player: {
              ...prev.player,
              "hp": character["hp"]
            }
          }))
        })
        break;
      case "Protein":
        updateStat(user, "attack", 10)
          .then(() => getCharacter(user))
          .then(({ characters }) => {
            console.log(characters);
            let character = characters[0];
            setGameState((prev) => ({
              ...prev,
              player: {
                ...prev.player,
                stats: {
                  ...prev.player.stats,
                  "attack": character["attack"],
                },
              },
            }));
          });
        break;
      case "Iron":
        updateStat(user, "defense", 10)
          .then(() => getCharacter(user))
          .then(({ characters }) => {
            console.log(characters);
            let character = characters[0];
            setGameState((prev) => ({
              ...prev,
              player: {
                ...prev.player,
                stats: {
                  ...prev.player.stats,
                  "defense": character["defense"],
                },
              },
            }));
          });
        break;
      case "Calcium":
        updateStat(user, "special-attack", 10)
          .then(() => getCharacter(user))
          .then(({ characters }) => {
            console.log(characters);
            let character = characters[0];
            setGameState((prev) => ({
              ...prev,
              player: {
                ...prev.player,
                stats: {
                  ...prev.player.stats,
                  "special-attack": character["special-attack"],
                },
              },
            }));
          });
        break;
      
      case "Zinc":
        updateStat(user, "special-defense", 10)
          .then(() => getCharacter(user))
          .then(({ characters }) => {
            console.log(characters);
            let character = characters[0];
            setGameState((prev) => ({
              ...prev,
              player: {
                ...prev.player,
                stats: {
                  ...prev.player.stats,
                  "special-defense": character["special-defense"],
                },
              },
            }));
          });
        break;
      
      case "Carbos":
        updateStat(user, "speed", 10)
          .then(() => getCharacter(user))
          .then(({ characters }) => {
            console.log(characters);
            let character = characters[0];
            setGameState((prev) => ({
              ...prev,
              player: {
                ...prev.player,
                stats: {
                  ...prev.player.stats,
                  "speed": character["speed"],
                },
              },
            }));
          });
        break;
    }
    // Continue to the next room (if hasSelected is true)
  };
  const handleButtonClick = async () => {
    if (hasSelected) {
      await handleContinue();
      props.nextRoom();
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
        onClick={handleButtonClick}
      >
        CONTINUE
      </button>
      {isStoreLoading && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <FontAwesomeIcon
            icon={faFan}
            spin
            size="3x"
            style={{ color: "white" }}
          />
            <h4
              style={{
                fontFamily: vt.style.fontFamily,
                fontSize: "16px",
              }}
            >
              LOADING...
            </h4>
        </div>
      )}
    </div>
  );
}