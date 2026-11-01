import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Calendar as CalendarIcon, 
  Clock, 
  Users, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle, 
  ArrowRight,
  Info,
  Zap,
  Ticket,
  Download,
  Share2,
  RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({ game, isOpen, onClose }) {
  if (!isOpen || !game) return null;

  // Format today's date and generate next 4 days
  const today = new Date();
  const dateOptions = Array.from({ length: 4 }).map((_, index) => {
    const d = new Date();
    d.setDate(today.getDate() + index);
    const dayName = index === 0 ? 'Today' : index === 1 ? 'Tomorrow' : d.toLocaleDateString('en-US', { weekday: 'short' });
    const formatted = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const isoDate = d.toISOString().split('T')[0];
    return { label: dayName, sub: formatted, value: isoDate };
  });

  const [selectedDate, setSelectedDate] = useState(dateOptions[0].value);
  const [selectedTime, setSelectedTime] = useState(game.availableSlots[2] || game.availableSlots[0]);
  const [duration, setDuration] = useState(2);
  const [players, setPlayers] = useState(1);
  const [vipPackage, setVipPackage] = useState(false);
  const [step, setStep] = useState('customize'); // 'customize' | 'confirmed'
  const [bookingRef, setBookingRef] = useState('');

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Pricing calculation
  const baseRate = game.pricePerHour;
  const vipRate = vipPackage ? 5 : 0;
  const hourlyTotal = (baseRate + vipRate) * players;
  const totalAmount = hourlyTotal * duration;

  const handleContinueBooking = () => {
    const randomRef = 'NX-' + Math.floor(1000 + Math.random() * 9000) + '-' + game.id.substring(0, 3).toUpperCase();
    setBookingRef(randomRef);
    setStep('confirmed');

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#8B5CF6', '#06B6D4', '#A3E635'],
      });
    } catch {
      // ignore
    }
  };

  const handleReset = () => {
    setStep('customize');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
        
        {/* Backdrop blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-2xl bg-[#0F172A] border border-white/15 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden z-10 flex flex-col max-h-[92vh]"
        >
          {/* Header Banner */}
          <div className="relative h-32 sm:h-36 overflow-hidden shrink-0">
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-full object-cover filter brightness-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-black/50" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-gray-300 hover:text-white hover:bg-white/10 transition-colors z-20 border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Banner Titles */}
            <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between z-10">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#06B6D4] bg-[#06B6D4]/15 px-2.5 py-0.5 rounded-full border border-[#06B6D4]/30 inline-block mb-1">
                  {game.badge}
                </span>
                <h2 className="font-heading font-black text-2xl sm:text-3xl text-white">
                  {game.title}
                </h2>
              </div>
              <div className="text-right hidden sm:block">
                <span className="text-xs text-gray-400 block">Base Rate</span>
                <span className="font-heading font-black text-xl text-[#A3E635]">
                  ${game.pricePerHour}<span className="text-xs text-gray-400">/hr per player</span>
                </span>
              </div>
            </div>
          </div>

          {/* Modal Body Container */}
          <div className="p-6 sm:p-7 overflow-y-auto space-y-6">
            
            {step === 'customize' ? (
              <>
                {/* 1. Date Selector */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5 mb-2.5">
                    <CalendarIcon className="w-4 h-4 text-[#8B5CF6]" />
                    Select Reservation Date
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {dateOptions.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setSelectedDate(opt.value)}
                        className={`py-2.5 px-3 rounded-xl border text-center transition-all duration-200 cursor-pointer ${
                          selectedDate === opt.value
                            ? 'bg-[#8B5CF6]/20 border-[#8B5CF6] text-white shadow-neon-purple'
                            : 'bg-[#1E293B]/60 border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                        }`}
                      >
                        <div className="font-bold text-sm">{opt.label}</div>
                        <div className="text-[11px] opacity-75">{opt.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Time Slot Selector */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5 mb-2.5">
                    <Clock className="w-4 h-4 text-[#06B6D4]" />
                    Select Available Time Slot
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {game.availableSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`py-2 px-3 rounded-lg border text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer ${
                          selectedTime === slot
                            ? 'bg-[#06B6D4]/20 border-[#06B6D4] text-white shadow-neon-cyan'
                            : 'bg-[#1E293B]/60 border-white/10 text-gray-300 hover:text-white hover:border-white/20'
                        }`}
                      >
                        <span>{slot}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Duration & Players Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Duration */}
                  <div className="bg-[#1E293B]/40 border border-white/10 rounded-xl p-3.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center justify-between mb-2">
                      <span className="flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-[#A3E635]" />
                        Session Duration
                      </span>
                      <span className="text-[#A3E635] font-black">{duration} {duration === 1 ? 'Hour' : 'Hours'}</span>
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4].map((hrs) => (
                        <button
                          key={hrs}
                          type="button"
                          onClick={() => setDuration(hrs)}
                          className={`flex-1 py-1.5 rounded-lg border text-xs font-bold transition-all duration-200 ${
                            duration === hrs
                              ? 'bg-[#A3E635]/20 border-[#A3E635] text-white'
                              : 'bg-black/40 border-white/10 text-gray-400 hover:text-white'
                          }`}
                        >
                          {hrs}h
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Players / Rigs Counter */}
                  <div className="bg-[#1E293B]/40 border border-white/10 rounded-xl p-3.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center justify-between mb-2">
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#8B5CF6]" />
                        Players / Stations
                      </span>
                      <span className="text-white font-black">
                        {players} {players === 1 ? 'Player' : 'Players'}
                      </span>
                    </label>
                    <div className="flex items-center justify-between bg-black/40 border border-white/10 rounded-lg p-1">
                      <button
                        type="button"
                        onClick={() => setPlayers(Math.max(1, players - 1))}
                        disabled={players <= 1}
                        className="w-8 h-7 rounded bg-white/5 hover:bg-white/15 text-white disabled:opacity-30 disabled:cursor-not-allowed font-bold"
                      >
                        -
                      </button>
                      <span className="font-heading font-bold text-white text-sm">
                        {players} of max {game.maxPlayers}
                      </span>
                      <button
                        type="button"
                        onClick={() => setPlayers(Math.min(game.maxPlayers, players + 1))}
                        disabled={players >= game.maxPlayers}
                        className="w-8 h-7 rounded bg-white/5 hover:bg-white/15 text-white disabled:opacity-30 disabled:cursor-not-allowed font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* 4. VIP Upgrade Option */}
                <div
                  onClick={() => setVipPackage(!vipPackage)}
                  className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    vipPackage
                      ? 'bg-gradient-to-r from-[#8B5CF6]/20 to-[#06B6D4]/20 border-[#8B5CF6] shadow-neon-purple'
                      : 'bg-[#1E293B]/40 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${vipPackage ? 'bg-[#8B5CF6] text-white' : 'bg-black/40 text-gray-400'}`}>
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-2">
                        <span>VIP Tournament Pass</span>
                        <span className="text-[10px] uppercase font-bold text-[#A3E635] bg-[#A3E635]/15 px-2 py-0.5 rounded border border-[#A3E635]/30">
                          +$5/hr
                        </span>
                      </div>
                      <p className="text-xs text-gray-400">
                        Unlimited gaming energy drinks, pro audio preset, & zero wait-time booth.
                      </p>
                    </div>
                  </div>

                  <input
                    type="checkbox"
                    checked={vipPackage}
                    onChange={() => {}}
                    className="w-5 h-5 accent-[#8B5CF6] rounded pointer-events-none"
                  />
                </div>

                {/* 5. Summary & Price Breakdown */}
                <div className="bg-black/50 border border-white/10 rounded-2xl p-4 space-y-2">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>Base Station ({players} {players === 1 ? 'Station' : 'Stations'} × {duration}h):</span>
                    <span className="text-white">${baseRate * players * duration}</span>
                  </div>
                  {vipPackage && (
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>VIP Pass ({players} {players === 1 ? 'Player' : 'Players'} × {duration}h):</span>
                      <span className="text-[#A3E635]">+${vipRate * players * duration}</span>
                    </div>
                  )}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-xs uppercase font-bold text-gray-400 tracking-wider block">Estimated Total</span>
                      <span className="text-[11px] text-gray-400">Taxes included • Pay on arrival or online</span>
                    </div>
                    <div className="font-heading font-black text-2xl text-white">
                      ${totalAmount}
                    </div>
                  </div>
                </div>

                {/* Continue Booking CTA Button */}
                <button
                  type="button"
                  onClick={handleContinueBooking}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#8B5CF6] via-[#6366F1] to-[#06B6D4] hover:from-[#7C3AED] hover:to-[#0891B2] text-white font-heading font-black tracking-wider text-base uppercase shadow-neon-purple transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95 cursor-pointer"
                >
                  <span>Continue Booking</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </>
            ) : (
              /* Confirmation / Ticket View */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#A3E635]/20 border-2 border-[#A3E635] mx-auto flex items-center justify-center text-[#A3E635] shadow-neon-lime">
                  <CheckCircle className="w-9 h-9" />
                </div>

                <div>
                  <h3 className="font-heading font-black text-2xl text-white">
                    Reservation Confirmed!
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
                    Your gaming booth has been reserved. Show this digital pass upon arrival.
                  </p>
                </div>

                {/* Digital Ticket Card */}
                <div className="relative rounded-2xl bg-gradient-to-b from-[#1E293B] to-[#0F172A] border border-[#8B5CF6]/50 p-6 text-left shadow-2xl">
                  {/* Decorative glowing notches */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#06B6D4] tracking-widest block">
                        Pass Reference
                      </span>
                      <span className="font-heading font-black text-lg text-white">
                        {bookingRef}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest block">
                        Category
                      </span>
                      <span className="font-bold text-sm text-[#A3E635]">
                        {game.title}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 py-4 text-xs">
                    <div>
                      <span className="text-gray-400 block">Date</span>
                      <span className="font-bold text-white text-sm">{selectedDate}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block">Time Slot</span>
                      <span className="font-bold text-white text-sm">{selectedTime} ({duration}h)</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block">Players</span>
                      <span className="font-bold text-white text-sm">{players} {players === 1 ? 'Station' : 'Players'}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block">Total Due</span>
                      <span className="font-heading font-black text-white text-base">${totalAmount}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
                    <span className="flex items-center gap-1 text-[#A3E635]">
                      <ShieldCheck className="w-4 h-4" /> Booth Guaranteed
                    </span>
                    <span>NEXUS ARENA Station #0{Math.floor(Math.random() * 8) + 1}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={onClose}
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] text-white font-bold text-sm tracking-wide shadow-neon-purple transition-all"
                  >
                    Done & Return
                  </button>
                  <button
                    onClick={handleReset}
                    className="py-3 px-4 rounded-xl bg-[#1E293B] border border-white/10 text-gray-300 hover:text-white font-bold text-sm flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Modify Details
                  </button>
                </div>
              </motion.div>
            )}

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
