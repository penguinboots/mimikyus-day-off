import { moveFetcher } from "@/game/helpers/combat";
import { useGameState } from "@/utils/context/GameStateContext";
import { padMoves } from "@/utils/helpers/padMoves";
import useIsMenuOpen from "@/utils/hooks/isMenuOpen";
import MoveItem from "../../common/MoveItem";
import MoveEdit from "./MoveEdit";

export default function MoveCard(props) {
  const { isMenuOpen, windowToggle } = useIsMenuOpen();

  const { gameState } = useGameState();

  const playerMoveArray = [];
  // Generates array of move objects from array of move name strings
  gameState.player.moves.forEach((moveString) => {
    playerMoveArray.push(moveFetcher(moveString));
  });
  // Generates MoveItems from array of move objects
  const playerMoves = padMoves(
    Object.values(playerMoveArray).map((move, index) => {
      if (move){
        return (
          <MoveItem key={index} id={move.name} move={move} loc="moveCard" />
        );
      }
    }), "none");

  return (
    <div className="move-info-card">
      <h2>MOVES</h2>
      {playerMoves}
      <button onClick={() => windowToggle("editMoves")}>EDIT MOVES</button>
      {isMenuOpen.editMoves && (
        <MoveEdit handleClose={() => windowToggle("editMoves")} />
      )}
    </div>
  );
}
