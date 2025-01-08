export type Mood = 'happy' | 'neutral' | 'sad';

export interface Post {
  id: string;
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  mood?: Mood;
}

export interface CreatePostData {
  content: string;
  mood?: Mood;
}