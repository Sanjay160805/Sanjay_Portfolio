
import { FaGraduationCap, FaCode, FaUsers, FaBullseye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  const highlights = [
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: "B.E. Computer Science",
      subtitle: "Loyola-ICAM College",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "AI & Full-Stack",
      subtitle: "Development Focus",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Team Collaboration",
      subtitle: "Project Leadership",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <FaBullseye className="w-8 h-8" />,
      title: "Problem Solving",
      subtitle: "Real-world Solutions",
      color: "bg-orange-100 text-orange-600"
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
            <FaUsers className="w-5 h-5" />
          </Link>
          <Link to="/about" className="p-3 rounded-lg bg-blue-100 text-blue-600">
            <FaCode className="w-5 h-5" />
          </Link>
          <Link to="/projects" className="p-3 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors">
            <FaCode className="w-5 h-5" />
          </Link>
          <Link to="/contact" className="p-3 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors">
            <FaCode className="w-5 h-5" />
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-20 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate about creating meaningful technology solutions through continuous learning and collaboration
            </p>
          </div>
          
          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 ${highlight.color} rounded-lg flex items-center justify-center mb-4`}>
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600 text-sm">{highlight.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Main Content Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">My Journey</h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    I am currently pursuing a <span className="text-blue-600 font-semibold">B.E. in Computer Science</span> at 
                    Loyola-ICAM College of Engineering and Technology. I'm still learning and evolving in areas like 
                    <span className="text-purple-600 font-semibold"> AI</span>, 
                    <span className="text-pink-600 font-semibold"> full-stack development</span>, and 
                    <span className="text-cyan-600 font-semibold"> problem-solving</span>.
                  </p>
                  
                  <p>
                    Through various academic and hackathon projects — from 
                    <span className="text-green-600 font-semibold"> secure file sharing</span> to 
                    <span className="text-yellow-600 font-semibold"> deepfake detection</span> and 
                    <span className="text-orange-600 font-semibold"> data dashboards</span> — I've developed a strong interest in 
                    building solutions that matter.
                  </p>
                  
                  <p>
                    I value <span className="text-blue-600 font-bold">teamwork</span>, 
                    <span className="text-purple-600 font-bold"> continuous learning</span>, and
                    <span className="text-pink-600 font-bold"> solving real-world problems through code</span>.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                  <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                    <span className="text-white text-4xl font-bold">SCR</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Always Learning</h3>
                    <p className="text-gray-600">Passionate about technology and innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
