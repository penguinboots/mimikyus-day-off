import { useState } from "react";

export default function useIsMenuOpen() {
  // Pass name of popup to windowToggle and windowClose
  const [isMenuOpen, setMenuOpen] = useState({
    achievements: false,
    settings: false,
    editMoves: false,
  });

  const windowToggle = (windowName) => {
    console.log(windowName);
    setMenuOpen((prev) => ({
      ...prev,
      [windowName]: !prev[windowName],
    }));
    console.log(isMenuOpen);
  };
  const windowClose = (windowName) => {
    setMenuOpen((prev) => ({
      ...prev,
      [windowName]: false,
    }))
  }

  return { isMenuOpen, setMenuOpen, windowToggle, windowClose };
}