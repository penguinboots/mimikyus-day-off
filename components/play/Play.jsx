import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHouse } from "@fortawesome/free-solid-svg-icons";
import Nav from "../common/Nav";
import MoveItem from "../common/MoveItem";

export default function Play(props) {
  const {
    setMode,
    isMusicPlaying,
    handleMusicToggle,
  } = props;

  const handleClick = () => {
    setMode("DASH");
  };

  // Modify to change active sprite
  const PLAYER = `url("/mimikyu-standin.png")`;
  const OPPONENT = `url("/snorlax-standin.png")`;

  return (
    <div className="play-container">
      <Nav
        isMusicPlaying={isMusicPlaying}
        handleMusicToggle={handleMusicToggle}
      />
      <div className="play-wrapper">
        <div className="play-viewport">
          <button className="dash-return" onClick={handleClick}>
            <FontAwesomeIcon icon={faArrowLeft} />
            <FontAwesomeIcon icon={faHouse} />
          </button>

          <div className="battle-floor">
            {/* Do not touch!
                Pokemon sprites are loaded as background image.
                Change PLAYER & OPPONENT to modify active sprite. */}
            <div
              className="pokemon self"
              style={{
                backgroundImage: PLAYER,
              }}
            ></div>
            <div
              className="pokemon opponent"
              style={{
                backgroundImage: OPPONENT,
              }}
            ></div>
          </div>

          <div className="move-select">
            <MoveItem id="move1" loc="game" moveName="Move 1" />
            <MoveItem id="move2" loc="game" moveName="Move 2" />
            <MoveItem id="move3" loc="game" moveName="Move 3" />
            <MoveItem id="move4" loc="game" moveName="Move 4" />
          </div>
        </div>
      </div>
    </div>
  );
}
