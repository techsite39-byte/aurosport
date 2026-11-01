import React from 'react';
import { gamesData } from '../data/games';
import TennisHeroSection from '../components/TennisHeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProMembershipSection from '../components/ProMembershipSection';
import YoungAthletesSection from '../components/YoungAthletesSection';
import MobileEnquiryBanner from '../components/MobileEnquiryBanner';
import RelatedStoriesSection from '../components/RelatedStoriesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FaqSection from '../components/FaqSection';
import CoachFinderBanner from '../components/CoachFinderBanner';

export default function Home({ onSelectGame, onOpenAuth }) {
  const handleExploreFacilities = () => {
    if (onSelectGame) {
      onSelectGame(gamesData[0]);
    }
  };

  const handleJoinMembership = (plan) => {
    if (onOpenAuth) {
      onOpenAuth('signup');
    } else if (onSelectGame) {
      onSelectGame(gamesData[0]);
    }
  };

  const handleRegisterYoungAthletes = () => {
    if (onOpenAuth) {
      onOpenAuth('signup');
    } else if (onSelectGame) {
      onSelectGame(gamesData[0]);
    }
  };

  return (
    <main id="hero" className="relative w-full bg-[#FFFFFF] text-[#101A17] overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. Redesigned Tennis Club Hero Section - Matching Uploaded Reference */}
      <TennisHeroSection 
        onSelectGame={onSelectGame}
        onOpenAuth={onOpenAuth}
      />

      {/* 1. Existing About Our Club and Statistics Section */}
      <AboutSection onExploreFacilities={handleExploreFacilities} />

      {/* 2. Existing Explore Our Services Section */}
      <ServicesSection onBookService={handleExploreFacilities} />

      {/* 3. NEW Pro Membership Section */}
      <ProMembershipSection 
        onJoinMembership={handleJoinMembership}
        onExplorePlan={handleJoinMembership}
      />

      {/* 4. NEW Empowering Young Athletes Section */}
      <YoungAthletesSection 
        onRegister={handleRegisterYoungAthletes}
      />

      {/* 5. NEW Mobile Number Enquiry Banner */}
      <MobileEnquiryBanner />

      {/* 6. NEW Related Stories */}
      <RelatedStoriesSection />

      {/* 7. NEW Testimonials Section */}
      <TestimonialsSection />

      {/* 8. NEW FAQ Section */}
      <FaqSection />

      {/* 9. NEW Need Help Choosing the Right Coach Section */}
      <CoachFinderBanner />

    </main>
  );
}
