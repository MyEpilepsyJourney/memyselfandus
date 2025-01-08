import React from 'react';

interface ProfileSectionProps {
  title: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}

export default function ProfileSection({
  title,
  children,
  action
}: ProfileSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        {action}
      </div>
      {children}
    </div>
  );
}