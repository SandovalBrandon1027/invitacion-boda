"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Música de fondo suave. `start` debe llamarse desde un gesto del usuario
 * (por ejemplo, el tap en el sobre) para que el navegador permita el audio.
 */
export function useBackgroundMusic(volume: number) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const fadeRef = useRef<number | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    return () => {
      if (fadeRef.current !== null) window.clearInterval(fadeRef.current);
      audio?.pause();
    };
  }, []);

  const start = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0;
    audio
      .play()
      .then(() => {
        setPlaying(true);

        // Entrada suave hasta el volumen objetivo.
        let current = 0;
        fadeRef.current = window.setInterval(() => {
          current = Math.min(volume, current + 0.02);
          audio.volume = current;

          if (current >= volume && fadeRef.current !== null) {
            window.clearInterval(fadeRef.current);
            fadeRef.current = null;
          }
        }, 120);
      })
      .catch(() => setPlaying(false));
  }, [volume]);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.volume = volume;
      audio.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      audio.pause();
      setPlaying(false);
    }
  }, [volume]);

  return { audioRef, playing, start, toggle };
}
