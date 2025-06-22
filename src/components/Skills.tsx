
import React from 'react';
import { Code, Brain, Server, Database, Users, MessageCircle } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="w-6 h-6" />,
      skills: ["Java", "JavaScript", "C", "HTML", "CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI/ML",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Deep Learning", "TensorFlow", "Generative AI"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Backend & Tools",
      icon: <Server className="w-6 h-6" />,
      skills: ["Flask", "Node.js", "Git", "GitHub", "Streamlit"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["SQL", "SQLite", "MongoDB"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Core Skills",
      icon: <Users className="w-6 h-6" />,
      skills: ["Teamwork", "Leadership", "Problem Solving"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Languages",
      icon: <MessageCircle className="w-6 h-6" />,
      skills: ["Tamil", "English"],
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full animate-float-reverse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-shadow-glow">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto animate-gradient-x"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card-strong rounded-2xl p-8 hover-lift hover-glow transition-all duration-500 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:animate-bounce transition-all duration-300 shadow-lg`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white group-hover:text-neon transition-colors">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="glass-card px-4 py-3 rounded-xl text-gray-300 font-medium shadow-sm hover-lift transition-all duration-300 hover:text-white hover:glass-card-strong group/skill"
                    style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    <span className="group-hover/skill:text-shadow-glow transition-all duration-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
