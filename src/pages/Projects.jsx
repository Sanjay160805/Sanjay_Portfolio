
import { FaGlobe, FaDatabase, FaBrain, FaShieldAlt, FaEye, FaShoppingCart, FaCamera, FaZap } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "NASA NEO Tracker & Insights Dashboard",
      description: "Built a complete space data analytics tool using NASA's API, with paginated data collection, SQL database design, and a Streamlit dashboard featuring 25+ analytical queries and filters.",
      icon: <FaGlobe className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      tags: ["NASA API", "SQL", "Streamlit", "Analytics"],
      glowColor: "blue",
      githubUrl: "https://github.com/Sanjay160805/Nasa_asteroids_tracker.git"
    },
    {
      title: "Nutrition Paradox Dashboard",
      description: "A WHO-API-powered Streamlit dashboard analyzing obesity and malnutrition trends using 25+ SQL queries across global data.",
      icon: <FaDatabase className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      tags: ["WHO API", "Data Analysis", "SQL", "Health Data"],
      glowColor: "green",
      githubUrl: "https://github.com/Sanjay160805/Nutrition_paradox.git"
    },
    {
      title: "Taxi Fare Prediction Web App",
      description: "Built a regression model (GradientBoosting) for real-time taxi fare prediction and deployed using Streamlit.",
      icon: <FaBrain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      tags: ["Machine Learning", "Regression", "GradientBoosting", "Streamlit"],
      glowColor: "purple",
      githubUrl: "https://github.com/Sanjay160805/faretaxi.git"
    },
    {
      title: "One-Time Secure File Sharing System",
      description: "Created a secure, single-use file sharing tool with link + QR generation. Enforced privacy with one-time access logic.",
      icon: <FaShieldAlt className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      tags: ["Security", "QR Code", "Privacy", "File Sharing"],
      glowColor: "orange",
      githubUrl: "https://github.com/Sanjay160805/One-Time-File-Sharing.git"
    },
    {
      title: "Deepfake Detection & Reconstruction Tool",
      description: "Developed a deep learning-powered system to detect and visualize manipulated video frames with a clean, responsive front end.",
      icon: <FaEye className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      tags: ["Deep Learning", "Computer Vision", "AI", "Video Analysis"],
      glowColor: "indigo",
      githubUrl: "https://github.com/Sanjay160805/Deepfake.git"
    },
    {
      title: "Shopper Spectrum",
      description: "A comprehensive e-commerce analytics platform that provides deep insights into customer behavior, sales trends, and market dynamics using advanced data visualization and machine learning.",
      icon: <FaShoppingCart className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
      tags: ["E-commerce", "Analytics", "Machine Learning", "Data Visualization"],
      glowColor: "emerald",
      githubUrl: "https://github.com/Sanjay160805/ShoppingSpectrum.git"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 relative overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <div className="pt-16">
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
                  <FaCamera className="w-8 h-8 text-yellow-400 animate-sparkle" />
                  <h2 className="text-4xl sm:text-5xl font-bold text-white text-shadow-glow">
                    Featured Projects
                  </h2>
                  <FaZap className="w-8 h-8 text-blue-400 animate-bounce" />
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
                  <ProjectCard key={index} project={project} index={index} />
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
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
