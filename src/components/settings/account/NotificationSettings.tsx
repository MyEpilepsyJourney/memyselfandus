import React from 'react';
import { Bell } from 'lucide-react';
import SettingsSection from '../SettingsSection';
import NotificationToggle from './NotificationToggle';

export default function NotificationSettings() {
  return (
    <SettingsSection
      icon={<Bell className="w-5 h-5" />}
      title="Notifications"
    >
      <div className="space-y-4">
        <NotificationToggle
          type="email"
          label="Email Notifications"
          description="Receive updates via email"
        />

        <NotificationToggle
          type="push"
          label="Push Notifications"
          description="Receive updates on your device"
        />

        <NotificationToggle
          type="reminders"
          label="Medication Reminders"
          description="Get reminded about your medication schedule"
        />
      </div>
    </SettingsSection>
  );
}