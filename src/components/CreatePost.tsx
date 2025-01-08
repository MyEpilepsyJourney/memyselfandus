import React, { useState } from 'react';
import { Image, Send } from 'lucide-react';
import { Mood } from '../types/post';

interface CreatePostProps {
  onSubmit: (content: string, mood?: Mood) => void;
  selectedMood?: Mood;
}

export default function CreatePost({ onSubmit, selectedMood }: CreatePostProps) {
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!content.trim()) return;
    
    setIsSubmitting(true);
    try {
      await onSubmit(content, selectedMood);
      setContent('');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getMoodEmoji = (mood?: Mood) => {
    switch (mood) {
      case 'happy': return '🙂';
      case 'neutral': return '🙁';
      case 'sad': return '😢';
      default: return null;
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-sm p-3 mb-4">
      <div className="relative">
        <textarea
          className="w-full p-2 pr-8 text-sm border border-gray-200 rounded-lg resize-none focus:ring-1 focus:ring-indigo-500 focus:border-transparent bg-white"
          placeholder="Share your thoughts..."
          rows={2}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          disabled={isSubmitting}
        />
        {selectedMood && (
          <span className="absolute top-2 right-2 text-base">
            {getMoodEmoji(selectedMood)}
          </span>
        )}
      </div>
      
      <div className="flex justify-between items-center mt-2">
        <button 
          className="p-1.5 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
          disabled={isSubmitting}
        >
          <Image className="w-4 h-4" />
        </button>
        
        <button 
          className={`
            px-3 py-1.5 bg-indigo-600 text-white rounded-full 
            flex items-center space-x-1 text-sm transition-all duration-200
            ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700'}
            ${content.trim() ? 'transform hover:scale-105' : 'opacity-50 cursor-not-allowed'}
          `}
          onClick={handleSubmit}
          disabled={isSubmitting || !content.trim()}
        >
          <Send className="w-3 h-3" />
          <span>{isSubmitting ? 'Posting...' : 'Post'}</span>
        </button>
      </div>
    </div>
  );
}