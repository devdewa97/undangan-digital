'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: string;
}

/**
 * Light glassmorphism card with backdrop blur, gold border, and premium shadow.
 */
export default function GlassCard({
  children,
  className = '',
  hover = true,
  padding = 'p-6 md:p-8',
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass-card rounded-2xl ${padding} ${className}`}
      whileHover={
        hover
          ? {
              y: -4,
              boxShadow:
                '0 20px 60px rgba(200, 169, 106, 0.12), 0 4px 20px rgba(0, 0, 0, 0.06)',
            }
          : undefined
      }
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
