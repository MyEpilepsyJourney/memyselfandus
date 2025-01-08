import React from 'react';
import BioLayout from '../layouts/BioLayout';
import BioEditor from '../components/bio/BioEditor';
import BioEngagement from '../components/bio/BioEngagement';
import BioMedications from '../components/bio/BioMedications';
import BioSeizureInfo from '../components/bio/BioSeizureInfo';
import FriendsList from '../components/profile/FriendsList';

export default function Bio() {
  return (
    <BioLayout>
      <div className="space-y-6">
        <BioEditor />
        <BioEngagement />
        <BioMedications />
        <BioSeizureInfo />
        <FriendsList />
      </div>
    </BioLayout>
  );
}