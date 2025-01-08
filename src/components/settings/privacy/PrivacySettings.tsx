import React from 'react';
import { Shield } from 'lucide-react';
import SettingsSection from '../SettingsSection';
import { useSettingsContext } from '../../../contexts/SettingsContext';
import Toggle from '../../ui/Toggle';

export default function PrivacySettings() {
  const { settings, updatePrivacy } = useSettingsContext();

  return (
    <SettingsSection
      icon={<Shield className="w-5 h-5" />}
      title="Privacy Settings"
    >
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium text-gray-700">Profile Visibility</label>
          <select
            value={settings.privacy.profileVisibility}
            onChange={(e) => updatePrivacy({ 
              profileVisibility: e.target.value as 'public' | 'friends' | 'private' 
            })}
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
          checked={settings.privacy.showOnlineStatus}
          onChange={(checked) => updatePrivacy({ showOnlineStatus: checked })}
        />

        <Toggle
          label="Share Health Data"
          description="Allow sharing of health information with healthcare providers"
          checked={settings.privacy.shareHealthData}
          onChange={(checked) => updatePrivacy({ shareHealthData: checked })}
        />

        <Toggle
          label="Share Mood History"
          description="Allow friends to see your mood patterns"
          checked={settings.privacy.showMoodHistory}
          onChange={(checked) => updatePrivacy({ showMoodHistory: checked })}
        />
      </div>
    </SettingsSection>
  );
}