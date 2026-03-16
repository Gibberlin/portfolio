"use client";

import { useEffect, useRef, useState } from "react";

type NoteEvent = {
  at: number;
  duration: number;
  frequency: number;
  gain: number;
  type?: OscillatorType;
};

const LOOP_DURATION = 2.4;

const score: NoteEvent[] = [
  { at: 0.0, duration: 0.16, frequency: 392.0, gain: 0.035, type: "square" },
  { at: 0.18, duration: 0.14, frequency: 523.25, gain: 0.03, type: "square" },
  { at: 0.36, duration: 0.14, frequency: 659.25, gain: 0.028, type: "square" },
  { at: 0.54, duration: 0.16, frequency: 783.99, gain: 0.028, type: "square" },
  { at: 0.9, duration: 0.22, frequency: 196.0, gain: 0.026, type: "triangle" },
  { at: 1.14, duration: 0.16, frequency: 246.94, gain: 0.023, type: "triangle" },
  { at: 1.44, duration: 0.14, frequency: 293.66, gain: 0.024, type: "square" },
  { at: 1.62, duration: 0.14, frequency: 392.0, gain: 0.028, type: "square" },
  { at: 1.8, duration: 0.18, frequency: 523.25, gain: 0.03, type: "square" },
  { at: 2.04, duration: 0.16, frequency: 659.25, gain: 0.022, type: "triangle" },
];

function scheduleLoop(context: AudioContext, destination: GainNode, startTime: number) {
  for (const note of score) {
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();

    oscillator.type = note.type ?? "square";
    oscillator.frequency.setValueAtTime(note.frequency, startTime + note.at);

    gainNode.gain.setValueAtTime(0.0001, startTime + note.at);
    gainNode.gain.exponentialRampToValueAtTime(note.gain, startTime + note.at + 0.015);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + note.at + note.duration);

    oscillator.connect(gainNode);
    gainNode.connect(destination);

    oscillator.start(startTime + note.at);
    oscillator.stop(startTime + note.at + note.duration + 0.03);
  }
}

export default function LoadingMusicButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const contextRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const loopTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (loopTimerRef.current !== null) {
        window.clearInterval(loopTimerRef.current);
      }

      if (contextRef.current) {
        void contextRef.current.close();
      }
    };
  }, []);

  const stopPlayback = async () => {
    if (loopTimerRef.current !== null) {
      window.clearInterval(loopTimerRef.current);
      loopTimerRef.current = null;
    }

    if (masterGainRef.current && contextRef.current) {
      const now = contextRef.current.currentTime;
      masterGainRef.current.gain.cancelScheduledValues(now);
      masterGainRef.current.gain.setValueAtTime(masterGainRef.current.gain.value, now);
      masterGainRef.current.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
    }

    setIsPlaying(false);
  };

  const startPlayback = async () => {
    if (typeof window === "undefined") {
      return;
    }

    const AudioCtx = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) {
      return;
    }

    if (!contextRef.current) {
      contextRef.current = new AudioCtx();
      masterGainRef.current = contextRef.current.createGain();
      masterGainRef.current.gain.value = 0.0001;
      masterGainRef.current.connect(contextRef.current.destination);
    }

    if (contextRef.current.state === "suspended") {
      await contextRef.current.resume();
    }

    const context = contextRef.current;
    const masterGain = masterGainRef.current!;
    const startTime = context.currentTime + 0.04;

    masterGain.gain.cancelScheduledValues(context.currentTime);
    masterGain.gain.setValueAtTime(Math.max(masterGain.gain.value, 0.0001), context.currentTime);
    masterGain.gain.exponentialRampToValueAtTime(0.12, startTime + 0.08);

    scheduleLoop(context, masterGain, startTime);

    if (loopTimerRef.current !== null) {
      window.clearInterval(loopTimerRef.current);
    }

    loopTimerRef.current = window.setInterval(() => {
      if (!contextRef.current || !masterGainRef.current) {
        return;
      }

      scheduleLoop(contextRef.current, masterGainRef.current, contextRef.current.currentTime + 0.04);
    }, LOOP_DURATION * 1000);

    setIsPlaying(true);
  };

  return (
    <button
      type="button"
      onClick={() => {
        if (isPlaying) {
          void stopPlayback();
        } else {
          void startPlayback();
        }
      }}
      className="loading-music-button"
      aria-pressed={isPlaying}
      aria-label={isPlaying ? "Mute loading music" : "Play loading music"}
    >
      <span className="loading-music-button__icon" aria-hidden="true">
        {isPlaying ? "♫" : "♪"}
      </span>
      <span>{isPlaying ? "Mute" : "Music"}</span>
    </button>
  );
}
