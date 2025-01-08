import React from 'react';

interface TermsSectionProps {
  title: string;
  content: string | string[];
}

export default function TermsSection({ title, content }: TermsSectionProps) {
  return (
    <section className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      {Array.isArray(content) ? (
        <ul className="space-y-2 text-gray-600">
          {content.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">{content}</p>
      )}
    </section>
  );
}