import React from 'react';

interface QuickQuestionsProps {
  onSelect: (question: string) => void;
}

export default function QuickQuestions({ onSelect }: QuickQuestionsProps) {
  const questions = [
    "How can I track my seizures?",
    "Where can I find support groups?",
    "How do I update my medication list?",
    "Can you help with emergency contacts?",
  ];

  return (
    <div className="p-4">
      <p className="text-sm text-gray-600 mb-2">Common Questions:</p>
      <div className="space-y-2">
        {questions.map((question, index) => (
          <button
            key={index}
            onClick={() => onSelect(question)}
            className="w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}