import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

interface EmergencyButtonProps {
  onEmergency: (message: string) => Promise<void>;
  isLoading?: boolean;
}

export default function EmergencyButton({ onEmergency, isLoading }: EmergencyButtonProps) {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleEmergency = async () => {
    try {
      await onEmergency('Emergency assistance needed');
      setShowConfirm(false);
    } catch (error) {
      console.error('Failed to send emergency alert:', error);
    }
  };

  return (
    <div className="fixed bottom-20 right-4">
      {showConfirm ? (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
          <p className="text-gray-800 mb-4">Send emergency alert to your contacts?</p>
          <div className="flex space-x-2">
            <button
              onClick={handleEmergency}
              disabled={isLoading}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50"
            >
              {isLoading ? 'Sending...' : 'Confirm'}
            </button>
            <button
              onClick={() => setShowConfirm(false)}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setShowConfirm(true)}
          className="p-4 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-transform hover:scale-110"
        >
          <AlertCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}