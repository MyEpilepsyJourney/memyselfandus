import React from 'react';
import ProfileLayout from '../layouts/ProfileLayout';
import ProfileBio from '../components/profile/ProfileBio';
import MedicationInfo from '../components/profile/MedicationInfo';
import SeizureInfo from '../components/profile/SeizureInfo';
import FriendsList from '../components/profile/FriendsList';

export default function Profile() {
  return (
    <ProfileLayout>
      <div className="space-y-6">
        <ProfileBio />
        <MedicationInfo />
        <SeizureInfo />
        <FriendsList />
      </div>
    </ProfileLayout>
  );
}