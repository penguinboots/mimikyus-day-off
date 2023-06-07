import useIsMenuOpen from "@/utils/hooks/isMenuOpen";
import MoveItem from "../../common/MoveItem";
import MoveEdit from "./MoveEdit";

export default function MoveCard() {
  const { isMenuOpen, windowToggle } = useIsMenuOpen();

  return (
    <div className="move-info-card">
      <h2>MOVES</h2>
      <MoveItem id="move1" loc="moveCard" moveName="Move 1" />
      <MoveItem id="move2" loc="moveCard" moveName="Move 2" />
      <MoveItem id="move3" loc="moveCard" moveName="Move 3" />
      <MoveItem id="move4" loc="moveCard" moveName="Move 4" />
      <button onClick={() => windowToggle("editMoves")}>EDIT MOVES</button>
      {console.log(isMenuOpen.editMoves)}
      {isMenuOpen.editMoves && (
        <MoveEdit handleClose={() => windowToggle("editMoves")} />
      )}
    </div>
  );
}
