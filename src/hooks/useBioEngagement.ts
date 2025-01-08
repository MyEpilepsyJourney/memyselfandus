import { useState } from 'react';

export function useBioEngagement() {
  const [likes, setLikes] = useState(0);
  const [smiles, setSmiles] = useState(0);

  const handleLike = () => {
    setLikes(prev => prev + 1);
  };

  const handleSmile = () => {
    setSmiles(prev => prev + 1);
  };

  return {
    likes,
    smiles,
    handleLike,
    handleSmile
  };
}