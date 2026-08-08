'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { IoCheckmarkCircle } from 'react-icons/io5';

interface ToastProps {
  message: string;
  isVisible: boolean;
}

/**
 * Elegant notification toast with gold accent and slide-in animation.
 */
export default function Toast({ message, isVisible }: ToastProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 left-1/2 z-[100] -translate-x-1/2"
          initial={{ opacity: 0, y: 40, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 20, x: '-50%' }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glass-card rounded-full px-6 py-3 flex items-center gap-3 shadow-luxury-lg border border-[rgba(200,169,106,0.3)]">
            <IoCheckmarkCircle className="text-[#C8A96A] text-xl flex-shrink-0" />
            <span className="text-sm font-medium text-[#2C2C2C] whitespace-nowrap">
              {message}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
