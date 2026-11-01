import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BookingModal from './components/BookingModal';
import AuthModal from './components/AuthModal';
import { gamesData } from './data/games';

export default function App() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: 'login' });

  const handleOpenBooking = (game) => {
    setSelectedGame(game);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleOpenAuth = (mode = 'login') => {
    setAuthModal({ isOpen: true, mode });
  };

  const handleCloseAuth = () => {
    setAuthModal({ ...authModal, isOpen: false });
  };

  const handleCategoryClick = (gameId) => {
    const game = gamesData.find((g) => g.id === gameId);
    if (game) {
      handleOpenBooking(game);
    } else {
      const el = document.getElementById('categories');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#FFFFFF] text-[#101A17] flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#B9F34B] selection:text-[#003D2C]">
      {/* 1. Sticky Header */}
      <Header
        onOpenAuth={handleOpenAuth}
        onNavigate={handleNavigate}
        onBookNow={() => handleOpenBooking(gamesData[0])}
      />

      {/* 2. Main Hero & Content Sections */}
      <div className="flex-1">
        <Home
          onSelectGame={handleOpenBooking}
          onOpenAuth={handleOpenAuth}
        />
      </div>

      {/* 3. Footer */}
      <Footer
        onCategoryClick={handleCategoryClick}
      />

      {/* Booking Modal */}
      <BookingModal
        game={selectedGame}
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
      />

      {/* Auth Modal (Login / Sign Up) */}
      <AuthModal
        isOpen={authModal.isOpen}
        initialMode={authModal.mode}
        onClose={handleCloseAuth}
      />
    </div>
  );
}
