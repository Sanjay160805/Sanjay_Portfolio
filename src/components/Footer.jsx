
import { FaHeart, FaCode } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="text-center pt-12 border-t border-white/10 animate-fade-in-up animation-delay-1500">
      <p className="text-gray-400 text-lg flex items-center justify-center">
        © 2025 Sanjay Christopher Raj. Built with 
        <FaHeart className="text-red-400 animate-pulse mx-2" />
        and <FaCode className="text-blue-400 text-neon ml-2" />.
      </p>
      
      {/* Decorative elements */}
      <div className="flex justify-center mt-6 space-x-4">
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce animation-delay-100"></div>
        <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce animation-delay-300"></div>
        <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce animation-delay-500"></div>
      </div>
    </div>
  );
};

export default Footer;
