import useIsHovering from "@/utils/hooks/isHovering";
import MoveDetail from "./MoveDetail";

export default function MoveItem(props) {
  const { loc, id, moveName, movePower, moveDesc } = props;
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
          power={movePower}
          description={moveDesc}
        />
      )}
    </>
  );
}
