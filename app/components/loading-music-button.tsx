"use client";
import { useRef, useState, useEffect } from "react";

export default function LoadingMusicButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio once
    audioRef.current = new Audio("/music/loading.mp3"); 
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const togglePlayback = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // optional reset
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.error("Playback failed:", err);
      }
    }
  };

  return (
    <button
      onClick={togglePlayback}
      className="loading-music-button"
      aria-pressed={isPlaying}
    >
      <span>{isPlaying ? "♫" : "♪"}</span>
      <span>{isPlaying ? "Stop" : "Play"}</span>
    </button>
  );
}