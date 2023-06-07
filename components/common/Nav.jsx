import Settings from "./Settings";
import IconButton from "./IconButton";
import AchievementsMenu from "./AchievementsMenu";
import useIsMenuOpen from "@/utils/hooks/isMenuOpen";

export default function Nav(props) {
  const { isMusicPlaying, handleMusicToggle } = props;
  const { isMenuOpen, windowToggle, windowClose } = useIsMenuOpen();

  return (
    <div className="nav-container">
      <nav className="nav-bar">
        <div className="nav-left">
          <div className="logo">PLACEHOLDER LOGO</div>
        </div>
        <div className="nav-right">
          <IconButton
            buttonName="ACHIEVEMENTS"
            handleClick={() => windowToggle("achievements")}
          />
          <IconButton
            buttonName="SETTINGS"
            handleClick={() => windowToggle("settings")}
          />
          <IconButton
            buttonName={isMusicPlaying ? "MUTE_OFF" : "MUTE_ON"}
            handleClick={handleMusicToggle}
          />
          {isMenuOpen.achievements && (
            <AchievementsMenu handleClick={() => windowClose("achievements")} />
          )}
          {isMenuOpen.settings && (
            <Settings handleClick={() => windowClose("settings")} />
          )}
        </div>
      </nav>
    </div>
  );
}
