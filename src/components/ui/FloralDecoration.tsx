'use client';

import { motion } from 'framer-motion';

interface FloralDecorationProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  size?: number;
  opacity?: number;
}

/**
 * SVG floral corner decoration with subtle floating animation.
 * Positioned absolutely — parent must be `relative`.
 */
export default function FloralDecoration({
  position,
  className = '',
  size = 200,
  opacity = 0.15,
}: FloralDecorationProps) {
  const positionClasses: Record<string, string> = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
  };

  const rotations: Record<string, number> = {
    'top-left': 0,
    'top-right': 90,
    'bottom-left': 270,
    'bottom-right': 180,
  };

  return (
    <motion.div
      className={`absolute pointer-events-none ${positionClasses[position]} ${className}`}
      style={{ opacity }}
      animate={{
        y: [0, -8, 0],
        rotate: [rotations[position], rotations[position] + 1, rotations[position]],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main branch */}
        <path
          d="M10 190 C30 150, 50 100, 40 60 C35 40, 20 30, 10 10"
          stroke="#C8A96A"
          strokeWidth="1.2"
          fill="none"
          opacity="0.8"
        />
        {/* Leaves along the branch */}
        <path
          d="M40 60 C55 50, 70 55, 65 70 C60 80, 45 75, 40 60Z"
          fill="#C8A96A"
          opacity="0.25"
        />
        <path
          d="M35 90 C50 80, 65 85, 60 100 C55 110, 40 105, 35 90Z"
          fill="#C8A96A"
          opacity="0.2"
        />
        <path
          d="M25 120 C40 110, 55 115, 50 130 C45 140, 30 135, 25 120Z"
          fill="#C8A96A"
          opacity="0.18"
        />
        {/* Small flower */}
        <circle cx="40" cy="45" r="5" fill="#C8A96A" opacity="0.2" />
        <circle cx="40" cy="45" r="2" fill="#C8A96A" opacity="0.4" />
        {/* Petals */}
        <ellipse cx="40" cy="38" rx="2.5" ry="5" fill="#C8A96A" opacity="0.15" />
        <ellipse cx="34" cy="45" rx="5" ry="2.5" fill="#C8A96A" opacity="0.15" />
        <ellipse cx="46" cy="45" rx="5" ry="2.5" fill="#C8A96A" opacity="0.15" />
        <ellipse cx="40" cy="52" rx="2.5" ry="5" fill="#C8A96A" opacity="0.15" />
        {/* Second branch */}
        <path
          d="M10 190 C40 170, 70 160, 100 165 C120 168, 140 180, 160 190"
          stroke="#C8A96A"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
        {/* Lower leaves */}
        <path
          d="M70 160 C80 148, 95 150, 90 165 C85 175, 72 170, 70 160Z"
          fill="#C8A96A"
          opacity="0.2"
        />
        <path
          d="M110 165 C120 153, 135 155, 130 170 C125 180, 112 175, 110 165Z"
          fill="#C8A96A"
          opacity="0.15"
        />
        {/* Tiny dots for sparkle effect */}
        <circle cx="55" cy="75" r="1" fill="#C8A96A" opacity="0.4" />
        <circle cx="30" cy="105" r="1" fill="#C8A96A" opacity="0.3" />
        <circle cx="90" cy="155" r="1" fill="#C8A96A" opacity="0.3" />
      </svg>
    </motion.div>
  );
}
