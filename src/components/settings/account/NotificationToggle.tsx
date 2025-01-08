import React from 'react';
import Toggle from '../../ui/Toggle';
import { useSettingsContext } from '../../../contexts/SettingsContext';

interface NotificationToggleProps {
  type: 'email' | 'push' | 'reminders';
  label: string;
  description: string;
}

export default function NotificationToggle({
  type,
  label,
  description,
}: NotificationToggleProps) {
  const { settings, updateNotifications } = useSettingsContext();
  
  return (
    <Toggle
      label={label}
      description={description}
      checked={settings.notifications[type]}
      onChange={(checked) => updateNotifications({ [type]: checked })}
    />
  );
}