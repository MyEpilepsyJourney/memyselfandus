import React from 'react';
import { useMoodHistory } from '../../hooks/useMoodHistory';
import MoodHistory from './MoodHistory';
import MoodSummary from './MoodSummary';

export default function MoodDashboard() {
  const { stats, timeFrame, setTimeFrame } = useMoodHistory();

  return (
    <div className="space-y-6">
      <MoodSummary stats={stats} />
      <MoodHistory
        stats={stats}
        timeFrame={timeFrame}
        onTimeFrameChange={setTimeFrame}
      />
    </div>
  );
}