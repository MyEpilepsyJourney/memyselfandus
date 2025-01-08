import React from 'react';
import { Heart } from 'lucide-react';

export default function DonationStats() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-pink-100 rounded-full">
            <Heart className="w-5 h-5 text-pink-500" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Total Donations</h3>
            <p className="text-2xl font-bold text-indigo-600">£65</p>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          From our amazing supporters
        </div>
      </div>
    </div>
  );
}