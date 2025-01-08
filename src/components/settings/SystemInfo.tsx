import React from 'react';
import { Server, Globe, Code } from 'lucide-react';
import SettingsSection from './SettingsSection';

export default function SystemInfo() {
  return (
    <SettingsSection
      icon={<Server className="w-5 h-5" />}
      title="System Information"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Globe className="w-5 h-5 text-gray-500" />
            <div>
              <h3 className="text-sm font-medium text-gray-700">Domain</h3>
              <p className="text-sm text-gray-600">www.memyselfandus.co.uk</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Code className="w-5 h-5 text-gray-500" />
            <div>
              <h3 className="text-sm font-medium text-gray-700">Tech Stack</h3>
              <p className="text-sm text-gray-600">React + Vite + TypeScript + Tailwind CSS</p>
            </div>
          </div>
        </div>

        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h4 className="text-sm font-medium text-gray-700 mb-2">System Details</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Node.js Runtime: WebContainer</li>
            <li>• Database: Supabase (PostgreSQL)</li>
            <li>• Authentication: Supabase Auth</li>
            <li>• Hosting: Netlify</li>
            <li>• CDN: Netlify Edge Network</li>
          </ul>
        </div>
      </div>
    </SettingsSection>
  );
}