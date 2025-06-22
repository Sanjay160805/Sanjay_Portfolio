
import React from 'react';
import { Phone, Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 86109 38806",
      href: "tel:+918610938806"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "sanjaychristopherraj.27csb@licet.ac.in",
      href: "mailto:sanjaychristopherraj.27csb@licet.ac.in"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/sanjay160805",
      href: "https://www.linkedin.com/in/sanjay160805"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/Sanjay160805",
      href: "https://github.com/Sanjay160805"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          <p className="text-xl text-blue-100 mt-6">
            Ready to collaborate on your next project? Let's build something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 p-3 rounded-lg">
                  {contact.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-100">{contact.label}</h3>
                  <p className="text-white">{contact.value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12 pt-8 border-t border-white/20">
          <p className="text-blue-100">
            © 2025 Sanjay Christopher Raj. Built with passion and code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
