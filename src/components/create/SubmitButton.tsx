import React from 'react';

interface SubmitButtonProps {
  isSubmitting: boolean;
  isValid: boolean;
  onClick: () => void;
}

export default function SubmitButton({
  isSubmitting,
  isValid,
  onClick
}: SubmitButtonProps) {
  return (
    <button 
      onClick={onClick}
      disabled={!isValid || isSubmitting}
      className={`
        px-4 py-2 bg-indigo-600 text-white rounded-full 
        flex items-center space-x-2 transition-all duration-200
        ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700'}
        ${isValid ? 'transform hover:scale-105' : 'opacity-50 cursor-not-allowed'}
      `}
    >
      <span>{isSubmitting ? 'Posting...' : 'Post'}</span>
    </button>
  );
}