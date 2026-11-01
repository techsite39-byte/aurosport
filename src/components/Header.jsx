import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronRight } from 'lucide-react';

export default function Header({ onBookNow, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  // Exact 6 navigation items in exact order required
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Who Are We', href: '#about-info' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Focus Sports', href: '#services' },
    { name: 'Membership', href: '#facilities' },
    { name: 'Contact', href: '#footer-contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 30);

      // Scroll Spy to highlight active section
      const servicesEl = document.getElementById('services');
      const facilitiesEl = document.getElementById('facilities');
      const aboutEl = document.getElementById('about-info');
      const footerEl = document.getElementById('footer-contact');

      if (footerEl && scrollPos >= footerEl.offsetTop - 300) {
        setActiveNav('Contact');
      } else if (servicesEl && scrollPos >= servicesEl.offsetTop - 200) {
        setActiveNav('Focus Sports');
      } else if (facilitiesEl && scrollPos >= facilitiesEl.offsetTop - 200) {
        setActiveNav('Facilities');
      } else if (aboutEl && scrollPos >= aboutEl.offsetTop - 200) {
        setActiveNav('Who Are We');
      } else {
        setActiveNav('Home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (linkName, href) => {
    setActiveNav(linkName);
    setMobileMenuOpen(false);

    if (onNavigate) {
      onNavigate(href);
    } else {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleBookNowClick = () => {
    setMobileMenuOpen(false);
    if (onBookNow) {
      onBookNow();
    }
    const el = document.getElementById('categories');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-['Plus_Jakarta_Sans',sans-serif] ${
        isScrolled
          ? 'shadow-[0_4px_24px_rgba(0,61,44,0.08)]'
          : ''
      }`}
    >


      {/* 2. Main Navigation Bar in Pure White (#FFFFFF) */}
      <nav className="bg-[#FFFFFF] border-b border-[#E5EAE7] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* AUROSPORT Brand Logo on the Left */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('Home', '#hero');
              }}
              className="flex items-center group focus:outline-none shrink-0 py-1"
              aria-label="AUROSPORT Home"
            >
              <img
                src="/logo%20(3).png"
                alt="AUROSPORT"
                className="h-12 sm:h-14 lg:h-16 w-auto max-w-[170px] sm:max-w-[200px] object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            {/* Desktop Navigation Links (Center / Right) */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => {
                const isActive = activeNav === link.name;
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.name, link.href)}
                    className={`relative py-2 text-[14.5px] font-semibold tracking-[-0.01em] transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? 'text-[#003D2C]'
                        : 'text-[#697873] hover:text-[#003D2C]'
                    }`}
                  >
                    <span>{link.name}</span>

                    {/* Active Navigation Item: Lime Green underline / highlight */}
                    {isActive ? (
                      <motion.div
                        layoutId="activeNavTennisIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#B9F34B] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    ) : (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#003D2C]/40 transition-all duration-200 group-hover:w-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Tablet Navigation Links (Medium Screens) */}
            <div className="hidden md:flex lg:hidden items-center gap-3.5">
              {navLinks.map((link) => {
                const isActive = activeNav === link.name;
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.name, link.href)}
                    className={`relative py-1.5 text-[13px] font-semibold tracking-tight transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? 'text-[#003D2C]'
                        : 'text-[#697873] hover:text-[#003D2C]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#B9F34B] rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* BOOK NOW Button at the Far Right */}
            <div className="hidden sm:flex items-center shrink-0">
              <button
                type="button"
                onClick={handleBookNowClick}
                className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#B9F34B] text-[#003D2C] hover:bg-[#003D2C] hover:text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_4px_16px_rgba(185,243,75,0.35)] hover:shadow-[0_6px_20px_rgba(0,61,44,0.25)] transform active:scale-95 cursor-pointer border border-[#B9F34B] hover:border-[#003D2C]"
              >
                <span>BOOK NOW</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#003D2C] group-hover:text-white" />
              </button>
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-[#F2F5F3] border border-[#E5EAE7] text-[#003D2C] hover:bg-[#E5EAE7] transition-colors focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#003D2C]" />
                ) : (
                  <Menu className="w-6 h-6 text-[#003D2C]" />
                )}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* 3. Mobile Responsive Navigation Panel (Full-Screen / Side Drawer) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white border-b border-[#E5EAE7] shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-5">
              
              {/* Mobile Navigation Links */}
              <div className="space-y-1">
                {navLinks.map((link, idx) => {
                  const isActive = activeNav === link.name;
                  return (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link.name, link.href)}
                      className={`w-full flex items-center justify-between py-3.5 px-4 rounded-xl text-base font-semibold transition-all duration-200 text-left ${
                        isActive
                          ? 'bg-[#F2F5F3] text-[#003D2C] font-bold border-l-4 border-[#B9F34B]'
                          : 'text-[#101A17] hover:bg-[#F2F5F3] hover:text-[#003D2C]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-[#697873]">
                          0{idx + 1}
                        </span>
                        <span>{link.name}</span>
                      </div>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#003D2C]' : 'text-[#697873]'}`} />
                    </button>
                  );
                })}
              </div>

              {/* Prominent Pill-Shaped BOOK NOW Button */}
              <div className="pt-2 border-t border-[#E5EAE7]">
                <button
                  type="button"
                  onClick={handleBookNowClick}
                  className="w-full py-3.5 px-6 rounded-full bg-[#B9F34B] text-[#003D2C] hover:bg-[#003D2C] hover:text-white font-bold text-base tracking-wide transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(185,243,75,0.4)] border border-[#B9F34B]"
                >
                  <span>BOOK NOW</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Concierge Info in Mobile Drawer */}
              <div className="bg-[#F2F5F3] rounded-xl p-3.5 flex items-center justify-between text-xs text-[#697873] border border-[#E5EAE7]">
                <span>Club Concierge</span>
                <span className="font-bold text-[#003D2C]">(800) 942-CLUB</span>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
