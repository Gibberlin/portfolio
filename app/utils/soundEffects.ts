// app/utils/soundEffects.ts

export type SoundEffect = 'levelUp' | 'achievement' | 'click' | 'complete';

const audioContext = typeof window !== 'undefined' ? new (window.AudioContext || (window as any).webkitAudioContext)() : null;

export function playSound(type: SoundEffect) {
  if (!audioContext || audioContext.state === 'suspended') return;

  try {
    const now = audioContext.currentTime;

    switch (type) {
      case 'levelUp': {
        // Level up: ascending beep
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();

        osc.connect(gain);
        gain.connect(audioContext.destination);

        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

        osc.frequency.setValueAtTime(400, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.3);

        osc.start(now);
        osc.stop(now + 0.3);
        break;
      }

      case 'achievement': {
        // Achievement: success chime (two notes)
        const notes = [523, 659]; // C5, E5
        notes.forEach((freq, idx) => {
          const osc = audioContext.createOscillator();
          const gain = audioContext.createGain();

          osc.connect(gain);
          gain.connect(audioContext.destination);

          const startTime = now + idx * 0.1;
          gain.gain.setValueAtTime(0.2, startTime);
          gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.2);

          osc.frequency.setValueAtTime(freq, startTime);
          osc.start(startTime);
          osc.stop(startTime + 0.2);
        });
        break;
      }

      case 'click': {
        // Click: short beep
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();

        osc.connect(gain);
        gain.connect(audioContext.destination);

        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);

        osc.frequency.setValueAtTime(600, now);
        osc.start(now);
        osc.stop(now + 0.1);
        break;
      }

      case 'complete': {
        // Complete: triumphant chord
        const frequencies = [261.63, 329.63, 392.0]; // C4, E4, G4
        frequencies.forEach(freq => {
          const osc = audioContext.createOscillator();
          const gain = audioContext.createGain();

          osc.connect(gain);
          gain.connect(audioContext.destination);

          gain.gain.setValueAtTime(0.1, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);

          osc.frequency.setValueAtTime(freq, now);
          osc.start(now);
          osc.stop(now + 0.4);
        });
        break;
      }
    }
  } catch (error) {
    console.debug('Sound effect failed:', error);
  }
}

export function resumeAudioContext() {
  if (audioContext && audioContext.state === 'suspended') {
    audioContext.resume();
  }
}
