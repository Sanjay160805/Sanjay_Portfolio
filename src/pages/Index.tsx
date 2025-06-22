
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import ContactModal from '../components/ContactModal';
import ParticleBackground from '../components/ParticleBackground';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showContactModal, setShowContactModal] = useState(false);
  const [hasViewedProfile, setHasViewedProfile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Check if user has scrolled through most of the content
      const scrollPercentage = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      if (scrollPercentage > 0.8 && !hasViewedProfile) {
        setHasViewedProfile(true);
        setTimeout(() => {
          setShowContactModal(true);
        }, 2000); // Show modal after 2 seconds
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasViewedProfile]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 relative overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Navigation activeSection={activeSection} />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
        </main>
        <ContactModal 
          isOpen={showContactModal} 
          onClose={() => setShowContactModal(false)} 
        />
      </div>
    </div>
  );
};

export default Index;
