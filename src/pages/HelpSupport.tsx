import React from 'react';
import PageLayout from '../layouts/PageLayout';
import FAQSection from '../components/help/FAQSection';
import TroubleshootingSection from '../components/help/TroubleshootingSection';
import ContactSection from '../components/help/ContactSection';
import CommunitySection from '../components/help/CommunitySection';

export default function HelpSupport() {
  return (
    <PageLayout title="Help & Support">
      <div className="space-y-6">
        <p className="text-gray-600">
          Find answers to your questions or get in touch with us for assistance.
        </p>
        <FAQSection />
        <TroubleshootingSection />
        <ContactSection />
        <CommunitySection />
      </div>
    </PageLayout>
  );
}