import React from 'react';
import { MoodStats } from '../../types/mood';
import { getMoodEmoji } from '../../utils/moodUtils';

interface MoodSummaryProps {
  stats: MoodStats;
}

export default function MoodSummary({ stats }: MoodSummaryProps) {
  const getDominantMood = () => {
    if (stats.total === 0) return null;
    const moods = ['happy', 'neutral', 'sad'] as const;
    return moods.reduce((a, b) => (stats[a] > stats[b] ? a : b));
  };

  const dominantMood = getDominantMood();

  if (!dominantMood) return null;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Mood Summary</h3>
      <div className="flex items-center space-x-3">
        <span className="text-3xl">{getMoodEmoji(dominantMood)}</span>
        <div>
          <p className="text-gray-600">
            You've been feeling mostly{' '}
            <span className="font-medium text-gray-800">{dominantMood}</span>
          </p>
          <p className="text-sm text-gray-500">
            Based on {stats.total} mood {stats.total === 1 ? 'entry' : 'entries'}
          </p>
        </div>
      </div>
    </div>
  );
}