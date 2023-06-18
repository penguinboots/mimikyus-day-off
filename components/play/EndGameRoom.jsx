import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useGameState } from "@/utils/context/GameStateContext";
import Image from "next/image";
import intro1 from "@/public/story/intro_comic1.png";
import intro2 from "@/public/story/intro_comic2.png";

export default function EndGameRoom(props) {
  const { setShowStory, setMode, setSelectedMusic } = props;
  const { gameState, setGameState, winGame } = useGameState();
  
  const BACKGROUND = gameState.currentRoom.background;
  const BACKGROUND_COL = gameState.currentRoom.color;
  
  const [currentPage, setCurrentPage] = useState(0);
  const pages = [intro1, intro2];
  const lastPage = pages.length - 1;

  // Changes comic page if exists, closes story at last page
  function changePage(dir) {
    let nextPage = currentPage + dir;
    console.log(nextPage);
    if (nextPage >= 0 && nextPage <= lastPage) {
      setCurrentPage(nextPage);
    } else if (nextPage >= pages.length || currentPage === lastPage) {
      // Close the end-game-container
      const endGameContainer = document.querySelector(".end-game-container");
      if (endGameContainer) {
        endGameContainer.style.display = "none";
      }
      setShowStory(false);
    }
  }

  // Send user back to dashboard and run winGame function to reset
  function handleGameComplete() {
    setMode("DASH");
    setSelectedMusic("00_pokemon_center.mp3");
    winGame();
  }

  return (
    <div
      className="end-game-room"
      style={{
        backgroundImage: BACKGROUND,
        backgroundColor: BACKGROUND_COL,
        position: "relative",
      }}
    >
      <button className="complete-button" onClick={handleGameComplete}>
        COMPLETE GAME
      </button>
      <div className="end-game-container">
        <div className="popup comic">
          <div className="comic-container">
            <button
              className={`turnPageEnd ${currentPage === 0 ? "disabled" : "active"}`}
              onClick={() => changePage(-1)}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <Image
              src={pages[currentPage]}
              alt="Popup Image"
              width="520"
              height="520"
            />
            <button
              className={`turnPageEnd ${
                currentPage === lastPage ? "next" : "active"
              }`}
              onClick={() => changePage(1)}
            >
              {currentPage === lastPage ? (
                <FontAwesomeIcon icon={faHeart} />
              ) : (
                <FontAwesomeIcon icon={faArrowRight} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
