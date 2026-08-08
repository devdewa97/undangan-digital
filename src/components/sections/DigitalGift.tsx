'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoCopyOutline, IoQrCodeOutline, IoCloseOutline } from 'react-icons/io5';
import config from '@/lib/config';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import Toast from '@/components/ui/Toast';
import { useToast } from '@/hooks/useToast';
import BotanicalDecoration from '@/components/decorations/BotanicalDecoration';

/**
 * Digital gift section with bank accounts and QRIS support.
 */
export default function DigitalGift() {
  const { gifts } = config;
  const { toast, show } = useToast();
  const [showQR, setShowQR] = useState(false);

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text.replace(/\s/g, ''));
      show(`${label} berhasil disalin!`);
    } catch {
      show('Gagal menyalin. Silakan salin manual.');
    }
  };

  return (
    <section
      id="gift"
      className="section-padding relative overflow-hidden"
    >
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2] via-[#F7F2EA] to-[#FDFBF8]" />
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 80% 20%, rgba(200, 169, 106, 0.04) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 20% 80%, rgba(200, 169, 106, 0.03) 0%, transparent 60%)
          `,
        }}
      />

      {/* Botanical decorations */}
      <BotanicalDecoration variant="branch-top" className="top-0 left-0 w-full" opacity={0.3} />
      <BotanicalDecoration variant="leaves-corner" className="bottom-0 left-0" opacity={0.35} />
      <div className="absolute bottom-0 right-0 pointer-events-none" style={{ opacity: 0.35, transform: 'scaleX(-1)' }}>
        <BotanicalDecoration variant="leaves-corner" className="relative" opacity={1} />
      </div>
      <div className="relative z-10 max-w-2xl mx-auto">
        <SectionHeading title="Wedding Gift" subtitle="Tanda Kasih & Doa Restu" />

        <AnimatedSection variant="fadeUp" delay={0.1}>
          <p className="text-center font-sans text-sm md:text-base text-[#6B6B6B] mb-10 max-w-lg mx-auto leading-relaxed">
            Kehadiran dan untaian doa tulus dari Bapak/Ibu/Saudara/i merupakan anugerah terindah bagi kami.
            Namun, apabila berkenan memberikan tanda kasih sebagai pelengkap langkah awal bahtera kami,
            dapat disalurkan melalui amplop digital berikut:
          </p>
        </AnimatedSection>

        {/* Bank accounts */}
        <div className="space-y-5">
          {gifts.map((gift, index) => (
            <AnimatedSection key={gift.id} variant="fadeUp" delay={0.2 + index * 0.15}>
              <GlassCard
                className="border border-[rgba(200,169,106,0.15)]"
                padding="p-6"
              >
                <div className="flex flex-col items-center text-center">
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#C8A96A] mb-1">
                    {gift.bank}
                  </p>
                  <p className="font-serif text-2xl md:text-3xl font-semibold text-[#2C2C2C] my-3 tracking-wider">
                    {gift.accountNumber}
                  </p>
                  <p className="font-sans text-sm text-[#6B6B6B] mb-5">
                    a.n. {gift.accountName}
                  </p>
                  <Button
                    variant="secondary"
                    onClick={() => copyToClipboard(gift.accountNumber, 'Nomor rekening')}
                    icon={<IoCopyOutline />}
                    className="text-xs"
                  >
                    Salin Nomor Rekening
                  </Button>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        {/* QRIS button */}
        <AnimatedSection variant="fadeUp" delay={0.5} className="mt-8 text-center">
          <Button
            variant="primary"
            onClick={() => setShowQR(true)}
            icon={<IoQrCodeOutline />}
          >
            Lihat QRIS
          </Button>
        </AnimatedSection>
      </div>

      {/* QR Modal */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-[rgba(44,44,44,0.6)] backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowQR(false)}
          >
            <motion.div
              className="glass-card rounded-3xl p-8 max-w-sm mx-4 text-center border border-[rgba(200,169,106,0.2)]"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setShowQR(false)}
                  className="w-8 h-8 rounded-full bg-[rgba(200,169,106,0.1)] flex items-center justify-center text-[#6B6B6B] hover:text-[#2C2C2C] transition-colors cursor-pointer"
                >
                  <IoCloseOutline className="text-lg" />
                </button>
              </div>
              <p className="font-serif text-xl font-semibold text-[#2C2C2C] mb-4">
                Scan QRIS
              </p>
              {/* QR placeholder */}
              <div className="w-48 h-48 mx-auto rounded-2xl bg-gradient-to-br from-[#F5F0E8] to-[#EDE5D8] border border-[rgba(200,169,106,0.2)] flex items-center justify-center mb-4"
                style={{
                  backgroundImage: 'url(/images/qris.png)',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <IoQrCodeOutline className="text-5xl text-[#C8A96A]/30" />
              </div>
              <p className="font-sans text-xs text-[#6B6B6B]">
                Scan menggunakan aplikasi e-wallet Anda
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Toast message={toast.message} isVisible={toast.isVisible} />
    </section>
  );
}
