'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IoPersonOutline, IoTimeOutline } from 'react-icons/io5';
import { WishData } from '@/types';
import { formatTimeAgo } from '@/utils/formatDate';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import BotanicalDecoration from '@/components/decorations/BotanicalDecoration';

/**
 * Wishes section — displays all guest wishes from Supabase.
 */
export default function Wishes() {
  const [wishes, setWishes] = useState<WishData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchWishes();

    // Refresh every 30 seconds to show new wishes
    const interval = setInterval(fetchWishes, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchWishes = async () => {
    try {
      const res = await fetch('/api/wishes');
      if (res.ok) {
        const data = await res.json();
        setWishes(data.wishes || []);
      }
    } catch {
      console.error('Failed to fetch wishes');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="wishes"
      className="section-padding relative overflow-hidden"
    >
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F2EA] via-[#FDFBF8] to-[#FAF7F2]" />
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 30% 40%, rgba(200, 169, 106, 0.04) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 70% 60%, rgba(200, 169, 106, 0.03) 0%, transparent 60%)
          `,
        }}
      />

      {/* Botanical decorations */}
      <BotanicalDecoration variant="hanging-leaves" className="top-0 left-0 w-full" opacity={0.3} />
      <BotanicalDecoration variant="eucalyptus-left" className="top-[20%] left-0 -translate-x-[45%]" opacity={0.3} />
      <BotanicalDecoration variant="eucalyptus-right" className="top-[10%] right-0 translate-x-[45%]" opacity={0.3} />

      <div className="relative z-10 max-w-2xl mx-auto">
        <SectionHeading title="Wishes" subtitle="Untaian Doa & Harapan" />

        {/* Loading state */}
        {isLoading && (
          <div className="flex justify-center py-12">
            <motion.div
              className="w-8 h-8 border-2 border-[#C8A96A]/30 border-t-[#C8A96A] rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        )}

        {/* Empty state */}
        {!isLoading && wishes.length === 0 && (
          <AnimatedSection variant="fadeUp">
            <div className="text-center py-12">
              <p className="font-serif text-lg text-[#6B6B6B]">
                Belum ada ucapan. Jadilah yang pertama! 💐
              </p>
            </div>
          </AnimatedSection>
        )}

        {/* Wishes list */}
        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
          {wishes.map((wish, index) => (
            <AnimatedSection
              key={wish.id}
              variant="fadeUp"
              delay={0.1 + index * 0.05}
            >
              <GlassCard
                className="border border-[rgba(200,169,106,0.1)]"
                padding="p-5"
                hover={false}
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C8A96A]/20 to-[#D4BA82]/20 flex items-center justify-center flex-shrink-0 border border-[rgba(200,169,106,0.2)]">
                    <IoPersonOutline className="text-[#C8A96A] text-sm" />
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Name + badge */}
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-sans text-sm font-semibold text-[#2C2C2C] truncate">
                        {wish.name}
                      </h4>
                      <span
                        className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-medium ${
                          wish.attendance === 'attending'
                            ? 'bg-[#C8A96A]/15 text-[#C8A96A]'
                            : 'bg-[#6B6B6B]/10 text-[#6B6B6B]'
                        }`}
                      >
                        {wish.attendance === 'attending' ? 'Hadir' : 'Tidak Hadir'}
                      </span>
                    </div>

                    {/* Message */}
                    <p className="font-sans text-sm text-[#4A4A4A] leading-relaxed mb-2">
                      {wish.wishes}
                    </p>

                    {/* Timestamp */}
                    <div className="flex items-center gap-1 text-[#6B6B6B]/60">
                      <IoTimeOutline className="text-[10px]" />
                      <span className="text-[10px]">{formatTimeAgo(wish.created_at)}</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
