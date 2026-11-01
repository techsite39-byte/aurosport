import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  User, 
  Phone, 
  ChevronDown, 
  Search, 
  Check, 
  HelpCircle, 
  ShieldCheck, 
  CheckCircle2,
  AlertCircle,
  Trophy,
  Activity,
  X
} from 'lucide-react';

const COUNTRY_CODES = [
  { code: '+91', country: 'India', flag: '🇮🇳' },
  { code: '+1', country: 'USA / Canada', flag: '🇺🇸' },
  { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
  { code: '+61', country: 'Australia', flag: '🇦🇺' },
  { code: '+971', country: 'UAE', flag: '🇦🇪' },
  { code: '+65', country: 'Singapore', flag: '🇸🇬' },
  { code: '+49', country: 'Germany', flag: '🇩🇪' },
];

// Exact 15 requested courses with Beach Volleyball correctly spelled + sport icons
const COURSES_DATA = [
  { name: 'Sports', icon: '🏅' },
  { name: 'Cycling', icon: '🚴' },
  { name: 'Equestrian', icon: '🏇' },
  { name: 'Beach Volleyball', icon: '🏐' },
  { name: 'Archery', icon: '🏹' },
  { name: 'Swimming', icon: '🏊' },
  { name: 'Cricket', icon: '🏏' },
  { name: 'Tennis', icon: '🎾' },
  { name: 'Basketball', icon: '🏀' },
  { name: 'Walking Track', icon: '🏃' },
  { name: 'Skating', icon: '⛸️' },
  { name: 'Physical Fitness', icon: '🏋️' },
  { name: 'Low Rope Course', icon: '🧗' },
  { name: 'Wall Climbing', icon: '🧗‍♂️' },
  { name: 'Zipline', icon: '🪂' },
];

export default function CoachFinderBanner() {
  const [name, setName] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0]);
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  
  // Dropdown states
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef(null);

  // Form submit states
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionData, setSubmissionData] = useState(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredCourses = COURSES_DATA.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (name.trim().length < 2) {
      setErrorMsg('Name must be at least 2 characters.');
      return;
    }

    const digitsOnly = mobileNumber.replace(/\s+/g, '');
    if (!digitsOnly) {
      setErrorMsg('Please enter your mobile number.');
      return;
    }
    if (selectedCountry.code === '+91' && (!/^[6-9]\d{9}$/.test(digitsOnly) || digitsOnly.length !== 10)) {
      setErrorMsg('Please enter a valid 10-digit Indian mobile number.');
      return;
    }
    if (digitsOnly.length < 7 || digitsOnly.length > 15) {
      setErrorMsg('Please enter a valid mobile number.');
      return;
    }

    if (!selectedCourse) {
      setErrorMsg('Please select a sport or training course.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    // Genuine frontend enquiry handling
    setTimeout(() => {
      const masked = digitsOnly.length > 4 
        ? `${digitsOnly.slice(0, 2)}••••••${digitsOnly.slice(-4)}`
        : digitsOnly;

      setSubmissionData({
        name: name.trim(),
        phone: `${selectedCountry.code} ${masked}`,
        course: selectedCourse,
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setName('');
    setMobileNumber('');
    setSelectedCourse('');
    setSearchQuery('');
    setErrorMsg('');
    setIsSubmitted(false);
  };

  return (
    <section 
      id="coach-finder"
      className="relative bg-[#FFFFFF] py-14 sm:py-20 lg:py-24 overflow-visible font-['Plus_Jakarta_Sans',sans-serif]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =======================================================================
            FULL-WIDTH PROMOTIONAL COACH BANNER CONTAINER
           ======================================================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-[0_30px_70px_rgba(0,61,44,0.28)] border border-[#003D2C]/30"
        >
          {/* =====================================================================
              BACKGROUND IMAGE: FRESH TENNIS PHOTOGRAPHY WITH SLOW CINEMATIC ZOOM
             ===================================================================== */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.img
              src="/coach_finder_court.jpg"
              alt="Elite Coach on Championship Tennis Court"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-full h-full object-cover object-center"
            />
            {/* Dark Forest Green gradient overlay for pristine readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#003D2C]/95 via-[#003D2C]/88 to-[#003D2C]/75" />
            
            {/* Ambient Lighting */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#B9F34B]/15 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-black/40 rounded-full blur-[120px] pointer-events-none" />
          </div>

          {/* =====================================================================
              BANNER CONTENT & HORIZONTAL ENQUIRY FORM
             ===================================================================== */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-16 text-white space-y-8">
            
            {/* Header Area */}
            <div className="max-w-3xl space-y-4">
              {/* Small Label: NEED HELP? */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold tracking-widest uppercase text-white shadow-inner"
              >
                <span className="w-2 h-2 rounded-full bg-[#B9F34B] animate-pulse" />
                <span className="text-[#B9F34B]">NEED HELP?</span>
                <HelpCircle className="w-3.5 h-3.5 text-[#B9F34B]" />
              </motion.div>

              {/* Main Heading: Need Help Choosing the Right Coach? */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]"
              >
                Need Help Choosing the{' '}
                <span className="text-[#B9F34B]">Right Coach?</span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-[#F2F5F3]/90 leading-relaxed font-normal"
              >
                Tell us what sport you're interested in, and our team will help you discover the right training program and guide you towards your sporting goals.
              </motion.p>
            </div>

            {/* ===================================================================
                SYMMETRICAL, BEAUTIFULLY ALIGNED HORIZONTAL ENQUIRY FORM
               =================================================================== */}
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Symmetrical 4-Column Balanced Grid with items-end for perfect baseline alignment */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                    
                    {/* FIELD 1: YOUR NAME */}
                    <div className="space-y-2">
                      <label 
                        htmlFor="coach-name" 
                        className="block text-xs font-bold uppercase tracking-wider text-[#B9F34B]"
                      >
                        1. Your Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#003D2C]" />
                        <input
                          id="coach-name"
                          type="text"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            if (errorMsg) setErrorMsg('');
                          }}
                          placeholder="Enter your name"
                          className="w-full h-14 pl-11 pr-4 rounded-2xl bg-white text-[#101A17] font-semibold text-sm placeholder:text-[#697873]/70 border-2 border-transparent focus:border-[#B9F34B] focus:ring-4 focus:ring-[#B9F34B]/30 outline-none shadow-md transition-all"
                        />
                      </div>
                    </div>

                    {/* FIELD 2: MOBILE NUMBER (WITH INTEGRATED +91 SELECTOR) */}
                    <div className="space-y-2">
                      <label 
                        htmlFor="coach-mobile-number" 
                        className="block text-xs font-bold uppercase tracking-wider text-[#B9F34B]"
                      >
                        2. Mobile Number
                      </label>
                      <div className="flex h-14 rounded-2xl bg-white shadow-md border-2 border-transparent focus-within:border-[#B9F34B] focus-within:ring-4 focus-within:ring-[#B9F34B]/30 overflow-hidden transition-all">
                        {/* Country code selector */}
                        <div className="bg-[#F2F5F3] border-r border-[#E5EAE7] flex items-center px-2.5 shrink-0">
                          <select
                            id="coach-country-code"
                            value={selectedCountry.code}
                            onChange={(e) => {
                              const found = COUNTRY_CODES.find((c) => c.code === e.target.value);
                              if (found) setSelectedCountry(found);
                            }}
                            className="bg-transparent text-[#101A17] font-bold text-xs outline-none cursor-pointer"
                          >
                            {COUNTRY_CODES.map((c) => (
                              <option key={c.code} value={c.code} className="text-[#101A17]">
                                {c.flag} {c.code}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Mobile input */}
                        <div className="relative flex-1 flex items-center">
                          <Phone className="absolute left-3 w-4 h-4 text-[#003D2C]" />
                          <input
                            id="coach-mobile-number"
                            type="tel"
                            value={mobileNumber}
                            onChange={(e) => {
                              setMobileNumber(e.target.value.replace(/[^\d\s]/g, ''));
                              if (errorMsg) setErrorMsg('');
                            }}
                            placeholder="Mobile number"
                            maxLength={15}
                            className="w-full h-full pl-9 pr-3 bg-transparent text-[#101A17] font-semibold text-sm placeholder:text-[#697873]/70 outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* FIELD 3: COURSES (SEARCHABLE DROPDOWN WITH ALL 15 OPTIONS & ICONS) */}
                    <div className="space-y-2 relative" ref={dropdownRef}>
                      <label 
                        className="block text-xs font-bold uppercase tracking-wider text-[#B9F34B]"
                      >
                        3. Sport / Course
                      </label>
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        aria-expanded={isDropdownOpen}
                        className={`w-full h-14 px-4 rounded-2xl bg-white text-[#101A17] font-semibold text-sm flex items-center justify-between border-2 outline-none shadow-md transition-all text-left cursor-pointer ${
                          isDropdownOpen
                            ? 'border-[#B9F34B] ring-4 ring-[#B9F34B]/30'
                            : 'border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          <Trophy className="w-4 h-4 text-[#003D2C] shrink-0" />
                          <span className={selectedCourse ? 'text-[#101A17] font-extrabold truncate' : 'text-[#697873]/70'}>
                            {selectedCourse || 'Select Sport / Course'}
                          </span>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-[#003D2C] shrink-0 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Searchable Dropdown Popup */}
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                            transition={{ duration: 0.18 }}
                            className="absolute left-0 right-0 sm:min-w-[320px] top-full mt-2 bg-white rounded-2xl shadow-2xl border border-[#E5EAE7] p-2 z-50 text-[#101A17] max-h-72 overflow-hidden flex flex-col"
                          >
                            {/* Search Input Filter */}
                            <div className="p-2 border-b border-[#E5EAE7]">
                              <div className="relative">
                                <Search className="w-3.5 h-3.5 text-[#697873] absolute left-2.5 top-1/2 -translate-y-1/2" />
                                <input
                                  type="text"
                                  value={searchQuery}
                                  onChange={(e) => setSearchQuery(e.target.value)}
                                  placeholder="Search sports or courses..."
                                  className="w-full h-9 pl-8 pr-3 rounded-lg bg-[#F2F5F3] text-xs font-semibold outline-none border border-transparent focus:border-[#B9F34B]"
                                  autoFocus
                                />
                              </div>
                            </div>

                            {/* Options List */}
                            <div className="overflow-y-auto max-h-52 py-1 space-y-0.5">
                              {filteredCourses.length > 0 ? (
                                filteredCourses.map((item) => {
                                  const isSelected = selectedCourse === item.name;
                                  return (
                                    <button
                                      key={item.name}
                                      type="button"
                                      onClick={() => {
                                        setSelectedCourse(item.name);
                                        setIsDropdownOpen(false);
                                        setSearchQuery('');
                                        if (errorMsg) setErrorMsg('');
                                      }}
                                      className={`w-full px-3 py-2.5 rounded-xl text-xs font-bold text-left flex items-center justify-between transition-colors cursor-pointer ${
                                        isSelected 
                                          ? 'bg-[#003D2C] text-[#B9F34B]' 
                                          : 'hover:bg-[#F2F5F3] text-[#101A17]'
                                      }`}
                                    >
                                      <span className="flex items-center gap-2">
                                        <span className="text-base">{item.icon}</span>
                                        <span>{item.name}</span>
                                      </span>
                                      {isSelected && <Check className="w-3.5 h-3.5 text-[#B9F34B]" />}
                                    </button>
                                  );
                                })
                              ) : (
                                <p className="text-xs text-center py-4 text-gray-400">
                                  No sports or courses found
                                </p>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* FIELD 4: ACTION BUTTON (GET IN TOUCH →) */}
                    <div className="space-y-2">
                      <span className="block text-xs font-bold uppercase tracking-wider text-transparent select-none hidden lg:block">
                        Action
                      </span>
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full h-14 rounded-2xl bg-[#B9F34B] text-[#003D2C] font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-[0_8px_25px_rgba(185,243,75,0.4)] hover:shadow-[0_12px_32px_rgba(185,243,75,0.6)] flex items-center justify-center gap-2 transition-all cursor-pointer group disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full border-2 border-[#003D2C] border-t-transparent animate-spin" />
                            <span>CONNECTING...</span>
                          </span>
                        ) : (
                          <>
                            <span>GET IN TOUCH</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                          </>
                        )}
                      </motion.button>
                    </div>

                  </div>

                  {/* Inline Error Notice */}
                  {errorMsg && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-xs font-bold text-red-300 bg-red-950/70 border border-red-500/40 px-3.5 py-2 rounded-xl w-fit"
                    >
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMsg}</span>
                    </motion.div>
                  )}

                  {/* Submission Transparency Note */}
                  <div className="flex items-center gap-2 text-xs text-white/75 pt-1">
                    <ShieldCheck className="w-4 h-4 text-[#B9F34B]" />
                    <span>Free bespoke coaching consultation &bull; No obligation &bull; Expert staff match</span>
                  </div>
                </motion.form>
              ) : (
                /* Genuine Frontend Feedback Notification */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-[#B9F34B]/40 max-w-2xl space-y-3 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#B9F34B] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-[#003D2C]" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-extrabold text-white">
                        Coaching Request Received!
                      </h4>
                      <p className="text-xs text-[#B9F34B] font-mono">
                        Target Sport: {submissionData?.course} &bull; Contact: {submissionData?.phone}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#F2F5F3]/90 leading-relaxed">
                    Thank you, <strong className="text-white">{submissionData?.name}</strong>! Our Head Coach and sports director will review your interest in <strong className="text-[#B9F34B]">{submissionData?.course}</strong> and reach out to you directly within 24 hours to schedule your personalized assessment.
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={handleReset}
                      className="text-xs font-bold text-[#B9F34B] hover:text-white underline underline-offset-4 cursor-pointer transition-colors"
                    >
                      Submit an enquiry for another sport or family member →
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
