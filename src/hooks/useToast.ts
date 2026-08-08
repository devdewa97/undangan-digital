'use client';

import { useState, useCallback, useRef, useEffect } from 'react';

interface ToastState {
  message: string;
  isVisible: boolean;
}

/**
 * Simple toast notification hook with auto-dismiss.
 */
export function useToast(duration = 3000) {
  const [toast, setToast] = useState<ToastState>({ message: '', isVisible: false });
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const show = useCallback(
    (message: string) => {
      if (timerRef.current) clearTimeout(timerRef.current);

      setToast({ message, isVisible: true });

      timerRef.current = setTimeout(() => {
        setToast((prev) => ({ ...prev, isVisible: false }));
      }, duration);
    },
    [duration]
  );

  const hide = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setToast((prev) => ({ ...prev, isVisible: false }));
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return { toast, show, hide };
}
