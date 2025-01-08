import { AUTO_CONTENT, SITE_CONFIG } from './constants';
import { Post } from '../types/post';

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomPost(): Post {
  const post = AUTO_CONTENT.posts[Math.floor(Math.random() * AUTO_CONTENT.posts.length)];
  const timestamp = new Date().toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: 'numeric',
    hour12: true 
  });
  
  return {
    id: `post_${Date.now()}`,
    author: "Aaron",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
    content: post.content,
    timestamp: `Today at ${timestamp}`,
    likes: getRandomNumber(post.minLikes, post.maxLikes),
    comments: getRandomNumber(post.minComments, post.maxComments),
    mood: 'happy'
  };
}

export function initializeAutoContent(addPost: (post: Post) => void) {
  // Add initial post immediately
  addPost(getRandomPost());

  // Set up interval for new posts
  setInterval(() => {
    addPost(getRandomPost());
  }, SITE_CONFIG.timing.postInterval);
}