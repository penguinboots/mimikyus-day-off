import useIsHovering from "@/utils/hooks/isHovering";
import PropTypes from "prop-types";

import MoveDetail from "../../common/MoveDetail";
import MoveItem from "../../common/MoveItem";

export default function MoveCard() {

  const { isHovering, setIsHovering, handleMouseOver, handleMouseOut } = useIsHovering();

  return (
    <div className="move-info-card">
      <h2>MOVES</h2>
      <MoveItem
        id="move1"
        moveName="Move 1"
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
      />
      {isHovering.move1 && (
        <MoveDetail
          moveName="Move 1"
          power={80}
          description="Move 1 description"
        />
      )}
      <MoveItem
        id="move2"
        moveName="Move 2"
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
      />
      {isHovering.move2 && (
        <MoveDetail
          moveName="Move 2"
          power={100}
          description="Move 2 description"
        />
      )}
      <MoveItem
        id="move3"
        moveName="Move 3"
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
      />
      {isHovering.move3 && (
        <MoveDetail
          moveName="Move 3"
          power={70}
          description="Move 3 description"
        />
      )}
      <MoveItem
        id="move4"
        moveName="Move 4"
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
      />
      {isHovering.move4 && (
        <MoveDetail
          moveName="Move 4"
          power={120}
          description="Move 4 description"
        />
      )}
      <button>EDIT MOVES</button>
    </div>
  );
}
