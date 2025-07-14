
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative glass-card-strong rounded-3xl p-8 hover-lift hover-glow transition-all duration-700 animate-fade-in-up border border-white/10"
      style={{ animationDelay: `${index * 0.2}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
          {isHovered && (
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
            <FaGithub className="w-5 h-5 group-hover/btn:animate-spin" />
            <span>View Code</span>
          </a>
        </div>

        {/* Floating particles for hovered project */}
        {isHovered && (
          <div className="absolute top-4 right-4">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce animation-delay-100"></div>
            <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce animation-delay-300 mt-2"></div>
            <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce animation-delay-500 mt-1"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
