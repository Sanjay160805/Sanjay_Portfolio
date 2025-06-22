
import React from 'react';
import { ExternalLink, Database, Brain, Car, Shield, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "NASA NEO Tracker & Insights Dashboard",
      description: "Built a complete space data analytics tool using NASA's API, with paginated data collection, SQL database design, and a Streamlit dashboard featuring 25+ analytical queries and filters.",
      icon: <Database className="w-6 h-6" />,
      tags: ["Python", "Streamlit", "SQL", "NASA API", "Data Analytics"]
    },
    {
      title: "Nutrition Paradox Dashboard",
      description: "A WHO-API-powered Streamlit dashboard analyzing obesity and malnutrition trends using 25+ SQL queries across global data.",
      icon: <Brain className="w-6 h-6" />,
      tags: ["Python", "WHO API", "SQL", "Data Visualization", "Health Analytics"]
    },
    {
      title: "Taxi Fare Prediction Web App",
      description: "Built a regression model (GradientBoosting) for real-time taxi fare prediction and deployed using Streamlit.",
      icon: <Car className="w-6 h-6" />,
      tags: ["Machine Learning", "GradientBoosting", "Streamlit", "Regression", "Python"]
    },
    {
      title: "One-Time Secure File Sharing System",
      description: "Created a secure, single-use file sharing tool with link + QR generation. Enforced privacy with one-time access logic.",
      icon: <Shield className="w-6 h-6" />,
      tags: ["Security", "QR Code", "Privacy", "File Sharing", "Web App"]
    },
    {
      title: "Deepfake Detection & Reconstruction Tool",
      description: "Developed a deep learning-powered system to detect and visualize manipulated video frames with a clean, responsive front end.",
      icon: <Eye className="w-6 h-6" />,
      tags: ["Deep Learning", "Computer Vision", "TensorFlow", "Video Processing", "AI"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
