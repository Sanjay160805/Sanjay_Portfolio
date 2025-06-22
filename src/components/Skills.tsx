
import React from 'react';
import { Code, Brain, Server, Database, Users, MessageCircle } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="w-6 h-6" />,
      skills: ["Java", "JavaScript", "C", "HTML", "CSS"]
    },
    {
      title: "AI/ML",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Deep Learning", "TensorFlow", "Generative AI"]
    },
    {
      title: "Backend & Tools",
      icon: <Server className="w-6 h-6" />,
      skills: ["Flask", "Node.js", "Git", "GitHub", "Streamlit"]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["SQL", "SQLite", "MongoDB"]
    },
    {
      title: "Core Skills",
      icon: <Users className="w-6 h-6" />,
      skills: ["Teamwork", "Leadership", "Problem Solving"]
    },
    {
      title: "Languages",
      icon: <MessageCircle className="w-6 h-6" />,
      skills: ["Tamil", "English"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-600 text-white p-2 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-white px-3 py-2 rounded-lg text-gray-700 font-medium shadow-sm"
                  >
                    {skill}
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
