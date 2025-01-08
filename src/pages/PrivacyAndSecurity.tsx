import React from 'react';
import SettingsLayout from '../layouts/SettingsLayout';
import PrivacySettings from '../components/settings/privacy/PrivacySettings';
import SecuritySettings from '../components/settings/privacy/SecuritySettings';
import TermsAndConditions from '../components/settings/privacy/TermsAndConditions';

export default function PrivacyAndSecurity() {
  return (
    <SettingsLayout title="Privacy & Security">
      <div className="space-y-6">
        <PrivacySettings />
        <SecuritySettings />
        <TermsAndConditions />
      </div>
    </SettingsLayout>
  );
}