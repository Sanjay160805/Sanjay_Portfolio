
import React from 'react';
import { Trophy, Award } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Winner – Ctrl Alt Hack (Intra-college Hackathon)",
      description: "Developed a deepfake detection and reconstruction tool under 24 hours, balancing front-end usability with backend AI performance.",
      icon: <Trophy className="w-6 h-6" />
    },
    {
      title: "Winner – TaskOps at KRIYA '25 (PSG College of Technology)",
      description: "Designed a secure file sharing app with one-time QR and link-based access, showcasing innovation in digital privacy.",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-yellow-400"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-lg flex-shrink-0">
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
