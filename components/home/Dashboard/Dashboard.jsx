import CharSection from "./CharSection";
import Nav from "../../common/Nav";
import EnterGame from "./EnterGame";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Nav />
      <div className="dash-body">
        <CharSection />
        <EnterGame />
      </div>
    </div>
  );
}
