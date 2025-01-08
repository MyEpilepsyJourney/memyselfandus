import React from 'react';
import PageLayout from '../layouts/PageLayout';
import FriendsList from '../components/profile/FriendsList';

export default function Friends() {
  return (
    <PageLayout title="Friends">
      <FriendsList />
    </PageLayout>
  );
}