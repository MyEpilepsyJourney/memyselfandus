import React, { useState } from 'react';
import { Edit2, Save } from 'lucide-react';
import ProfileSection from './ProfileSection';

export default function SeizureInfo() {
  const [seizureTypes, setSeizureTypes] = useState('');
  const [epilepsyType, setEpilepsyType] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  return (
    <ProfileSection
      title="Seizure & Epilepsy Information"
      action={
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700"
        >
          {isEditing ? (
            <>
              <Save className="w-4 h-4" />
              <span>Save</span>
            </>
          ) : (
            <>
              <Edit2 className="w-4 h-4" />
              <span>Edit</span>
            </>
          )}
        </button>
      }
    >
      {isEditing ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Types of Seizures
            </label>
            <textarea
              value={seizureTypes}
              onChange={(e) => setSeizureTypes(e.target.value)}
              placeholder="Describe your seizure types..."
              className="w-full h-24 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Type of Epilepsy
            </label>
            <textarea
              value={epilepsyType}
              onChange={(e) => setEpilepsyType(e.target.value)}
              placeholder="Describe your type of epilepsy..."
              className="w-full h-24 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-1">Types of Seizures</h3>
            <p className="text-gray-600">
              {seizureTypes || "Click 'Edit' to add seizure information..."}
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-1">Type of Epilepsy</h3>
            <p className="text-gray-600">
              {epilepsyType || "Click 'Edit' to add epilepsy information..."}
            </p>
          </div>
        </div>
      )}
    </ProfileSection>
  );
}