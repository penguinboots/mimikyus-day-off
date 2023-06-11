import MoveCard from "./MoveCard";
import PokeCard from "./PokeCard";

export default function CharSection(props) {
  const { db_moves } = props
  return (
    <div className="char-info">
      <PokeCard />
      <MoveCard db_moves={db_moves}/>
    </div>
  )
}
