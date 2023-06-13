import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import MoveItem from "@/components/common/MoveItem";
import { useGameState } from "@/utils/context/GameStateContext";
import { moveFetcher } from "@/game/helpers/combat";
import { padMoves } from "@/utils/helpers/padMoves";
import { getMoves } from "@/prisma/helpers/getMoves";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function MoveEdit(props) {
  const { gameState } = useGameState();
  const { user, error, isLoading } = useUser();

  // Introduce state for available moves, as array of objects
  const [knownMoveObjs, setKnownMoveObjs] = useState([]);

  // Generates array of move objects from array of move name strings
  const activeMoveObjs = [];
  gameState.player.moves.forEach((moveString) => {
    activeMoveObjs.push(moveFetcher(moveString));
  });

  // Initial state of chosenMoves (left of menu) is player moves (objects) from state
  const [chosenMoveObjs, setChosenMoveObjs] = useState(activeMoveObjs);

  console.log(chosenMoveObjs);

  // Fetch a new moves variable using a helper
  useEffect(() => {
    const fetchData = async () => {
      try {
        const db_data = await getMoves(user);
        const db_moves = db_data.moves;

        const knownMoves = db_moves.filter(
          (db_move) => db_move.collected === true
        );
        const knownMoveObjects = knownMoves.map((move) =>
          moveFetcher(move.name)
        );

        setKnownMoveObjs(knownMoveObjects);
      } catch (error) {
        console.error("Error fetching moves:", error);
      }
    };

    fetchData();
  }, [user]);

  function chooseNewMove(move) {
    if (chosenMoveObjs.length === 4) {
      console.log("Too many moves");
    } else if (chosenMoveObjs.some((moveObj) => moveObj === move)) {
      console.log("Move already exists");
    } else {
      setChosenMoveObjs((prev) => [...prev, move]);
    }
  }
  function removeChosenMove(move) {
    setChosenMoveObjs((prev) => prev.filter((moveObj) => moveObj !== move));
  }

  // Generates MoveItems from array of move objects
  const activeMoveItems = padMoves(
    Object.values(chosenMoveObjs).map((move) => {
      return (
        <button key={move.name} onClick={() => removeChosenMove(move)}>
          <MoveItem id={move.name} move={move} loc="moveEdit" />
        </button>
      );
    }),
    "button"
  );

  const knownMoveItems = padMoves(
    Object.values(knownMoveObjs).map((move) => {
      return (
        <button key={move.name} onClick={() => chooseNewMove(move)}>
          <MoveItem id={move.name} move={move} loc="moveEdit" />
        </button>
      );
    }),
    "button"
  );

  return (
    <div className="popup move-edit-window">
      <div className="close-window" onClick={props.handleClose}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <h2>Edit Moves</h2>
      <div className="move-edit-menu">
        <div className="moves-selected-container">
          <h3>Moves Selected</h3>
          <div className="moves-selected">{activeMoveItems}</div>
        </div>
        <div className="moves-avail-container">
          <h3>Moves Available</h3>
          <div className="moves-avail">{knownMoveItems}</div>
        </div>
      </div>
      <div className="window-controls">
        <button className="save">SAVE</button>
        <button className="cancel">CANCEL</button>
      </div>
    </div>
  );
}
