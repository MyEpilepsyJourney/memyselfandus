import React, { useState } from 'react';
import OpeningAnimation from '../components/OpeningAnimation';
import ContentCreator from '../components/create/ContentCreator';
import MoodTracker from '../components/MoodTracker';
import Post from '../components/Post';
import DonationBox from '../components/donations/DonationBox';
import LiveChat from '../components/chat/LiveChat';
import { usePosts } from '../hooks/usePosts';
import { useAutoPosts } from '../hooks/useAutoPosts';
import { Mood } from '../types/post';

export default function Home() {
  const { posts, addPost } = usePosts();
  const [selectedMood, setSelectedMood] = useState<Mood>();

  // Initialize auto-posting system
  useAutoPosts(addPost);

  return (
    <>
      <OpeningAnimation />
      <div className="space-y-6">
        <MoodTracker 
          selectedMood={selectedMood} 
          onMoodSelect={setSelectedMood} 
        />
        <ContentCreator />
        <DonationBox />
        <div className="space-y-6">
          {posts?.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      </div>
      <LiveChat />
    </>
  );
}