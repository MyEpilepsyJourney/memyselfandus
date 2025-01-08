import React from 'react';
import { useSettingsContext } from '../../../contexts/SettingsContext';

interface PreferenceSelectProps {
  type: 'language' | 'timezone';
  label: string;
  options: Array<{ value: string; label: string }>;
}

export default function PreferenceSelect({
  type,
  label,
  options,
}: PreferenceSelectProps) {
  const { settings, updatePreferences } = useSettingsContext();
  
  return (
    <div className="flex justify-between items-center">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <select
        value={settings.preferences[type]}
        onChange={(e) => updatePreferences({ [type]: e.target.value })}
        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}