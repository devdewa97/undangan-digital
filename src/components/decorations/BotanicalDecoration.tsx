'use client';

import { motion } from 'framer-motion';

interface BotanicalProps {
  variant: 'eucalyptus-left' | 'eucalyptus-right' | 'branch-top' | 'branch-bottom' | 'leaves-corner' | 'wildgrass-left' | 'wildgrass-right' | 'hanging-leaves';
  className?: string;
  opacity?: number;
  color?: string;
  animate?: boolean;
}

/**
 * Elegant botanical SVG decorations — eucalyptus branches, leaves, wild grass.
 * Used as absolute-positioned overlays throughout the wedding site.
 */
export default function BotanicalDecoration({
  variant,
  className = '',
  opacity = 0.3,
  color = '#97845a',
  animate = true,
}: BotanicalProps) {
  const motionProps = animate
    ? {
        animate: { y: [0, -6, 0], rotate: [0, 0.5, 0] },
        transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' as const },
      }
    : {};

  return (
    <motion.div
      className={`absolute pointer-events-none select-none ${className}`}
      style={{ opacity }}
      {...motionProps}
    >
      {variant === 'eucalyptus-left' && (
        <svg width="300" height="600" viewBox="0 0 300 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main stem */}
          <path d="M280 0 C260 80, 200 160, 180 240 C160 320, 140 400, 100 500 C80 550, 50 580, 20 600" stroke={color} strokeWidth="2" fill="none" opacity="0.8" />
          {/* Secondary stem */}
          <path d="M250 20 C240 60, 220 100, 200 140 C180 180, 160 220, 140 280" stroke={color} strokeWidth="1.2" fill="none" opacity="0.6" />
          {/* Eucalyptus leaves - left side */}
          <ellipse cx="240" cy="60" rx="25" ry="12" transform="rotate(-30 240 60)" fill={color} opacity="0.25" />
          <ellipse cx="220" cy="100" rx="30" ry="14" transform="rotate(-40 220 100)" fill={color} opacity="0.30" />
          <ellipse cx="200" cy="150" rx="28" ry="13" transform="rotate(-35 200 150)" fill={color} opacity="0.28" />
          <ellipse cx="185" cy="200" rx="32" ry="14" transform="rotate(-45 185 200)" fill={color} opacity="0.32" />
          <ellipse cx="170" cy="260" rx="26" ry="12" transform="rotate(-30 170 260)" fill={color} opacity="0.25" />
          <ellipse cx="155" cy="310" rx="30" ry="13" transform="rotate(-40 155 310)" fill={color} opacity="0.28" />
          <ellipse cx="140" cy="370" rx="28" ry="12" transform="rotate(-35 140 370)" fill={color} opacity="0.22" />
          <ellipse cx="120" cy="430" rx="25" ry="11" transform="rotate(-30 120 430)" fill={color} opacity="0.20" />
          <ellipse cx="100" cy="480" rx="22" ry="10" transform="rotate(-35 100 480)" fill={color} opacity="0.18" />
          {/* Eucalyptus leaves - right side */}
          <ellipse cx="270" cy="40" rx="22" ry="10" transform="rotate(20 270 40)" fill={color} opacity="0.22" />
          <ellipse cx="250" cy="80" rx="28" ry="12" transform="rotate(30 250 80)" fill={color} opacity="0.26" />
          <ellipse cx="225" cy="130" rx="25" ry="11" transform="rotate(25 225 130)" fill={color} opacity="0.24" />
          <ellipse cx="205" cy="180" rx="30" ry="13" transform="rotate(35 205 180)" fill={color} opacity="0.28" />
          <ellipse cx="190" cy="240" rx="26" ry="12" transform="rotate(30 190 240)" fill={color} opacity="0.25" />
          <ellipse cx="175" cy="290" rx="24" ry="11" transform="rotate(25 175 290)" fill={color} opacity="0.20" />
          <ellipse cx="155" cy="350" rx="28" ry="12" transform="rotate(30 155 350)" fill={color} opacity="0.22" />
          <ellipse cx="135" cy="410" rx="24" ry="10" transform="rotate(25 135 410)" fill={color} opacity="0.18" />
          {/* Leaf veins */}
          <path d="M220 100 L195 108" stroke={color} strokeWidth="0.5" opacity="0.35" />
          <path d="M200 150 L178 160" stroke={color} strokeWidth="0.5" opacity="0.35" />
          <path d="M185 200 L158 212" stroke={color} strokeWidth="0.5" opacity="0.35" />
          <path d="M155 310 L130 322" stroke={color} strokeWidth="0.5" opacity="0.35" />
          {/* Small berries/buds */}
          <circle cx="260" cy="50" r="3.5" fill={color} opacity="0.30" />
          <circle cx="235" cy="110" r="3" fill={color} opacity="0.25" />
          <circle cx="195" cy="220" r="3.5" fill={color} opacity="0.28" />
          <circle cx="160" cy="330" r="3" fill={color} opacity="0.22" />
          <circle cx="110" cy="470" r="3.5" fill={color} opacity="0.20" />
        </svg>
      )}

      {variant === 'eucalyptus-right' && (
        <svg width="300" height="600" viewBox="0 0 300 600" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scaleX(-1)' }}>
          <path d="M280 0 C260 80, 200 160, 180 240 C160 320, 140 400, 100 500 C80 550, 50 580, 20 600" stroke={color} strokeWidth="2" fill="none" opacity="0.8" />
          <path d="M250 20 C240 60, 220 100, 200 140 C180 180, 160 220, 140 280" stroke={color} strokeWidth="1.2" fill="none" opacity="0.6" />
          <ellipse cx="240" cy="60" rx="25" ry="12" transform="rotate(-30 240 60)" fill={color} opacity="0.25" />
          <ellipse cx="220" cy="100" rx="30" ry="14" transform="rotate(-40 220 100)" fill={color} opacity="0.30" />
          <ellipse cx="200" cy="150" rx="28" ry="13" transform="rotate(-35 200 150)" fill={color} opacity="0.28" />
          <ellipse cx="185" cy="200" rx="32" ry="14" transform="rotate(-45 185 200)" fill={color} opacity="0.32" />
          <ellipse cx="170" cy="260" rx="26" ry="12" transform="rotate(-30 170 260)" fill={color} opacity="0.25" />
          <ellipse cx="155" cy="310" rx="30" ry="13" transform="rotate(-40 155 310)" fill={color} opacity="0.28" />
          <ellipse cx="140" cy="370" rx="28" ry="12" transform="rotate(-35 140 370)" fill={color} opacity="0.22" />
          <ellipse cx="120" cy="430" rx="25" ry="11" transform="rotate(-30 120 430)" fill={color} opacity="0.20" />
          <ellipse cx="270" cy="40" rx="22" ry="10" transform="rotate(20 270 40)" fill={color} opacity="0.22" />
          <ellipse cx="250" cy="80" rx="28" ry="12" transform="rotate(30 250 80)" fill={color} opacity="0.26" />
          <ellipse cx="225" cy="130" rx="25" ry="11" transform="rotate(25 225 130)" fill={color} opacity="0.24" />
          <ellipse cx="205" cy="180" rx="30" ry="13" transform="rotate(35 205 180)" fill={color} opacity="0.28" />
          <ellipse cx="190" cy="240" rx="26" ry="12" transform="rotate(30 190 240)" fill={color} opacity="0.25" />
          <ellipse cx="175" cy="290" rx="24" ry="11" transform="rotate(25 175 290)" fill={color} opacity="0.20" />
          <circle cx="260" cy="50" r="3.5" fill={color} opacity="0.30" />
          <circle cx="235" cy="110" r="3" fill={color} opacity="0.25" />
          <circle cx="195" cy="220" r="3.5" fill={color} opacity="0.28" />
          <circle cx="110" cy="470" r="3.5" fill={color} opacity="0.20" />
        </svg>
      )}

      {variant === 'wildgrass-left' && (
        <svg width="250" height="500" viewBox="0 0 250 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Wild grass / pampas grass stems */}
          <path d="M200 500 C195 420, 190 340, 195 260 C198 200, 210 140, 220 80 C225 50, 228 20, 230 0" stroke={color} strokeWidth="1.5" fill="none" opacity="0.7" />
          <path d="M180 500 C175 440, 170 380, 165 300 C160 240, 150 180, 145 120 C140 80, 138 40, 140 0" stroke={color} strokeWidth="1.2" fill="none" opacity="0.6" />
          <path d="M160 500 C158 450, 155 400, 148 340 C140 280, 125 220, 110 160 C100 120, 90 80, 80 40" stroke={color} strokeWidth="1.2" fill="none" opacity="0.55" />
          <path d="M220 500 C218 430, 225 360, 235 280 C240 220, 240 160, 238 100" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
          {/* Pampas plumes */}
          <ellipse cx="230" cy="40" rx="10" ry="35" transform="rotate(-5 230 40)" fill={color} opacity="0.18" />
          <ellipse cx="228" cy="35" rx="7" ry="28" transform="rotate(5 228 35)" fill={color} opacity="0.14" />
          <ellipse cx="140" cy="30" rx="9" ry="32" transform="rotate(-8 140 30)" fill={color} opacity="0.16" />
          <ellipse cx="138" cy="25" rx="6" ry="25" transform="rotate(8 138 25)" fill={color} opacity="0.12" />
          <ellipse cx="82" cy="50" rx="8" ry="28" transform="rotate(-10 82 50)" fill={color} opacity="0.14" />
          {/* Thin grass blades */}
          <path d="M190 500 C188 460, 180 420, 170 380 C160 340, 145 300, 130 260" stroke={color} strokeWidth="0.8" fill="none" opacity="0.45" />
          <path d="M210 500 C215 440, 222 380, 230 320 C235 280, 238 240, 240 200" stroke={color} strokeWidth="0.8" fill="none" opacity="0.45" />
          <path d="M140 500 C135 440, 128 380, 120 320 C112 260, 100 200, 88 140" stroke={color} strokeWidth="0.6" fill="none" opacity="0.35" />
          {/* Leaves along stems */}
          <ellipse cx="195" cy="280" rx="16" ry="6" transform="rotate(-20 195 280)" fill={color} opacity="0.18" />
          <ellipse cx="168" cy="320" rx="14" ry="5" transform="rotate(-30 168 320)" fill={color} opacity="0.16" />
          <ellipse cx="150" cy="200" rx="18" ry="6" transform="rotate(-25 150 200)" fill={color} opacity="0.20" />
          <ellipse cx="220" cy="160" rx="14" ry="5" transform="rotate(15 220 160)" fill={color} opacity="0.16" />
          <ellipse cx="115" cy="180" rx="16" ry="6" transform="rotate(-35 115 180)" fill={color} opacity="0.14" />
          <ellipse cx="205" cy="360" rx="14" ry="5" transform="rotate(-15 205 360)" fill={color} opacity="0.14" />
          <ellipse cx="175" cy="420" rx="12" ry="5" transform="rotate(-25 175 420)" fill={color} opacity="0.12" />
        </svg>
      )}

      {variant === 'wildgrass-right' && (
        <svg width="250" height="500" viewBox="0 0 250 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scaleX(-1)' }}>
          <path d="M200 500 C195 420, 190 340, 195 260 C198 200, 210 140, 220 80 C225 50, 228 20, 230 0" stroke={color} strokeWidth="1.5" fill="none" opacity="0.7" />
          <path d="M180 500 C175 440, 170 380, 165 300 C160 240, 150 180, 145 120 C140 80, 138 40, 140 0" stroke={color} strokeWidth="1.2" fill="none" opacity="0.6" />
          <path d="M160 500 C158 450, 155 400, 148 340 C140 280, 125 220, 110 160 C100 120, 90 80, 80 40" stroke={color} strokeWidth="1.2" fill="none" opacity="0.55" />
          <ellipse cx="230" cy="40" rx="10" ry="35" transform="rotate(-5 230 40)" fill={color} opacity="0.18" />
          <ellipse cx="140" cy="30" rx="9" ry="32" transform="rotate(-8 140 30)" fill={color} opacity="0.16" />
          <ellipse cx="82" cy="50" rx="8" ry="28" transform="rotate(-10 82 50)" fill={color} opacity="0.14" />
          <path d="M190 500 C188 460, 180 420, 170 380 C160 340, 145 300, 130 260" stroke={color} strokeWidth="0.8" fill="none" opacity="0.45" />
          <ellipse cx="195" cy="280" rx="16" ry="6" transform="rotate(-20 195 280)" fill={color} opacity="0.18" />
          <ellipse cx="168" cy="320" rx="14" ry="5" transform="rotate(-30 168 320)" fill={color} opacity="0.16" />
          <ellipse cx="150" cy="200" rx="18" ry="6" transform="rotate(-25 150 200)" fill={color} opacity="0.20" />
          <ellipse cx="175" cy="420" rx="12" ry="5" transform="rotate(-25 175 420)" fill={color} opacity="0.12" />
        </svg>
      )}

      {variant === 'hanging-leaves' && (
        <svg width="400" height="250" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main hanging vine */}
          <path d="M0 0 C40 25, 80 55, 120 65 C160 75, 200 70, 240 75 C280 80, 320 95, 360 85 C380 80, 395 65, 400 55" stroke={color} strokeWidth="1.5" fill="none" opacity="0.6" />
          {/* Secondary vine */}
          <path d="M20 5 C60 30, 100 50, 150 58 C200 66, 250 62, 300 68 C340 72, 370 65, 390 50" stroke={color} strokeWidth="0.8" fill="none" opacity="0.4" />
          {/* Drooping sub-branches */}
          <path d="M80 50 C90 80, 95 110, 90 150" stroke={color} strokeWidth="0.8" fill="none" opacity="0.5" />
          <path d="M160 70 C165 100, 168 135, 165 170" stroke={color} strokeWidth="0.8" fill="none" opacity="0.5" />
          <path d="M280 78 C285 110, 282 145, 275 180" stroke={color} strokeWidth="0.8" fill="none" opacity="0.5" />
          <path d="M340 90 C345 120, 342 155, 335 190" stroke={color} strokeWidth="0.8" fill="none" opacity="0.5" />
          <path d="M40 30 C45 60, 42 90, 38 120" stroke={color} strokeWidth="0.6" fill="none" opacity="0.4" />
          {/* Leaves along main vine */}
          <ellipse cx="60" cy="38" rx="18" ry="8" transform="rotate(-15 60 38)" fill={color} opacity="0.22" />
          <ellipse cx="120" cy="65" rx="22" ry="9" transform="rotate(10 120 65)" fill={color} opacity="0.25" />
          <ellipse cx="200" cy="70" rx="20" ry="8" transform="rotate(-5 200 70)" fill={color} opacity="0.22" />
          <ellipse cx="240" cy="73" rx="18" ry="7" transform="rotate(12 240 73)" fill={color} opacity="0.20" />
          <ellipse cx="320" cy="88" rx="20" ry="8" transform="rotate(-8 320 88)" fill={color} opacity="0.24" />
          <ellipse cx="380" cy="60" rx="16" ry="7" transform="rotate(15 380 60)" fill={color} opacity="0.18" />
          {/* Drooping leaf tips */}
          <ellipse cx="88" cy="135" rx="14" ry="6" transform="rotate(70 88 135)" fill={color} opacity="0.18" />
          <ellipse cx="163" cy="155" rx="16" ry="6" transform="rotate(75 163 155)" fill={color} opacity="0.20" />
          <ellipse cx="278" cy="165" rx="14" ry="6" transform="rotate(65 278 165)" fill={color} opacity="0.18" />
          <ellipse cx="338" cy="175" rx="13" ry="5" transform="rotate(72 338 175)" fill={color} opacity="0.16" />
          <ellipse cx="40" cy="110" rx="12" ry="5" transform="rotate(68 40 110)" fill={color} opacity="0.14" />
          {/* Small buds */}
          <circle cx="90" cy="145" r="3" fill={color} opacity="0.22" />
          <circle cx="165" cy="168" r="3.5" fill={color} opacity="0.20" />
          <circle cx="280" cy="175" r="3" fill={color} opacity="0.18" />
          <circle cx="42" cy="118" r="2.5" fill={color} opacity="0.16" />
        </svg>
      )}

      {variant === 'branch-top' && (
        <svg width="500" height="180" viewBox="0 0 500 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80 C50 60, 100 40, 160 35 C220 30, 280 40, 340 35 C400 30, 450 20, 500 30" stroke={color} strokeWidth="1.5" fill="none" opacity="0.6" />
          <path d="M0 90 C60 75, 120 55, 180 50 C240 45, 300 55, 360 50 C420 45, 460 35, 500 40" stroke={color} strokeWidth="1" fill="none" opacity="0.45" />
          {/* Leaves along branch */}
          <ellipse cx="80" cy="55" rx="22" ry="9" transform="rotate(-20 80 55)" fill={color} opacity="0.22" />
          <ellipse cx="140" cy="38" rx="25" ry="10" transform="rotate(15 140 38)" fill={color} opacity="0.25" />
          <ellipse cx="220" cy="33" rx="20" ry="8" transform="rotate(-10 220 33)" fill={color} opacity="0.20" />
          <ellipse cx="300" cy="40" rx="22" ry="9" transform="rotate(12 300 40)" fill={color} opacity="0.24" />
          <ellipse cx="380" cy="33" rx="25" ry="10" transform="rotate(-18 380 33)" fill={color} opacity="0.22" />
          <ellipse cx="450" cy="25" rx="20" ry="8" transform="rotate(8 450 25)" fill={color} opacity="0.18" />
          {/* Downward small branches with leaves */}
          <path d="M120 42 C125 70, 128 100, 125 130" stroke={color} strokeWidth="0.7" fill="none" opacity="0.4" />
          <path d="M260 36 C262 65, 258 95, 250 125" stroke={color} strokeWidth="0.7" fill="none" opacity="0.4" />
          <path d="M400 32 C402 60, 398 90, 392 120" stroke={color} strokeWidth="0.7" fill="none" opacity="0.4" />
          <ellipse cx="123" cy="115" rx="13" ry="6" transform="rotate(60 123 115)" fill={color} opacity="0.16" />
          <ellipse cx="252" cy="110" rx="14" ry="6" transform="rotate(65 252 110)" fill={color} opacity="0.16" />
          <ellipse cx="394" cy="105" rx="13" ry="5" transform="rotate(55 394 105)" fill={color} opacity="0.14" />
        </svg>
      )}

      {variant === 'branch-bottom' && (
        <svg width="500" height="180" viewBox="0 0 500 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scaleY(-1)' }}>
          <path d="M0 80 C50 60, 100 40, 160 35 C220 30, 280 40, 340 35 C400 30, 450 20, 500 30" stroke={color} strokeWidth="1.5" fill="none" opacity="0.6" />
          <ellipse cx="80" cy="55" rx="22" ry="9" transform="rotate(-20 80 55)" fill={color} opacity="0.22" />
          <ellipse cx="140" cy="38" rx="25" ry="10" transform="rotate(15 140 38)" fill={color} opacity="0.25" />
          <ellipse cx="220" cy="33" rx="20" ry="8" transform="rotate(-10 220 33)" fill={color} opacity="0.20" />
          <ellipse cx="300" cy="40" rx="22" ry="9" transform="rotate(12 300 40)" fill={color} opacity="0.24" />
          <ellipse cx="380" cy="33" rx="25" ry="10" transform="rotate(-18 380 33)" fill={color} opacity="0.22" />
          <ellipse cx="450" cy="25" rx="20" ry="8" transform="rotate(8 450 25)" fill={color} opacity="0.18" />
          <path d="M120 42 C125 70, 128 100, 125 130" stroke={color} strokeWidth="0.7" fill="none" opacity="0.4" />
          <path d="M260 36 C262 65, 258 95, 250 125" stroke={color} strokeWidth="0.7" fill="none" opacity="0.4" />
          <ellipse cx="123" cy="115" rx="13" ry="6" transform="rotate(60 123 115)" fill={color} opacity="0.16" />
          <ellipse cx="252" cy="110" rx="14" ry="6" transform="rotate(65 252 110)" fill={color} opacity="0.16" />
        </svg>
      )}

      {variant === 'leaves-corner' && (
        <svg width="250" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Corner cluster stems */}
          <path d="M10 240 C20 195, 30 150, 25 100 C22 65, 15 35, 10 10" stroke={color} strokeWidth="1.5" fill="none" opacity="0.7" />
          <path d="M10 240 C45 218, 80 200, 115 195 C150 190, 185 198, 220 208" stroke={color} strokeWidth="1.2" fill="none" opacity="0.6" />
          <path d="M15 240 C25 215, 35 190, 30 160" stroke={color} strokeWidth="0.8" fill="none" opacity="0.45" />
          {/* Large featured leaves */}
          <path d="M25 100 C50 75, 75 80, 60 105 C52 120, 30 118, 25 100Z" fill={color} opacity="0.25" />
          <path d="M22 145 C48 120, 72 128, 58 150 C50 165, 27 160, 22 145Z" fill={color} opacity="0.28" />
          <path d="M18 190 C44 168, 68 174, 54 196 C46 210, 23 205, 18 190Z" fill={color} opacity="0.24" />
          {/* Horizontal leaves */}
          <path d="M55 210 C78 194, 100 198, 88 216 C82 226, 60 222, 55 210Z" fill={color} opacity="0.22" />
          <path d="M100 200 C124 185, 148 190, 136 208 C130 218, 105 215, 100 200Z" fill={color} opacity="0.20" />
          <path d="M155 198 C178 184, 200 190, 188 206 C182 216, 160 212, 155 198Z" fill={color} opacity="0.18" />
          {/* Small accent leaves */}
          <ellipse cx="32" cy="55" rx="15" ry="7" transform="rotate(-30 32 55)" fill={color} opacity="0.18" />
          <ellipse cx="18" cy="42" rx="12" ry="6" transform="rotate(20 18 42)" fill={color} opacity="0.15" />
          <ellipse cx="40" cy="75" rx="13" ry="6" transform="rotate(-40 40 75)" fill={color} opacity="0.16" />
          {/* Leaf veins */}
          <path d="M25 100 L55 90" stroke={color} strokeWidth="0.5" opacity="0.3" />
          <path d="M22 145 L52 135" stroke={color} strokeWidth="0.5" opacity="0.3" />
          <path d="M18 190 L48 180" stroke={color} strokeWidth="0.5" opacity="0.3" />
          {/* Small dots/buds */}
          <circle cx="38" cy="82" r="3" fill={color} opacity="0.28" />
          <circle cx="30" cy="128" r="3.5" fill={color} opacity="0.25" />
          <circle cx="80" cy="205" r="3" fill={color} opacity="0.20" />
          <circle cx="145" cy="196" r="3" fill={color} opacity="0.18" />
          <circle cx="15" cy="25" r="2.5" fill={color} opacity="0.22" />
        </svg>
      )}
    </motion.div>
  );
}
