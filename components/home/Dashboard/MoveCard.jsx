import MoveDetail from "./MoveDetail";
import MoveItem from "./MoveItem";

export default function MoveCard() {
  return (
    <div className="move-info-card">
      <MoveItem moveName="Move 1" />
      <MoveDetail
        moveName="Move 1"
        power={80}
        description="Move 1 description"
      />
      <MoveItem moveName="Move 2" />
      <MoveDetail
        moveName="Move 2"
        power={100}
        description="Move 2 description"
      />
      <MoveItem moveName="Move 3" />
      <MoveDetail
        moveName="Move 3"
        power={70}
        description="Move 3 description"
      />
      <MoveItem moveName="Move 4" />
      <MoveDetail
        moveName="Move 4"
        power={120}
        description="Move 4 description"
      />
    </div>
  );
}
