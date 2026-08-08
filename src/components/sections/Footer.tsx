'use client';

import { motion } from 'framer-motion';
import config from '@/lib/config';
import GoldDivider from '@/components/ui/GoldDivider';
import AnimatedSection from '@/components/ui/AnimatedSection';
import BotanicalDecoration from '@/components/decorations/BotanicalDecoration';

/**
 * Elegant footer with closing message and wedding monogram.
 */
export default function Footer() {
  const { couple } = config;

  return (
    <footer
      id="footer"
      className="section-padding relative overflow-hidden"
    >
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2] via-[#F5F0E8] to-[#EDE5D8]" />
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 50%, rgba(200, 169, 106, 0.05) 0%, transparent 60%)
          `,
        }}
      />

      {/* Botanical decorations */}
      <BotanicalDecoration variant="branch-top" className="top-0 left-0 w-full" opacity={0.35} />
      <BotanicalDecoration variant="leaves-corner" className="bottom-0 left-0" opacity={0.4} />
      <div className="absolute bottom-0 right-0 pointer-events-none" style={{ opacity: 0.4, transform: 'scaleX(-1)' }}>
        <BotanicalDecoration variant="leaves-corner" className="relative" opacity={1} />
      </div>
      <BotanicalDecoration variant="wildgrass-left" className="bottom-0 left-0 -translate-x-[20%]" opacity={0.35} />
      <BotanicalDecoration variant="wildgrass-right" className="bottom-0 right-0 translate-x-[20%]" opacity={0.35} />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <AnimatedSection variant="fadeUp">
          <p className="font-script text-2xl md:text-3xl text-[#C8A96A] mb-6">
            Thank You
          </p>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.1}>
          <p className="font-sans text-sm md:text-base text-[#6B6B6B] leading-relaxed max-w-lg mx-auto mb-8">
            Sebuah kehormatan dan kebahagiaan yang teramat dalam bagi kami sekeluarga,
            atas keikhlasan langkah dan untaian doa restu yang Bapak/Ibu/Saudara/i persembahkan
            untuk menyempurnakan awal bahtera rumah tangga kami.
          </p>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.2}>
          <div className="p-6 rounded-2xl bg-white/40 backdrop-blur-xs border border-[rgba(200,169,106,0.2)] max-w-lg mx-auto mb-8 shadow-xs">
            <p className="font-serif text-xs md:text-sm text-[#4A4A4A] italic leading-relaxed mb-3">
              &quot;Dan di antara tanda-tanda kebesaran-Nya diciptakan-Nya untukmu pasangan hidup
              dari jenismu sendiri, agar kamu beroleh ketenangan hati, dan dijadikan-Nya di antaramu rasa kasih dan sayang.&quot;
            </p>
            <p className="font-sans text-xs font-semibold tracking-wider text-[#C8A96A] uppercase">
              (QS. Ar-Rum: 21)
            </p>
          </div>
        </AnimatedSection>

        <GoldDivider variant="floral" />

        {/* Monogram */}
        <AnimatedSection variant="scale" delay={0.3}>
          <motion.div
            className="inline-flex flex-col items-center mt-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-serif text-3xl md:text-4xl font-semibold text-[#2C2C2C]">
              {couple.groom.firstName}
            </p>
            <p className="font-script text-2xl text-[#C8A96A] -my-1">&</p>
            <p className="font-serif text-3xl md:text-4xl font-semibold text-[#2C2C2C]">
              {couple.bride.firstName}
            </p>
          </motion.div>
        </AnimatedSection>

        {/* Hashtag */}
        {couple.hashtag && (
          <AnimatedSection variant="fadeIn" delay={0.4}>
            <p className="font-sans text-xs tracking-[0.3em] text-[#C8A96A]/60 mt-8 uppercase">
              {couple.hashtag}
            </p>
          </AnimatedSection>
        )}

        {/* Copyright */}
        <AnimatedSection variant="fadeIn" delay={0.5}>
          <div className="mt-12 pt-8 border-t border-[rgba(200,169,106,0.15)]">
            <p className="font-sans text-[10px] text-[#6B6B6B]/50 tracking-wider">
              Made with ♥ | © {new Date().getFullYear()}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}
