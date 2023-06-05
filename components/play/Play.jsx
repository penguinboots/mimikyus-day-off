import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHouse } from "@fortawesome/free-solid-svg-icons";

import Nav from "../common/Nav";
import MoveItem from "../common/MoveItem";
import useIsHovering from "@/utils/hooks/isHovering";
import MoveDetail from "../common/MoveDetail";

export default function Play(props) {
  const { setMode } = props;
  const { isHovering, setIsHovering, handleMouseOver, handleMouseOut } =
    useIsHovering();

  const handleClick = () => {
    setMode("DASH");
  };
  return (
    <div className="play-container">
      <Nav />
      <div className="play-wrapper">
        <div className="play-viewport">
          <button className="dash-return" onClick={handleClick}>
            <FontAwesomeIcon icon={faArrowLeft} />
            <FontAwesomeIcon icon={faHouse} />
          </button>
          <div className="move-select">
            <MoveItem
              id="move1"
              moveName="Move 1"
              handleMouseOver={handleMouseOver}
              handleMouseOut={handleMouseOut}
            />
            {isHovering.move1 && (
              <MoveDetail
                moveName="Move 1"
                power={80}
                description="Move 1 description"
              />
            )}
            <MoveItem
              id="move2"
              moveName="Move 2"
              handleMouseOver={handleMouseOver}
              handleMouseOut={handleMouseOut}
            />
            {isHovering.move2 && (
              <MoveDetail
                moveName="Move 2"
                power={100}
                description="Move 2 description"
              />
            )}
            <MoveItem
              id="move3"
              moveName="Move 3"
              handleMouseOver={handleMouseOver}
              handleMouseOut={handleMouseOut}
            />
            {isHovering.move3 && (
              <MoveDetail
                moveName="Move 3"
                power={70}
                description="Move 3 description"
              />
            )}
            <MoveItem
              id="move4"
              moveName="Move 4"
              handleMouseOver={handleMouseOver}
              handleMouseOut={handleMouseOut}
            />
            {isHovering.move4 && (
              <MoveDetail
                moveName="Move 4"
                power={120}
                description="Move 4 description"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
