import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Clock, 
  ArrowUpRight, 
  Sparkles,
  BookOpen,
  Share2,
  X
} from 'lucide-react';
import { relatedStoriesData } from '../data/storiesData';

export default function RelatedStoriesSection() {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedStory, setSelectedStory] = useState(null);

  const checkScrollability = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

    // Calculate approximate active card index
    const cardWidth = 320; // approximate card width with gap
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), relatedStoriesData.length - 1));
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    checkScrollability();
    el.addEventListener('scroll', checkScrollability, { passive: true });
    window.addEventListener('resize', checkScrollability);

    return () => {
      el.removeEventListener('scroll', checkScrollability);
      window.removeEventListener('resize', checkScrollability);
    };
  }, []);

  const handleScroll = (direction) => {
    if (!carouselRef.current) return;
    const { clientWidth } = carouselRef.current;
    // Scroll roughly one viewport or card width
    const scrollAmount = direction === 'left' ? -clientWidth * 0.75 : clientWidth * 0.75;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleCardClick = (story) => {
    setSelectedStory(story);
  };

  return (
    <section 
      id="stories"
      className="relative bg-[#FFFFFF] text-[#101A17] py-20 sm:py-24 lg:py-28 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] border-t border-[#E5EAE7]"
    >
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#B9F34B]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#003D2C]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =======================================================================
            SECTION HEADER: LABEL + EDITORIAL INTRO + CAROUSEL ARROWS
           ======================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E5EAE7]">
          
          {/* Left Header Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-3 max-w-2xl"
          >
            {/* Small Label: FROM OUR COMMUNITY */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2F5F3] border border-[#E5EAE7] text-xs font-bold tracking-widest uppercase text-[#003D2C]">
              <span className="w-2 h-2 rounded-full bg-[#B9F34B]" />
              <span>FROM OUR COMMUNITY</span>
              <Sparkles className="w-3.5 h-3.5 text-[#003D2C]" />
            </div>

            {/* Main Heading: Related Stories */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#003D2C] tracking-tight leading-[1.12]">
              Related Stories
            </h2>

            {/* Lime Divider */}
            <div className="w-16 h-1 bg-[#B9F34B] rounded-full mt-2" />

            {/* Description */}
            <p className="text-base sm:text-lg text-[#697873] leading-relaxed pt-1">
              Discover the latest news, achievements, events and inspiring moments from our tennis community.
            </p>
          </motion.div>

          {/* Right: Circular Navigation Arrows */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 shrink-0"
          >
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous Stories"
              className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-200 cursor-pointer ${
                canScrollLeft
                  ? 'bg-[#003D2C] text-white border-[#003D2C] hover:bg-[#B9F34B] hover:text-[#003D2C] hover:border-[#B9F34B] shadow-md hover:scale-105'
                  : 'bg-[#F2F5F3] text-gray-300 border-[#E5EAE7] cursor-not-allowed opacity-60'
              }`}
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>

            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label="Next Stories"
              className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-200 cursor-pointer ${
                canScrollRight
                  ? 'bg-[#003D2C] text-white border-[#003D2C] hover:bg-[#B9F34B] hover:text-[#003D2C] hover:border-[#B9F34B] shadow-md hover:scale-105'
                  : 'bg-[#F2F5F3] text-gray-300 border-[#E5EAE7] cursor-not-allowed opacity-60'
              }`}
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </motion.div>

        </div>

        {/* =======================================================================
            HORIZONTAL CAROUSEL (7 STORY CARDS)
           ======================================================================= */}
        <div className="pt-10 relative">
          
          {/* Scrollable Container */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto pb-8 pt-2 scroll-smooth no-scrollbar select-none"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {relatedStoriesData.map((story, index) => (
              <motion.article
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                whileHover={{ y: -6 }}
                onClick={() => handleCardClick(story)}
                className="w-[280px] sm:w-[320px] lg:w-[350px] shrink-0 rounded-3xl bg-white border border-[#E5EAE7] overflow-hidden shadow-[0_8px_25px_rgba(0,61,44,0.06)] hover:shadow-[0_20px_45px_rgba(0,61,44,0.14)] hover:border-[#003D2C]/30 transition-all duration-300 flex flex-col cursor-pointer group"
              >
                {/* 1. Card Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F2F5F3]">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#003D2C] shadow-sm border border-white/20">
                      {story.category}
                    </span>
                  </div>

                  {/* Read Time Chip */}
                  <div className="absolute bottom-3 right-3 text-[11px] font-semibold text-white/90 bg-black/50 backdrop-blur-sm px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#B9F34B]" />
                    <span>{story.readTime}</span>
                  </div>
                </div>

                {/* 2. Card Content Area */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  
                  <div className="space-y-2.5">
                    {/* Publication Date */}
                    <div className="flex items-center gap-1.5 text-xs text-[#697873] font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-[#003D2C]" />
                      <span>{story.date}</span>
                      <span className="text-gray-300">&bull;</span>
                      <span className="text-[#003D2C]">{story.authorRole}</span>
                    </div>

                    {/* Story Title */}
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#003D2C] tracking-tight leading-snug group-hover:text-[#003D2C] transition-colors">
                      {story.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-[#697873] leading-relaxed line-clamp-2">
                      {story.description}
                    </p>
                  </div>

                  {/* Card Bottom: Read Story Link + Arrow */}
                  <div className="pt-3 border-t border-[#E5EAE7] flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#003D2C] group-hover:text-[#003D2C] flex items-center gap-1.5">
                      <span>Read Story</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#B9F34B]" />
                    </span>
                    
                    <div className="w-8 h-8 rounded-full bg-[#F2F5F3] group-hover:bg-[#B9F34B] flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-[#003D2C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                </div>
              </motion.article>
            ))}
          </div>

          {/* Carousel Progress Indicators / Dots */}
          <div className="flex items-center justify-center gap-2 pt-4">
            {relatedStoriesData.map((story, i) => (
              <button
                key={story.id}
                onClick={() => {
                  if (carouselRef.current) {
                    const cardWidth = 320;
                    carouselRef.current.scrollTo({ left: i * cardWidth, behavior: 'smooth' });
                  }
                }}
                aria-label={`Go to story ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === i
                    ? 'w-8 bg-[#003D2C]'
                    : 'w-2 bg-[#E5EAE7] hover:bg-[#697873]'
                }`}
              />
            ))}
          </div>

        </div>

      </div>

      {/* =======================================================================
          STORY DETAIL PREVIEW MODAL (INTERACTIVE CLICK EXPERIENCE)
         ======================================================================= */}
      <AnimatePresence>
        {selectedStory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStory(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col border border-[#E5EAE7]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-[#003D2C] hover:bg-[#B9F34B] flex items-center justify-center transition-colors shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Story Header Image */}
              <div className="relative h-60 sm:h-72 w-full overflow-hidden shrink-0">
                <img
                  src={selectedStory.image}
                  alt={selectedStory.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <div className="absolute bottom-5 left-6 right-6 text-white space-y-1">
                  <span className="px-3 py-1 rounded-full bg-[#B9F34B] text-[#003D2C] text-xs font-black uppercase tracking-wider">
                    {selectedStory.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white pt-2">
                    {selectedStory.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-semibold text-[#697873] border-b border-[#E5EAE7] pb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#003D2C]" />
                    {selectedStory.date}
                  </span>
                  <span>&bull;</span>
                  <span>By {selectedStory.author} ({selectedStory.authorRole})</span>
                  <span>&bull;</span>
                  <span>{selectedStory.readTime}</span>
                </div>

                <p className="text-base text-[#101A17] font-medium leading-relaxed">
                  {selectedStory.description}
                </p>

                <p className="text-sm text-[#697873] leading-relaxed">
                  At Vantage Tennis Club, every story represents our shared commitment to sporting mastery, camaraderie, and court-side passion. From high-performance coaching milestones to relaxed weekend socials, our club community is built on excellence, respect, and the love of tennis.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedStory.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 rounded-full bg-[#F2F5F3] text-xs font-bold text-[#003D2C]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 bg-[#F2F5F3] border-t border-[#E5EAE7] flex items-center justify-between">
                <span className="text-xs text-[#697873] font-medium">
                  Vantage Tennis Club &bull; Community Journal
                </span>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="px-6 py-2.5 rounded-full bg-[#003D2C] text-white hover:bg-[#B9F34B] hover:text-[#003D2C] text-xs font-extrabold uppercase tracking-wider transition-colors"
                >
                  Close Story
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
