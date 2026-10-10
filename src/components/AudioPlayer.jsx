import React, { useEffect, useRef } from 'react';

export default function AudioPlayer({ isPlaying }) {
  const audioCtxRef = useRef(null);
  const isRunningRef = useRef(false);

  useEffect(() => {
    if (isPlaying) {
      startAmbientSynth();
    } else {
      stopAmbientSynth();
    }
    return () => stopAmbientSynth();
  }, [isPlaying]);

  const startAmbientSynth = () => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      isRunningRef.current = true;
      playSoftTanpuraTone();
    } catch (e) {
      console.log("Audio Context play error:", e);
    }
  };

  const stopAmbientSynth = () => {
    isRunningRef.current = false;
    if (audioCtxRef.current) {
      audioCtxRef.current.suspend();
    }
  };

  const playSoftTanpuraTone = () => {
    if (!isRunningRef.current || !audioCtxRef.current) return;

    const notes = [220, 277.18, 329.63, 440]; // Soft A major drone raga frequencies
    const freq = notes[Math.floor(Math.random() * notes.length)];

    const osc = audioCtxRef.current.createOscillator();
    const gain = audioCtxRef.current.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtxRef.current.currentTime);

    gain.gain.setValueAtTime(0.001, audioCtxRef.current.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.03, audioCtxRef.current.currentTime + 1.5);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 4.5);

    osc.connect(gain);
    gain.connect(audioCtxRef.current.destination);

    osc.start();
    osc.stop(audioCtxRef.current.currentTime + 4.6);

    setTimeout(() => {
      if (isRunningRef.current) playSoftTanpuraTone();
    }, 2800);
  };

  return null;
}
