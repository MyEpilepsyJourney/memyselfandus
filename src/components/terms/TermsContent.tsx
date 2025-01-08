import React from 'react';
import TermsSection from './TermsSection';
import { termsData } from '../../data/termsData';

export default function TermsContent() {
  return (
    <div className="space-y-8">
      {termsData.map((section) => (
        <TermsSection
          key={section.id}
          title={section.title}
          content={section.content}
        />
      ))}
    </div>
  );
}