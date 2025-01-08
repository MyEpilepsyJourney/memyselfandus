import React from 'react';
import HelpSection from './HelpSection';
import { troubleshootingData } from '../../data/helpData';

export default function TroubleshootingSection() {
  return (
    <HelpSection title="Troubleshooting">
      <ul className="space-y-3">
        {troubleshootingData.map((item) => (
          <li key={item.id} className="flex space-x-2">
            <strong className="text-gray-900">{item.issue}:</strong>
            <span className="text-gray-600">{item.solution}</span>
          </li>
        ))}
      </ul>
    </HelpSection>
  );
}