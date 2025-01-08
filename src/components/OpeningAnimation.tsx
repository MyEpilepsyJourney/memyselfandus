import React, { useState, useEffect } from 'react';
import SocialLinks from './auth/SocialLinks';

export default function OpeningAnimation() {
  const [show, setShow] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [show]);

  const handleAnimationEnd = () => {
    setAnimationComplete(true);
  };

  if (!show && animationComplete) return null;

  return (
    <div 
      className={`
        fixed inset-0 z-[9999] flex flex-col items-center justify-center
        bg-sky-400 overflow-hidden
        transition-all duration-1000 ease-in-out
        ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}
      `}
      onTransitionEnd={handleAnimationEnd}
    >
      <div className="text-center px-4 transform transition-transform duration-1000 delay-300">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-6">
          WE ARE HERE TO HELP YOU
        </h1>
        <p className="text-white text-xl md:text-2xl mb-8">
          FIND YOUR ANSWERS
        </p>
        <SocialLinks />
      </div>
    </div>
  );
}