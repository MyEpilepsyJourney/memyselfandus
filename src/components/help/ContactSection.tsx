import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import HelpSection from './HelpSection';

export default function ContactSection() {
  return (
    <HelpSection title="Contact Us">
      <p className="text-gray-600 mb-4">
        If you're unable to find the answer you're looking for, feel free to reach out to us:
      </p>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-gray-400" />
          <div>
            <p className="text-sm font-medium text-gray-700">Email:</p>
            <a 
              href="mailto:aaron@myepilepsyjourney.uk" 
              className="text-indigo-600 hover:text-indigo-700"
            >
              aaron@myepilepsyjourney.uk
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <MessageCircle className="w-5 h-5 text-gray-400" />
          <div>
            <p className="text-sm font-medium text-gray-700">Live Chat:</p>
            <p className="text-gray-600">
              Available on weekdays from 9 AM to 5 PM
            </p>
          </div>
        </div>
      </div>
    </HelpSection>
  );
}