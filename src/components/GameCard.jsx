import React from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, 
  Gamepad2, 
  Gamepad, 
  Headphones, 
  Gauge, 
  Sparkles, 
  Users, 
  Clock, 
  Star, 
  ArrowRight,
  Flame,
  CheckCircle2
} from 'lucide-react';

const getIcon = (id) => {
  switch (id) {
    case 'pc-gaming':
      return Monitor;
    case 'playstation-5':
      return Gamepad2;
    case 'xbox-gaming':
      return Gamepad;
    case 'vr-gaming':
      return Headphones;
    case 'racing-games':
      return Gauge;
    case 'arcade-games':
      return Sparkles;
    default:
      return Gamepad2;
  }
};

const getAccentStyles = (accent) => {
  switch (accent) {
    case 'cyan':
      return {
        badgeBg: 'bg-[#06B6D4]/15 border-[#06B6D4]/40 text-[#06B6D4]',
        button: 'bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] hover:from-[#0891B2] hover:to-[#2563EB] text-white shadow-neon-cyan',
        borderHover: 'group-hover:border-[#06B6D4]/60',
        glowHover: 'group-hover:shadow-[0_0_35px_rgba(6,182,212,0.35)]',
        indicator: 'bg-[#06B6D4]',
      };
    case 'lime':
      return {
        badgeBg: 'bg-[#A3E635]/15 border-[#A3E635]/40 text-[#A3E635]',
        button: 'bg-gradient-to-r from-[#A3E635] to-[#10B981] hover:from-[#84CC16] hover:to-[#059669] text-gray-950 font-bold shadow-neon-lime',
        borderHover: 'group-hover:border-[#A3E635]/60',
        glowHover: 'group-hover:shadow-[0_0_35px_rgba(163,230,53,0.35)]',
        indicator: 'bg-[#A3E635]',
      };
    case 'purple':
    default:
      return {
        badgeBg: 'bg-[#8B5CF6]/15 border-[#8B5CF6]/40 text-[#8B5CF6]',
        button: 'bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] hover:from-[#7C3AED] hover:to-[#0891B2] text-white shadow-neon-purple',
        borderHover: 'group-hover:border-[#8B5CF6]/60',
        glowHover: 'group-hover:shadow-[0_0_35px_rgba(139,92,246,0.35)]',
        indicator: 'bg-[#8B5CF6]',
      };
  }
};

export default function GameCard({ game, index, onBookNow }) {
  const IconComponent = getIcon(game.id);
  const styles = getAccentStyles(game.accentColor);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1] 
      }}
      className={`group relative rounded-2xl bg-[#111827] border border-white/10 overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 ${styles.borderHover} ${styles.glowHover}`}
    >
      {/* Background Image Container with Zoom Effect */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden">
        <img
          src={game.image}
          alt={game.title}
          loading="lazy"
          className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
        />

        {/* Ambient Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border backdrop-blur-md ${styles.badgeBg}`}>
            {game.badge}
          </span>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-semibold text-yellow-400">
            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            <span className="text-white">{game.rating}</span>
            <span className="text-gray-400 text-[10px]">({game.reviewsCount})</span>
          </div>
        </div>

        {/* Category Icon & Quick Specs Floating Chip */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <IconComponent className={`w-6 h-6 ${styles.badgeBg.includes('text-[#A3E635]') ? 'text-[#A3E635]' : styles.badgeBg.includes('text-[#06B6D4]') ? 'text-[#06B6D4]' : 'text-[#8B5CF6]'}`} />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-300 block">
                {game.tagline.split('&')[0]}
              </span>
              <h3 className="font-heading font-black text-xl sm:text-2xl text-white tracking-wide">
                {game.title}
              </h3>
            </div>
          </div>

          <div className="text-right">
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">Starting at</span>
            <div className="flex items-baseline gap-0.5 justify-end">
              <span className="font-heading font-black text-2xl text-white">${game.pricePerHour}</span>
              <span className="text-xs text-gray-400">/hr</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-5 bg-gradient-to-b from-[#111827] to-[#0D1220]">
        
        {/* Description */}
        <p className="text-sm text-gray-300 line-clamp-2 leading-relaxed">
          {game.description}
        </p>

        {/* Highlighted Specs */}
        <div className="space-y-2 pt-1 border-t border-white/5">
          <div className="flex items-center gap-2 text-xs text-gray-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#06B6D4] shrink-0" />
            <span className="truncate font-medium">{game.specs[0]}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#A3E635] shrink-0" />
            <span className="truncate font-medium">{game.specs[1]}</span>
          </div>
        </div>

        {/* Quick Info Badges */}
        <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-black/40 border border-white/5 text-xs text-gray-300">
          <div className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>Up to {game.maxPlayers} {game.maxPlayers === 1 ? 'Station' : 'Players'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span>Instant Access</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onBookNow(game)}
          className={`w-full py-3 px-5 rounded-xl text-sm font-black tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer transform active:scale-95 ${styles.button}`}
        >
          <span>Book Now</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      {/* Subtle Bottom Neon Indicator Line */}
      <div className={`h-1 w-0 group-hover:w-full transition-all duration-500 ${styles.indicator}`} />
    </motion.div>
  );
}
