import React from 'react';
import { ChevronRight } from 'lucide-react';

interface SettingsItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

export default function SettingsItem({
  icon,
  title,
  description,
  onClick
}: SettingsItemProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
    >
      <div className="flex items-center space-x-4">
        <div className="text-gray-600">{icon}</div>
        <div className="text-left">
          <h3 className="font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <ChevronRight className="w-5 h-5 text-gray-400" />
    </button>
  );
}