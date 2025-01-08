import React, { useState } from 'react';
import { Edit2, Save, X } from 'lucide-react';

interface SocialConnectionCardProps {
  platform: string;
  icon: React.ReactNode;
  connected: boolean;
  username: string;
  onToggle: () => void;
  onUpdateUsername: (username: string) => void;
}

export default function SocialConnectionCard({
  platform,
  icon,
  connected,
  username,
  onToggle,
  onUpdateUsername
}: SocialConnectionCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempUsername, setTempUsername] = useState(username);

  const handleSave = () => {
    onUpdateUsername(tempUsername);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempUsername(username);
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="text-gray-600">{icon}</div>
          <h3 className="font-medium text-gray-900">{platform}</h3>
        </div>
        <button
          onClick={onToggle}
          className={`
            px-4 py-2 rounded-md text-sm font-medium transition-colors
            ${connected
              ? 'bg-red-100 text-red-700 hover:bg-red-200'
              : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
            }
          `}
        >
          {connected ? 'Disconnect' : 'Connect'}
        </button>
      </div>

      {connected && (
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">Username</label>
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="text-indigo-600 hover:text-indigo-700"
              >
                <Edit2 className="w-4 h-4" />
              </button>
            ) : (
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleSave}
                  className="text-green-600 hover:text-green-700"
                >
                  <Save className="w-4 h-4" />
                </button>
                <button
                  onClick={handleCancel}
                  className="text-red-600 hover:text-red-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
          {isEditing ? (
            <input
              type="text"
              value={tempUsername}
              onChange={(e) => setTempUsername(e.target.value)}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder={`Enter your ${platform} username`}
            />
          ) : (
            <p className="mt-1 text-gray-600">
              {username || `No ${platform} username set`}
            </p>
          )}
        </div>
      )}
    </div>
  );
}