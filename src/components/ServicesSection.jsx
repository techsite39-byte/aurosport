import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowLeft, 
  ArrowUpRight, 
  Sparkles,
  Trophy,
  Users,
  Calendar,
  Flame,
  CheckCircle2
} from 'lucide-react';

export default function ServicesSection({ onBookService }) {
  // Service cards data matching reference specifications and extending into carousel
  const serviceCards = [
    {
      id: 'tennis-programs',
      label: 'TENNIS PROGRAMS',
      heading: 'Training for Every Level',
      description: 'Programs designed for all ages and skill levels.',
      features: ['ATP/ITF Certified Coaching', 'High-Performance Junior Pathway', 'Weekly Adult Drills & Clinics'],
      image: '/tennis_training.jpg',
      badge: 'All Skill Levels',
    },
    {
      id: 'court-access',
      label: 'COURT ACCESS',
      heading: 'Play Your Best Game',
      description: 'Step into a space built for players to grow, compete, and thrive.',
      features: ['16 Tournament Lawn & Clay Courts', 'Smart Hawk-Eye Tracking Pods', 'Floodlit Night Play Until 11 PM'],
      image: '/tennis_court.jpg',
      badge: 'Daily 6 AM – 11 PM',
    },
    {
      id: 'tournaments',
      label: 'CHAMPIONSHIP OPENS',
      heading: 'Sanctioned Tournaments',
      description: 'Compete in seasonal club opens, handicap ladders, and charity mixed doubles.',
      features: ['Seasonal Grand Slam Ladders', 'Sanctioned UTR & ITF Events', 'Trophy Cups & Member Honors'],
      image: '/tennis_tournaments.jpg',
      badge: 'Summer 2026 Live',
    },
    {
      id: 'private-mentorship',
      label: 'PRIVATE MENTORSHIP',
      heading: 'Master-Level Biomechanics',
      description: 'One-on-one technical clinics with high-speed video stroke diagnostics.',
      features: ['High-Speed Video Analysis', 'Serve Speed & Spin Diagnostics', 'Tactical Match Sparring'],
      image: '/tennis_player.jpg',
      badge: 'Bespoke Sessions',
    },
  ];

  // Carousel index tracks which 2 cards are shown side-by-side on desktop
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const maxIndex = serviceCards.length - 2;

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const visibleCards = [
    serviceCards[currentIndex],
    serviceCards[(currentIndex + 1) % serviceCards.length],
  ];

  const handleCardClick = (card) => {
    if (onBookService) {
      onBookService(card);
    }
  };

  return (
    <section 
      id="services"
      className="relative bg-[#FFFFFF] text-[#101A17] py-20 sm:py-24 lg:py-28 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] border-t border-[#E5EAE7]"
    >
      {/* Background Subtle Accent Lights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#003D2C]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#B9F34B]/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Floating Tennis Ball Graphic */}
      <div className="absolute top-16 right-16 pointer-events-none opacity-30 hidden md:block">
        <motion.div
          animate={{
            y: [0, -14, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-10 h-10 rounded-full bg-[#B9F34B] shadow-[0_0_20px_rgba(185,243,75,0.4)] flex items-center justify-center p-1"
        >
          <div className="w-full h-full rounded-full border border-[#003D2C]/50 border-dashed" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 3-Area Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* AREA 1: LEFT SIDE – INTRODUCTION (Span 4) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 flex flex-col justify-between py-2 sm:py-4"
          >
            <div className="space-y-6">
              
              {/* Small Section Label */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F2F5F3] border border-[#E5EAE7] text-xs font-bold tracking-widest uppercase text-[#003D2C]">
                <span className="w-2 h-2 rounded-full bg-[#B9F34B]"></span>
                SERVICES
              </div>

              {/* Main Heading */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#003D2C] tracking-tight leading-[1.12]">
                  Explore Our Services
                </h2>
                {/* Subtle Lime Accent Line */}
                <div className="w-16 h-1 bg-[#B9F34B] rounded-full mt-3.5" />
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-[#697873] leading-relaxed">
                Explore our full range of tennis coaching, court bookings, and club experiences. From your first serve to match point, we've got the right program for you.
              </p>

              {/* Key Highlights Pill List */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#003D2C]">
                  <CheckCircle2 className="w-4 h-4 text-[#B9F34B] shrink-0" />
                  <span>ITF &amp; ATP Accredited Curriculum</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#003D2C]">
                  <CheckCircle2 className="w-4 h-4 text-[#B9F34B] shrink-0" />
                  <span>Championship Lawn, Clay &amp; Hard Courts</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#003D2C]">
                  <CheckCircle2 className="w-4 h-4 text-[#B9F34B] shrink-0" />
                  <span>Private Lockers &amp; Matchplay Concierge</span>
                </div>
              </div>

            </div>

            {/* Pill-shaped EXPLORE MORE Button */}
            <div className="pt-8 sm:pt-10">
              <button
                type="button"
                onClick={() => onBookService && onBookService(serviceCards[0])}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#B9F34B] text-[#003D2C] hover:bg-[#003D2C] hover:text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_4px_20px_rgba(185,243,75,0.4)] hover:shadow-[0_6px_24px_rgba(0,61,44,0.3)] transform active:scale-95 cursor-pointer border border-[#B9F34B] hover:border-[#003D2C]"
              >
                <span>EXPLORE MORE</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
            </div>
          </motion.div>

          {/* AREA 2 & 3: CENTRE CARD & RIGHT CARD (Span 8) */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
            
            {/* The Two Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch flex-1">
              
              {visibleCards.map((card, idx) => {
                const isFirst = idx === 0;
                return (
                  <motion.div
                    key={card.id + '-' + currentIndex}
                    initial={{ opacity: 0, x: isFirst ? -20 : 20, scale: 0.98 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => handleCardClick(card)}
                    className="group relative rounded-3xl overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_24px_50px_rgba(0,61,44,0.22)] border border-[#E5EAE7] flex flex-col justify-end min-h-[460px] sm:min-h-[500px] transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                  >
                    {/* Background Photography with subtle automatic breathing zoom */}
                    <motion.img
                      src={card.image}
                      alt={card.heading}
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 12,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut',
                      }}
                      className="absolute inset-0 w-full h-full object-cover object-center filter brightness-95 group-hover:brightness-105 group-hover:scale-108 transition-all duration-700"
                    />

                    {/* Dark Forest Green Gradient Overlay near bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003D2C] via-[#003D2C]/65 to-transparent transition-opacity duration-300 group-hover:opacity-95" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* Top Badges & Category Label */}
                    <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase bg-white/90 backdrop-blur-md text-[#003D2C] border border-white/50 shadow-sm">
                        {card.badge}
                      </span>

                      {/* Elegant Arrow Indicator in glass/lime circle */}
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white group-hover:bg-[#B9F34B] group-hover:text-[#003D2C] group-hover:border-[#B9F34B] flex items-center justify-center transition-all duration-300 shadow-md">
                        <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>

                    {/* Card Content at Bottom */}
                    <div className="relative z-10 p-6 sm:p-8 space-y-3 text-white">
                      {/* Small Label with Lime Accent */}
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#B9F34B]"></span>
                        <span className="text-xs font-bold uppercase tracking-widest text-[#B9F34B]">
                          {card.label}
                        </span>
                      </div>

                      {/* Heading */}
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                        {card.heading}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-white/85 leading-relaxed">
                        {card.description}
                      </p>

                      {/* Feature Bullet Points */}
                      <div className="pt-2 border-t border-white/15 space-y-1">
                        {card.features.slice(0, 2).map((feat) => (
                          <div key={feat} className="flex items-center gap-2 text-xs text-white/90">
                            <span className="text-[#B9F34B] font-bold">&bull;</span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Quick Interactive Prompt */}
                      <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#B9F34B] group-hover:text-white transition-colors">
                        <span>Book Session</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    </div>

                    {/* Bottom Lime Accent Line */}
                    <div className="h-1.5 w-0 group-hover:w-full bg-[#B9F34B] transition-all duration-500" />
                  </motion.div>
                );
              })}

            </div>

            {/* Carousel Navigation Bar Underneath Cards */}
            <div className="flex items-center justify-between pt-2 px-1">
              {/* Slide Counter / Dots */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#003D2C] tracking-wider uppercase">
                  Service 0{currentIndex + 1} &ndash; 0{Math.min(currentIndex + 2, serviceCards.length)} of 0{serviceCards.length}
                </span>
                <div className="flex gap-1.5 ml-2">
                  {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrentIndex(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentIndex === i
                          ? 'w-6 bg-[#003D2C]'
                          : 'w-2 bg-[#E5EAE7] hover:bg-[#697873]'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Prev / Next Carousel Arrow Buttons */}
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous services"
                  className="w-11 h-11 rounded-full border border-[#E5EAE7] bg-[#F2F5F3] hover:bg-[#003D2C] text-[#003D2C] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next services"
                  className="w-11 h-11 rounded-full border border-[#003D2C] bg-[#003D2C] hover:bg-[#B9F34B] text-white hover:text-[#003D2C] flex items-center justify-center transition-all duration-300 shadow-[0_4px_12px_rgba(0,61,44,0.18)] hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
