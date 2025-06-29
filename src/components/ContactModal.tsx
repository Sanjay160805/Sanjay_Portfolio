import React, { useState } from 'react';
import { X, Send, Heart, Sparkles } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // EmailJS configuration - you'll need to replace these with your actual values
      const SERVICE_ID = 'your_service_id';
      const TEMPLATE_ID = 'your_template_id';
      const PUBLIC_KEY = 'your_public_key';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'your-email@example.com', // Replace with your actual email
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      
      setIsSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
        setFormData({ name: '', email: '', message: '' });
      }, 2000);

    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg mx-4 rounded-3xl glass-card-strong border-2 border-white/20 shadow-2xl animate-fade-in-up max-h-[90vh] overflow-y-auto">
        <DialogDescription className="sr-only">
          Contact form to get in touch with Sanjay Christopher Raj
        </DialogDescription>
        {!isSubmitted ? (
          <>
            <DialogHeader className="text-center space-y-4 pb-4">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-neon-glow relative">
                <Heart className="w-8 h-8 text-white animate-bounce" />
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-sparkle" />
              </div>
              <DialogTitle className="text-2xl font-bold text-white text-shadow-glow">
                Thanks for checking out my profile! 
              </DialogTitle>
              <p className="text-gray-300 text-base">
                I'd love to hear from you! Drop me a message and let's connect.
              </p>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-gray-300">
                  Your Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                  disabled={isLoading}
                  className="glass-card border-white/20 focus:border-blue-500 rounded-xl transition-colors text-white placeholder-gray-400 h-10"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-300">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  disabled={isLoading}
                  className="glass-card border-white/20 focus:border-blue-500 rounded-xl transition-colors text-white placeholder-gray-400 h-10"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="What would you like to say? Any project ideas or just want to connect?"
                  required
                  disabled={isLoading}
                  className="glass-card border-white/20 focus:border-blue-500 rounded-xl transition-colors min-h-[80px] resize-none text-white placeholder-gray-400"
                />
              </div>
              
              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  disabled={isLoading}
                  className="flex-1 glass-card border-white/30 hover:glass-card-strong text-gray-300 hover:text-white rounded-xl h-10"
                >
                  Maybe Later
                </Button>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 rounded-xl animate-gradient-x h-10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-8 space-y-4 animate-fade-in-up">
            <div className="mx-auto w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-bounce shadow-2xl">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-green-400 text-shadow-glow">Message Sent!</h3>
            <p className="text-gray-300 text-base">
              Thank you for reaching out! I'll get back to you soon.
            </p>
            <div className="flex justify-center space-x-2 mt-4">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce animation-delay-100"></div>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce animation-delay-300"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce animation-delay-500"></div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
