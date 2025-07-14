
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaArrowRight, FaCode, FaUser, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Sanjay Christopher Raj";

  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    
    const timer = setTimeout(typeWriter, 500);
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearTimeout(timer);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <div className="fixed left-0 top-0 h-full w-20 bg-white shadow-lg z-50 flex flex-col items-center py-8">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-8">
          <span className="text-white font-bold text-lg">S</span>
        </div>
        
        <nav className="flex flex-col space-y-6">
          <Link to="/" className="p-3 rounded-lg bg-blue-100 text-blue-600">
            <FaUser className="w-5 h-5" />
          </Link>
          <Link to="/about" className="p-3 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors">
            <FaCode className="w-5 h-5" />
          </Link>
          <Link to="/projects" className="p-3 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors">
            <FaCode className="w-5 h-5" />
          </Link>
          <Link to="/contact" className="p-3 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors">
            <FaEnvelope className="w-5 h-5" />
          </Link>
        </nav>

        <div className="mt-auto flex flex-col space-y-4">
          <a
            href="https://github.com/Sanjay160805"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/sanjay160805"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-20 flex items-center justify-center min-h-screen px-8">
        <div className="max-w-4xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              <div className="mb-6">
                <p className="text-blue-600 font-medium mb-2">Hello, I'm</p>
                <h1 className="text-5xl font-bold text-gray-900 mb-4">
                  {displayText}
                  {showCursor && <span className="text-blue-600 animate-pulse">|</span>}
                </h1>
                <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              </div>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A passionate <span className="text-blue-600 font-semibold">CSE student</span> focused on building 
                practical and intelligent tech solutions through AI, full-stack development, and collaborative problem-solving.
              </p>
              
              <div className="flex space-x-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Projects
                  <FaArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Get In Touch
                </Link>
              </div>
            </div>

            {/* Right Column - Profile Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">SCR</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Computer Science Student</h3>
                  <p className="text-gray-600 mb-6">Loyola-ICAM College of Engineering</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Focus Areas:</span>
                      <span className="text-gray-900 font-medium">AI & Full-Stack</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Experience:</span>
                      <span className="text-gray-900 font-medium">6+ Projects</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Collaboration:</span>
                      <span className="text-gray-900 font-medium">Team Player</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
