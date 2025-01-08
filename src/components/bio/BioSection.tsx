import React from 'react';

interface BioSectionProps {
  title: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}

export default function BioSection({
  title,
  children,
  action
}: BioSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        {action}
      </div>
      {children}
    </div>
  );
}