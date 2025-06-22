
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 sm:p-12 shadow-lg">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I am currently pursuing a <strong>B.E. in Computer Science</strong> at Loyola-ICAM College of 
            Engineering and Technology. I'm still learning and evolving in areas like AI, full-stack 
            development, and problem-solving.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Through various academic and hackathon projects — from secure file sharing to deepfake 
            detection and data dashboards — I've developed a strong interest in building solutions 
            that matter.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            I value <strong>teamwork</strong>, <strong>continuous learning</strong>, and 
            <strong> solving real-world problems through code</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
