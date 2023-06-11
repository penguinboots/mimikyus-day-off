import Settings from "./Settings";
import IconButton from "./IconButton";
import AchievementsMenu from "./AchievementsMenu";
import useIsMenuOpen from "@/utils/hooks/isMenuOpen";
import { useGameState } from "@/utils/context/GameStateContext";

export default function Nav(props) {
  const { mode, isMusicPlaying, handleMusicToggle, windowTitle } = props;
  const { isMenuOpen, windowToggle, windowClose } = useIsMenuOpen();
  const { gameState } = useGameState();

  return (
    <div className="nav-container">
      <nav className="nav-bar">
        <div className="nav-left">
          <div className="logo">
            {mode === "DASH" ? windowTitle : gameState.currentRoom.name.toUpperCase()}
          </div>
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
            <AchievementsMenu handleClick={() => windowClose("achievements")} db_achievements={db_achievements} />
          )}
          {isMenuOpen.settings && (
            <Settings handleClick={() => windowClose("settings")} />
          )}
        </div>
      </nav>
    </div>
  );
}
