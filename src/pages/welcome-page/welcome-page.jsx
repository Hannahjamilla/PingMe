import React from 'react';
import HeroSection from '../../components/hero-section/hero-section';

const WelcomePage = ({ onStart, onViewProjects }) => {
  return (
    <main className="min-h-screen">
      <HeroSection onStart={onStart} onViewProjects={onViewProjects} />
    </main>
  );
};

export default WelcomePage;
