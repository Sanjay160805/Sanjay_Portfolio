
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaCopy } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleCopyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: `${type} copied!`,
        description: `${text} has been copied to your clipboard.`,
        duration: 3000,
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Failed to copy to clipboard. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 86109 38806",
      href: "tel:+918610938806",
      color: "bg-blue-100 text-blue-600",
      copyText: "+91 86109 38806"
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      label: "Email",
      value: "sanjaychristopherraj.27csb@licet.ac.in",
      href: "mailto:sanjaychristopherraj.27csb@licet.ac.in",
      color: "bg-purple-100 text-purple-600",
      copyText: "sanjaychristopherraj.27csb@licet.ac.in"
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/sanjay160805",
      href: "https://www.linkedin.com/in/sanjay160805",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/Sanjay160805",
      href: "https://github.com/Sanjay160805",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const handleContactClick = (contact) => {
    if (contact.copyText) {
      handleCopyToClipboard(contact.copyText, contact.label);
    } else {
      window.open(contact.href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <div className="fixed left-0 top-0 h-full w-20 bg-white shadow-lg z-50 flex flex-col items-center py-8">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-8">
          <span className="text-white font-bold text-lg">S</span>
        </div>
        
        <nav className="flex flex-col space-y-6">
          <Link to="/" className="p-3 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors">
            <FaEnvelope className="w-5 h-5" />
          </Link>
          <Link to="/about" className="p-3 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors">
            <FaEnvelope className="w-5 h-5" />
          </Link>
          <Link to="/projects" className="p-3 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors">
            <FaEnvelope className="w-5 h-5" />
          </Link>
          <Link to="/contact" className="p-3 rounded-lg bg-blue-100 text-blue-600">
            <FaEnvelope className="w-5 h-5" />
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-20 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to collaborate on your next project? Let's build something amazing together!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <button
                    key={index}
                    onClick={() => handleContactClick(contact)}
                    className="w-full bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-left group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${contact.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {contact.label}
                        </h3>
                        <p className="text-gray-600 group-hover:text-blue-600 transition-colors break-all">
                          {contact.value}
                        </p>
                      </div>
                      {contact.copyText && (
                        <FaCopy className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">SCR</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sanjay Christopher Raj</h3>
                <p className="text-blue-600 font-medium mb-4">Computer Science Student</p>
                <p className="text-gray-600 mb-6">Loyola-ICAM College of Engineering and Technology</p>
                
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <div className="flex items-center justify-center space-x-2 text-gray-600 mb-4">
                    <FaMapMarkerAlt className="w-4 h-4" />
                    <span>Chennai, Tamil Nadu, India</span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Available for internships, collaborations, and freelance projects. 
                    Passionate about AI, full-stack development, and solving real-world problems.
                  </p>
                </div>

                <div className="flex justify-center space-x-4">
                  <a
                    href="https://github.com/Sanjay160805"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <FaGithub className="w-5 h-5 text-gray-700" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sanjay160805"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5 text-blue-700" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
