import React from 'react';

interface ContentTypeSelectorProps {
  selectedType: 'post' | 'question' | 'review';
  onTypeSelect: (type: 'post' | 'question' | 'review') => void;
}

export default function ContentTypeSelector({
  selectedType,
  onTypeSelect
}: ContentTypeSelectorProps) {
  const types = [
    { value: 'post', label: 'Share Post' },
    { value: 'question', label: 'Ask Question' },
    { value: 'review', label: 'Write Review' }
  ] as const;

  return (
    <div className="flex space-x-4">
      {types.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onTypeSelect(value)}
          className={`
            flex-1 py-2 px-4 rounded-full transition-colors
            ${selectedType === value
              ? 'bg-indigo-100 text-indigo-700'
              : 'text-gray-600 hover:bg-gray-100'
            }
          `}
        >
          {label}
        </button>
      ))}
    </div>
  );
}