import React from 'react';
import MoodDashboard from '../components/mood/MoodDashboard';
import { useMoodHistory } from '../hooks/useMoodHistory';

export default function Dashboard() {
  const moodHistory = useMoodHistory();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      <MoodDashboard {...moodHistory} />
    </div>
  );
}