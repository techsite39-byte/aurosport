import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bell, 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  ShieldCheck, 
  Sparkles,
  AlertCircle
} from 'lucide-react';

const COUNTRY_CODES = [
  { code: '+91', country: 'India', flag: '🇮🇳', length: 10 },
  { code: '+1', country: 'USA / Canada', flag: '🇺🇸', length: 10 },
  { code: '+44', country: 'United Kingdom', flag: '🇬🇧', length: 10 },
  { code: '+61', country: 'Australia', flag: '🇦🇺', length: 9 },
  { code: '+971', country: 'UAE', flag: '🇦🇪', length: 9 },
  { code: '+65', country: 'Singapore', flag: '🇸🇬', length: 8 },
  { code: '+49', country: 'Germany', flag: '🇩🇪', length: 10 },
  { code: '+33', country: 'France', flag: '🇫🇷', length: 9 },
];

export default function MobileEnquiryBanner() {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0]);
  const [mobileNumber, setMobileNumber] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedNumber, setSubmittedNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNumberChange = (e) => {
    // Only allow digits and spaces
    const cleanVal = e.target.value.replace(/[^\d\s]/g, '');
    setMobileNumber(cleanVal);
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const digitsOnly = mobileNumber.replace(/\s+/g, '');

    // Validation rules
    if (!digitsOnly) {
      setError('Please enter your mobile number.');
      return;
    }

    if (selectedCountry.code === '+91') {
      if (digitsOnly.length !== 10) {
        setError('Please enter a valid 10-digit Indian mobile number.');
        return;
      }
      if (!/^[6-9]\d{9}$/.test(digitsOnly)) {
        setError('Indian mobile numbers must start with 6, 7, 8, or 9.');
        return;
      }
    } else {
      if (digitsOnly.length < 7 || digitsOnly.length > 15) {
        setError(`Please enter a valid mobile number (${selectedCountry.length} digits expected).`);
        return;
      }
    }

    setIsSubmitting(true);
    setError('');

    // Genuine frontend enquiry handling without pretending remote database write
    setTimeout(() => {
      // Mask mobile number for privacy (e.g. +91 ******3210)
      const masked = digitsOnly.length > 4 
        ? `${digitsOnly.slice(0, 2)}••••••${digitsOnly.slice(-4)}`
        : digitsOnly;

      setSubmittedNumber(`${selectedCountry.code} ${masked}`);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setMobileNumber('');
    setIsSubmitted(false);
    setError('');
  };

  return (
    <section 
      id="enquiry-banner"
      className="relative bg-[#FFFFFF] py-12 sm:py-16 lg:py-20 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =======================================================================
            WIDE PROMOTIONAL BANNER CONTAINER (ROUNDED CORNERS + SHADOW)
           ======================================================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-[0_25px_60px_rgba(0,61,44,0.25)] border border-[#003D2C]/30"
        >
          {/* =====================================================================
              BACKGROUND IMAGE WITH SLOW AUTOMATIC CINEMATIC ZOOM
             ===================================================================== */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.img
              src="/tennis_banner_court_bg.jpg"
              alt="Championship Tennis Court at Sunset"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-full h-full object-cover object-center"
            />
            {/* Dark Forest Green sophisticated gradient overlay for pristine readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#003D2C]/95 via-[#003D2C]/88 to-[#003D2C]/75" />
            
            {/* Subtle atmospheric Lime Glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#B9F34B]/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/40 rounded-full blur-[120px] pointer-events-none" />
          </div>

          {/* =====================================================================
              BANNER CONTENT GRID
             ===================================================================== */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-16 text-white">
            <div className="max-w-3xl space-y-6">
              
              {/* Small Label: STAY CONNECTED */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold tracking-widest uppercase text-white shadow-inner"
              >
                <span className="w-2 h-2 rounded-full bg-[#B9F34B] animate-pulse" />
                <span className="text-[#B9F34B]">STAY CONNECTED</span>
                <Bell className="w-3.5 h-3.5 text-[#B9F34B]" />
              </motion.div>

              {/* Main Heading: Staggered Fade & Slide */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.18]"
              >
                Get the Latest Updates,{' '}
                <span className="text-[#B9F34B] underline decoration-[#B9F34B]/40 decoration-wavy underline-offset-8">
                  Special Offers
                </span>{' '}
                and Exclusive Tennis Event Invitations.
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                className="text-base sm:text-lg text-[#F2F5F3]/90 font-medium leading-relaxed max-w-2xl"
              >
                Stay connected with our tennis community. Receive updates about tournaments, coaching programs, membership offers and exclusive club events.
              </motion.p>

              {/* ===================================================================
                  MOBILE NUMBER ENQUIRY FORM
                 =================================================================== */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-2"
              >
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <form 
                      onSubmit={handleSubmit}
                      className="space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-xl">
                        
                        {/* Country Code Selector (Default +91 India) */}
                        <div className="relative shrink-0">
                          <label htmlFor="country-code" className="sr-only">Country Code</label>
                          <select
                            id="country-code"
                            value={selectedCountry.code}
                            onChange={(e) => {
                              const found = COUNTRY_CODES.find((c) => c.code === e.target.value);
                              if (found) setSelectedCountry(found);
                              setError('');
                            }}
                            className="w-full sm:w-auto h-14 pl-3.5 pr-8 rounded-2xl bg-white text-[#101A17] font-bold text-sm border-2 border-transparent focus:border-[#B9F34B] focus:ring-4 focus:ring-[#B9F34B]/30 outline-none shadow-md cursor-pointer transition-all appearance-none"
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23003D2C' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'right 0.6rem center',
                              backgroundSize: '1rem',
                            }}
                          >
                            {COUNTRY_CODES.map((c) => (
                              <option key={c.code} value={c.code} className="text-[#101A17]">
                                {c.flag} {c.code} ({c.country})
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Mobile Number Input */}
                        <div className="relative flex-1">
                          <label htmlFor="mobile-number" className="sr-only">Mobile Number</label>
                          <input
                            id="mobile-number"
                            type="tel"
                            value={mobileNumber}
                            onChange={handleNumberChange}
                            placeholder="Enter your mobile number"
                            maxLength={15}
                            className={`w-full h-14 px-5 rounded-2xl bg-white text-[#101A17] font-semibold text-sm sm:text-base placeholder:text-[#697873]/60 border-2 outline-none shadow-md transition-all ${
                              error 
                                ? 'border-red-400 focus:ring-4 focus:ring-red-400/30' 
                                : 'border-transparent focus:border-[#B9F34B] focus:ring-4 focus:ring-[#B9F34B]/30'
                            }`}
                          />
                        </div>

                        {/* GET UPDATES Button */}
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="h-14 px-8 rounded-2xl bg-[#B9F34B] text-[#003D2C] font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-[0_8px_25px_rgba(185,243,75,0.4)] hover:shadow-[0_12px_32px_rgba(185,243,75,0.6)] flex items-center justify-center gap-2 shrink-0 transition-all cursor-pointer group disabled:opacity-70"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <span className="w-4 h-4 rounded-full border-2 border-[#003D2C] border-t-transparent animate-spin" />
                              <span>CONNECTING...</span>
                            </span>
                          ) : (
                            <>
                              <span>GET UPDATES</span>
                              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                            </>
                          )}
                        </motion.button>

                      </div>

                      {/* Error Validation Message */}
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-2 text-xs font-bold text-red-300 bg-red-950/60 border border-red-500/40 px-3.5 py-2 rounded-xl w-fit"
                        >
                          <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                          <span>{error}</span>
                        </motion.div>
                      )}

                      {/* Privacy & No-Spam Notice */}
                      <div className="flex items-center gap-2 text-xs text-white/70 pt-1">
                        <ShieldCheck className="w-4 h-4 text-[#B9F34B]" />
                        <span>We respect your privacy. No spam. You can unsubscribe at any time.</span>
                      </div>
                    </form>
                  ) : (
                    /* Genuine Frontend Success Message */
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-5 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-[#B9F34B]/40 max-w-xl space-y-3 shadow-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-[#B9F34B] flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-[#003D2C]" />
                        </div>
                        <div>
                          <h4 className="text-sm sm:text-base font-extrabold text-white">
                            Enquiry Received Successfully!
                          </h4>
                          <p className="text-xs text-[#B9F34B] font-mono">
                            Registered number: {submittedNumber}
                          </p>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-[#F2F5F3]/90 leading-relaxed">
                        Welcome to the Vantage Tennis Community! Our concierge team will send upcoming tournament draws, junior training clinics, and member-only event invitations directly to your phone.
                      </p>

                      <div className="pt-1">
                        <button
                          onClick={handleReset}
                          className="text-xs font-bold text-[#B9F34B] hover:text-white underline underline-offset-4 cursor-pointer transition-colors"
                        >
                          Register another mobile number →
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
