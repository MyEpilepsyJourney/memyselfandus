import React from 'react';
import { Heart } from 'lucide-react';

export default function DonationBox() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mt-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Heart className="w-5 h-5 text-pink-500" />
          <div>
            <h3 className="font-medium text-gray-900">Support Our Community</h3>
            <p className="text-sm text-gray-600">Help us maintain and improve our services</p>
          </div>
        </div>
        <button
          onClick={() => window.open('/donate', '_blank')}
          className="px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
        >
          Donate Now
        </button>
      </div>
    </div>
  );
}