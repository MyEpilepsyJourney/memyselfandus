import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

interface CelebrationOverlayProps {
  onComplete: () => void;
}

export default function CelebrationOverlay({ onComplete }: CelebrationOverlayProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Play celebration sound
    if (audioRef.current) {
      audioRef.current.play();
    }

    // Trigger confetti
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FF0000', '#00FF00', '#0000FF']
      });
      
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FF0000', '#00FF00', '#0000FF']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();

    // Cleanup after animation
    const timer = setTimeout(() => {
      onComplete();
    }, duration);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="text-center text-white">
        <h2 className="text-4xl font-bold mb-4 animate-bounce">
          CONGRATULATIONS TO OUR NEW MEMBER!
        </h2>
      </div>
      <audio
        ref={audioRef}
        src="https://assets.mixkit.co/active_storage/sfx/2685/2685-preview.mp3"
        preload="auto"
      />
    </div>
  );
}