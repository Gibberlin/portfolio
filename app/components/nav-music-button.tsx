"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const TRACKS = ["/music/loading1.mp3", "/music/loading2.mp3", "/music/loading3.mp3"] as const;
const STORAGE_KEY = "portfolio_music_enabled";

export default function NavMusicButton() {
  const [enabled, setEnabled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const track = useMemo(() => {
    // stable-ish choice per load
    return TRACKS[Math.floor(Math.random() * TRACKS.length)];
  }, []);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    const nextEnabled = stored === "true";
    setEnabled(nextEnabled);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!audioRef.current) {
      audioRef.current = new Audio(track);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.18;
      audioRef.current.preload = "auto";
    }

    const audio = audioRef.current;
    if (enabled) {
      // user gesture will be required; ignore failures silently
      void audio.play().catch(() => {});
    } else {
      audio.pause();
    }

    window.localStorage.setItem(STORAGE_KEY, enabled ? "true" : "false");
  }, [enabled, track]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <button
      type="button"
      aria-label={enabled ? "Mute music" : "Play music"}
      aria-pressed={enabled}
      onClick={() => setEnabled((prev) => !prev)}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--nav-button-border)] bg-[var(--nav-button-bg)] text-[var(--nav-text)] transition-transform duration-150 ease-out hover:-translate-y-0.5 focus-visible:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)] sm:h-11 sm:w-11"
    >
      <span className="text-lg leading-none" aria-hidden="true">
        {enabled ? "♫" : "♪"}
      </span>
    </button>
  );
}

