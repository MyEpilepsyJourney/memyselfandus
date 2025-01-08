import React from 'react';
import MedicationSection from './MedicationSection';
import SeizureTypesSection from './SeizureTypesSection';
import EpilepsyTypeSection from './EpilepsyTypeSection';

export default function HealthDashboard() {
  return (
    <div className="space-y-6">
      <MedicationSection />
      <SeizureTypesSection />
      <EpilepsyTypeSection />
    </div>
  );
}