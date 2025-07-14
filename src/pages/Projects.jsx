
import { FaGlobe, FaDatabase, FaBrain, FaShieldAlt, FaEye, FaShoppingCart, FaGithub, FaBolt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: "NASA NEO Tracker & Insights Dashboard",
      description: "Built a complete space data analytics tool using NASA's API, with paginated data collection, SQL database design, and a Streamlit dashboard featuring 25+ analytical queries and filters.",
      icon: <FaGlobe className="w-8 h-8" />,
      color: "bg-blue-100 text-blue-600",
      tags: ["NASA API", "SQL", "Streamlit", "Analytics"],
      githubUrl: "https://github.com/Sanjay160805/Nasa_asteroids_tracker.git"
    },
    {
      title: "Nutrition Paradox Dashboard",
      description: "A WHO-API-powered Streamlit dashboard analyzing obesity and malnutrition trends using 25+ SQL queries across global data.",
      icon: <FaDatabase className="w-8 h-8" />,
      color: "bg-green-100 text-green-600",
      tags: ["WHO API", "Data Analysis", "SQL", "Health Data"],
      githubUrl: "https://github.com/Sanjay160805/Nutrition_paradox.git"
    },
    {
      title: "Taxi Fare Prediction Web App",
      description: "Built a regression model (GradientBoosting) for real-time taxi fare prediction and deployed using Streamlit.",
      icon: <FaBrain className="w-8 h-8" />,
      color: "bg-purple-100 text-purple-600",
      tags: ["Machine Learning", "Regression", "GradientBoosting", "Streamlit"],
      githubUrl: "https://github.com/Sanjay160805/faretaxi.git"
    },
    {
      title: "One-Time Secure File Sharing System",
      description: "Created a secure, single-use file sharing tool with link + QR generation. Enforced privacy with one-time access logic.",
      icon: <FaShieldAlt className="w-8 h-8" />,
      color: "bg-orange-100 text-orange-600",
      tags: ["Security", "QR Code", "Privacy", "File Sharing"],
      githubUrl: "https://github.com/Sanjay160805/One-Time-File-Sharing.git"
    },
    {
      title: "Deepfake Detection & Reconstruction Tool",
      description: "Developed a deep learning-powered system to detect and visualize manipulated video frames with a clean, responsive front end.",
      icon: <FaEye className="w-8 h-8" />,
      color: "bg-indigo-100 text-indigo-600",
      tags: ["Deep Learning", "Computer Vision", "AI", "Video Analysis"],
      githubUrl: "https://github.com/Sanjay160805/Deepfake.git"
    },
    {
      title: "Shopper Spectrum",
      description: "A comprehensive e-commerce analytics platform that provides deep insights into customer behavior, sales trends, and market dynamics using advanced data visualization and machine learning.",
      icon: <FaShoppingCart className="w-8 h-8" />,
      color: "bg-emerald-100 text-emerald-600",
      tags: ["E-commerce", "Analytics", "Machine Learning", "Data Visualization"],
      githubUrl: "https://github.com/Sanjay160805/ShoppingSpectrum.git"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <div className="fixed left-0 top-0 h-full w-20 bg-white shadow-lg z-50 flex flex-col items-center py-8">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-8">
          <span className="text-white font-bold text-lg">S</span>
        </div>
        
        <nav className="flex flex-col space-y-6">
          <Link to="/" className="p-3 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors">
            <FaBolt className="w-5 h-5" />
          </Link>
          <Link to="/about" className="p-3 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors">
            <FaBolt className="w-5 h-5" />
          </Link>
          <Link to="/projects" className="p-3 rounded-lg bg-blue-100 text-blue-600">
            <FaBolt className="w-5 h-5" />
          </Link>
          <Link to="/contact" className="p-3 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors">
            <FaBolt className="w-5 h-5" />
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-20 py-16 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some of my notable projects that showcase my skills in 
              <span className="text-blue-600 font-semibold"> AI</span>, 
              <span className="text-purple-600 font-semibold"> full-stack development</span>, and 
              <span className="text-pink-600 font-semibold"> data analytics</span>.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 ${project.color} rounded-xl flex items-center justify-center`}>
                    {project.icon}
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>

                {/* Project Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white rounded-2xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Interested in My Work?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can collaborate on your next project
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
