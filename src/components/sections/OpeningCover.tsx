'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { IoMailOpenOutline } from 'react-icons/io5';
import config from '@/lib/config';
import Sparkles from '@/components/decorations/Sparkles';
import BotanicalDecoration from '@/components/decorations/BotanicalDecoration';

interface OpeningCoverProps {
  guestName: string;
  isOpen: boolean;
  onOpen: () => void;
}

/**
 * Full-screen opening cover with rich botanical decorations,
 * guest name, couple monogram, and premium "Open Invitation" button.
 */
export default function OpeningCover({ guestName, isOpen, onOpen }: OpeningCoverProps) {
  const { couple } = config;

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center overflow-hidden"
          exit={{
            opacity: 0,
            scale: 1.05,
          }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* ── Cover Background — Photo ────────────────────── */}
          <div className="absolute inset-0">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dmdl9p7do/image/upload/v1786158826/ChatGPT_Image_8_Agu_2026_10.12.27_wtlbcn.png')`,
              }}
            />

            {/* Warm cream vignette — fades edges into soft ivory */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse 70% 55% at 50% 45%, transparent 0%, rgba(253,251,248,0.4) 55%, rgba(253,251,248,0.85) 100%)
                `,
              }}
            />

            {/* Top gradient — seamless fade from cream */}
            <div
              className="absolute inset-x-0 top-0 h-[30%]"
              style={{
                background: 'linear-gradient(to bottom, rgba(253,251,248,0.95) 0%, rgba(253,251,248,0.6) 40%, transparent 100%)',
              }}
            />

            {/* Bottom gradient — stronger fade for button readability */}
            <div
              className="absolute inset-x-0 bottom-0 h-[40%]"
              style={{
                background: 'linear-gradient(to top, rgba(253,251,248,0.97) 0%, rgba(250,247,242,0.75) 35%, transparent 100%)',
              }}
            />

            {/* Left & Right soft edges */}
            <div
              className="absolute inset-y-0 left-0 w-[25%]"
              style={{
                background: 'linear-gradient(to right, rgba(253,251,248,0.85) 0%, transparent 100%)',
              }}
            />
            <div
              className="absolute inset-y-0 right-0 w-[25%]"
              style={{
                background: 'linear-gradient(to left, rgba(253,251,248,0.85) 0%, transparent 100%)',
              }}
            />

            {/* Golden ambient glow — subtle warm light over the image */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse 100% 70% at 50% 35%, rgba(200,169,106,0.08) 0%, transparent 60%),
                  radial-gradient(ellipse 60% 50% at 50% 80%, rgba(245,240,232,0.3) 0%, transparent 70%)
                `,
              }}
            />
          </div>

          {/* ── Botanical Decorations (reduced opacity to not compete with photo) ── */}

          {/* Top hanging leaves */}
          <BotanicalDecoration
            variant="hanging-leaves"
            className="top-0 left-0 w-full"
            opacity={0.3}
          />

          {/* Bottom-left corner leaves */}
          <BotanicalDecoration
            variant="leaves-corner"
            className="bottom-0 left-0"
            opacity={0.35}
          />

          {/* Bottom-right corner leaves (mirrored) */}
          <div className="absolute bottom-0 right-0 pointer-events-none" style={{ opacity: 0.35, transform: 'scaleX(-1)' }}>
            <BotanicalDecoration variant="leaves-corner" className="relative" opacity={1} />
          </div>

          {/* Sparkles */}
          <Sparkles count={18} />

          {/* ── Content ──────────────────────────────────────── */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-between py-[12vh] px-6">
            
            {/* ── TOP SECTION ── */}
            <div className="flex flex-col items-center w-full max-w-lg">
              {/* Top decorative text */}
              <motion.p
                className="font-sans text-[10px] md:text-xs tracking-[0.35em] uppercase text-[#C8A96A] mb-4 md:mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                The Wedding of
              </motion.p>
            </div>

            {/* ── MIDDLE SECTION (Empty for Faces) ── */}
            <div className="flex-1" />

            {/* ── BOTTOM SECTION ── */}
            <div className="flex flex-col items-center w-full max-w-lg mb-4 md:mb-2">
              {/* Monogram / Couple names (1 line) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ textShadow: '0 2px 12px rgba(253,251,248,0.8)' }}
                className="flex items-center justify-center gap-3 md:gap-5"
              >
                <h1 className="font-serif text-[42px] md:text-6xl font-semibold text-[#2C2C2C] leading-none drop-shadow-sm">
                  {couple.groom.firstName}
                </h1>
                <p className="font-script text-2xl md:text-4xl text-[#C8A96A] mt-2">
                  &amp;
                </p>
                <h1 className="font-serif text-[42px] md:text-6xl font-semibold text-[#2C2C2C] leading-none drop-shadow-sm">
                  {couple.bride.firstName}
                </h1>
              </motion.div>

              {/* Date */}
              <motion.p
                className="font-sans text-[11px] md:text-sm tracking-[0.2em] text-[#4A4A4A] mt-3 md:mt-4 mb-4 md:mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                22 . 09 . 2026
              </motion.p>

              {/* Gold divider line */}
              <motion.div
                className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-[#C8A96A] to-transparent mb-5 md:mb-6"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              />

              {/* Guest name */}
              <motion.div
                className="mb-6 md:mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                <p className="font-sans text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-[#4A4A4A] mb-1.5 md:mb-2">
                  Dear
                </p>
                <p className="font-serif text-lg md:text-2xl text-[#2C2C2C] font-medium px-4">
                  {guestName || 'Tamu Undangan'}
                </p>
              </motion.div>

              {/* Open button */}
              <motion.button
                onClick={onOpen}
                className="group relative inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-2.5 md:py-3 rounded-full bg-gradient-to-r from-[#B8964F] via-[#C8A96A] to-[#D4BA82] text-white font-sans text-xs md:text-sm font-medium tracking-wider overflow-hidden cursor-pointer shadow-lg shadow-[#C8A96A]/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Shimmer */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer bg-[length:200%_100%]" />
                <IoMailOpenOutline className="text-base md:text-lg relative z-10" />
                <span className="relative z-10">Buka Undangan</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
