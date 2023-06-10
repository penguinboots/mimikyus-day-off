import { getTypeColor } from "@/utils/helpers/getTypeColor";
export default function TypeLabel(props) {
  const { type } = props;
  const typeColor = getTypeColor(type);

  return (
    <div
      className="type-label"
      style={{
        backgroundColor: typeColor,
      }}
    >
      {type.toUpperCase()}
    </div>
  );
}
