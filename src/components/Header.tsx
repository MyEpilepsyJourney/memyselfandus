import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Logo size="sm" className="text-indigo-600" />
            </a>
            <div className="hidden ml-10 space-x-8 lg:block">
              <a href="/about" className="text-base font-medium text-gray-600 hover:text-gray-900">
                About
              </a>
              <a href="/support" className="text-base font-medium text-gray-600 hover:text-gray-900">
                Support
              </a>
              <a href="/resources" className="text-base font-medium text-gray-600 hover:text-gray-900">
                Resources
              </a>
              <a href="/contact" className="text-base font-medium text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center text-indigo-600">
              <Users className="w-5 h-5 mr-2" />
              <span className="font-medium">17.2k Members</span>
            </div>
            <button
              onClick={() => navigate('/auth')}
              className="inline-block bg-indigo-600 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-indigo-700"
            >
              Sign In
            </button>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          <a href="/about" className="text-base font-medium text-gray-600 hover:text-gray-900">
            About
          </a>
          <a href="/support" className="text-base font-medium text-gray-600 hover:text-gray-900">
            Support
          </a>
          <a href="/resources" className="text-base font-medium text-gray-600 hover:text-gray-900">
            Resources
          </a>
          <a href="/contact" className="text-base font-medium text-gray-600 hover:text-gray-900">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}