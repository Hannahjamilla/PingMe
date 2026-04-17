import React from 'react';
import HeroSection from '../../components/hero-section/hero-section';

const WelcomePage = ({ onStart }) => {
  return (
    <main className="min-h-screen">
      <HeroSection onStart={onStart} />
    </main>
  );
};

export default WelcomePage;
