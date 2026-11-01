import React from 'react';
import { motion } from 'framer-motion';
import { Star, Sparkles, Quote, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 'alexander',
      type: 'green',
      name: 'Alexander Wright',
      role: 'Tennis Member',
      avatar: '/testimonial_alexander.jpg',
      rating: 5,
      review:
        'The coaching methodology here completely transformed my tournament game. Coach Marcus’s biomechanics analysis and high-speed video stroke diagnostics helped me add 15 mph to my first serve within two months. Truly world-class mentorship!',
      highlight: 'Transformed my tournament game',
      tag: 'Competitive Member',
    },
    {
      id: 'camilla',
      type: 'lime',
      name: 'Camilla Dupont',
      role: 'Club Member',
      avatar: '/testimonial_camilla.jpg',
      rating: 5,
      review:
        'Playing on their pristine championship grass courts feels just like Wimbledon. The clubhouse atmosphere, friendly Friday night mixers, and floodlit court reservations make this club second to none. The community is so welcoming!',
      highlight: 'Pristine championship grass courts',
      tag: 'Featured Review',
    },
    {
      id: 'rajesh',
      type: 'white',
      name: 'Dr. Rajesh Sharma',
      role: 'Parent / Guardian',
      avatar: '/testimonial_rajesh.jpg',
      rating: 5,
      review:
        'Our daughter enrolled in the Junior Elite Academy last year and the transformation in her confidence and athletic discipline has been incredible. The coaches foster genuine sportsmanship and a lifelong love for tennis.',
      highlight: 'Incredible junior transformation',
      tag: 'Junior Academy Parent',
    },
  ];

  return (
    <section 
      id="testimonials"
      className="relative bg-[#F2F5F3] text-[#101A17] py-20 sm:py-24 lg:py-32 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] border-t border-[#E5EAE7]"
    >
      {/* Background Subtle Ambient Lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#B9F34B]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#003D2C]/8 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Floating Background Tennis Balls with Realistic Floating */}
      <div className="absolute top-16 left-10 pointer-events-none opacity-40 hidden md:block">
        <motion.div
          animate={{
            y: [0, -14, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-12 h-12 rounded-full overflow-hidden shadow-lg border border-[#B9F34B]/40"
        >
          <img src="/tennis_ball_pro.jpg" alt="Tennis Ball" className="w-full h-full object-cover" />
        </motion.div>
      </div>

      <div className="absolute bottom-16 right-12 pointer-events-none opacity-30 hidden md:block">
        <motion.div
          animate={{
            y: [0, 14, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-14 h-14 rounded-full overflow-hidden shadow-xl border border-[#003D2C]/20"
        >
          <img src="/tennis_ball_pro.jpg" alt="Tennis Ball" className="w-full h-full object-cover" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =======================================================================
            SECTION HEADER: PERFECTLY CENTERED & BALANCED
           ======================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          {/* Small Label: TESTIMONIALS */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5EAE7] text-xs font-bold tracking-widest uppercase text-[#003D2C] shadow-sm mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#B9F34B] animate-pulse" />
            <span>TESTIMONIALS</span>
            <Sparkles className="w-3.5 h-3.5 text-[#003D2C]" />
          </motion.div>

          {/* Main Heading: What Our Members Say */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#003D2C] tracking-tight leading-[1.15]"
          >
            What Our Members Say
          </motion.h2>

          {/* Lime Divider */}
          <div className="w-16 h-1 bg-[#B9F34B] rounded-full mx-auto mt-4" />

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#697873] leading-relaxed max-w-xl mx-auto"
          >
            Real experiences, inspiring journeys and stories from our growing tennis community.
          </motion.p>
        </div>

        {/* =======================================================================
            CLEAN, PROPERLY ALIGNED 3-COLUMN TESTIMONIAL CARDS
           ======================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-2">
          
          {testimonials.map((item, index) => {
            const isGreen = item.type === 'green';
            const isLime = item.type === 'lime';
            const isWhite = item.type === 'white';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.12 + index * 0.12, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                whileHover={{ y: -8 }}
                className={`flex flex-col justify-between rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 lg:p-9 transition-all duration-300 relative group h-full ${
                  isGreen
                    ? 'bg-[#003D2C] text-white shadow-[0_20px_45px_rgba(0,61,44,0.22)] border border-[#003D2C]'
                    : isLime
                    ? 'bg-[#B9F34B] text-[#003D2C] shadow-[0_20px_45px_rgba(185,243,75,0.28)] border-2 border-[#B9F34B] md:-translate-y-2'
                    : 'bg-white text-[#101A17] shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-[#E5EAE7]'
                }`}
              >
                {/* Top Badge on Center Card */}
                {isLime && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#003D2C] text-[#B9F34B] text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                    ★ Member Spotlight ★
                  </div>
                )}

                {/* Top Row: Stars + Quote Icon */}
                <div className="flex items-center justify-between pb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${
                          isGreen
                            ? 'fill-[#B9F34B] text-[#B9F34B]'
                            : isLime
                            ? 'fill-[#003D2C] text-[#003D2C]'
                            : 'fill-[#B9F34B] text-[#003D2C]'
                        }`} 
                      />
                    ))}
                  </div>

                  <Quote 
                    className={`w-7 h-7 sm:w-8 sm:h-8 opacity-25 ${
                      isGreen ? 'text-[#B9F34B]' : isLime ? 'text-[#003D2C]' : 'text-[#003D2C]'
                    }`} 
                  />
                </div>

                {/* Main Review Text */}
                <div className="space-y-4 flex-1 flex flex-col justify-between">
                  <p 
                    className={`text-sm sm:text-base leading-relaxed font-medium ${
                      isGreen ? 'text-[#F2F5F3]/90' : isLime ? 'text-[#003D2C]' : 'text-[#101A17]'
                    }`}
                  >
                    "{item.review}"
                  </p>

                  {/* Highlight Tag Pill */}
                  <div className="pt-2">
                    <span 
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide ${
                        isGreen 
                          ? 'bg-white/10 text-[#B9F34B]' 
                          : isLime 
                          ? 'bg-[#003D2C]/10 text-[#003D2C]' 
                          : 'bg-[#F2F5F3] text-[#003D2C]'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {item.highlight}
                    </span>
                  </div>
                </div>

                {/* Member Profile Bottom Area (Pinned Footer with Matching Baseline) */}
                <div className={`mt-6 pt-5 border-t flex items-center justify-between gap-3 ${
                  isGreen ? 'border-white/15' : isLime ? 'border-[#003D2C]/15' : 'border-[#E5EAE7]'
                }`}>
                  <div className="flex items-center gap-3.5">
                    {/* Member Avatar */}
                    <div 
                      className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 shadow-sm"
                      style={{
                        borderColor: isGreen ? '#B9F34B' : isLime ? '#003D2C' : '#003D2C',
                      }}
                    >
                      <img 
                        src={item.avatar} 
                        alt={item.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>

                    <div>
                      <h4 className={`text-sm sm:text-base font-extrabold leading-tight ${
                        isGreen ? 'text-white' : isLime ? 'text-[#003D2C]' : 'text-[#003D2C]'
                      }`}>
                        {item.name}
                      </h4>
                      <p className={`text-xs font-semibold ${
                        isGreen ? 'text-[#B9F34B]' : isLime ? 'text-[#003D2C]/75' : 'text-[#697873]'
                      }`}>
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Verified Check Badge */}
                  <div 
                    title="Verified Club Member"
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                      isGreen ? 'bg-white/10 text-[#B9F34B]' : isLime ? 'bg-[#003D2C]/10 text-[#003D2C]' : 'bg-[#F2F5F3] text-[#003D2C]'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
