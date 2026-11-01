import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Trophy, 
  ShieldCheck, 
  Flame, 
  Award,
  Users,
  Target,
  CheckCircle2
} from 'lucide-react';

export default function YoungAthletesSection({ onRegister }) {
  const handleRegisterClick = () => {
    if (onRegister) {
      onRegister();
    }
  };

  // Floating badges with icons and positions around the athletes visual
  const floatingBadges = [
    {
      id: 'training',
      label: 'Professional Training',
      icon: Target,
      position: 'top-3 left-2 sm:top-10 sm:-left-8',
      delay: 0.4,
      floatDuration: 5,
    },
    {
      id: 'confidence',
      label: 'Building Confidence',
      icon: ShieldCheck,
      position: 'bottom-16 left-2 sm:bottom-24 sm:-left-6',
      delay: 0.6,
      floatDuration: 6.5,
    },
    {
      id: 'champions',
      label: 'Developing Champions',
      icon: Trophy,
      position: 'bottom-3 right-2 sm:bottom-10 sm:-right-6',
      delay: 0.8,
      floatDuration: 5.5,
    },
  ];

  // Staggered words or lines for Heading Animation
  const headingWords = [
    'Empowering',
    'Young',
    'Athletes',
    'for',
    'Lifelong',
    'Success',
    'Through',
    'Sports'
  ];

  return (
    <section 
      id="young-athletes"
      className="relative bg-[#FFFFFF] text-[#101A17] py-20 sm:py-24 lg:py-32 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] border-t border-[#E5EAE7]"
    >
      {/* =========================================================================
          BACKGROUND DESIGN: SUBTLE COURT TEXTURE + SOFT ATMOSPHERIC GRADIENT
         ========================================================================= */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Soft Radial Atmospheric Lights */}
        <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-[#B9F34B]/10 via-[#003D2C]/5 to-transparent rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#003D2C]/5 rounded-full blur-[120px]" />
        
        {/* Subtle Tennis Court Texture Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#003D2C 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SPACIOUS HORIZONTAL PROMOTIONAL BANNER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* =======================================================================
              LEFT CONTENT AREA (Span 6)
             ======================================================================= */}
          <div className="lg:col-span-6 space-y-7">
            
            {/* Small Label: INSPIRING CHAMPIONS */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2F5F3] border border-[#E5EAE7] text-xs font-bold tracking-widest uppercase text-[#003D2C] shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#B9F34B] animate-ping" />
              <span>INSPIRING CHAMPIONS</span>
              <Sparkles className="w-3.5 h-3.5 text-[#003D2C]" />
            </motion.div>

            {/* Main Heading: Staggered Upward Line Animation */}
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-extrabold text-[#003D2C] tracking-tight leading-[1.12]"
              >
                Empowering Young Athletes for Lifelong Success Through Sports
              </motion.h2>

              {/* Decorative Lime Accent Indicator */}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 72 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
                className="h-1 bg-[#B9F34B] rounded-full mt-4"
              />
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg text-[#697873] leading-relaxed font-normal max-w-xl"
            >
              We believe every young athlete deserves the opportunity to discover their potential. Through professional tennis coaching, structured training and a supportive community, we help young players build confidence, discipline and lifelong sporting skills.
            </motion.p>

            {/* Academy Features Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2"
            >
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#003D2C]">
                <CheckCircle2 className="w-4 h-4 text-[#003D2C] shrink-0" />
                <span>Certified ITF Junior Development Pathway</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#003D2C]">
                <CheckCircle2 className="w-4 h-4 text-[#003D2C] shrink-0" />
                <span>Age-Appropriate Biomechanics Coaching</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#003D2C]">
                <CheckCircle2 className="w-4 h-4 text-[#003D2C] shrink-0" />
                <span>Sportsmanship, Teamwork &amp; Mindset</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#003D2C]">
                <CheckCircle2 className="w-4 h-4 text-[#003D2C] shrink-0" />
                <span>Weekly Friendly League &amp; Tournaments</span>
              </div>
            </motion.div>

            {/* CTA Button: REGISTER TODAY → */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleRegisterClick}
                className="inline-flex items-center justify-center gap-3 px-8 sm:px-9 py-4 rounded-full bg-[#B9F34B] text-[#003D2C] font-extrabold text-sm uppercase tracking-wider shadow-[0_8px_25px_rgba(185,243,75,0.4)] hover:shadow-[0_12px_32px_rgba(185,243,75,0.55)] transition-all duration-300 group cursor-pointer"
              >
                <span>REGISTER TODAY</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </motion.button>
              
              <span className="block mt-2.5 text-xs text-[#697873] font-medium">
                Complimentary 45-minute junior skill assessment included
              </span>
            </motion.div>

          </div>

          {/* =======================================================================
              RIGHT VISUAL AREA: REALISTIC SPORTS PHOTOGRAPHY + ANIMATED GRAPHICS
             ======================================================================= */}
          <div className="lg:col-span-6 relative flex items-center justify-center pt-8 sm:pt-0">
            
            {/* 1. DYNAMIC OUTLINED SVG GRAPHIC (DEEP FOREST GREEN & TENNIS LIME GREEN) */}
            <svg 
              className="absolute -inset-4 sm:-inset-8 w-[calc(100%+32px)] sm:w-[calc(100%+64px)] h-[calc(100%+32px)] sm:h-[calc(100%+64px)] pointer-events-none z-0 overflow-visible"
              viewBox="0 0 600 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Curved Path (Deep Forest Green #003D2C) */}
              <motion.path
                d="M 60 50 C 180 10, 420 15, 540 60 C 600 120, 590 380, 520 450 C 420 490, 150 480, 60 430 C 10 360, 20 120, 60 50 Z"
                stroke="#003D2C"
                strokeWidth="1.5"
                strokeDasharray="8 6"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />

              {/* Dynamic Sweeping Accent Line (Tennis Lime Green #B9F34B) */}
              <motion.path
                d="M 30 180 C 70 80, 240 20, 450 35 C 550 50, 580 180, 560 320"
                stroke="#B9F34B"
                strokeWidth="3.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, delay: 0.3, ease: 'easeOut' }}
              />

              {/* Decorative Corner Geometric Arc */}
              <motion.path
                d="M 520 380 C 560 410, 480 460, 360 475"
                stroke="#003D2C"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.6 }}
              />

              {/* Subtle Lime Accent Dots along path */}
              <motion.circle 
                cx="450" 
                cy="35" 
                r="4" 
                fill="#B9F34B" 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.4 }}
              />
              <motion.circle 
                cx="560" 
                cy="320" 
                r="5" 
                fill="#003D2C" 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4, duration: 0.4 }}
              />
            </svg>

            {/* 2. ATHLETE PHOTOGRAPH CONTAINER WITH CLIP-PATH REVEAL & NATURAL MOVEMENT */}
            <div className="relative z-10 w-full max-w-[520px]">
              <motion.div
                initial={{ 
                  opacity: 0, 
                  clipPath: 'inset(10% 10% 10% 10% round 32px)',
                  scale: 0.95 
                }}
                whileInView={{ 
                  opacity: 1, 
                  clipPath: 'inset(0% 0% 0% 0% round 32px)',
                  scale: 1 
                }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ 
                  duration: 0.9, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="relative rounded-[32px] overflow-hidden shadow-[0_25px_60px_rgba(0,61,44,0.18)] border-4 border-white group"
              >
                {/* Natural Image with subtle hover zoom */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="w-full h-auto aspect-[4/3] overflow-hidden bg-[#F2F5F3]"
                >
                  <img
                    src="/young_athletes.jpg"
                    alt="Two Young Tennis Athletes in Training"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </motion.div>

                {/* Light Atmospheric Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#003D2C]/40 via-transparent to-transparent pointer-events-none" />

                {/* Subtitle Badge at bottom of image */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/95 text-xs font-bold tracking-wide px-4 py-2 rounded-2xl bg-[#003D2C]/70 backdrop-blur-md border border-white/10">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#B9F34B] animate-pulse"></span>
                    Junior Elite Development Academy
                  </span>
                  <span className="text-[#B9F34B] font-mono">U12 - U18</span>
                </div>
              </motion.div>

              {/* 3. THREE FLOATING LABELS (Professional Training, Building Confidence, Developing Champions) */}
              {floatingBadges.map((badge) => {
                const IconComponent = badge.icon;
                return (
                  <motion.div
                    key={badge.id}
                    initial={{ opacity: 0, scale: 0.7, y: 15 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: badge.delay,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className={`absolute ${badge.position} z-20 pointer-events-none`}
                  >
                    <motion.div
                      animate={{
                        y: [0, -7, 0],
                      }}
                      transition={{
                        duration: badge.floatDuration,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white text-[#003D2C] shadow-[0_10px_25px_rgba(0,61,44,0.15)] border border-[#E5EAE7] backdrop-blur-sm"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#B9F34B] flex items-center justify-center shrink-0">
                        <IconComponent className="w-3.5 h-3.5 text-[#003D2C]" />
                      </div>
                      <span className="text-xs sm:text-sm font-extrabold tracking-tight">
                        {badge.label}
                      </span>
                    </motion.div>
                  </motion.div>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
