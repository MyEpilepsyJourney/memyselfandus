import React from 'react';
import SettingsLayout from '../layouts/SettingsLayout';
import UsernameSettings from '../components/settings/account/UsernameSettings';
import LocationSettings from '../components/settings/account/LocationSettings';

export default function AccountSettings() {
  return (
    <SettingsLayout title="Account Settings">
      <div className="space-y-6">
        <UsernameSettings />
        <LocationSettings />
      </div>
    </SettingsLayout>
  );
}