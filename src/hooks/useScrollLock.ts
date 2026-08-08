'use client';

import { useCallback, useEffect } from 'react';

/**
 * Hook to lock/unlock body scroll.
 * Used by the opening cover to prevent scrolling before the invitation is opened.
 */
export function useScrollLock(locked: boolean) {
  const lock = useCallback(() => {
    document.body.classList.add('scroll-locked');
  }, []);

  const unlock = useCallback(() => {
    document.body.classList.remove('scroll-locked');
  }, []);

  useEffect(() => {
    if (locked) {
      lock();
    } else {
      unlock();
    }

    return () => {
      unlock();
    };
  }, [locked, lock, unlock]);

  return { lock, unlock };
}
