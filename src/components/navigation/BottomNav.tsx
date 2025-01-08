import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 h-16 safe-bottom">
      <div className="max-w-md mx-auto px-4 h-full flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className={`
            p-2 rounded-full transition-colors
            ${!isHomePage
              ? 'text-gray-600 hover:bg-gray-100'
              : 'text-gray-300 cursor-not-allowed'
            }
          `}
          disabled={isHomePage}
          aria-label="Go back"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => navigate('/')}
          className={`
            p-2 rounded-full transition-colors
            ${!isHomePage
              ? 'text-indigo-600 hover:bg-indigo-50'
              : 'text-gray-300 cursor-not-allowed'
            }
          `}
          disabled={isHomePage}
          aria-label="Go to home"
        >
          <Home className="w-6 h-6" />
        </button>

        <div className="text-sm font-semibold text-gray-600">
          ME MYSELF & Us<span className="text-xs align-super">™</span>
        </div>
      </div>
    </nav>
  );
}