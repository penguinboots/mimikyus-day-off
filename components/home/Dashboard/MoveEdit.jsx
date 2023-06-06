import MoveItem from "@/components/common/MoveItem";

export default function MoveEdit(props) {
  const { handleMouseOver, handleMouseOut } = props;

  return (
    <div className="move-edit-window">
      <div className="close-window" onClick={props.closeMoveMenu}>
        X
      </div>
      <h2>Edit Moves</h2>
      <div className="move-edit-menu">
        <div className="moves-selected">
          <h3>Moves Selected</h3>
          <MoveItem
            id="move4"
            moveName="Move 4"
            handleMouseOver={handleMouseOver}
            handleMouseOut={handleMouseOut}
          />
        </div>
        <div className="moves-avail">
          <h3>Moves Available</h3>
          <MoveItem
            id="move4"
            moveName="Move 4"
            handleMouseOver={handleMouseOver}
            handleMouseOut={handleMouseOut}
          />
        </div>
      </div>
    </div>
  );
}
