import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SettingsSection from '../SettingsSection';

export default function TermsAndConditions() {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  return (
    <SettingsSection
      icon={isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      title="Terms & Conditions"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left"
      >
        <p className="text-gray-600 mb-2">
          Review our terms of service and privacy policy
        </p>
      </button>
      
      {isExpanded && (
        <div className="mt-4 space-y-4 text-gray-600">
          <section>
            <h3 className="font-semibold text-gray-800 mb-2">1. Introduction</h3>
            <p>Welcome to ME MYSELF & Us™. By using our services, you agree to these terms and conditions.</p>
          </section>

          <section>
            <h3 className="font-semibold text-gray-800 mb-2">2. Privacy Policy</h3>
            <p>We take your privacy seriously. Your personal and medical information is protected and will never be shared without your explicit consent.</p>
          </section>

          <div className="pt-4">
            <button 
              onClick={() => navigate('/terms')}
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              View Full Terms & Conditions
            </button>
          </div>
        </div>
      )}
    </SettingsSection>
  );
}