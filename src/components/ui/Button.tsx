'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ButtonVariant } from '@/types';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
  icon?: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-[#B8964F] via-[#C8A96A] to-[#D4BA82] text-white shadow-luxury',
  secondary:
    'bg-transparent border border-[rgba(200,169,106,0.5)] text-[#C8A96A] hover:bg-[rgba(200,169,106,0.08)]',
  ghost:
    'bg-transparent text-[#C8A96A] hover:bg-[rgba(200,169,106,0.08)]',
};

/**
 * Luxury animated button with gold gradient, shimmer effect, and hover animations.
 */
export default function Button({
  children,
  variant = 'primary',
  onClick,
  href,
  className = '',
  disabled = false,
  type = 'button',
  icon,
}: ButtonProps) {
  const baseClasses =
    'relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-sans text-sm font-medium tracking-wide transition-all duration-300 overflow-hidden cursor-pointer';

  const content = (
    <>
      {/* Shimmer overlay for primary */}
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer bg-[length:200%_100%] pointer-events-none" />
      )}
      {icon && <span className="relative z-10">{icon}</span>}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${variantStyles[variant]} ${className}`}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantStyles[variant]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      whileHover={disabled ? undefined : { scale: 1.03 }}
      whileTap={disabled ? undefined : { scale: 0.97 }}
    >
      {content}
    </motion.button>
  );
}
