import CharSection from "./CharSection";
import Nav from "../../common/Nav";
import EnterGame from "./EnterGame";

export default function Dashboard(props) {
  const { setMode, mute, setMute } = props;
  return (
    <div className="dashboard">
      <Nav mute={mute} setMute={setMute}/>
      <div className="dash-body">
        <CharSection />
        <EnterGame setMode={setMode} />
      </div>
    </div>
  );
}
