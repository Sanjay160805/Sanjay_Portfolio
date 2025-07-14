
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaUser, FaCode, FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home', icon: <FaUser className="w-4 h-4" />, route: '/' },
    { id: 'about', label: 'About Me', icon: <FaUser className="w-4 h-4" />, route: '/about' },
    { id: 'projects', label: 'Projects', icon: <FaCode className="w-4 h-4" />, route: '/projects' },
    { id: 'contact', label: 'Contact', icon: <FaUser className="w-4 h-4" />, route: '/contact' },
  ];

  const handleNavigation = (item) => {
    if (location.pathname === '/' && item.id !== 'home') {
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(item.route);
    }
    setIsMenuOpen(false);
  };

  const isCurrentRoute = (route) => {
    return location.pathname === route;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 glass-card-strong border-b border-white/10 z-50 animate-fade-in-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 animate-fade-in-left">
            <button 
              onClick={() => navigate('/')}
              className="text-xl font-bold text-white text-shadow-glow hover:text-neon transition-all duration-300"
            >
              Sanjay Christopher Raj
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block animate-fade-in-down animation-delay-500">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className={`group flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover-lift ${
                    isCurrentRoute(item.route) || (location.pathname === '/' && activeSection === item.id)
                      ? 'glass-card-strong text-blue-400 shadow-lg animate-neon-glow'
                      : 'text-gray-300 hover:text-white hover:glass-card'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="group-hover:animate-bounce">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4 animate-fade-in-right animation-delay-1000">
            <a
              href="https://github.com/Sanjay160805"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover-lift hover:animate-bounce p-2 rounded-lg hover:glass-card"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sanjay160805"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover-lift hover:animate-bounce p-2 rounded-lg hover:glass-card"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-all duration-300 hover-lift p-2 rounded-lg hover:glass-card"
            >
              {isMenuOpen ? <FaTimes size={24} className="animate-spin" /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 glass-card-strong border-t border-white/10 rounded-b-2xl">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium w-full text-left transition-all duration-300 hover-lift ${
                    isCurrentRoute(item.route) || (location.pathname === '/' && activeSection === item.id)
                      ? 'glass-card-strong text-blue-400 animate-neon-glow'
                      : 'text-gray-300 hover:text-white hover:glass-card'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
              <div className="flex space-x-4 px-4 py-3 border-t border-white/10">
                <a
                  href="https://github.com/Sanjay160805"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover-lift p-2 rounded-lg hover:glass-card"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sanjay160805"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover-lift p-2 rounded-lg hover:glass-card"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
