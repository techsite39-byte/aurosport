import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Award, 
  Target, 
  Users, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Trophy,
  Activity,
  Flame
} from 'lucide-react';

// Smooth Animated Counter component
function Counter({ value, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function AboutSection({ onExploreFacilities }) {
  const stats = [
    {
      value: 12000,
      suffix: '+',
      title: 'Hours of Court Time Annually',
      desc: 'Year-round matchplay across indoor & outdoor courts',
    },
    {
      value: 89,
      suffix: '%',
      title: 'Player Retention Rate',
      desc: 'Industry-leading member loyalty & satisfaction',
    },
    {
      value: 1200,
      suffix: '+',
      title: 'Active Members',
      desc: 'Vibrant community of competitive & recreational players',
    },
    {
      value: 125,
      suffix: '+',
      title: 'Annual Tournaments',
      desc: 'Sanctioned club championships & charity opens',
    },
  ];

  const coachingTiers = [
    { name: 'ITF & ATP Tour Mentors', score: 98, level: 'Mastery' },
    { name: 'Junior Elite Academy', score: 94, level: 'High Performance' },
    { name: 'Recreational Masterclasses', score: 90, level: 'All Levels' },
  ];

  return (
    <section 
      id="about-info"
      className="relative bg-[#FFFFFF] text-[#101A17] py-20 sm:py-24 lg:py-28 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]"
    >
      {/* Background Subtle Accent Aura */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#B9F34B]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#003D2C]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Area: Label + Balanced Editorial Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end pb-14 border-b border-[#E5EAE7]"
        >
          <div className="lg:col-span-5 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2F5F3] border border-[#E5EAE7] text-xs font-bold tracking-widest uppercase text-[#003D2C]">
              <span className="w-2 h-2 rounded-full bg-[#B9F34B]"></span>
              ABOUT OUR CLUB
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#003D2C] tracking-tight leading-[1.15]">
              A Heritage of Mastery on Every Court.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-base sm:text-lg text-[#697873] leading-relaxed max-w-2xl">
              Founded to elevate racquet sports into an art form, Vantage Tennis Club blends timeless sporting traditions with world-class lawn, clay, and indoor tournament courts, master-level coaching, and a vibrant community dedicated to athletic excellence.
            </p>
          </div>
        </motion.div>

        {/* Main Content Area – Three-Column Layout */}
        <div id="facilities" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-12">
          
          {/* LEFT COLUMN: Premium Feature Card in Deep Forest Green (#003D2C) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 rounded-3xl bg-[#003D2C] text-white p-8 sm:p-10 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,61,44,0.22)] relative overflow-hidden group"
          >
            {/* Subtle card glow overlay */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B9F34B]/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#B9F34B]/15 transition-all duration-700" />
            
            <div className="space-y-6 relative z-10">
              {/* Tennis Racquet & Ball Icon with subtle hover scale */}
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-3 flex items-center justify-center text-[#B9F34B] shadow-inner group-hover:scale-110 transition-transform duration-300">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-full h-full text-[#B9F34B]"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <ellipse cx="8.5" cy="8.5" rx="5.5" ry="5.5" stroke="#FFFFFF" />
                  <path d="M12.5 12.5L20 20" stroke="#FFFFFF" strokeWidth="2" />
                  <line x1="8.5" y1="3" x2="8.5" y2="14" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="1.5 1.5" />
                  <line x1="3" y1="8.5" x2="14" y2="8.5" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="1.5 1.5" />
                  <circle cx="16.5" cy="7.5" r="3.2" fill="#B9F34B" stroke="#003D2C" strokeWidth="0.8" />
                  <path d="M14.5 6.2C15.2 6.8 15.8 7.5 16 8.5" stroke="#003D2C" strokeWidth="0.8" />
                </svg>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#B9F34B] block mb-2">
                  Championship Facilities
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                  Professional Tennis Courts
                </h3>
              </div>

              <p className="text-sm sm:text-[15px] text-white/80 leading-relaxed">
                Experience championship-grade red clay, pristine lawn grass, and floodlit all-weather hard courts designed for competitive tournaments and casual rallies alike.
              </p>

              {/* Lime green highlight note */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-[#B9F34B] flex items-center gap-2">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>16 Tournament Courts with Smart Hawk-Eye Tracking</span>
              </div>
            </div>

            {/* Pill-shaped CTA button */}
            <div className="pt-8 relative z-10">
              <button
                type="button"
                onClick={onExploreFacilities}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#B9F34B] text-[#003D2C] hover:bg-white hover:text-[#003D2C] font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_4px_16px_rgba(185,243,75,0.35)] cursor-pointer"
              >
                <span>Explore Our Facilities</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* CENTRE COLUMN: High-Quality Professional Tennis Player Photograph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 rounded-3xl overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.12)] min-h-[460px] lg:min-h-full flex flex-col justify-end group border border-[#E5EAE7]"
          >
            {/* Automatic Subtle Zoom Animation */}
            <motion.img
              src="/tennis_player.jpg"
              alt="Professional Tennis Player at Vantage Tennis Club"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
              className="absolute inset-0 w-full h-full object-cover object-top filter brightness-95 group-hover:brightness-100 transition-all duration-700"
            />

            {/* Subtle Dark Forest Green Gradient Overlay for caption visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#003D2C]/90 via-[#003D2C]/30 to-transparent pointer-events-none" />

            {/* Top Corner Pill Badge */}
            <div className="absolute top-5 left-5 z-10">
              <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#003D2C] font-extrabold text-[11px] tracking-wider uppercase border border-white/40 shadow-md">
                Grand Slam Standard
              </span>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="relative z-10 p-6 sm:p-8 space-y-2 text-white">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#B9F34B] block">
                ATP &amp; WTA Caliber Atmosphere
              </span>
              <h4 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                Train Like Champions, Play Like Legends.
              </h4>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Full-service matchplay concierge, ball machines &amp; pro shop restringing.
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Certified Coaches Card in Soft Off-White (#F2F5F3) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 rounded-3xl bg-[#F2F5F3] border border-[#E5EAE7] p-8 sm:p-10 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.04)] relative overflow-hidden"
          >
            <div className="space-y-6">
              {/* Counter Header */}
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl sm:text-6xl font-black text-[#003D2C] tracking-tight">
                    <Counter value={100} suffix="+" />
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B9F34B] inline-block mb-2"></span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#101A17] tracking-tight mt-1">
                  Certified Coaches
                </h3>
              </div>

              <p className="text-sm text-[#697873] leading-relaxed">
                Our ATP &amp; ITF-accredited coaching academy delivers bespoke technical masterclasses, biomechanics analysis, and junior development paths.
              </p>

              {/* Three Coaching-Level Indicators */}
              <div className="space-y-4 pt-2">
                {coachingTiers.map((tier) => (
                  <div key={tier.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-bold text-[#101A17]">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#003D2C]" />
                        {tier.name}
                      </span>
                      <span className="text-[#003D2C] font-mono">{tier.score}%</span>
                    </div>

                    {/* Gradual Animated Progress Bar in Lime Green */}
                    <div className="w-full h-2 rounded-full bg-[#E5EAE7] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tier.score}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                        className="h-full bg-gradient-to-r from-[#003D2C] to-[#B9F34B] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Academy Endorsement */}
            <div className="pt-6 border-t border-[#E5EAE7] flex items-center justify-between text-xs text-[#697873]">
              <span className="flex items-center gap-1 text-[#003D2C] font-bold">
                <Trophy className="w-4 h-4 text-[#B9F34B]" /> High Performance
              </span>
              <span>1-on-1 &amp; Squad Clinics</span>
            </div>
          </motion.div>

        </div>

        {/* 2. Statistics Section (Below the 3-column layout) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-24 pt-12 border-t border-[#E5EAE7]"
        >
          {/* Centered Heading */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#003D2C] tracking-tight">
              A few more facts about us in numbers
            </h3>
            <p className="text-sm text-[#697873]">
              Quantifying our commitment to world-class tennis, active player engagement, and sporting heritage.
            </p>
          </div>

          {/* Clean Horizontal Grid of 4 Statistics */}
          <div className="bg-[#FFFFFF] border border-[#E5EAE7] rounded-3xl p-6 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E5EAE7]">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className={`text-center flex flex-col justify-between ${idx > 0 ? 'pt-6 sm:pt-0 sm:pl-6' : ''}`}
              >
                <div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-[#003D2C] tracking-tight">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#B9F34B] inline-block mb-1"></span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-[#101A17] mt-2 leading-snug">
                    {stat.title}
                  </h4>
                </div>

                <p className="text-xs text-[#697873] mt-2 max-w-[220px] mx-auto">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
