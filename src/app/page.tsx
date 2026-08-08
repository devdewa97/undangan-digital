'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import config from '@/lib/config';
import { useMusic } from '@/hooks/useMusic';
import { useScrollLock } from '@/hooks/useScrollLock';

// Sections
import OpeningCover from '@/components/sections/OpeningCover';
import BrideGroom from '@/components/sections/BrideGroom';
import Countdown from '@/components/sections/Countdown';
import WeddingEvent from '@/components/sections/WeddingEvent';
import Gallery from '@/components/sections/Gallery';
import DigitalGift from '@/components/sections/DigitalGift';
import RSVP from '@/components/sections/RSVP';
import Wishes from '@/components/sections/Wishes';
import Footer from '@/components/sections/Footer';

// UI
import MusicToggle from '@/components/ui/MusicToggle';
import FloatingPetals from '@/components/decorations/FloatingPetals';
import WeddingBackground from '@/components/decorations/WeddingBackground';

/**
 * Inner page component that uses useSearchParams (requires Suspense boundary).
 */
function WeddingPage() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get('to') || '';

  const [isOpen, setIsOpen] = useState(false);
  const { isPlaying, play, toggle } = useMusic(config.music);

  // Lock scroll when cover is displayed
  useScrollLock(!isOpen);

  const handleOpen = () => {
    setIsOpen(true);
    play(); // Start music on user interaction
  };

  return (
    <>
      {/* Opening Cover */}
      <OpeningCover
        guestName={guestName}
        isOpen={isOpen}
        onOpen={handleOpen}
      />

      {/* Main Content — only visible after opening */}
      <AnimatePresence>
        {isOpen && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Wedding-themed background layer */}
            <WeddingBackground />

            {/* Floating petals throughout the page */}
            <FloatingPetals count={10} className="fixed inset-0 z-[5] pointer-events-none" />

            <BrideGroom />
            <Countdown />
            <WeddingEvent />
            <Gallery />
            <DigitalGift />
            <RSVP />
            <Wishes />
            <Footer />

            {/* Music toggle */}
            <MusicToggle isPlaying={isPlaying} onToggle={toggle} />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}

/**
 * Main page with Suspense boundary for useSearchParams.
 */
export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="fixed inset-0 flex items-center justify-center bg-[#FDFBF8]">
          <motion.div
            className="w-8 h-8 border-2 border-[#C8A96A]/30 border-t-[#C8A96A] rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      }
    >
      <WeddingPage />
    </Suspense>
  );
}
