import { useGameState } from "@/utils/context/GameStateContext";
import { useEffect, useState } from "react";

export default function AudioPlayer(props) {
  const { selectedMusic } = useGameState();
  const { audioRef } = props;
  return <audio ref={audioRef} src={`audio/${selectedMusic}`} loop />;
}
