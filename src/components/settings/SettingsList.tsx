import React from 'react';
import { User, Bell, Shield, Share2, HelpCircle } from 'lucide-react';
import SettingsItem from './SettingsItem';
import { routes } from '../../utils/navigation';

export default function SettingsList() {
  return (
    <div className="space-y-4">
      <SettingsItem
        icon={<User className="w-5 h-5" />}
        title="Account"
        description="Manage your account preferences"
        onClick={routes.accountSettings}
      />
      
      <SettingsItem
        icon={<Bell className="w-5 h-5" />}
        title="Notifications"
        description="Configure your notification settings"
        onClick={routes.accountSettings}
      />
      
      <SettingsItem
        icon={<Shield className="w-5 h-5" />}
        title="Privacy & Security"
        description="Control your privacy settings"
        onClick={routes.privacySettings}
      />
      
      <SettingsItem
        icon={<Share2 className="w-5 h-5" />}
        title="Connected Apps"
        description="Manage connected applications"
        onClick={routes.connectedApps}
      />
      
      <SettingsItem
        icon={<HelpCircle className="w-5 h-5" />}
        title="Help & Support"
        description="Get help and contact support"
        onClick={routes.helpSupport}
      />
    </div>
  );
}