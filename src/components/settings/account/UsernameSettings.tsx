import React, { useState } from 'react';
import { User, Save } from 'lucide-react';
import SettingsSection from '../SettingsSection';

export default function UsernameSettings() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically update the username
    setIsEditing(false);
    setPassword('');
  };

  return (
    <SettingsSection
      icon={<User className="w-5 h-5" />}
      title="Change Username"
    >
      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter new username"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm with Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center space-x-2 px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
          </div>
        </form>
      ) : (
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600">Current username:</p>
            <p className="font-medium text-gray-900">{username || 'No username set'}</p>
          </div>
          <button
            onClick={() => setIsEditing(true)}
            className="text-indigo-600 hover:text-indigo-700"
          >
            Edit
          </button>
        </div>
      )}
    </SettingsSection>
  );
}