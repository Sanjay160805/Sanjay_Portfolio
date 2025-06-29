
import React from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg mx-4 rounded-3xl glass-card-strong border-2 border-white/20 shadow-2xl animate-fade-in-up max-h-[90vh] overflow-y-auto">
        <DialogDescription className="sr-only">
          Contact information for Sanjay Christopher Raj
        </DialogDescription>
        <DialogHeader className="text-center space-y-4 pb-4">
          <DialogTitle className="text-2xl font-bold text-white text-shadow-glow">
            Thanks for checking out my profile! 
          </DialogTitle>
          <p className="text-gray-300 text-base">
            Feel free to reach out through any of the contact methods in the Contact section below.
          </p>
        </DialogHeader>
        
        <div className="flex justify-center pt-4">
          <Button
            onClick={onClose}
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 rounded-xl animate-gradient-x h-10"
          >
            Got it!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
