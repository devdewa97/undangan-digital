'use client';

import { motion } from 'framer-motion';

interface GoldDividerProps {
  className?: string;
  variant?: 'floral' | 'line' | 'ornate' | 'dots';
  width?: number;
}

/**
 * Elegant gold ornamental divider with multiple visual variants.
 */
export default function GoldDivider({
  className = '',
  variant = 'ornate',
  width = 280,
}: GoldDividerProps) {
  return (
    <motion.div
      className={`flex items-center justify-center py-6 ${className}`}
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      {variant === 'ornate' && (
        <svg
          width={width}
          height="24"
          viewBox="0 0 280 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left line */}
          <line x1="0" y1="12" x2="100" y2="12" stroke="url(#gold-grad)" strokeWidth="0.8" />
          {/* Left curl */}
          <path
            d="M100 12 C105 6, 115 6, 120 12 C115 18, 105 18, 100 12Z"
            fill="none"
            stroke="url(#gold-grad)"
            strokeWidth="0.8"
          />
          {/* Center diamond */}
          <path
            d="M130 6 L140 12 L130 18 L120 12Z"
            fill="url(#gold-grad)"
            opacity="0.6"
          />
          <circle cx="140" cy="12" r="2.5" fill="#C8A96A" />
          <path
            d="M150 6 L160 12 L150 18 L140 12Z"
            fill="url(#gold-grad)"
            opacity="0.6"
          />
          {/* Right curl */}
          <path
            d="M160 12 C165 6, 175 6, 180 12 C175 18, 165 18, 160 12Z"
            fill="none"
            stroke="url(#gold-grad)"
            strokeWidth="0.8"
          />
          {/* Right line */}
          <line x1="180" y1="12" x2="280" y2="12" stroke="url(#gold-grad)" strokeWidth="0.8" />
          <defs>
            <linearGradient id="gold-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#C8A96A" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#C8A96A" stopOpacity="1" />
              <stop offset="100%" stopColor="#C8A96A" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      )}

      {variant === 'line' && (
        <svg
          width={width}
          height="3"
          viewBox={`0 0 ${width} 3`}
          fill="none"
        >
          <line
            x1="0"
            y1="1.5"
            x2={width}
            y2="1.5"
            stroke="url(#gold-line)"
            strokeWidth="0.5"
          />
          <defs>
            <linearGradient id="gold-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#C8A96A" stopOpacity="0" />
              <stop offset="50%" stopColor="#C8A96A" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#C8A96A" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      )}

      {variant === 'floral' && (
        <svg
          width={width}
          height="32"
          viewBox="0 0 280 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0" y1="16" x2="90" y2="16" stroke="#C8A96A" strokeWidth="0.5" strokeOpacity="0.4" />
          {/* Left leaf */}
          <path
            d="M95 16 C100 8, 110 8, 115 16 C110 24, 100 24, 95 16Z"
            fill="none"
            stroke="#C8A96A"
            strokeWidth="0.7"
            opacity="0.7"
          />
          <path
            d="M95 16 L115 16"
            stroke="#C8A96A"
            strokeWidth="0.4"
            opacity="0.5"
          />
          {/* Center flower */}
          <circle cx="140" cy="16" r="3" fill="#C8A96A" opacity="0.5" />
          <circle cx="140" cy="16" r="1.5" fill="#C8A96A" opacity="0.8" />
          {/* Petals */}
          <ellipse cx="140" cy="10" rx="2" ry="4" fill="#C8A96A" opacity="0.2" />
          <ellipse cx="140" cy="22" rx="2" ry="4" fill="#C8A96A" opacity="0.2" />
          <ellipse cx="134" cy="16" rx="4" ry="2" fill="#C8A96A" opacity="0.2" />
          <ellipse cx="146" cy="16" rx="4" ry="2" fill="#C8A96A" opacity="0.2" />
          {/* Right leaf */}
          <path
            d="M165 16 C170 8, 180 8, 185 16 C180 24, 170 24, 165 16Z"
            fill="none"
            stroke="#C8A96A"
            strokeWidth="0.7"
            opacity="0.7"
          />
          <path
            d="M165 16 L185 16"
            stroke="#C8A96A"
            strokeWidth="0.4"
            opacity="0.5"
          />
          <line x1="190" y1="16" x2="280" y2="16" stroke="#C8A96A" strokeWidth="0.5" strokeOpacity="0.4" />
        </svg>
      )}

      {variant === 'dots' && (
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-[#C8A96A]/40" />
          <div className="w-1 h-1 rounded-full bg-[#C8A96A]/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#C8A96A]/70" />
          <div className="w-2 h-2 rounded-full bg-[#C8A96A]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#C8A96A]/70" />
          <div className="w-1 h-1 rounded-full bg-[#C8A96A]/50" />
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-[#C8A96A]/40" />
        </div>
      )}
    </motion.div>
  );
}
