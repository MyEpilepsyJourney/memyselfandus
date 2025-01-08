import React from 'react';
import Toggle from '../../ui/Toggle';
import { useSettingsContext } from '../../../contexts/SettingsContext';

interface PrivacyToggleProps {
  type: 'showOnlineStatus' | 'showMoodHistory';
  label: string;
  description: string;
}

export default function PrivacyToggle({
  type,
  label,
  description,
}: PrivacyToggleProps) {
  const { settings, updatePrivacy } = useSettingsContext();
  
  return (
    <Toggle
      label={label}
      description={description}
      checked={settings.privacy[type]}
      onChange={(checked) => updatePrivacy({ [type]: checked })}
    />
  );
}