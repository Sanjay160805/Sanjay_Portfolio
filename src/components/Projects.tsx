import React, { useState } from 'react';
import { Github, Database, Brain, Globe, Shield, Eye, Sparkles, Zap, ShoppingCart } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "NASA NEO Tracker & Insights Dashboard",
      description: "Built a complete space data analytics tool using NASA's API, with paginated data collection, SQL database design, and a Streamlit dashboard featuring 25+ analytical queries and filters.",
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      tags: ["NASA API", "SQL", "Streamlit", "Analytics"],
      glowColor: "blue",
      githubUrl: "https://github.com/Sanjay160805/Nasa_asteroids_tracker.git"
    },
    {
      title: "Nutrition Paradox Dashboard",
      description: "A WHO-API-powered Streamlit dashboard analyzing obesity and malnutrition trends using 25+ SQL queries across global data.",
      icon: <Database className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      tags: ["WHO API", "Data Analysis", "SQL", "Health Data"],
      glowColor: "green",
      githubUrl: "https://github.com/Sanjay160805/Nutrition_paradox.git"
    },
    {
      title: "Taxi Fare Prediction Web App",
      description: "Built a regression model (GradientBoosting) for real-time taxi fare prediction and deployed using Streamlit.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      tags: ["Machine Learning", "Regression", "GradientBoosting", "Streamlit"],
      glowColor: "purple",
      githubUrl: "https://github.com/Sanjay160805/faretaxi.git"
    },
    {
      title: "One-Time Secure File Sharing System",
      description: "Created a secure, single-use file sharing tool with link + QR generation. Enforced privacy with one-time access logic.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      tags: ["Security", "QR Code", "Privacy", "File Sharing"],
      glowColor: "orange",
      githubUrl: "https://github.com/Sanjay160805/One-Time-File-Sharing.git"
    },
    {
      title: "Deepfake Detection & Reconstruction Tool",
      description: "Developed a deep learning-powered system to detect and visualize manipulated video frames with a clean, responsive front end.",
      icon: <Eye className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      tags: ["Deep Learning", "Computer Vision", "AI", "Video Analysis"],
      glowColor: "indigo",
      githubUrl: "https://github.com/Sanjay160805/Deepfake.git"
    },
    {
      title: "Shopper Spectrum",
      description: "A comprehensive e-commerce analytics platform that provides deep insights into customer behavior, sales trends, and market dynamics using advanced data visualization and machine learning.",
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
      tags: ["E-commerce", "Analytics", "Machine Learning", "Data Visualization"],
      glowColor: "emerald",
      githubUrl: "https://github.com/Sanjay160805/ShoppingSpectrum.git"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-full animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Sparkles className="w-8 h-8 text-yellow-400 animate-sparkle" />
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-shadow-glow">
              Featured Projects
            </h2>
            <Zap className="w-8 h-8 text-blue-400 animate-bounce" />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 animate-gradient-x"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-500">
            Here are some of my notable projects that showcase my skills in 
            <span className="text-blue-400 font-semibold"> AI</span>, 
            <span className="text-purple-400 font-semibold"> full-stack development</span>, and 
            <span className="text-pink-400 font-semibold"> data analytics</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative glass-card-strong rounded-3xl p-8 hover-lift hover-glow transition-all duration-700 animate-fade-in-up border border-white/10"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Animated border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Project Icon */}
                <div className={`w-20 h-20 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl relative`}>
                  <div className="text-white group-hover:animate-bounce">
                    {project.icon}
                  </div>
                  {hoveredProject === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl animate-pulse"></div>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon transition-all duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-300 mb-6 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-2 glass-card text-gray-300 text-sm font-medium rounded-full border border-white/20 group-hover:border-white/40 transition-all duration-300 hover:scale-110"
                      style={{ animationDelay: `${tagIndex * 0.1}s` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Links - Only GitHub */}
                <div className="flex justify-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 glass-card text-gray-300 hover:text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover-lift group/btn"
                  >
                    <Github className="w-5 h-5 group-hover/btn:animate-spin" />
                    <span>View Code</span>
                  </a>
                </div>

                {/* Floating particles for hovered project */}
                {hoveredProject === index && (
                  <div className="absolute top-4 right-4">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce animation-delay-100"></div>
                    <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce animation-delay-300 mt-2"></div>
                    <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce animation-delay-500 mt-1"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-16 space-x-6 animate-fade-in-up animation-delay-2000">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce animation-delay-100"></div>
          <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce animation-delay-300"></div>
          <div className="w-4 h-4 bg-pink-500 rounded-full animate-bounce animation-delay-500"></div>
          <div className="w-4 h-4 bg-cyan-500 rounded-full animate-bounce animation-delay-700"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
