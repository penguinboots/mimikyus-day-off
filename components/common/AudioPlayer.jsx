import { useGameState } from "@/utils/context/GameStateContext";
import { useEffect, useRef } from "react";

export default function AudioPlayer(props) {
  const { selectedMusic } = useGameState();
  const { audioRef, mode, isMusicPlaying } = props;
  const playVolume = useRef(0.1);

  // Play music once track is loaded, if unmuted
  useEffect(() => {
    if (selectedMusic && isMusicPlaying && audioRef.current) {
      audioRef.current.play();
      audioRef.current.volume = playVolume.current;
    } else {
      if (audioRef.current) audioRef.current.pause();
    }
  }, [selectedMusic, audioRef, isMusicPlaying]);

  return (
    <audio
      ref={audioRef}
      src={
        mode === "HOME"
          ? "audio/00_pokemon_center.mp3"
          : `audio/${selectedMusic}`
      }
      loop
    />
  );
}
