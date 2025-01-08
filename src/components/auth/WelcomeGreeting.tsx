import React from 'react';
import { Heart, Users, MessageSquare } from 'lucide-react';

interface WelcomeGreetingProps {
  username?: string;
  onClose: () => void;
}

export default function WelcomeGreeting({ username, onClose }: WelcomeGreetingProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-lg w-full mx-4 animate-fade-in">
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-bold text-indigo-600">
            Welcome to ME MYSELF & Us™!
          </h1>
          
          <p className="text-xl text-gray-700">
            Hello {username ? username : 'there'}! 👋
          </p>
          
          <p className="text-gray-600">
            We're so happy to have you join our community of connection, support, and empowerment! 
            This platform was created with <span className="text-indigo-600 font-medium">YOU</span> in mind.
          </p>

          <div className="space-y-4 py-4">
            <h2 className="text-lg font-semibold text-gray-800">Here's what you can do to get started:</h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Heart className="w-5 h-5 text-pink-500" />
                <p className="text-gray-600 text-left">Update your profile and share your story</p>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-blue-500" />
                <p className="text-gray-600 text-left">Connect with others in the community</p>
              </div>
              <div className="flex items-center space-x-3">
                <MessageSquare className="w-5 h-5 text-green-500" />
                <p className="text-gray-600 text-left">Share experiences and find support</p>
              </div>
            </div>
          </div>

          <p className="text-gray-600 italic">
            Remember, you are not alone. This is a place to be yourself and feel empowered. 🌟
          </p>

          <button
            onClick={onClose}
            className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}