import React from 'react';
import { Smile, Meh, Frown } from 'lucide-react';
import { Mood } from '../types/post';

interface MoodTrackerProps {
  selectedMood?: Mood;
  onMoodSelect: (mood: Mood) => void;
}

export default function MoodTracker({ selectedMood, onMoodSelect }: MoodTrackerProps) {
  const getMoodButtonClass = (mood: Mood) => `
    flex flex-col items-center p-2 rounded-lg transition-all duration-200
    ${selectedMood === mood 
      ? 'bg-gray-100 transform scale-110' 
      : 'hover:bg-gray-100'
    }
  `;

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <h3 className="text-lg font-semibold mb-4">How are you feeling today?</h3>
      <div className="flex justify-around">
        <button 
          className={getMoodButtonClass('happy')}
          onClick={() => onMoodSelect('happy')}
        >
          <Smile className={`w-8 h-8 ${selectedMood === 'happy' ? 'text-green-500' : 'text-gray-400'}`} />
          <span className="mt-1 text-sm">Happy</span>
        </button>
        
        <button 
          className={getMoodButtonClass('neutral')}
          onClick={() => onMoodSelect('neutral')}
        >
          <Meh className={`w-8 h-8 ${selectedMood === 'neutral' ? 'text-yellow-500' : 'text-gray-400'}`} />
          <span className="mt-1 text-sm">Neutral</span>
        </button>
        
        <button 
          className={getMoodButtonClass('sad')}
          onClick={() => onMoodSelect('sad')}
        >
          <Frown className={`w-8 h-8 ${selectedMood === 'sad' ? 'text-red-500' : 'text-gray-400'}`} />
          <span className="mt-1 text-sm">Sad</span>
        </button>
      </div>
    </div>
  );
}