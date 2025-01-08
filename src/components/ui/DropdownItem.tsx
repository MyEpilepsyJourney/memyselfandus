import React from 'react';

interface DropdownItemProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export default function DropdownItem({ 
  icon, 
  children, 
  onClick, 
  disabled = false 
}: DropdownItemProps) {
  return (
    <button
      className={`
        w-full px-4 py-2 text-left flex items-center space-x-2 
        transition-colors
        ${disabled 
          ? 'text-gray-400 cursor-not-allowed' 
          : 'hover:bg-gray-100 text-gray-700'
        }
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="text-gray-500">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}