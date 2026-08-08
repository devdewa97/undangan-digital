'use client';

import { motion } from 'framer-motion';
import { IoMusicalNotes, IoMusicalNotesOutline } from 'react-icons/io5';

interface MusicToggleProps {
  isPlaying: boolean;
  onToggle: () => void;
}

/**
 * Floating music toggle button — fixed position, always visible.
 */
export default function MusicToggle({ isPlaying, onToggle }: MusicToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full glass-card border border-[rgba(200,169,106,0.3)] flex items-center justify-center cursor-pointer shadow-luxury"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: isPlaying ? [0, 10, -10, 0] : 0,
      }}
      transition={{
        opacity: { duration: 0.5 },
        scale: { duration: 0.3 },
        rotate: { duration: 2, repeat: isPlaying ? Infinity : 0, ease: 'easeInOut' },
      }}
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
    >
      {isPlaying ? (
        <IoMusicalNotes className="text-[#C8A96A] text-xl" />
      ) : (
        <IoMusicalNotesOutline className="text-[#C8A96A]/60 text-xl" />
      )}
      {/* Pulse ring when playing */}
      {isPlaying && (
        <motion.span
          className="absolute inset-0 rounded-full border border-[#C8A96A]/30"
          animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
        />
      )}
    </motion.button>
  );
}
