import React, { createContext, useContext } from 'react';
import { useSettings, SettingsState } from '../hooks/useSettings';

interface SettingsContextType {
  settings: SettingsState;
  updateNotifications: (updates: Partial<SettingsState['notifications']>) => void;
  updatePrivacy: (updates: Partial<SettingsState['privacy']>) => void;
  updateSecurity: (updates: Partial<SettingsState['security']>) => void;
  updatePreferences: (updates: Partial<SettingsState['preferences']>) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const settingsData = useSettings();

  return (
    <SettingsContext.Provider value={settingsData}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettingsContext() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettingsContext must be used within a SettingsProvider');
  }
  return context;
}