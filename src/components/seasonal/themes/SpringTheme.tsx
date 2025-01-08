import React, { useEffect } from 'react';

export default function SpringTheme() {
  useEffect(() => {
    const audio = new Audio('/sounds/birds-chirping.mp3');
    audio.volume = 0.1;
    audio.loop = true;
    
    audio.play().catch(() => {});

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      <div className="absolute inset-0 bg-gradient-to-b from-green-100/20 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-32 bg-[url('https://images.unsplash.com/photo-1585507252242-11fe632c26e8')] bg-repeat-x opacity-20" />
    </div>
  );
}