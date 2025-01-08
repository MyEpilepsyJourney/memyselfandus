export type MoodType = 'happy' | 'neutral' | 'sad';

export interface MoodEntry {
  id: string;
  mood: MoodType;
  timestamp: string;
  note?: string;
}

export interface MoodStats {
  happy: number;
  neutral: number;
  sad: number;
  total: number;
}

export type TimeFrame = 'daily' | 'weekly' | 'monthly';