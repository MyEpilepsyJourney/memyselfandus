import { useEffect } from 'react';
import { Post } from '../types/post';
import { initializeAutoContent } from '../utils/autoContent';

export function useAutoPosts(addPost: (post: Post) => void) {
  useEffect(() => {
    initializeAutoContent(addPost);
  }, [addPost]);
}