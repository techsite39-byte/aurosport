import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, LogIn, Sparkles, Mail, Lock, User, CheckCircle2 } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, initialMode = 'login' }) {
  const [mode, setMode] = useState(initialMode);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md bg-[#0F172A] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Mode Switch Tabs */}
          <div className="flex bg-black/40 p-1 rounded-xl border border-white/10 mb-6">
            <button
              onClick={() => { setMode('login'); setSubmitted(false); }}
              className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                mode === 'login'
                  ? 'bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] text-white shadow-neon-purple'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => { setMode('signup'); setSubmitted(false); }}
              className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                mode === 'signup'
                  ? 'bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] text-white shadow-neon-purple'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Sign Up
            </button>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 text-center space-y-3"
            >
              <div className="w-14 h-14 rounded-full bg-[#A3E635]/20 border border-[#A3E635] text-[#A3E635] flex items-center justify-center mx-auto shadow-neon-lime">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-black text-xl text-white">
                {mode === 'login' ? 'Welcome Back!' : 'Gamer Pass Created!'}
              </h3>
              <p className="text-xs text-gray-300">
                Authentication successful. Connecting your VIP profile...
              </p>
            </motion.div>
          ) : (
            <>
              <div className="text-center mb-6">
                <h3 className="font-heading font-black text-2xl text-white">
                  {mode === 'login' ? 'Sign In to NEXUS' : 'Join the Arena'}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  {mode === 'login'
                    ? 'Access member discounts, match history & instant station unlock'
                    : 'Get 20% off your first 2 hours + free energy drink voucher'}
                </p>
              </div>

              {/* Social Login buttons */}
              <div className="grid grid-cols-2 gap-2.5 mb-5">
                <button
                  type="button"
                  onClick={() => setSubmitted(true)}
                  className="py-2.5 px-3 rounded-xl bg-[#1E293B] hover:bg-[#334155] border border-white/10 text-xs font-bold text-gray-200 flex items-center justify-center gap-2 transition-colors"
                >
                  <span className="text-[#5865F2] font-black">#</span> Discord
                </button>
                <button
                  type="button"
                  onClick={() => setSubmitted(true)}
                  className="py-2.5 px-3 rounded-xl bg-[#1E293B] hover:bg-[#334155] border border-white/10 text-xs font-bold text-gray-200 flex items-center justify-center gap-2 transition-colors"
                >
                  <span className="text-[#06B6D4] font-black">●</span> Steam
                </button>
              </div>

              <div className="relative flex items-center justify-center mb-5">
                <div className="border-t border-white/10 w-full" />
                <span className="bg-[#0F172A] px-3 text-[10px] uppercase font-bold text-gray-500 absolute">
                  or with email
                </span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {mode === 'signup' && (
                  <div>
                    <label className="text-[11px] font-bold text-gray-300 uppercase tracking-wider block mb-1">
                      Gamer Tag / Username
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. CyberValkyrie"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-xl py-2.5 pl-10 pr-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#8B5CF6] transition-colors"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="text-[11px] font-bold text-gray-300 uppercase tracking-wider block mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="player@nexusarena.gg"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl py-2.5 pl-10 pr-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#8B5CF6] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-gray-300 uppercase tracking-wider block mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl py-2.5 pl-10 pr-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#8B5CF6] transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#8B5CF6] via-[#6366F1] to-[#06B6D4] text-white font-heading font-black tracking-wider text-sm uppercase shadow-neon-purple hover:shadow-neon-cyan transition-all duration-300 mt-2"
                >
                  {mode === 'login' ? 'Login Now' : 'Create Free Account'}
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
