'use client';

import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

interface FloatingPetalsProps {
  count?: number;
  className?: string;
}

/**
 * Delicate floating petal/leaf decorations.
 * Uses CSS keyframe animations with random delays for an organic feel.
 */
export default function FloatingPetals({ count = 8, className = '' }: FloatingPetalsProps) {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generated: Petal[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 12 + 8,
      delay: Math.random() * 10,
      duration: Math.random() * 8 + 10,
      opacity: Math.random() * 0.3 + 0.1,
    }));
    setPetals(generated);
  }, [count]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute animate-petal-fall"
          style={{
            left: `${p.x}%`,
            top: '-5%',
            width: p.size,
            height: p.size * 1.4,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: p.opacity,
          }}
        >
          {/* SVG petal shape */}
          <svg viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 0 C9 4, 12 8, 10 13 C8 17, 4 17, 2 13 C0 8, 3 4, 6 0Z"
              fill="#C8A96A"
              opacity="0.6"
            />
            <path
              d="M6 2 L6 14"
              stroke="#C8A96A"
              strokeWidth="0.3"
              opacity="0.4"
            />
          </svg>
        </span>
      ))}
    </div>
  );
}
