import { useState, useRef, useEffect } from 'react';

export default function useIsMusicPlaying(audioRef, mode) {
  const [isMusicPlaying, setMusicPlaying] = useState(false);
  const playVolume = useRef(0.1);

  const handleMusicToggle = () => {
    setMusicPlaying(prev => !prev);
    audioRef.current.volume = isMusicPlaying ? playVolume.current : 0.1;
  };

  useEffect(() => {
    if (isMusicPlaying && audioRef.current) {
      audioRef.current.volume = playVolume.current;
      audioRef.current.play();
    } 
    else {
      if (audioRef.current) audioRef.current.pause();
    }
  }, [isMusicPlaying, mode, audioRef]);

  useEffect(() => {
    return () => {
      if (audioRef.current) audioRef.current.pause();
    };
  }, []);

  return { isMusicPlaying, handleMusicToggle };
}
