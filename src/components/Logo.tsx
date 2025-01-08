import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-3xl',
    lg: 'text-5xl'
  };

  return (
    <div className={`font-light tracking-wider ${sizeClasses[size]} ${className}`}>
      <span className="font-light tracking-[0.2em]">ME MYSELF</span>
      <br />
      <div className="flex items-center justify-center space-x-4">
        <span className="text-[120%] font-extralight">&</span>
        <span className="tracking-[0.3em]">US</span>
      </div>
    </div>
  );
}