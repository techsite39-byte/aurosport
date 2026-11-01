import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Volume2, ShieldCheck, Sparkles } from 'lucide-react';

export default function ClubTourModal({ 
  isOpen, 
  onClose, 
  videoUrl = "https://www.youtube.com/embed/gW3pT7d0Nqk?autoplay=1&mute=0&rel=0&modestbranding=1" 
}) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#003D2C]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-[#00281D] rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-10"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#003D2C] border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#B9F34B] flex items-center justify-center text-[#003D2C]">
                  <Play className="w-4 h-4 fill-[#003D2C]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base sm:text-lg tracking-tight">
                    AUROSPORT &mdash; Club Experience Tour
                  </h3>
                  <p className="text-white/60 text-xs">
                    Championship Courts &bull; Clubhouse &bull; Player Facilities
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
                aria-label="Close Tour Video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Area */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              {videoUrl?.endsWith('.mp4') || videoUrl?.includes('.mp4') || videoUrl?.startsWith('/') ? (
                <video
                  src={videoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              ) : (
                <iframe
                  src={videoUrl}
                  title="AUROSPORT Virtual Tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              )}
            </div>

            {/* Modal Footer Note */}
            <div className="px-6 py-3.5 bg-[#002218] flex flex-wrap items-center justify-between gap-3 text-xs text-white/70">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B9F34B]" />
                <span>Private tours available daily with our Master Concierge</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#B9F34B]" />
                <span className="font-semibold text-white">Call (800) 942-CLUB to schedule an in-person visit</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
