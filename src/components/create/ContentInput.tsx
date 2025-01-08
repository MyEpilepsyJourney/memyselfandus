import React from 'react';
import { MessageCircle, Star } from 'lucide-react';

interface ContentInputProps {
  type: 'post' | 'question' | 'review';
  content: string;
  rating?: number;
  isSubmitting: boolean;
  onContentChange: (content: string) => void;
  onRatingChange?: (rating: number) => void;
}

export default function ContentInput({
  type,
  content,
  rating = 5,
  isSubmitting,
  onContentChange,
  onRatingChange
}: ContentInputProps) {
  return (
    <div className="relative">
      <textarea
        className="w-full p-3 pr-10 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        placeholder={
          type === 'question'
            ? "What's your question?"
            : type === 'review'
            ? "Share your experience..."
            : "Share your thoughts..."
        }
        rows={3}
        value={content}
        onChange={(e) => onContentChange(e.target.value)}
        disabled={isSubmitting}
      />
      {type === 'question' && (
        <MessageCircle className="absolute top-3 right-3 w-6 h-6 text-gray-400" />
      )}
      {type === 'review' && onRatingChange && (
        <div className="absolute top-3 right-3 flex items-center">
          <Star className="w-6 h-6 text-yellow-400" />
          <select
            value={rating}
            onChange={(e) => onRatingChange(Number(e.target.value))}
            className="ml-1 border-none bg-transparent text-gray-600 focus:ring-0"
          >
            {[5, 4, 3, 2, 1].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}