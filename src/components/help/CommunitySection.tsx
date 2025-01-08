import React from 'react';
import { Users } from 'lucide-react';
import HelpSection from './HelpSection';

export default function CommunitySection() {
  return (
    <HelpSection title="Community Support">
      <div className="space-y-4">
        <p className="text-gray-600">
          Join our community forums and ask other users for advice or share your experiences.
        </p>
        
        <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center space-x-3">
            <Users className="w-5 h-5 text-gray-400" />
            <span className="text-gray-700">Community Forum</span>
          </div>
          <a
            href="https://forum.memyselus.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-700"
          >
            Visit Forum
          </a>
        </div>
      </div>
    </HelpSection>
  );
}