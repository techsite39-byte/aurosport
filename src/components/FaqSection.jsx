import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  HelpCircle, 
  Sparkles, 
  Award, 
  Trophy,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

const FAQ_CATEGORIES = [
  { id: 'all', label: 'All Questions' },
  { id: 'coaching', label: 'Coaching & Training' },
  { id: 'booking', label: 'Courts & Booking' },
  { id: 'membership', label: 'Membership & Events' },
];

const FAQ_ITEMS = [
  {
    category: 'all',
    catGroup: 'coaching',
    question: 'What makes our tennis club special?',
    answer:
      'Our club combines quality sports facilities, professional coaching and a welcoming community to create a great experience for players of every level.',
  },
  {
    category: 'all',
    catGroup: 'coaching',
    question: 'Do you offer professional coaching for beginners?',
    answer:
      'Yes. Our coaching programs are designed to support beginners as well as experienced players through structured training and guidance.',
  },
  {
    category: 'all',
    catGroup: 'coaching',
    question: 'Can children join our training programs?',
    answer:
      'Yes. We offer opportunities for young athletes to learn sports, build confidence and improve their skills through age-appropriate training.',
  },
  {
    category: 'all',
    catGroup: 'booking',
    question: 'How can I book a tennis court?',
    answer:
      'You can explore the available booking options through our website or contact our club team for assistance.',
  },
  {
    category: 'all',
    catGroup: 'membership',
    question: 'What membership plans are available?',
    answer:
      'We offer three tailored tiers: Basic Plan for casual matchplay, Elite Plan with master coaching benefits, and our all-inclusive Pro Membership with 24/7 unlimited court reservations.',
  },
  {
    category: 'all',
    catGroup: 'membership',
    question: 'Do you organise tournaments and club events?',
    answer:
      'Yes. We host sanctioned ITF/UTR ranking tournaments, seasonal Grand Slam viewing galas, club handicap ladders, and monthly social mixed doubles mixers.',
  },
  {
    category: 'all',
    catGroup: 'coaching',
    question: 'Can I participate in multiple sports?',
    answer:
      'Absolutely. Our multi-sport academy pass includes access to tennis, swimming, cycling, physical fitness tracks, and specialized athletic training zones.',
  },
  {
    category: 'all',
    catGroup: 'booking',
    question: 'How do I register for a course?',
    answer:
      'You can register online instantly through our Coach Finder form below, through our member portal, or by visiting our clubhouse concierge desk.',
  },
];

