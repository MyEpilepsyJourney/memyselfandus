import React from 'react';
import PageLayout from '../layouts/PageLayout';
import SocialConnections from '../components/connected-apps/SocialConnections';

export default function ConnectedApps() {
  return (
    <PageLayout title="Connected Apps">
      <SocialConnections />
    </PageLayout>
  );
}