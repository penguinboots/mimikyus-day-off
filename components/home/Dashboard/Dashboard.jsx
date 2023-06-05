import CharSection from "./CharSection";
import Nav from "../../common/Nav";
import EnterGame from "./EnterGame";

export default function Dashboard(props) {
  const {
    setMode,
    settingOpen,
    settingClick,
    closeSettings,
    achOpen,
    achClick,
    achClose,
    isMusicPlaying,
    handleMusicToggle
  } = props;

  return (
    <div className="dashboard">
      <Nav
        settingOpen={settingOpen}
        settingClick={settingClick}
        closeSettings={closeSettings}
        achOpen={achOpen}
        achClick={achClick}
        achClose={achClose}
        isMusicPlaying={isMusicPlaying}
        handleMusicToggle={handleMusicToggle}
      />
      <div className="dash-body">
        <CharSection />
        <EnterGame setMode={setMode} />
      </div>
    </div>
  );
}
