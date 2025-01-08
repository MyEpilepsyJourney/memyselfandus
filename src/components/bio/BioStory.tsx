import React, { useState } from 'react';
import { Edit2, Save } from 'lucide-react';
import BioSection from './BioSection';

export default function BioStory() {
  const [story, setStory] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  return (
    <BioSection
      title="Bio & Your Story"
      action={
        <button
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
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
        <textarea
          value={story}
          onChange={(e) => setStory(e.target.value)}
          placeholder="Share your story..."
          className="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      ) : (
        <p className="text-gray-600">
          {story || "Click 'Edit' to add your story..."}
        </p>
      )}
    </BioSection>
  );
}