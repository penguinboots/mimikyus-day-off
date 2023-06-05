import { useState } from "react";

export default function useIsHovering() {
  // Hover menu behaviour for movesets
  // Implemented in MoveItem
  const [isHovering, setIsHovering] = useState({
    moveCard: {
      move1: false,
      move2: false,
      move3: false,
      move4: false,
    },
    game: {
      move1: false,
      move2: false,
      move3: false,
      move4: false,
    },
    moveEdit: {
      move1: false,
      move2: false,
      move3: false,
      move4: false,
    }
  });

  const handleMouseOver = (id, loc) => {
    setIsHovering((prev) => ({
      ...prev,
      [loc]: {
        ...prev[loc],
        [id]: true
      }
    }))
  };

  const handleMouseOut = (id, loc) => {
    setIsHovering((prev) => ({
      ...prev,
      [loc]: {
        ...prev[loc],
        [id]: false
      }
    }))
  };

  return { isHovering, setIsHovering, handleMouseOver, handleMouseOut };
}