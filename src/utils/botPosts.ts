import { Post } from '../types/post';

const botAvatars = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
];

const botNames = [
  'Emma Thompson',
  'David Chen',
  'Sarah Williams',
  'Michael Rodriguez',
  'Lisa Anderson',
];

const postTemplates = [
  {
    content: "Just had a great session with my support group! It's amazing how understanding and supportive everyone is. #EpilepsyCommunity",
    mood: 'happy',
  },
  {
    content: "Celebrating 3 months seizure-free! Small victories matter. Thank you all for your continuous support! 🎉",
    mood: 'happy',
  },
  {
    content: "Found some great meditation techniques that help with stress management. Happy to share with anyone interested! 🧘‍♀️",
    mood: 'happy',
  },
  {
    content: "Having an okay day today. Remember it's fine to take things one day at a time. 💭",
    mood: 'neutral',
  },
  {
    content: "Trying to stay positive through the challenges. This community helps so much. 💪",
    mood: 'neutral',
  },
] as const;

export function generateBotPost(): Post {
  const randomAvatar = botAvatars[Math.floor(Math.random() * botAvatars.length)];
  const randomName = botNames[Math.floor(Math.random() * botNames.length)];
  const randomPost = postTemplates[Math.floor(Math.random() * postTemplates.length)];
  
  return {
    id: Date.now().toString(),
    author: randomName,
    avatar: `${randomAvatar}?w=128&h=128&fit=crop`,
    content: randomPost.content,
    timestamp: 'Just now',
    likes: Math.floor(Math.random() * 20),
    comments: Math.floor(Math.random() * 5),
    mood: randomPost.mood,
  };
}