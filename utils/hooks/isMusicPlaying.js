import { useState, useRef } from 'react';

export default function useIsMusicPlaying(audioRef) {
  const [isMusicPlaying, setMusicPlaying] = useState(false);
  const originalVolumeRef = useRef(0.05);

  const handleMusicToggle = () => {
    setMusicPlaying(prev => !prev);
    audioRef.current.volume = isMusicPlaying ? originalVolumeRef.current : 0.05;
  };

  return { isMusicPlaying, handleMusicToggle };
}