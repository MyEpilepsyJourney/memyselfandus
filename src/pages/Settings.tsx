import React from 'react';
import SettingsLayout from '../layouts/SettingsLayout';
import SettingsList from '../components/settings/SettingsList';
import SystemInfo from '../components/settings/SystemInfo';

export default function Settings() {
  return (
    <SettingsLayout title="Settings">
      <div className="space-y-6">
        <SettingsList />
        <SystemInfo />
      </div>
    </SettingsLayout>
  );
}