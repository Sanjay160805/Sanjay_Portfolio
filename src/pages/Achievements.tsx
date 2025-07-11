
import React from 'react';
import Navigation from '../components/Navigation';
import Achievements from '../components/Achievements';
import ParticleBackground from '../components/ParticleBackground';

const AchievementsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 relative overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Navigation />
        <div className="pt-16">
          <Achievements />
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;
