import { useState, useCallback } from 'react';
import { Post, CreatePostData } from '../types/post';

const DEFAULT_POSTS: Post[] = [
  {
    id: "1",
    author: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
    content: "Just had a great support group meeting today! It's amazing how much strength we can find in sharing our stories. Remember, you're never alone in this journey. 💪 #SupportCommunity",
    timestamp: "2 hours ago",
    likes: 24,
    comments: 5,
    mood: 'happy'
  },
  {
    id: "2",
    author: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
    content: "Celebrating a small victory today - went for my first walk in the park after weeks of physio! Every step forward counts, no matter how small. Thank you all for your continuous encouragement! 🌟",
    timestamp: "5 hours ago",
    likes: 42,
    comments: 8,
    mood: 'happy'
  }
];

export function usePosts(initialPosts: Post[] = DEFAULT_POSTS) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const addPost = useCallback((postData: CreatePostData | Post) => {
    if ('id' in postData) {
      setPosts(currentPosts => [postData as Post, ...currentPosts]);
    } else {
      const newPost: Post = {
        id: Date.now().toString(),
        author: "Current User",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
        content: postData.content,
        timestamp: "Just now",
        likes: 0,
        comments: 0,
        mood: postData.mood
      };
      setPosts(currentPosts => [newPost, ...currentPosts]);
    }
  }, []);

  return { posts, addPost };
}