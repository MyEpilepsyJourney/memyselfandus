import { useState } from 'react';

export function useBio() {
  const [bio, setBio] = useState('');

  const updateBio = (newBio: string) => {
    setBio(newBio);
    // Here you would typically save to backend
  };

  return {
    bio,
    updateBio
  };
}