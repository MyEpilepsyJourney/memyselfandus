import React, { useState } from 'react';
import { useBio } from '../../hooks/useBio';

export default function BioEditor() {
  const { bio, updateBio } = useBio();
  const [content, setContent] = useState(bio);
  const maxLength = 5000;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length <= maxLength) {
      setContent(text);
      updateBio(text);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Tell Us About Yourself
      </h2>
      
      <textarea
        value={content}
        onChange={handleChange}
        placeholder="Share your story here..."
        className="w-full h-48 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
        maxLength={maxLength}
      />
      
      <div className="text-right text-sm text-gray-500 mt-2">
        {content.length}/{maxLength} characters
      </div>
    </div>
  );
}