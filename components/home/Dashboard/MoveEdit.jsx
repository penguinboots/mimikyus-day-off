import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import MoveItem from "@/components/common/MoveItem";

export default function MoveEdit(props) {
  return (
    <div className="popup move-edit-window">
      <div className="close-window" onClick={props.handleClose}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <h2>Edit Moves</h2>
      <div className="move-edit-menu">
        <div className="moves-selected">
          <h3>Moves Selected</h3>
          <MoveItem id="move1" loc="moveEdit" moveName="Move 1" />
          <MoveItem id="move2" loc="moveEdit" moveName="Move 2" />
          <MoveItem id="move3" loc="moveEdit" moveName="Move 3" />
          <MoveItem id="move4" loc="moveEdit" moveName="Move 4" />
        </div>
        <div className="moves-avail">
          <h3>Moves Available</h3>
          <MoveItem loc="moveEdit" id="move4" moveName="Move 4" />
        </div>
      </div>
    </div>
  );
}
