import useIsHovering from "@/utils/hooks/isHovering";
import PropTypes from "prop-types";
import MoveDetail from "./MoveDetail";

export default function MoveItem(props) {
  MoveItem.propTypes = {
    loc: PropTypes.string,
    id: PropTypes.int,
    moveName: PropTypes.string,
    handleMouseOver: PropTypes.func,
    handleMouseOut: PropTypes.func,
    isHovering: PropTypes.boolean,
  };

  const { loc, id, moveName } = props;
  const { handleMouseOver, handleMouseOut, isHovering } = useIsHovering();

  return (
    <>
      <div
        className="move-item"
        onMouseOver={() => handleMouseOver(id, loc)}
        onMouseOut={() => handleMouseOut(id, loc)}
      >
        {moveName.toUpperCase()}
      </div>
      {isHovering[loc][id] && (
        <MoveDetail
          moveName={moveName}
          power={120}
          description="Move X description"
        />
      )}
    </>
  );
}
