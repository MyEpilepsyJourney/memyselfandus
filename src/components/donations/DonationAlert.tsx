import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface DonationAlertProps {
  amount: string;
  onClose: () => void;
}

export default function DonationAlert({ amount, onClose }: DonationAlertProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-20 right-4 bg-white rounded-lg shadow-lg p-4 animate-slide-in">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-pink-100 rounded-full">
          <Heart className="w-5 h-5 text-pink-500" />
        </div>
        <div>
          <p className="text-sm text-gray-600">New Donation!</p>
          <p className="font-medium text-gray-900">{amount} donated</p>
        </div>
      </div>
    </div>
  );
}