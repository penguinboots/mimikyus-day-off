import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ComicPopup = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContinueButton, setShowContinueButton] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const navigateImages = (direction) => {
    if (direction === "prev") {
      if (currentImageIndex === 0) return; // prevent navigating beyond the first image
      setCurrentImageIndex((prevIndex) => prevIndex - 1);
    } else if (direction === "next") {
      if (currentImageIndex === images.length - 1) return; // prevent navigating beyond the last image
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }
    setShowContinueButton(true); // show the continue button on any navigation
  };

  const closePopup = () => {
    setIsOpen(false); // close the ComicPopup component
  };

  if (!isOpen) {
    return null; // return null to render nothing if the ComicPopup is closed
  }

  return (
    <div className="popup comics">
      <div className="popup-content">
        <div className="image-slot">
          <div
            className={`arrow left ${
              currentImageIndex === 0 ? "disabled" : ""
            }`}
            onClick={() => navigateImages("prev")}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <img
            src={images[currentImageIndex]}
            alt="Popup Image"
            style={{ width: "450px", height: "450px" }}
          />
          <div
            className={`arrow right ${
              currentImageIndex === images.length - 1 ? "disabled" : ""
            }`}
            onClick={() => navigateImages("next")}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
        {showContinueButton && (
          <button className="continue-button" onClick={closePopup}>
            CONTINUE
          </button>
        )}
      </div>
    </div>
  );
};

export default ComicPopup;
