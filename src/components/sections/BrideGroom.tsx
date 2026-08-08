'use client';

import { motion } from 'framer-motion';
import { IoLogoInstagram } from 'react-icons/io5';
import config from '@/lib/config';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import GoldDivider from '@/components/ui/GoldDivider';
import BotanicalDecoration from '@/components/decorations/BotanicalDecoration';

/**
 * Bride & Groom section with portraits, full names, and parent details.
 */
export default function BrideGroom() {
  const { bride, groom } = config.couple;

  return (
    <section
      id="bride-groom"
      className="section-padding relative overflow-hidden"
    >
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF8] via-[#FAF7F2] to-[#F7F2EA]" />
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 15% 30%, rgba(200, 169, 106, 0.05) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 85% 70%, rgba(200, 169, 106, 0.04) 0%, transparent 60%)
          `,
        }}
      />

      {/* Botanical decorations */}
      <BotanicalDecoration variant="eucalyptus-left" className="top-0 left-0 -translate-x-[30%] -translate-y-[10%]" opacity={0.4} />
      <BotanicalDecoration variant="eucalyptus-right" className="top-0 right-0 translate-x-[30%] -translate-y-[10%]" opacity={0.4} />
      <BotanicalDecoration variant="leaves-corner" className="bottom-0 left-0" opacity={0.35} />
      <div className="absolute bottom-0 right-0 pointer-events-none" style={{ opacity: 0.35, transform: 'scaleX(-1)' }}>
        <BotanicalDecoration variant="leaves-corner" className="relative" opacity={1} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionHeading title="Bride & Groom" subtitle="Bismillahirrahmanirrahim" />

        {/* Intro text */}
        <AnimatedSection variant="fadeUp" delay={0.1} className="text-center mb-16">
          <p className="font-serif text-xs md:text-sm tracking-[0.2em] uppercase text-[#C8A96A] mb-3">
            The Sacred Union
          </p>
          <p className="font-serif text-lg md:text-xl text-[#2C2C2C] font-medium mb-3">
            Assalamu&apos;alaikum Warahmatullahi Wabarakatuh
          </p>
          <p className="font-sans text-[#6B6B6B] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Atas keagungan cinta dan rahmat Allah SWT yang melimpah, teriring rasa syukur yang tak terhingga, kami mengundang Bapak/Ibu/Saudara/i yang kami muliakan untuk menjadi saksi atas ikatan suci dan menyempurnakan hari bahagia kami:
          </p>
        </AnimatedSection>

        {/* Couple Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Groom */}
          <AnimatedSection variant="fadeRight" delay={0.2}>
            <PersonCard
              name={groom.fullName}
              childOrder={groom.childOrder}
              fatherName={groom.fatherName}
              motherName={groom.motherName}
              photo={groom.photo}
              instagram={groom.instagram}
              label="Mempelai Pria"
            />
          </AnimatedSection>

          {/* Bride */}
          <AnimatedSection variant="fadeLeft" delay={0.4}>
            <PersonCard
              name={bride.fullName}
              childOrder={bride.childOrder}
              fatherName={bride.fatherName}
              motherName={bride.motherName}
              photo={bride.photo}
              instagram={bride.instagram}
              label="Mempelai Wanita"
            />
          </AnimatedSection>
        </div>

        <GoldDivider variant="floral" className="mt-16" />
      </div>
    </section>
  );
}

/** Individual person card */
function PersonCard({
  name,
  childOrder,
  fatherName,
  motherName,
  photo,
  instagram,
  label,
}: {
  name: string;
  childOrder: string;
  fatherName: string;
  motherName: string;
  photo: string;
  instagram?: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Label */}
      <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#C8A96A] mb-6">
        {label}
      </p>

      {/* Portrait */}
      <motion.div
        className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-8 border-2 border-[rgba(200,169,106,0.35)] shadow-luxury"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        {/* Outer gold ring accent */}
        <div className="absolute inset-0 rounded-full border-4 border-[rgba(200,169,106,0.2)] z-10 pointer-events-none" />

        {/* Photo */}
        {photo ? (
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-105"
            style={{
              backgroundImage: `url('${photo}')`,
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#F5F0E8] to-[#EDE5D8] flex items-center justify-center">
            <span className="font-serif text-4xl text-[#C8A96A]/40">
              {name.charAt(0)}
            </span>
          </div>
        )}
      </motion.div>

      {/* Name */}
      <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#2C2C2C] mb-3">
        {name}
      </h3>

      {/* Parents */}
      <p className="font-sans text-sm text-[#6B6B6B] leading-relaxed">
        {childOrder}
      </p>
      <p className="font-sans text-sm text-[#4A4A4A] font-medium">
        {fatherName}
      </p>
      <p className="font-sans text-xs text-[#6B6B6B] my-1">&amp;</p>
      <p className="font-sans text-sm text-[#4A4A4A] font-medium">
        {motherName}
      </p>

      {/* Instagram */}
      {instagram && (
        <motion.a
          href={`https://instagram.com/${instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full border border-[rgba(200,169,106,0.3)] text-[#C8A96A] text-sm font-sans hover:bg-[rgba(200,169,106,0.08)] transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <IoLogoInstagram className="text-base" />
          <span>@{instagram}</span>
        </motion.a>
      )}
    </div>
  );
}
