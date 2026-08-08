'use client';

import { motion } from 'framer-motion';
import GoldDivider from './GoldDivider';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  divider?: boolean;
}

/**
 * Reusable section heading with serif typography, gold accent, and optional divider.
 */
export default function SectionHeading({
  title,
  subtitle,
  className = '',
  divider = true,
}: SectionHeadingProps) {
  return (
    <div className={`text-center mb-12 md:mb-16 ${className}`}>
      {subtitle && (
        <motion.p
          className="font-script text-[#C8A96A] text-xl md:text-2xl mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2C2C2C] tracking-wide"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        {title}
      </motion.h2>
      {divider && <GoldDivider variant="ornate" className="mt-4" />}
    </div>
  );
}
