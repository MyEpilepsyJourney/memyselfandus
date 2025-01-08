import { useState } from 'react';

export interface SettingsState {
  notifications: {
    email: boolean;
    push: boolean;
    reminders: boolean;
  };
  privacy: {
    profileVisibility: 'public' | 'friends' | 'private';
    showOnlineStatus: boolean;
    showMoodHistory: boolean;
    shareHealthData: boolean;
  };
  security: {
    twoFactorEnabled: boolean;
    loginNotifications: boolean;
    dataEncryption: boolean;
  };
  preferences: {
    language: string;
    timezone: string;
  };
}

const defaultSettings: SettingsState = {
  notifications: {
    email: true,
    push: true,
    reminders: true,
  },
  privacy: {
    profileVisibility: 'friends',
    showOnlineStatus: true,
    showMoodHistory: true,
    shareHealthData: false,
  },
  security: {
    twoFactorEnabled: false,
    loginNotifications: true,
    dataEncryption: true,
  },
  preferences: {
    language: 'en',
    timezone: 'UTC',
  },
};

export function useSettings() {
  const [settings, setSettings] = useState<SettingsState>(defaultSettings);

  const updateNotifications = (updates: Partial<SettingsState['notifications']>) => {
    setSettings(prev => ({
      ...prev,
      notifications: { ...prev.notifications, ...updates },
    }));
  };

  const updatePrivacy = (updates: Partial<SettingsState['privacy']>) => {
    setSettings(prev => ({
      ...prev,
      privacy: { ...prev.privacy, ...updates },
    }));
  };

  const updateSecurity = (updates: Partial<SettingsState['security']>) => {
    setSettings(prev => ({
      ...prev,
      security: { ...prev.security, ...updates },
    }));
  };

  const updatePreferences = (updates: Partial<SettingsState['preferences']>) => {
    setSettings(prev => ({
      ...prev,
      preferences: { ...prev.preferences, ...updates },
    }));
  };

  return {
    settings,
    updateNotifications,
    updatePrivacy,
    updateSecurity,
    updatePreferences,
  };
}