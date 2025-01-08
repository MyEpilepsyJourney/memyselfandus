import React, { useEffect } from 'react';

export default function SummerTheme() {
  useEffect(() => {
    const audio = new Audio('/sounds/summer-birds.mp3');
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
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100/20 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-32 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-repeat-x opacity-10" />
    </div>
  );
}