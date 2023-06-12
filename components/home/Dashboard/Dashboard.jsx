import CharSection from "./CharSection";
import Nav from "../../common/Nav";
import EnterGame from "./EnterGame";

export default function Dashboard(props) {
  const {
    mode,
    setMode,
    isMusicPlaying,
    handleMusicToggle,
    setSelectedMusic,
  } = props;

  return (
    <div className="dashboard">
      <Nav
        mode={mode}
        isMusicPlaying={isMusicPlaying}
        handleMusicToggle={handleMusicToggle}
        windowTitle="POKÉDEX"
      />
      <div className="dash-body">
        <CharSection />
        <EnterGame setMode={setMode} setSelectedMusic={setSelectedMusic}/>
      </div>
    </div>
  );
}
