import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import SettingsSection from '../SettingsSection';
import Toggle from '../../ui/Toggle';

export default function PrivacySettings() {
  const [profileVisibility, setProfileVisibility] = useState('friends');
  const [showOnlineStatus, setShowOnlineStatus] = useState(true);
  const [showMoodHistory, setShowMoodHistory] = useState(true);

  return (
    <SettingsSection
      icon={<Shield className="w-5 h-5" />}
      title="Privacy"
    >
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium text-gray-700">Profile Visibility</label>
          <select
            value={profileVisibility}
            onChange={(e) => setProfileVisibility(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="public">Public</option>
            <option value="friends">Friends Only</option>
            <option value="private">Private</option>
          </select>
        </div>

        <Toggle
          label="Show Online Status"
          description="Let others see when you're online"
          checked={showOnlineStatus}
          onChange={setShowOnlineStatus}
        />

        <Toggle
          label="Share Mood History"
          description="Allow friends to see your mood patterns"
          checked={showMoodHistory}
          onChange={setShowMoodHistory}
        />
      </div>
    </SettingsSection>
  );
}