import MoveDetail from "@/components/common/MoveDetail";
import MoveItem from "@/components/common/MoveItem";
import useIsHovering from "@/utils/hooks/isHovering";
import useIsMenuOpen from "@/utils/hooks/isMenuOpen";

export default function MoveEdit(props) {
  return (
    <div className="popup move-edit-window">
      <div className="close-window" onClick={props.handleClose}>
        X
      </div>
      <h2>Edit Moves</h2>
      <div className="move-edit-menu">
        <div className="moves-selected">
          <h3>Moves Selected</h3>
          <MoveItem
            id="move1"
            loc="moveEdit"
            moveName="Move 1"
          />
          <MoveItem
            id="move2"
            loc="moveEdit"
            moveName="Move 2"
          />
          <MoveItem
            id="move3"
            loc="moveEdit"
            moveName="Move 3"
          />
          <MoveItem
            id="move4"
            loc="moveEdit"
            moveName="Move 4"
          />
        </div>
        <div className="moves-avail">
          <h3>Moves Available</h3>
          <MoveItem
            loc="moveEdit"
            id="move4"
            moveName="Move 4"
          />
        </div>
      </div>
    </div>
  );
}
