
import React, { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Sanjay Christopher Raj";

  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
        setTimeout(typeWriter, 150);
      }
    };
    
    const timer = setTimeout(typeWriter, 1000);
    
    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearTimeout(timer);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-r from-pink-600/20 to-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 rotate-45 animate-float animation-delay-1000"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-purple-500 rounded-full animate-float-reverse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-pink-500 animate-sparkle animation-delay-3000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 relative group">
              {/* Pulse rings */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse-ring"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full animate-pulse-ring animation-delay-1000"></div>
              
              {/* Main avatar */}
              <div className="w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-neon-glow shadow-2xl relative overflow-hidden">
                <div className="absolute inset-2 glass-card rounded-full flex items-center justify-center hover-lift">
                  <span className="text-3xl font-bold text-neon animate-aurora bg-clip-text">
                    SCR
                  </span>
                </div>
              </div>
              
              {/* Floating icons */}
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-sparkle" />
              <Zap className="absolute -bottom-2 -left-2 w-6 h-6 text-blue-400 animate-bounce animation-delay-500" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <div className="mb-4">
              <span className="text-gray-300 text-2xl sm:text-3xl lg:text-4xl animate-fade-in-down">
                Hi, I'm
              </span>
            </div>
            <div className="relative">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-shadow-glow">
                {displayText}
              </span>
              {showCursor && <span className="text-blue-400 animate-pulse">|</span>}
            </div>
          </h1>
          
          <div className="relative mb-12">
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-1000">
              A passionate and curious{' '}
              <span className="text-blue-400 font-semibold text-neon">CSE student</span>. 
              I enjoy building{' '}
              <span className="text-purple-400 font-semibold">practical</span>,{' '}
              <span className="text-pink-400 font-semibold">secure</span>, and{' '}
              <span className="text-cyan-400 font-semibold">intelligent</span>{' '}
              tech solutions through hands-on projects and team collaboration.
            </p>
            
            {/* Animated underline */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-gradient-x"></div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-1500">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group glass-card-strong text-white px-10 py-5 rounded-2xl font-semibold shadow-2xl hover-lift hover-glow transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-gradient-x"></div>
              <span className="relative flex items-center justify-center text-lg">
                <Sparkles className="w-5 h-5 mr-2 animate-sparkle" />
                View My Work
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group glass-card text-white px-10 py-5 rounded-2xl font-semibold hover-lift transition-all duration-500 border-2 border-blue-500/30 hover:border-blue-400/60 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center text-lg">
                <Zap className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Get In Touch
                <svg className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-fade-in-up animation-delay-3000">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-gray-400 text-sm animate-pulse">Scroll to explore</span>
          <div className="relative">
            <ChevronDown className="w-8 h-8 text-blue-400 animate-bounce" />
            <ChevronDown className="w-8 h-8 text-purple-400 animate-bounce animation-delay-200 absolute top-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
