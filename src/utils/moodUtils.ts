import { MoodEntry, MoodStats, TimeFrame } from '../types/mood';

export function calculateMoodStats(entries: MoodEntry[]): MoodStats {
  const stats: MoodStats = {
    happy: 0,
    neutral: 0,
    sad: 0,
    total: entries.length
  };

  entries.forEach(entry => {
    stats[entry.mood]++;
  });

  return stats;
}

export function filterMoodsByTimeFrame(entries: MoodEntry[], timeFrame: TimeFrame): MoodEntry[] {
  const now = new Date();
  const startDate = new Date();

  switch (timeFrame) {
    case 'daily':
      startDate.setHours(0, 0, 0, 0);
      break;
    case 'weekly':
      startDate.setDate(now.getDate() - 7);
      break;
    case 'monthly':
      startDate.setMonth(now.getMonth() - 1);
      break;
  }

  return entries.filter(entry => new Date(entry.timestamp) >= startDate);
}

export function getMoodEmoji(mood: string): string {
  switch (mood) {
    case 'happy':
      return '🙂';
    case 'neutral':
      return '🙁';
    case 'sad':
      return '😢';
    default:
      return '';
  }
}