'use client';

/**
 * Elegant wedding-themed background with watercolor-like gradients,
 * soft gold overlays, and botanical texture patterns.
 * Used as a fixed background layer behind all sections.
 */
export default function WeddingBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {/* Base cream-to-warm gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg, 
              #FDFBF8 0%, 
              #FAF7F2 15%, 
              #F7F2EA 30%, 
              #FAF7F2 45%, 
              #F5F0E8 55%, 
              #FAF7F2 70%, 
              #F7F2EA 85%, 
              #FDFBF8 100%
            )`,
        }}
      />

      {/* Soft gold radial glows */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 10% 20%, rgba(200, 169, 106, 0.06) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 90% 30%, rgba(200, 169, 106, 0.05) 0%, transparent 60%),
            radial-gradient(ellipse 70% 50% at 20% 60%, rgba(200, 169, 106, 0.04) 0%, transparent 60%),
            radial-gradient(ellipse 80% 40% at 85% 70%, rgba(200, 169, 106, 0.06) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 50% 90%, rgba(200, 169, 106, 0.05) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 50% 50%, rgba(245, 240, 232, 0.4) 0%, transparent 70%)
          `,
        }}
      />

      {/* Watercolor-like soft blobs */}
      <div
        className="absolute"
        style={{
          top: '5%',
          left: '-5%',
          width: '50%',
          height: '40%',
          background: 'radial-gradient(ellipse, rgba(200, 169, 106, 0.04) 0%, transparent 70%)',
          filter: 'blur(60px)',
          borderRadius: '50%',
        }}
      />
      <div
        className="absolute"
        style={{
          top: '25%',
          right: '-10%',
          width: '45%',
          height: '35%',
          background: 'radial-gradient(ellipse, rgba(237, 229, 216, 0.3) 0%, transparent 70%)',
          filter: 'blur(80px)',
          borderRadius: '50%',
        }}
      />
      <div
        className="absolute"
        style={{
          top: '55%',
          left: '-8%',
          width: '40%',
          height: '30%',
          background: 'radial-gradient(ellipse, rgba(200, 169, 106, 0.03) 0%, transparent 70%)',
          filter: 'blur(60px)',
          borderRadius: '50%',
        }}
      />
      <div
        className="absolute"
        style={{
          top: '75%',
          right: '-5%',
          width: '50%',
          height: '35%',
          background: 'radial-gradient(ellipse, rgba(245, 240, 232, 0.25) 0%, transparent 70%)',
          filter: 'blur(70px)',
          borderRadius: '50%',
        }}
      />

      {/* Subtle diagonal lines pattern (very faint) */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #C8A96A 0px,
            #C8A96A 1px,
            transparent 1px,
            transparent 80px
          )`,
        }}
      />

      {/* Top edge soft shadow */}
      <div
        className="absolute top-0 left-0 right-0 h-[200px]"
        style={{
          background: 'linear-gradient(180deg, rgba(253,251,248,0.9) 0%, transparent 100%)',
        }}
      />

      {/* Bottom edge soft shadow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[200px]"
        style={{
          background: 'linear-gradient(0deg, rgba(245,240,232,0.6) 0%, transparent 100%)',
        }}
      />
    </div>
  );
}
