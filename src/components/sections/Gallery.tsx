'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoCloseOutline, IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import config from '@/lib/config';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import BotanicalDecoration from '@/components/decorations/BotanicalDecoration';

/**
 * Premium masonry gallery with elegant lightbox.
 */
export default function Gallery() {
  const { gallery } = config;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % gallery.length);
  };

  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + gallery.length) % gallery.length);
  };

  return (
    <section
      id="gallery"
      className="section-padding relative overflow-hidden"
    >
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2] via-[#F5F0E8] to-[#FAF7F2]" />
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% 30%, rgba(200, 169, 106, 0.04) 0%, transparent 60%)
          `,
        }}
      />

      {/* Botanical decorations */}
      <BotanicalDecoration variant="eucalyptus-left" className="top-[10%] left-0 -translate-x-[40%]" opacity={0.35} />
      <BotanicalDecoration variant="eucalyptus-right" className="top-[20%] right-0 translate-x-[40%]" opacity={0.35} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeading title="Our Gallery" subtitle="Moment Bahagia" />

        {/* Gallery Grid (2x2 layout) */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {gallery.map((image, index) => (
            <AnimatedSection
              key={image.id}
              variant="fadeUp"
              delay={0.1 + index * 0.1}
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden cursor-pointer group border border-[rgba(200,169,106,0.2)] shadow-sm hover:shadow-luxury"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(index)}
              >
                {/* Photo */}
                <div
                  className="w-full aspect-square bg-gradient-to-br from-[#F5F0E8] to-[#EDE5D8] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${image.src}')`,
                  }}
                />

                {/* Hover overlay with warm tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(44,44,44,0.45)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Gold corner accents */}
                <div className="absolute top-3 right-3 w-7 h-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg viewBox="0 0 32 32" fill="none">
                    <path d="M32 0 L32 10 L22 10" stroke="#C8A96A" strokeWidth="2" fill="none" />
                    <path d="M0 32 L10 32 L10 22" stroke="#C8A96A" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-[rgba(44,44,44,0.9)] backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer z-10"
            >
              <IoCloseOutline className="text-2xl" />
            </button>

            {/* Navigation arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer z-10"
            >
              <IoChevronBackOutline className="text-xl" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer z-10"
            >
              <IoChevronForwardOutline className="text-xl" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              className="max-w-[90vw] max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="w-full h-full min-w-[300px] min-h-[400px] bg-gradient-to-br from-[#F5F0E8] to-[#EDE5D8]"
                style={{
                  backgroundImage: `url(${gallery[lightboxIndex].src})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  width: '80vw',
                  maxWidth: '800px',
                  height: '70vh',
                }}
              />
            </motion.div>

            {/* Image counter */}
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-sans">
              {lightboxIndex + 1} / {gallery.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
