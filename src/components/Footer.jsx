import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowUp,
  ArrowUpRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export default function Footer({ onCategoryClick }) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Who Are We', href: '#about-info' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Focus Sports', href: '#services' },
    { name: 'Membership', href: '#facilities' },
    { name: 'Contact', href: '#footer-contact' },
  ];

  const facilitiesLinks = [
    { name: 'Championship Tennis Courts', href: '#facilities' },
    { name: 'Professional ATP/ITF Coaching', href: '#about-info' },
    { name: 'Junior High-Performance Academy', href: '#about-info' },
    { name: 'Annual Club Tournaments', href: '#about-info' },
    { name: 'Exclusive Membership Plans', href: '#facilities' },
  ];

  const socialLinks = [
    { name: 'Discord', href: '#', label: 'Discord Community' },
    { name: 'Instagram', href: '#', label: 'Instagram Feed' },
    { name: 'Twitter/X', href: '#', label: 'X Updates' },
    { name: 'YouTube', href: '#', label: 'Match Highlights' },
  ];

  return (
    <motion.footer
      id="footer-contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-[#061B38] text-white border-t border-[#061B38] overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]"
    >
      {/* 3. Lime Green Animated Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#B9F34B] to-transparent origin-left"
      />

      {/* 6. Subtle atmospheric ambient green glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#003D2C]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#B9F34B]/8 rounded-full blur-[140px] pointer-events-none" />

      {/* 2. Animated Decorative Tennis Ball gliding on gentle background trajectory */}
      <div className="absolute top-12 left-10 pointer-events-none opacity-40 hidden sm:block">
        <motion.div
          animate={{
            x: [0, 80, 160, 80, 0],
            y: [0, -18, 0, 18, 0],
            rotate: [0, 180, 360, 540, 720],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-5 h-5 rounded-full bg-[#B9F34B] shadow-[0_0_12px_rgba(185,243,75,0.6)] flex items-center justify-center"
        >
          <div className="w-4 h-4 rounded-full border border-[#003D2C]/40 border-dashed" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          
          {/* COLUMN 1 – CLUB BRAND (Span 4) */}
          <div className="lg:col-span-4 space-y-5">
            {/* AUROSPORT Club Logo */}
            <div className="flex items-center">
              <div className="p-2 sm:p-2.5 px-3 sm:px-3.5 rounded-2xl bg-white shadow-lg inline-flex items-center">
                <img
                  src="/logo%20(3).png"
                  alt="AUROSPORT"
                  className="h-12 sm:h-14 w-auto max-w-[170px] sm:max-w-[200px] object-contain"
                />
              </div>
            </div>

            <p className="text-sm text-[#697873] leading-relaxed max-w-sm">
              The premier destination for championship clay and lawn tennis, ATP &amp; ITF accredited coaching, and an esteemed sporting community founded on passion and tradition.
            </p>

            {/* Operational Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#003D2C]/60 border border-[#B9F34B]/30 text-xs font-semibold text-[#B9F34B]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B9F34B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B9F34B]"></span>
              </span>
              <span>16 Courts Open &bull; Hawk-Eye Tracking Online</span>
            </div>

            {/* 4. Social Media Icons with scale & hover color transition */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-widest text-white/90 block mb-3">
                Connect With The Club
              </span>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.label}
                    className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#B9F34B] hover:bg-[#B9F34B]/15 hover:text-[#B9F34B] text-xs font-bold text-[#697873] transition-all duration-300 transform hover:scale-105"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 2 – QUICK LINKS (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B9F34B]"></span>
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#697873] hover:text-[#B9F34B] transition-colors flex items-center gap-1.5 group w-fit relative"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                    {/* 5. Smooth underline animation on hover */}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B9F34B] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 – OUR FACILITIES (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B9F34B]"></span>
              Our Facilities
            </h4>
            <ul className="space-y-3 text-sm">
              {facilitiesLinks.map((facility) => (
                <li key={facility.name}>
                  <a
                    href={facility.href}
                    className="text-[#697873] hover:text-[#B9F34B] transition-colors flex items-center gap-2 group w-fit relative"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-white/30 group-hover:text-[#B9F34B] transition-colors" />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                      {facility.name}
                    </span>
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B9F34B] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4 – CONTACT INFORMATION (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B9F34B]"></span>
              Club Concierge
            </h4>
            
            <div className="space-y-3.5 text-xs text-[#697873]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B9F34B] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  404 Cyber Parkway, Downtown Innovation District, CA 94103
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B9F34B] shrink-0" />
                <span className="text-white font-semibold">
                  +1 (800) 942-CLUB (6398)
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B9F34B] shrink-0" />
                <span>concierge@aurosport.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#B9F34B] shrink-0" />
                <span>Open Daily &bull; 06:00 AM &ndash; 11:00 PM</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-[#697873]">
              <span className="text-white font-bold block mb-0.5">Club Parking &amp; Transit:</span>
              <span>Complimentary Valet &bull; Metro Station Exit 2B (2 min walk)</span>
            </div>
          </div>

        </div>

        {/* BOTTOM FOOTER + 7. Back to Top Button */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#697873]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#B9F34B]" />
            <span>&copy; {currentYear} AUROSPORT INC. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#about-info" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#about-info" className="hover:text-white transition-colors">Terms and Conditions</a>
            <a href="#about-info" className="hover:text-white transition-colors">Safety Standards</a>
            <span className="text-[#B9F34B] font-mono">EST. 1928</span>
          </div>

          {/* 7. Circular Back-to-Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="w-10 h-10 rounded-full bg-[#B9F34B] text-[#003D2C] hover:bg-white hover:text-[#003D2C] flex items-center justify-center shadow-[0_4px_16px_rgba(185,243,75,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer shrink-0"
          >
            <ArrowUp className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </motion.footer>
  );
}
