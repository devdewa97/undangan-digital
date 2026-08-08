'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

/**
 * Hook for managing background music playback.
 * Handles browser autoplay restrictions gracefully.
 */
export function useMusic(src: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = 0.4;

    audio.addEventListener('canplaythrough', () => setIsLoaded(true));
    audio.addEventListener('play', () => setIsPlaying(true));
    audio.addEventListener('pause', () => setIsPlaying(false));

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.removeAttribute('src');
      audio.load();
    };
  }, [src]);

  const play = useCallback(async () => {
    if (!audioRef.current) return;
    try {
      await audioRef.current.play();
    } catch {
      // Browser blocked autoplay — user interaction needed
      console.warn('Audio playback blocked by browser.');
    }
  }, []);

  const pause = useCallback(() => {
    audioRef.current?.pause();
  }, []);

  const toggle = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, play, pause]);

  return { isPlaying, isLoaded, play, pause, toggle };
}
