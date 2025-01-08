import React from 'react';
import HelpSection from './HelpSection';
import { faqData } from '../../data/helpData';

export default function FAQSection() {
  return (
    <HelpSection title="Frequently Asked Questions (FAQ)">
      <div className="space-y-4">
        {faqData.map((item) => (
          <div key={item.id} className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">{item.question}</h3>
            <p className="text-gray-600">{item.answer}</p>
          </div>
        ))}
      </div>
    </HelpSection>
  );
}