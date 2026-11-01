import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  Play, 
  ArrowRight, 
  Users, 
  TrendingUp, 
  Trophy, 
  Calendar 
} from 'lucide-react';
import ClubTourModal from './ClubTourModal';

// 5-Image sequence rotating continuously every 3000ms
const HERO_SLIDES = [
  { id: '01', image: '/hero1.png', alt: 'AUROSPORT - Championship Basketball & Sports', objectPos: 'object-center md:object-right' },
  { id: '02', image: '/hero2.png', alt: 'AUROSPORT - Premium Archery Arena', objectPos: 'object-center md:object-right' },
  { id: '03', image: '/hero3.png', alt: 'AUROSPORT - Elite Swimming Facility', objectPos: 'object-center' },
  { id: '04', image: '/hero4.png', alt: 'AUROSPORT - Pro Cricket Academy', objectPos: 'object-center md:object-left' },
  { id: '05', image: '/hero5.png', alt: 'AUROSPORT - Adventure Zipline Park', objectPos: 'object-center md:object-right' },
];

export default function TennisHeroSection({ 
  onSelectGame, 
  onOpenAuth, 
  onNavigate,
  tourVideoUrl = "/Ahra.mp4" 
}) {
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isInitialMount, setIsInitialMount] = useState(true);

  const shouldReduceMotion = useReducedMotion();

  // Preload all 5 hero images to prevent loading flashes
  useEffect(() => {
    HERO_SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
    setIsInitialMount(false);
  }, []);

  // Manual selection handler for right-side number indicators
  const handleSelectSlide = (targetIndex) => {
    if (targetIndex === activeSlideIndex) return;
    setActiveSlideIndex(targetIndex);
  };

  // Automatic slide rotation every 3000ms (3 seconds)
  // - Loops continuously through hero1 -> hero2 -> hero3 -> hero4 -> hero5 -> hero1
  // - Pauses when the video popup is open, resumes after popup closes
  // - Cleans up interval on unmount or slide change, preventing multiple intervals
  useEffect(() => {
    if (isTourOpen) return;

    const intervalId = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isTourOpen, activeSlideIndex]);

  const handleNavClick = (href) => {
    if (onNavigate) {
      onNavigate(href);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookCourtClick = () => {
    if (onSelectGame) {
      onSelectGame({
        id: 'court-booking',
        title: 'Championship Tennis Court',
        badge: 'TOURNAMENT CLAY & LAWN',
        tagline: 'Championship tournament surface with smart line-calling',
        pricePerHour: 35,
        rating: 4.99,
        reviewsCount: 420,
        availableSlots: ['07:00 AM', '09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM', '06:00 PM', '08:00 PM'],
      });
    } else {
      handleNavClick('#facilities');
    }
  };

  const handleViewProgramsClick = () => {
    handleNavClick('#services');
  };

  return (
    <section 
      id="hero-section" 
      className="relative w-full bg-[#FFFFFF] pt-24 sm:pt-28 pb-10 sm:pb-14 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#B9F34B] selection:text-[#003D2C]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================== */}
        {/* 1. UPPER HERO WRAPPER (Relative anchor for Play Button)     */}
        {/* ========================================================== */}
        <div className="relative">
          {/* Main Hero Container (Deep Forest Green #003D2C) */}
          <div className="relative w-full rounded-[28px] sm:rounded-[36px] bg-[#003D2C] overflow-hidden shadow-2xl h-[380px] sm:h-[460px] lg:h-[520px] flex items-center justify-end border border-[#004D38]">
          
            {/* Full-width Photographic Hero Slide Image (Single active image at a time, fills complete container) */}
            <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
              <AnimatePresence initial={false}>
                <motion.img
                  key={`hero-slide-${HERO_SLIDES[activeSlideIndex].id}`}
                  src={HERO_SLIDES[activeSlideIndex].image}
                  alt={HERO_SLIDES[activeSlideIndex].alt}
                  initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.2 : 0.8,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className={`absolute inset-0 w-full h-full object-cover ${HERO_SLIDES[activeSlideIndex].objectPos}`}
                />
              </AnimatePresence>
            </div>

            {/* Subtle right-side gradient vignette to ensure slide indicators stay crisp & readable */}
            <div className="absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-black/40 via-black/15 to-transparent pointer-events-none z-10" />

            {/* ========================================================== */}
            {/* VERTICAL SLIDE NUMBER INDICATORS ON RIGHT SIDE (01 - 05)   */}
            {/* ========================================================== */}
            <div className="relative z-20 flex flex-col items-center gap-2 sm:gap-2.5 mr-3 sm:mr-6 lg:mr-8 select-none">
              {HERO_SLIDES.map((slide, index) => {
                const isActive = activeSlideIndex === index;
                return (
                  <button
                    key={slide.id}
                    id={`hero-slide-btn-${slide.id}`}
                    type="button"
                    onClick={() => handleSelectSlide(index)}
                    aria-label={`Slide ${slide.id}`}
                    className={`transition-all duration-300 cursor-pointer flex items-center justify-center font-bold ${
                      isActive
                        ? 'w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#003D2C] shadow-md scale-105 ring-2 ring-[#B9F34B] text-xs'
                        : 'w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/45 hover:bg-black/65 text-white/90 border border-white/15 backdrop-blur-sm text-[11px]'
                    }`}
                  >
                    {slide.id}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ========================================================== */}
          {/* CURVED BACKGROUND NOTCH CUTOUT (Matches Reference Screenshot) */}
          {/* ========================================================== */}
          <div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-25 pointer-events-none flex items-end justify-center w-[110px] h-[40px] mb-[-1px]"
          >
            <svg
              viewBox="0 0 110 40"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Pure White Notch Body hugging the play button */}
              <path
                d="M 8.05 40 A 14 14 0 0 0 21.75 28.92 A 34 34 0 0 1 88.25 28.92 A 14 14 0 0 0 101.95 40 L 101.95 43 L 8.05 43 Z"
                fill="#FFFFFF"
              />
              {/* Continuing Container Border along the Notch Curve */}
              <path
                d="M 8.05 40 A 14 14 0 0 0 21.75 28.92 A 34 34 0 0 1 88.25 28.92 A 14 14 0 0 0 101.95 40"
                stroke="#004D38"
                strokeWidth="1.25"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          {/* ========================================================== */}
          {/* VIDEO PLAY BUTTON (Matches Reference Screenshot)           */}
          {/* ========================================================== */}
          <button
            type="button"
            onClick={() => setIsTourOpen(true)}
            aria-label="Play AUROSPORT Experience Tour Video"
            style={{ 
              position: 'absolute',
              left: '50%',
              bottom: 0,
              transform: 'translate(-50%, 21px)',
              width: '50px',
              height: '50px',
              backgroundColor: '#000000',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.35)'
            }}
            className="z-30 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-150 border-0 outline-none p-0 focus:outline-none"
          >
            <svg 
              className="w-[15px] h-[15px] translate-x-[1px]"
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="6,3 20,12 6,21" fill="#FFFFFF" />
            </svg>
          </button>
        </div>

        {/* ========================================================== */}
        {/* 2. LOWER SECTION: SPLIT COMPOSITION                        */}
        {/* Lower Left (2 Cards) & Lower Right (Community + Circular)  */}
        {/* ========================================================== */}
        <div className="mt-8 sm:mt-9 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* -------------------------------------------------------- */}
          {/* LOWER LEFT: TWO SIDE-BY-SIDE SPORTS FEATURE CARDS (5 Cols) */}
          {/* -------------------------------------------------------- */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            
            {/* CARD 1: COURT BOOKING */}
            <div 
              onClick={handleBookCourtClick}
              className="group relative rounded-[24px] overflow-hidden min-h-[320px] sm:min-h-[350px] shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer bg-[#003D2C] flex flex-col justify-end p-5 sm:p-6"
            >
              {/* Background Court Balls & Racket Photo */}
              <img
                src="/court_booking_card.jpg"
                alt="Close-up of tennis racket and balls on clay court"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Dark Forest Green gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-[#003D2C]/60 via-40% to-transparent" />
              
              {/* Card Content at bottom */}
              <div className="relative z-10 text-white">
                <h3 className="font-extrabold text-lg sm:text-xl tracking-tight uppercase leading-tight mb-1 text-white group-hover:text-[#B9F34B] transition-colors">
                  COURT BOOKING
                </h3>
                <p className="text-white/80 text-xs sm:text-[13px] leading-relaxed mb-4 font-medium">
                  Find your perfect court and enjoy the game.
                </p>
                <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white group-hover:bg-[#B9F34B] text-[#003D2C] font-extrabold text-xs tracking-wider uppercase transition-all duration-300 shadow-md">
                  <span>BOOK NOW</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>

            {/* CARD 2: TENNIS COACHING */}
            <div 
              onClick={handleViewProgramsClick}
              className="group relative rounded-[24px] overflow-hidden min-h-[320px] sm:min-h-[350px] shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer bg-[#003D2C] flex flex-col justify-end p-5 sm:p-6"
            >
              {/* Background Tennis Player Coaching Photo */}
              <img
                src="/tennis_coaching_card.jpg"
                alt="Tennis player practicing athletic shot with coach"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Dark Forest Green gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-[#003D2C]/60 via-40% to-transparent" />
              
              {/* Card Content at bottom */}
              <div className="relative z-10 text-white">
                <h3 className="font-extrabold text-lg sm:text-xl tracking-tight uppercase leading-tight mb-1 text-white group-hover:text-[#B9F34B] transition-colors">
                  TENNIS COACHING
                </h3>
                <p className="text-white/80 text-xs sm:text-[13px] leading-relaxed mb-4 font-medium">
                  Learn from experienced tennis coaches.
                </p>
                <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white group-hover:bg-[#B9F34B] text-[#003D2C] font-extrabold text-xs tracking-wider uppercase transition-all duration-300 shadow-md">
                  <span>VIEW PROGRAMS</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>

          </div>

          {/* -------------------------------------------------------- */}
          {/* LOWER RIGHT: COMMUNITY INTRODUCTION & BENEFITS (7 Cols)  */}
          {/* -------------------------------------------------------- */}
          <div className="lg:col-span-7 bg-white rounded-[28px] p-6 sm:p-8 lg:p-9 flex flex-col justify-between border border-gray-100 shadow-sm relative overflow-hidden">
            
            {/* Top Section: Intro Text + Bold Heading + Paragraph */}
            <div>
              {/* Small introductory text */}
              <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#697873] uppercase mb-2">
                A community for players of all levels
              </p>

              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#003D2C] tracking-tight uppercase leading-[1.08] mb-3.5 font-['Plus_Jakarta_Sans',sans-serif]">
                MORE THAN A GAME <br />
                <span className="text-[#003D2C]">A STRONGER COMMUNITY</span>
              </h2>

              {/* Supporting Content Paragraph */}
              <p className="text-gray-600 text-xs sm:text-sm md:text-[14.5px] leading-relaxed max-w-xl font-normal mb-6">
                At our tennis club, we bring players together through sport, professional coaching and unforgettable experiences. Discover a welcoming community where everyone can play, improve and connect.
              </p>
            </div>

            {/* Bottom Section: 4 Compact Benefit Indicators + Circular Watch Club Tour Image */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4 border-t border-gray-100">
              
              {/* 4 Compact Benefit Indicators */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-x-5 gap-y-3.5">
                
                {/* 1. PLAY TOGETHER */}
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#F2F5F3] flex items-center justify-center text-[#003D2C]">
                    <Users className="w-3.5 h-3.5 text-[#003D2C]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-extrabold uppercase tracking-tight text-[#003D2C] leading-none">
                      PLAY
                    </span>
                    <span className="text-[10px] font-medium text-[#697873] leading-tight">
                      Together
                    </span>
                  </div>
                </div>

                {/* 2. IMPROVE YOUR SKILLS */}
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#F2F5F3] flex items-center justify-center text-[#003D2C]">
                    <TrendingUp className="w-3.5 h-3.5 text-[#003D2C]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-extrabold uppercase tracking-tight text-[#003D2C] leading-none">
                      IMPROVE
                    </span>
                    <span className="text-[10px] font-medium text-[#697873] leading-tight">
                      Your Skills
                    </span>
                  </div>
                </div>

                {/* 3. JOIN EVENTS */}
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#F2F5F3] flex items-center justify-center text-[#003D2C]">
                    <Calendar className="w-3.5 h-3.5 text-[#003D2C]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-extrabold uppercase tracking-tight text-[#003D2C] leading-none">
                      JOIN
                    </span>
                    <span className="text-[10px] font-medium text-[#697873] leading-tight">
                      Club Events
                    </span>
                  </div>
                </div>

                {/* 4. BE PART OF OUR COMMUNITY */}
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#F2F5F3] flex items-center justify-center text-[#003D2C]">
                    <Trophy className="w-3.5 h-3.5 text-[#003D2C]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-extrabold uppercase tracking-tight text-[#003D2C] leading-none">
                      BE PART OF
                    </span>
                    <span className="text-[10px] font-medium text-[#697873] leading-tight">
                      Our Community
                    </span>
                  </div>
                </div>

              </div>

              {/* Circular Watch Club Tour Image on Far Right */}
              <div 
                onClick={() => setIsTourOpen(true)}
                className="group relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer shrink-0 border-4 border-white ring-1 ring-gray-100"
                title="Click to Watch Club Tour"
              >
                <img
                  src="/tennis_club_aerial_tour.jpg"
                  alt="Aerial drone photography of championship tennis club grounds"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Semi-transparent dark overlay */}
                <div className="absolute inset-0 bg-[#003D2C]/55 group-hover:bg-[#003D2C]/40 transition-colors flex flex-col items-center justify-center text-center p-2" />

                {/* Center Content: Watch Club Tour label + Play Icon */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2 z-10 pointer-events-none">
                  <span className="text-white text-[11px] font-bold tracking-tight mb-1.5 drop-shadow">
                    Watch Club Tour
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/90 group-hover:bg-[#B9F34B] text-[#003D2C] flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <Play className="w-4 h-4 fill-[#003D2C] text-[#003D2C] ml-0.5" />
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Video Modal Component */}
      <ClubTourModal
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        videoUrl={tourVideoUrl || "/Ahra.mp4"}
      />
    </section>
  );
}
