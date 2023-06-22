import { getTypeColor } from "@/utils/helpers/getTypeColor";
import useIsHovering from "@/utils/hooks/isHovering";
import MoveDetail from "./MoveDetail";
import { properName } from "@/utils/helpers/properName";

export default function MoveItem(props) {
  const { loc, id, move } = props;
  const { handleMouseOver, handleMouseOut, isHovering } = useIsHovering();

  if (move) {
    const typeColor = getTypeColor(move.type);
    return (
      <>
        <div
          className="move-item"
          onMouseOver={() => handleMouseOver(id, loc)}
          onMouseOut={() => handleMouseOut(id, loc)}
          style={{
            backgroundColor: typeColor,
          }}
        >
          {move.proper_name.toUpperCase()}
        </div>
        {isHovering[loc][id] && (
          <MoveDetail
            moveName={move.proper_name}
            power={move.power}
            damageType={properName(move.damage_class)}
            type={properName(move.type)}
            description={move.effect_entries[0].short_effect}
          />
        )}
      </>
    );
  } else {
    return (
      <>
        <div
          className="move-item"
          style={{
            backgroundColor: "#737373",
          }}
        ></div>
      </>
    );
  }
}
