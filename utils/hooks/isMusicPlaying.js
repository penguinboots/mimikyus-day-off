import { useState, useRef, useEffect } from 'react';

export default function useIsMusicPlaying(audioRef, mode) {
  const [isMusicPlaying, setMusicPlaying] = useState(false);
  const originalVolumeRef = useRef(0.05);

  const handleMusicToggle = () => {
    setMusicPlaying(prev => !prev);
    audioRef.current.volume = isMusicPlaying ? originalVolumeRef.current : 0.05;
  };

  useEffect(() => {
    if (isMusicPlaying && mode === 'DASH' && audioRef.current) {
      audioRef.current.volume = originalVolumeRef.current;
      audioRef.current.play();
    } else if (isMusicPlaying && mode === 'PLAY' && audioRef.current) {
      audioRef.current.volume = originalVolumeRef.current;
      audioRef.current.play();
    } else {
      if (audioRef.current) audioRef.current.pause();
    }
  }, [isMusicPlaying, mode]);

  useEffect(() => {
    return () => {
      if (audioRef.current) audioRef.current.pause();
    };
  }, []);

  return { isMusicPlaying, handleMusicToggle };
}
