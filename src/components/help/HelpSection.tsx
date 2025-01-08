import React from 'react';

interface HelpSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function HelpSection({ title, children }: HelpSectionProps) {
  return (
    <section className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      {children}
    </section>
  );
}