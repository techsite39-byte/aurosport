import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  Crown, 
  ShieldCheck, 
  Calendar, 
  Trophy,
  Activity,
  CheckCircle2
} from 'lucide-react';
import { membershipConfig } from '../data/membershipData';

export default function ProMembershipSection({ onJoinMembership, onExplorePlan }) {
  const [selectedPlanId, setSelectedPlanId] = useState('pro-plan');
  const { proMembership, plans } = membershipConfig;

  const handleJoinClick = (plan) => {
    if (onJoinMembership) {
      onJoinMembership(plan || proMembership);
    }
  };

  const handleExploreClick = (plan) => {
    setSelectedPlanId(plan.id);
    if (onExplorePlan) {
      onExplorePlan(plan);
    } else if (onJoinMembership) {
      onJoinMembership(plan);
    }
  };

  return (
    <section 
      id="membership"
      className="relative bg-[#FFFFFF] text-[#101A17] py-20 sm:py-24 lg:py-28 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] border-t border-[#E5EAE7]"
    >
      {/* Subtle Atmospheric Ambient Lighting */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#003D2C]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#B9F34B]/8 rounded-full blur-[160px] pointer-events-none" />

      {/* Subtle Tennis Court Texture Pattern in background */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#003D2C 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================================
            TOP ROW: HORIZONTAL SPLIT LAYOUT (LEFT PRO CARD + RIGHT INTRODUCTION)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 lg:mb-20">
          
          {/* =======================================================================
              LEFT SIDE – PRO MEMBERSHIP CARD
             ======================================================================= */}
          <div className="lg:col-span-6 [perspective:1000px]">
            <motion.div
              initial={{ opacity: 0, x: -60, rotateY: 8, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ 
                duration: 0.85, 
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative rounded-[28px] sm:rounded-[32px] bg-[#003D2C] text-white p-6 sm:p-8 lg:p-12 shadow-[0_25px_60px_rgba(0,61,44,0.30)] overflow-hidden border border-[#003D2C]/40 group"
            >
              {/* Subtle Glowing Radial Aura */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#B9F34B]/15 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#B9F34B]/20 transition-all duration-700" />
              <div className="absolute bottom-0 -left-20 w-64 h-64 bg-black/40 rounded-full blur-[80px] pointer-events-none" />

              {/* INTEGRATED TENNIS BALL PHOTOGRAPHY WITH GENTLE FLOATING & SUBTLE ROTATION */}
              <div className="absolute -top-8 -right-8 w-32 h-32 sm:w-48 sm:h-48 lg:w-56 lg:h-56 pointer-events-none select-none opacity-85 lg:opacity-95">
                <motion.div
                  animate={{
                    y: [0, -12, 0],
                    rotate: [0, 90, 180, 270, 360],
                  }}
                  transition={{
                    y: {
                      duration: 6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                    rotate: {
                      duration: 28,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                  }}
                  className="relative w-full h-full"
                >
                  <img
                    src="/tennis_ball_pro.jpg"
                    alt="Official Tennis Ball"
                    className="w-full h-full object-cover rounded-full shadow-[0_15px_35px_rgba(0,0,0,0.5)] border-2 border-[#B9F34B]/30"
                  />
                  {/* Soft Rim Light Overlay */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#003D2C]/60 via-transparent to-[#B9F34B]/20 pointer-events-none" />
                </motion.div>
              </div>

              {/* Card Content Container */}
              <div className="relative z-10 space-y-6 sm:space-y-7">
                
                {/* 1. Small Label: PREMIUM MEMBERSHIP */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] sm:text-xs font-bold tracking-widest uppercase text-white shadow-inner"
                >
                  <span className="w-2 h-2 rounded-full bg-[#B9F34B] animate-pulse" />
                  <span className="text-[#B9F34B]">{proMembership.label}</span>
                  <Crown className="w-3.5 h-3.5 text-[#B9F34B]" />
                </motion.div>

                {/* 2. Main Heading: Pro Membership */}
                <div>
                  <motion.h3 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1]"
                  >
                    {proMembership.name}
                  </motion.h3>
                  
                  {/* Supporting text: Elevate your game. Experience more. */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="mt-2 text-sm sm:text-base text-[#F2F5F3]/85 font-medium"
                  >
                    {proMembership.supportingText}
                  </motion.p>
                </div>

                {/* 3. Price Display ($120 / Month - Configurable) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="py-4 border-y border-white/10 flex items-baseline gap-2.5"
                >
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#B9F34B] tracking-tight">
                    {membershipConfig.currency}{proMembership.price}
                  </span>
                  <span className="text-base sm:text-lg text-white/80 font-semibold tracking-wide">
                    / {membershipConfig.billingCycle}
                  </span>
                  {!membershipConfig.isVerified && (
                    <span className="ml-2 text-[10px] text-white/50 uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10">
                      Standard
                    </span>
                  )}
                </motion.div>

                {/* 4. Membership Benefits (Staggered Reveal with Small Benefit Icons) */}
                <div className="space-y-3.5 pt-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-white/70">
                    Included Benefits:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {proMembership.benefits.map((benefit, idx) => (
                      <motion.div
                        key={benefit}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.45, 
                          delay: 0.35 + idx * 0.1,
                          ease: 'easeOut'
                        }}
                        className="flex items-center gap-2.5 group/item"
                      >
                        <div className="w-6 h-6 rounded-full bg-[#B9F34B] flex items-center justify-center shrink-0 shadow-sm group-hover/item:scale-110 transition-transform">
                          <Check className="w-3.5 h-3.5 text-[#003D2C] stroke-[3]" />
                        </div>
                        <span className="text-sm font-semibold text-white/95 group-hover/item:text-white transition-colors">
                          {benefit}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* 5. JOIN NOW Button */}
                <div className="pt-3">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleJoinClick(proMembership)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#B9F34B] text-[#003D2C] font-extrabold text-sm uppercase tracking-wider shadow-[0_8px_25px_rgba(185,243,75,0.35)] hover:shadow-[0_12px_32px_rgba(185,243,75,0.5)] transition-all duration-300 group/btn cursor-pointer"
                  >
                    <span>{proMembership.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                  </motion.button>
                </div>

              </div>
            </motion.div>
          </div>

          {/* =======================================================================
              RIGHT SIDE – MEMBERSHIP INTRODUCTION
             ======================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-6 flex flex-col justify-center relative"
          >
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2F5F3] border border-[#E5EAE7] text-xs font-bold tracking-widest uppercase text-[#003D2C] w-fit">
              <span className="w-2 h-2 rounded-full bg-[#B9F34B]"></span>
              CLUB PRIVILEGES
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#003D2C] tracking-tight leading-[1.12]">
              Three Refined Membership Plans to Elevate Your Game
            </h2>

            {/* Lime Accent Divider */}
            <div className="w-16 h-1 bg-[#B9F34B] rounded-full" />

            {/* Description */}
            <p className="text-base sm:text-lg text-[#697873] leading-relaxed max-w-xl">
              Discover a membership experience designed around your passion for tennis. Choose the right plan and enjoy professional facilities, personalised training and an active tennis community.
            </p>

            {/* Mini Trust Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#F2F5F3] border border-[#E5EAE7]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#003D2C]">
                  <ShieldCheck className="w-4 h-4 text-[#003D2C]" />
                  <span>Zero Lock-in</span>
                </div>
                <p className="mt-1 text-xs text-[#697873]">Flexible monthly billing with seamless upgrade options.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F2F5F3] border border-[#E5EAE7]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#003D2C]">
                  <Activity className="w-4 h-4 text-[#003D2C]" />
                  <span>VIP Perks</span>
                </div>
                <p className="mt-1 text-xs text-[#697873]">Access to private locker lounges, pro shop &amp; guest passes.</p>
              </div>
            </div>

            {/* Subtle floating tennis ball decorative accent on right */}
            <div className="hidden sm:block absolute -right-6 top-0 w-20 h-20 opacity-20 pointer-events-none">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-full h-full rounded-full bg-[#B9F34B] border-2 border-dashed border-[#003D2C]"
              />
            </div>
          </motion.div>

        </div>

        {/* =========================================================================
            BOTTOM: COMPACT MEMBERSHIP PLAN ROWS
           ========================================================================= */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2">
            <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#003D2C] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#B9F34B]" />
              <span>Compare All Club Plans</span>
            </h4>
            <span className="text-xs text-[#697873] font-medium hidden sm:inline">
              Instant digital activation upon joining
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {plans.map((plan, index) => {
              const isSelected = plan.id === selectedPlanId;
              const isPro = plan.id === 'pro-plan';

              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.55, 
                    delay: 0.15 + index * 0.12,
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  whileHover={{ y: -3 }}
                  className={`rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 ${
                    isPro
                      ? 'bg-[#003D2C] text-white shadow-[0_12px_32px_rgba(0,61,44,0.18)] border-2 border-[#B9F34B]'
                      : 'bg-[#F2F5F3] text-[#101A17] border border-[#E5EAE7] hover:border-[#003D2C]/30 hover:bg-white hover:shadow-md'
                  }`}
                >
                  {/* Left Plan Info */}
                  <div className="flex items-start sm:items-center gap-4">
                    <div 
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                        isPro 
                          ? 'bg-[#B9F34B] text-[#003D2C]' 
                          : 'bg-white text-[#003D2C] border border-[#E5EAE7]'
                      }`}
                    >
                      {index === 0 && <Calendar className="w-6 h-6" />}
                      {index === 1 && <Trophy className="w-6 h-6" />}
                      {index === 2 && <Crown className="w-6 h-6" />}
                    </div>

                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h5 className={`text-lg sm:text-xl font-extrabold ${isPro ? 'text-white' : 'text-[#003D2C]'}`}>
                          {plan.name}
                        </h5>
                        <span 
                          className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                            isPro 
                              ? 'bg-[#B9F34B] text-[#003D2C]' 
                              : 'bg-white text-[#003D2C] border border-[#E5EAE7]'
                          }`}
                        >
                          {plan.badge}
                        </span>
                      </div>
                      <p className={`text-xs sm:text-sm font-semibold mt-0.5 ${isPro ? 'text-[#B9F34B]' : 'text-[#003D2C]'}`}>
                        {plan.tagline}
                      </p>
                      <p className={`text-xs mt-1 max-w-md ${isPro ? 'text-[#F2F5F3]/80' : 'text-[#697873]'}`}>
                        {plan.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Plan Price & Action */}
                  <div className="flex items-center justify-between md:justify-end gap-6 pt-3 md:pt-0 border-t md:border-t-0 border-black/10">
                    <div className="text-left md:text-right">
                      <span className={`text-2xl sm:text-3xl font-black ${isPro ? 'text-[#B9F34B]' : 'text-[#003D2C]'}`}>
                        {plan.priceDisplay}
                      </span>
                      <p className={`text-[10px] uppercase tracking-wider ${isPro ? 'text-white/60' : 'text-[#697873]'}`}>
                        Billed Monthly
                      </p>
                    </div>

                    <button
                      onClick={() => handleExploreClick(plan)}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                        isPro
                          ? 'bg-[#B9F34B] text-[#003D2C] hover:bg-white hover:text-[#003D2C] shadow-sm'
                          : 'bg-[#003D2C] text-white hover:bg-[#003D2C]/90 hover:shadow-sm'
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
