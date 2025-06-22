
import React from 'react';
import { ExternalLink, Github, Database, Brain, Globe, Shield, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "NASA NEO Tracker & Insights Dashboard",
      description: "Built a complete space data analytics tool using NASA's API, with paginated data collection, SQL database design, and a Streamlit dashboard featuring 25+ analytical queries and filters.",
      icon: <Globe className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      tags: ["NASA API", "SQL", "Streamlit", "Analytics"]
    },
    {
      title: "Nutrition Paradox Dashboard",
      description: "A WHO-API-powered Streamlit dashboard analyzing obesity and malnutrition trends using 25+ SQL queries across global data.",
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      tags: ["WHO API", "Data Analysis", "SQL", "Health Data"]
    },
    {
      title: "Taxi Fare Prediction Web App",
      description: "Built a regression model (GradientBoosting) for real-time taxi fare prediction and deployed using Streamlit.",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      tags: ["Machine Learning", "Regression", "GradientBoosting", "Streamlit"]
    },
    {
      title: "One-Time Secure File Sharing System",
      description: "Created a secure, single-use file sharing tool with link + QR generation. Enforced privacy with one-time access logic.",
      icon: <Shield className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      tags: ["Security", "QR Code", "Privacy", "File Sharing"]
    },
    {
      title: "Deepfake Detection & Reconstruction Tool",
      description: "Developed a deep learning-powered system to detect and visualize manipulated video frames with a clean, responsive front end.",
      icon: <Eye className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
      tags: ["Deep Learning", "Computer Vision", "AI", "Video Analysis"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 animate-pulse"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-500">
            Here are some of my notable projects that showcase my skills in AI, full-stack development, and data analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-fade-in-up border border-gray-100"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Icon */}
              <div className={`w-14 h-14 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                <div className="text-white">
                  {project.icon}
                </div>
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-600 mb-4 leading-relaxed line-clamp-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">View Project</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 font-medium transition-colors">
                  <Github className="w-4 h-4" />
                  <span className="text-sm">Code</span>
                </button>
              </div>

              {/* Hover overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
