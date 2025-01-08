import React from 'react';

interface LogoIconProps {
  className?: string;
  size?: number;
}

export default function LogoIcon({ className = '', size = 40 }: LogoIconProps) {
  return (
    <div 
      className={`flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg 
        viewBox="0 0 100 100" 
        fill="currentColor"
        className="w-full h-full"
      >
        <path d="M20 30 H80 V35 H20 Z" />
        <path d="M30 45 H70 V50 H30 Z" />
        <path d="M40 60 H60 V65 H40 Z" />
      </svg>
    </div>
  );
}