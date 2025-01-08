import { useState, useEffect } from 'react';
import { MoodEntry, MoodStats, TimeFrame } from '../types/mood';
import { calculateMoodStats, filterMoodsByTimeFrame } from '../utils/moodUtils';

export function useMoodHistory() {
  const [moodEntries, setMoodEntries] = useState<MoodEntry[]>([]);
  const [timeFrame, setTimeFrame] = useState<TimeFrame>('daily');
  const [stats, setStats] = useState<MoodStats>({
    happy: 0,
    neutral: 0,
    sad: 0,
    total: 0
  });

  useEffect(() => {
    const filteredEntries = filterMoodsByTimeFrame(moodEntries, timeFrame);
    const newStats = calculateMoodStats(filteredEntries);
    setStats(newStats);
  }, [moodEntries, timeFrame]);

  const addMoodEntry = (mood: MoodEntry) => {
    setMoodEntries(prev => [mood, ...prev]);
  };

  return {
    moodEntries,
    timeFrame,
    stats,
    setTimeFrame,
    addMoodEntry
  };
}