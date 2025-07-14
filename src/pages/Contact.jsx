
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useToast } from '@/hooks/use-toast';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';

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
      color: "from-blue-500 to-cyan-500",
      copyText: "+91 86109 38806"
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      label: "Email",
      value: "sanjaychristopherraj.27csb@licet.ac.in",
      href: "mailto:sanjaychristopherraj.27csb@licet.ac.in",
      color: "from-purple-500 to-pink-500",
      copyText: "sanjaychristopherraj.27csb@licet.ac.in"
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/sanjay160805",
      href: "https://www.linkedin.com/in/sanjay160805",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/Sanjay160805",
      href: "https://github.com/Sanjay160805",
      color: "from-orange-500 to-red-500"
    }
  ];

  const handleContactClick = (contact) => {
    if (contact.copyText) {
      // For phone and email, copy to clipboard
      handleCopyToClipboard(contact.copyText, contact.label);
    } else {
      // For LinkedIn and GitHub, open the link
      window.open(contact.href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 relative overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <div className="pt-16">
          <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Enhanced background */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full animate-blob"></div>
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
              <div className="text-center mb-16 animate-fade-in-up">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-shadow-glow">
                  Let's Connect
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 animate-gradient-x"></div>
                <p className="text-2xl text-gray-300 leading-relaxed animate-fade-in-up animation-delay-500">
                  Ready to collaborate on your next project? Let's build something 
                  <span className="text-neon"> amazing</span> together!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {contactInfo.map((contact, index) => (
                  <button
                    key={index}
                    onClick={() => handleContactClick(contact)}
                    className="glass-card-strong rounded-2xl p-8 hover-lift hover-glow transition-all duration-500 animate-fade-in-up group text-left w-full"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex items-center space-x-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:animate-bounce transition-all duration-300 shadow-lg`}>
                        <div className="text-white">
                          {contact.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-400 group-hover:text-gray-300 transition-colors mb-2">
                          {contact.label}
                        </h3>
                        <p className="text-white text-lg group-hover:text-neon transition-colors break-all">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
