
import React from 'react';
import { Trophy, Award } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Winner – Ctrl Alt Hack (Intra-college Hackathon)",
      description: "Developed a deepfake detection and reconstruction tool under 24 hours, balancing front-end usability with backend AI performance.",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Winner – TaskOps at KRIYA '25 (PSG College of Technology)",
      description: "Designed a secure file sharing app with one-time QR and link-based access, showcasing innovation in digital privacy.",
      icon: <Award className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-yellow-500/10 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-purple-500/10 rounded-full animate-float-reverse animation-delay-2000"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-shadow-glow">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 mx-auto animate-gradient-x"></div>
        </div>

        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="glass-card-strong rounded-2xl p-8 hover-lift hover-glow transition-all duration-500 animate-fade-in-up group border-l-4 border-yellow-400/50"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="flex items-start space-x-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:animate-bounce transition-all duration-300 shadow-lg`}>
                  <div className="text-white">
                    {achievement.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-neon transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">
                    {achievement.description}
                  </p>
                </div>
              </div>
              
              {/* Decorative corner elements */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce animation-delay-100"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
