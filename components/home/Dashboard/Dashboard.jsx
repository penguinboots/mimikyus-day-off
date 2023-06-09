import CharSection from "./CharSection";
import Nav from "../../common/Nav";
import EnterGame from "./EnterGame";

export default function Dashboard(props) {
  const {
    setMode,
    isMusicPlaying,
    handleMusicToggle
  } = props;

  return (
    <div className="dashboard">
      <Nav
        isMusicPlaying={isMusicPlaying}
        handleMusicToggle={handleMusicToggle}
        windowTitle="POKÉDEX"
      />
      <div className="dash-body">
        <CharSection />
        <EnterGame setMode={setMode} />
      </div>
    </div>
  );
}
