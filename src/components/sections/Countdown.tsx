'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useCountdown } from '@/hooks/useCountdown';
import { WEDDING_DATE } from '@/lib/config';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import BotanicalDecoration from '@/components/decorations/BotanicalDecoration';

/**
 * Luxury countdown section with animated number blocks.
 */
export default function Countdown() {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(WEDDING_DATE);

  const blocks = [
    { value: days, label: 'Hari' },
    { value: hours, label: 'Jam' },
    { value: minutes, label: 'Menit' },
    { value: seconds, label: 'Detik' },
  ];

  return (
    <section id="countdown" className="section-padding relative overflow-hidden">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F2EA] via-[#FAF7F2] to-[#FDFBF8]" />
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 50%, rgba(200, 169, 106, 0.05) 0%, transparent 60%)
          `,
        }}
      />

      {/* Botanical accents */}
      <BotanicalDecoration variant="branch-top" className="top-0 left-0 w-full" opacity={0.35} />
      <BotanicalDecoration variant="branch-bottom" className="bottom-0 left-0 w-full" opacity={0.3} />

      <div className="relative z-10 max-w-3xl mx-auto">
        <SectionHeading title="Save The Date" subtitle="Menuju Hari Bahagia" />

        <AnimatedSection variant="scale" delay={0.2}>
          <GlassCard
            className="border border-[rgba(200,169,106,0.2)]"
            padding="p-8 md:p-12"
            hover={false}
          >
            {isExpired ? (
              <p className="font-serif text-2xl text-center text-[#C8A96A]">
                Hari Bahagia Telah Tiba! 💍
              </p>
            ) : (
              <div className="grid grid-cols-4 gap-3 md:gap-6">
                {blocks.map(({ value, label }, index) => (
                  <AnimatedSection
                    key={label}
                    variant="fadeUp"
                    delay={0.3 + index * 0.1}
                  >
                    <div className="flex flex-col items-center">
                      {/* Number */}
                      <div className="relative w-full aspect-square max-w-[100px] flex items-center justify-center rounded-2xl bg-gradient-to-b from-[#FAF7F2] to-[#F5F0E8] border border-[rgba(200,169,106,0.2)] shadow-luxury">
                        <AnimatePresence mode="popLayout">
                          <motion.span
                            key={value}
                            className="font-serif text-3xl md:text-5xl font-bold text-[#2C2C2C]"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3 }}
                          >
                            {String(value).padStart(2, '0')}
                          </motion.span>
                        </AnimatePresence>
                      </div>
                      {/* Label */}
                      <p className="font-sans text-xs md:text-sm tracking-wider text-[#6B6B6B] mt-3 uppercase">
                        {label}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            )}
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  );
}
