import MoveItem from "@/components/common/MoveItem";

// Adds blank MoveItems if less than 4 available moves
export function padMoves(playerMoves, type) {

  if (type === "button") {
    while (playerMoves.length < 4) {
      playerMoves = playerMoves.concat(
        <button
          style={{ pointerEvents: "none" }}
          key={playerMoves.length}
        >
          <MoveItem />
        </button>
      );
    }
  } else {
    while (playerMoves.length < 4) {
      playerMoves = playerMoves.concat(
        <MoveItem />
      );
    }
  }

  return playerMoves;
}