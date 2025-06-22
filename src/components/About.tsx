
import React from 'react';
import { GraduationCap, Code, Users, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "B.E. Computer Science",
      subtitle: "Loyola-ICAM College",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "AI & Full-Stack",
      subtitle: "Development Focus",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      subtitle: "Project Leadership",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Problem Solving",
      subtitle: "Real-world Solutions",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-500/10 rounded-full animate-float-reverse animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-shadow-glow">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto animate-gradient-x"></div>
        </div>
        
        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-6 hover-lift hover-glow transition-all duration-500 animate-fade-in-up group`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${highlight.color} rounded-xl flex items-center justify-center mb-4 group-hover:animate-bounce transition-all duration-300`}>
                <div className="text-white">
                  {highlight.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{highlight.title}</h3>
              <p className="text-gray-400 text-sm">{highlight.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="glass-card-strong rounded-3xl p-8 sm:p-12 shadow-2xl hover-lift animate-fade-in-up animation-delay-1000">
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p className="animate-fade-in-left animation-delay-1200">
              I am currently pursuing a <span className="text-blue-400 font-semibold text-shadow-glow">B.E. in Computer Science</span> at 
              Loyola-ICAM College of Engineering and Technology. I'm still learning and evolving in areas like 
              <span className="text-purple-400 font-semibold"> AI</span>, 
              <span className="text-pink-400 font-semibold"> full-stack development</span>, and 
              <span className="text-cyan-400 font-semibold"> problem-solving</span>.
            </p>
            
            <p className="animate-fade-in-right animation-delay-1500">
              Through various academic and hackathon projects — from 
              <span className="text-green-400 font-semibold"> secure file sharing</span> to 
              <span className="text-yellow-400 font-semibold"> deepfake detection</span> and 
              <span className="text-orange-400 font-semibold"> data dashboards</span> — I've developed a strong interest in 
              building solutions that matter.
            </p>
            
            <p className="animate-fade-in-up animation-delay-1800">
              I value <span className="text-blue-400 font-bold text-neon">teamwork</span>, 
              <span className="text-purple-400 font-bold text-neon"> continuous learning</span>, and
              <span className="text-pink-400 font-bold text-neon"> solving real-world problems through code</span>.
            </p>
          </div>

          {/* Decorative elements */}
          <div className="mt-8 flex justify-center space-x-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce animation-delay-2000"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce animation-delay-2200"></div>
            <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce animation-delay-2400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
