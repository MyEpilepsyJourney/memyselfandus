import React from 'react';
import { BarChart, Calendar, Clock } from 'lucide-react';
import { TimeFrame, MoodStats } from '../../types/mood';
import { getMoodEmoji } from '../../utils/moodUtils';

interface MoodHistoryProps {
  stats: MoodStats;
  timeFrame: TimeFrame;
  onTimeFrameChange: (timeFrame: TimeFrame) => void;
}

export default function MoodHistory({ stats, timeFrame, onTimeFrameChange }: MoodHistoryProps) {
  const timeFrameOptions: { value: TimeFrame; label: string; icon: React.ReactNode }[] = [
    { value: 'daily', label: 'Today', icon: <Clock className="w-4 h-4" /> },
    { value: 'weekly', label: 'This Week', icon: <Calendar className="w-4 h-4" /> },
    { value: 'monthly', label: 'This Month', icon: <BarChart className="w-4 h-4" /> }
  ];

  const getPercentage = (count: number) => {
    return stats.total ? Math.round((count / stats.total) * 100) : 0;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Mood History</h3>
        <div className="flex space-x-2">
          {timeFrameOptions.map(({ value, label, icon }) => (
            <button
              key={value}
              onClick={() => onTimeFrameChange(value)}
              className={`
                flex items-center space-x-1 px-3 py-1 rounded-full text-sm
                ${timeFrame === value
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
                }
              `}
            >
              {icon}
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {(['happy', 'neutral', 'sad'] as const).map(mood => {
          const percentage = getPercentage(stats[mood]);
          return (
            <div key={mood} className="relative">
              <div className="flex items-center justify-between mb-1">
                <span className="flex items-center space-x-2">
                  <span className="text-lg">{getMoodEmoji(mood)}</span>
                  <span className="capitalize text-sm text-gray-600">{mood}</span>
                </span>
                <span className="text-sm text-gray-600">
                  {stats[mood]} ({percentage}%)
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    mood === 'happy'
                      ? 'bg-green-500'
                      : mood === 'neutral'
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                  }`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {stats.total === 0 && (
        <p className="text-center text-gray-500 mt-4">
          No mood entries for this time period
        </p>
      )}
    </div>
  );
}