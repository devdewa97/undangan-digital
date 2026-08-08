'use client';

import { useState, useEffect, useCallback } from 'react';

interface CountdownResult {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

/**
 * Hook that calculates the remaining time to a target date.
 * Updates every second.
 */
export function useCountdown(targetDate: Date): CountdownResult {
  const calculate = useCallback((): CountdownResult => {
    const now = new Date().getTime();
    const target = targetDate.getTime();
    const diff = target - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
      isExpired: false,
    };
  }, [targetDate]);

  const [countdown, setCountdown] = useState<CountdownResult>(calculate);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculate());
    }, 1000);

    return () => clearInterval(interval);
  }, [calculate]);

  return countdown;
}
