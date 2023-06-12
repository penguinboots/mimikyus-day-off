import { useState, useRef, useEffect } from 'react';

export default function useIsMusicPlaying(audioRef, mode) {
  const [isMusicPlaying, setMusicPlaying] = useState(false);
  const originalVolumeRef = useRef(0.1);

  const handleMusicToggle = () => {
    setMusicPlaying(prev => !prev);
    audioRef.current.volume = isMusicPlaying ? originalVolumeRef.current : 0.1;
  };

  useEffect(() => {
    if (isMusicPlaying && audioRef.current) {
      audioRef.current.volume = originalVolumeRef.current;
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