export default function FaqSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openItems, setOpenItems] = useState([0]); // First item open by default

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const filteredFaqs = selectedCategory === 'all'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter((item) => item.catGroup === selectedCategory);

  return (
    <section 
      id="faq"
      className="relative bg-[#061B38] text-white py-20 sm:py-24 lg:py-32 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] border-t border-[#003D2C]/60"
    >
      {/* Background Animated Gradient Lights & Tennis Atmosphere */}
      <motion.div 
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.5, 0.35],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-[#003D2C]/50 rounded-full blur-[160px] pointer-events-none" 
      />
      
      <motion.div 
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-10 -right-32 w-[600px] h-[600px] bg-[#B9F34B]/15 rounded-full blur-[160px] pointer-events-none" 
      />

      {/* Oversized Subtle Tennis Racquet Outline Watermark with Gentle Float */}
      <div className="absolute -bottom-20 right-10 w-96 h-96 opacity-5 pointer-events-none hidden lg:block">
        <motion.div
          animate={{
            rotate: [0, 10, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-full h-full"
        >
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#B9F34B]" stroke="currentColor" strokeWidth="2">
            <ellipse cx="100" cy="80" rx="55" ry="75" />
            <path d="M100 155 L100 210" strokeWidth="5" />
            <line x1="65" y1="80" x2="135" y2="80" strokeDasharray="3 3" />
            <line x1="100" y1="25" x2="100" y2="135" strokeDasharray="3 3" />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* =======================================================================
              LEFT SIDE: EDITORIAL INTRODUCTION & TRUST METRICS
             ======================================================================= */}
          <div className="lg:col-span-5 space-y-7 lg:sticky lg:top-32">
            
            {/* Small Label: WHY CHOOSE US? */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-bold tracking-widest uppercase text-white shadow-inner"
            >
              <span className="w-2 h-2 rounded-full bg-[#B9F34B] animate-pulse" />
              <span className="text-[#B9F34B]">WHY CHOOSE US?</span>
              <HelpCircle className="w-3.5 h-3.5 text-[#B9F34B]" />
            </motion.div>

            {/* Main Heading: Why Choose Our Tennis Club? */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.14]"
            >
              Why Choose Our Tennis Club?
            </motion.h2>

            {/* Animated Lime Divider */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-[#B9F34B] rounded-full" 
            />

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base sm:text-lg text-[#F2F5F3]/85 leading-relaxed font-normal"
            >
              We are committed to helping every player grow through professional coaching, quality facilities and a welcoming sports community. From beginners to experienced athletes, we create opportunities for everyone to enjoy sports and achieve their goals.
            </motion.p>

            {/* Interactive Topic Filter Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2 pt-2"
            >
              {FAQ_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#B9F34B] text-[#003D2C] shadow-[0_4px_16px_rgba(185,243,75,0.3)] scale-105'
                      : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white border border-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </motion.div>

            {/* Trust Cards Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="grid grid-cols-2 gap-4 pt-2"
            >
              <motion.div 
                whileHover={{ y: -4, borderColor: 'rgba(185, 243, 75, 0.4)' }}
                className="p-4 rounded-2xl bg-[#003D2C]/40 border border-white/10 backdrop-blur-md transition-all shadow-sm"
              >
                <Trophy className="w-5 h-5 text-[#B9F34B] mb-2" />
                <h4 className="text-sm font-bold text-white">16 Championship Courts</h4>
                <p className="text-xs text-[#697873] mt-1">Lawn grass, red clay &amp; indoor</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4, borderColor: 'rgba(185, 243, 75, 0.4)' }}
                className="p-4 rounded-2xl bg-[#003D2C]/40 border border-white/10 backdrop-blur-md transition-all shadow-sm"
              >
                <Award className="w-5 h-5 text-[#B9F34B] mb-2" />
                <h4 className="text-sm font-bold text-white">Certified Mentors</h4>
                <p className="text-xs text-[#697873] mt-1">ITF &amp; ATP tour-grade staff</p>
              </motion.div>
            </motion.div>

          </div>

          {/* =======================================================================
              RIGHT SIDE: ACCORDION CARDS WITH DYNAMIC ANIMATIONS
             ======================================================================= */}
          <div className="lg:col-span-7 space-y-3.5">
            <AnimatePresence mode="popLayout">
              {filteredFaqs.map((item, index) => {
                const isOpen = openItems.includes(index);

                return (
                  <motion.div
                    key={item.question}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.05, 
                      ease: [0.22, 1, 0.36, 1] 
                    }}
                    className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                      isOpen
                        ? 'bg-gradient-to-r from-[#003D2C]/80 to-[#04281E]/70 border-[#B9F34B] shadow-[0_12px_32px_rgba(0,61,44,0.4)]'
                        : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.08]'
                    }`}
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      aria-expanded={isOpen}
                      className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B9F34B]"
                    >
                      <div className="flex items-start sm:items-center gap-3 sm:gap-3.5">
                        {/* Number Index */}
                        <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded mt-0.5 sm:mt-0 ${
                          isOpen ? 'bg-[#B9F34B] text-[#003D2C]' : 'bg-white/10 text-white/60'
                        }`}>
                          0{index + 1}
                        </span>

                        <span className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                          isOpen ? 'text-white' : 'text-white/95 hover:text-white'
                        }`}>
                          {item.question}
                        </span>
                      </div>

                      {/* Smooth Spring Rotating Plus/Minus Icon */}
                      <motion.div 
                        animate={{ 
                          rotate: isOpen ? 135 : 0,
                          backgroundColor: isOpen ? '#B9F34B' : 'rgba(255, 255, 255, 0.1)',
                          color: isOpen ? '#003D2C' : '#FFFFFF'
                        }}
                        transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                        className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 shadow-sm mt-0.5 sm:mt-0"
                      >
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      </motion.div>
                    </button>

                    {/* Smooth Height Expansion with Staggered Fade */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <motion.div 
                            initial={{ y: -8, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -8, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="px-5 sm:px-6 pb-6 pt-2 text-sm sm:text-base text-[#F2F5F3]/85 leading-relaxed border-t border-white/10 ml-0 sm:ml-11"
                          >
                            <p>{item.answer}</p>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
