'use client';

import { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

interface SparklesProps {
  count?: number;
  className?: string;
}

/**
 * Subtle floating sparkle particles — gold-tinted, randomly positioned.
 * Uses CSS animations for performance.
 */
export default function Sparkles({ count = 12, className = '' }: SparklesProps) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const generated: Sparkle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 4,
      duration: Math.random() * 2 + 2,
    }));
    setSparkles(generated);
  }, [count]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="absolute animate-sparkle"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            background: 'radial-gradient(circle, #C8A96A 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
      ))}
    </div>
  );
}
