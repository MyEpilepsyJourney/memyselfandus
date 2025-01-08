import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function DonationSuccess() {
  return (
    <div className="text-center py-8">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
        <CheckCircle className="w-8 h-8 text-green-500" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Thank You for Your Support!
      </h2>
      <p className="text-gray-600 mb-6">
        Your generous donation helps us continue our mission of supporting the community.
      </p>
      <button
        onClick={() => window.location.href = '/'}
        className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
      >
        Return Home
      </button>
    </div>
  );
}