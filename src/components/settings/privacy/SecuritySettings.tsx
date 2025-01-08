import React from 'react';
import { Lock } from 'lucide-react';
import SettingsSection from '../SettingsSection';
import { useSettingsContext } from '../../../contexts/SettingsContext';
import Toggle from '../../ui/Toggle';

export default function SecuritySettings() {
  const { settings, updateSecurity } = useSettingsContext();

  return (
    <SettingsSection
      icon={<Lock className="w-5 h-5" />}
      title="Security Settings"
    >
      <div className="space-y-4">
        <Toggle
          label="Two-Factor Authentication"
          description="Add an extra layer of security to your account"
          checked={settings.security.twoFactorEnabled}
          onChange={(checked) => updateSecurity({ twoFactorEnabled: checked })}
        />

        <Toggle
          label="Login Notifications"
          description="Get notified of new login attempts"
          checked={settings.security.loginNotifications}
          onChange={(checked) => updateSecurity({ loginNotifications: checked })}
        />

        <Toggle
          label="Data Encryption"
          description="Enable end-to-end encryption for your health data"
          checked={settings.security.dataEncryption}
          onChange={(checked) => updateSecurity({ dataEncryption: checked })}
        />
      </div>
    </SettingsSection>
  );
}