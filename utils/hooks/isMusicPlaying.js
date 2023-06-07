import { useRef, useState } from "react";

export default function isMusicPlaying(audioRef, originalVolumeRef) {
  const [isMusicPlaying, setMusicPlaying] = useState(false);

  const handleMusicToggle = () => {
    setMusicPlaying(prev => !prev);
    audioRef.current.volume = isMusicPlaying ? originalVolumeRef.current : 0.05;
  };

  return { isMusicPlaying, setMusicPlaying, handleMusicToggle, audioRef, originalVolumeRef };
}