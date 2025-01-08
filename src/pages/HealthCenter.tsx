import React from 'react';
import PageLayout from '../layouts/PageLayout';
import HealthDashboard from '../components/health/HealthDashboard';

export default function HealthCenter() {
  return (
    <PageLayout title="Health Center">
      <HealthDashboard />
    </PageLayout>
  );
}