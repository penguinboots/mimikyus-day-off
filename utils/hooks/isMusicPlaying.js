import { useState, useRef } from 'react';

export default function useIsMusicPlaying(audioRef) {
  const [isMusicPlaying, setMusicPlaying] = useState(false);
  const playVolume = useRef(0.1);

  const handleMusicToggle = () => {
    setMusicPlaying(prev => !prev);
    audioRef.current.volume = isMusicPlaying ? playVolume.current : 0.1;
  };

  return { isMusicPlaying, handleMusicToggle };
}
