import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import SettingsSection from '../SettingsSection';
import { countries } from '../../../data/countries';

export default function LocationSettings() {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleSave = () => {
    // Here you would typically save the country selection
  };

  return (
    <SettingsSection
      icon={<Globe className="w-5 h-5" />}
      title="Location"
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Your Country
          </label>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            <option value="" disabled>Select your country</option>
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
          >
            Save Location
          </button>
        </div>
      </div>
    </SettingsSection>
  );
}