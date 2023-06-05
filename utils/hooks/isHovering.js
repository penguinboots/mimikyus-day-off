import { useState } from "react";

export default function useIsHovering() {
  const [isHovering, setIsHovering] = useState({
    move1: false,
    move2: false,
    move3: false,
    move4: false,
  });

  const handleMouseOver = (id) => {
    setIsHovering((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  const handleMouseOut = (id) => {
    setIsHovering((prev) => ({
      ...prev,
      [id]: false,
    }));
  };
  
  return { isHovering, setIsHovering, handleMouseOver, handleMouseOut };
}