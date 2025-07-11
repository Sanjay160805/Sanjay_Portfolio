
import React from 'react';
import Navigation from '../components/Navigation';
import About from '../components/About';
import ParticleBackground from '../components/ParticleBackground';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 relative overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Navigation />
        <div className="pt-16">
          <About />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
