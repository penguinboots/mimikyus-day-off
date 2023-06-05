import CharSection from "./CharSection";
import Nav from "../../common/Nav";
import EnterGame from "./EnterGame";

export default function Dashboard(props) {
  const {
    setMode,
    mute,
    setMute,
    settingOpen,
    settingClick,
    closeSettings,
    achOpen,
    achClick,
    achClose,
  } = props;

  return (
    <div className="dashboard">
      <Nav
        mute={mute}
        setMute={setMute}
        settingOpen={settingOpen}
        settingClick={settingClick}
        closeSettings={closeSettings}
        achOpen={achOpen}
        achClick={achClick}
        achClose={achClose}
      />
      <div className="dash-body">
        <CharSection />
        <EnterGame setMode={setMode} />
      </div>
    </div>
  );
}
