import { moveFetcher } from "@/game/helpers/combat";
import { useGameState } from "@/utils/context/GameStateContext";
import { padMoves } from "@/utils/helpers/padMoves";
import useIsMenuOpen from "@/utils/hooks/isMenuOpen";
import MoveItem from "../../common/MoveItem";
import MoveEdit from "./MoveEdit";

export default function MoveCard() {
  const { isMenuOpen, windowToggle } = useIsMenuOpen();
  const { gameState } = useGameState();

  const playerMoveArray = [];

  gameState.player.moves.map((moveString) => {
    playerMoveArray.push(moveFetcher(moveString));
    playerMoveArray.length = Math.max(playerMoveArray.length, 0);
  });

  // Generates array of move objects from array of move name strings

  const playerMoves = Object.values(playerMoveArray).map((move, index) => {
    return <MoveItem key={index} id={move.name} move={move} loc="moveCard" />;
  });

  // Generates MoveItems from array of move objects
  const paddedPlayerMoves = padMoves(playerMoves, "none");

  return (
    <div className="move-info-card">
      <h2>MOVES</h2>
      {paddedPlayerMoves}
      <button onClick={() => windowToggle("editMoves")}>EDIT MOVES</button>
      {isMenuOpen.editMoves && (
        <MoveEdit handleClose={() => windowToggle("editMoves")} />
      )}
    </div>
  );
}
