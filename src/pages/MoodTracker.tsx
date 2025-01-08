import React from 'react';
import MoodHistory from '../components/mood/MoodHistory';
import MoodSummary from '../components/mood/MoodSummary';
import { useMoodHistory } from '../hooks/useMoodHistory';

export default function MoodTracker() {
  const { stats, timeFrame, setTimeFrame } = useMoodHistory();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Mood Tracker</h1>
      <MoodSummary stats={stats} />
      <MoodHistory
        stats={stats}
        timeFrame={timeFrame}
        onTimeFrameChange={setTimeFrame}
      />
    </div>
  );
}