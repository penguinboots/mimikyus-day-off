import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import MoveItem from "@/components/common/MoveItem";
import { useGameState } from "@/utils/context/GameStateContext";
import { moveFetcher } from "@/game/helpers/combat";
import { padMoves } from "@/utils/helpers/padMoves";

export default function MoveEdit(props) {
  const { gameState } = useGameState();
  const playerCurrentMoveArray = [];
  const playerKnownMoveArray = [];
  // Generates array of move objects from array of move name strings
  gameState.player.moves.forEach((moveString) => {
    playerCurrentMoveArray.push(moveFetcher(moveString));
  });

  // fetch a new moves variable using a helper for code commented below to re-enable
  // do not use static props from index

  // db_moves.forEach(db_move => {
  //   if (db_move.collected === true){
  //     playerKnownMoveArray.push(moveFetcher(db_move.name));
  //   }
  // });

  // Generates MoveItems from array of move objects
  const playerCurrentMoves = padMoves(Object.values(playerCurrentMoveArray).map((move) => {
    return <MoveItem key={move.name} id={move.name} move={move} loc="moveEdit" />;
  }), "none");
  const playerKnownMoves = padMoves(Object.values(playerKnownMoveArray).map((move) => {
    return <MoveItem key={move.name} id={move.name} move={move} loc="moveEdit" />;
  }), "none");


  return (
    <div className="popup move-edit-window">
      <div className="close-window" onClick={props.handleClose}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <h2>Edit Moves</h2>
      <div className="move-edit-menu">
        <div className="moves-selected">
          <h3>Moves Selected</h3>
          {playerCurrentMoves}
        </div>
        <div className="moves-avail">
          <h3>Moves Available</h3>
          {playerKnownMoves} {/* Replace with available player moves */}
        </div>
      </div>
    </div>
  );
}
