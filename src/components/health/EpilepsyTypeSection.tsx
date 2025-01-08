import React, { useState } from 'react';
import { Edit2, Save } from 'lucide-react';
import HealthSection from './HealthSection';

interface EpilepsyInfo {
  type: string;
  diagnosis: string;
  notes: string;
  treatment: string;
}

export default function EpilepsyTypeSection() {
  const [epilepsyInfo, setEpilepsyInfo] = useState<EpilepsyInfo>({
    type: '',
    diagnosis: '',
    notes: '',
    treatment: ''
  });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <HealthSection
      title="Type of Epilepsy"
      action={
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700"
        >
          {isEditing ? (
            <>
              <Save className="w-4 h-4" />
              <span>Save</span>
            </>
          ) : (
            <>
              <Edit2 className="w-4 h-4" />
              <span>Edit</span>
            </>
          )}
        </button>
      }
    >
      {isEditing ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Type of Epilepsy
            </label>
            <input
              type="text"
              value={epilepsyInfo.type}
              onChange={(e) => setEpilepsyInfo({ ...epilepsyInfo, type: e.target.value })}
              placeholder="Enter your type of epilepsy"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Diagnosis Details
            </label>
            <textarea
              value={epilepsyInfo.diagnosis}
              onChange={(e) => setEpilepsyInfo({ ...epilepsyInfo, diagnosis: e.target.value })}
              placeholder="Enter details about your diagnosis"
              className="w-full p-2 border border-gray-300 rounded-md h-24"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Treatment Plan
            </label>
            <textarea
              value={epilepsyInfo.treatment}
              onChange={(e) => setEpilepsyInfo({ ...epilepsyInfo, treatment: e.target.value })}
              placeholder="Describe your current treatment plan"
              className="w-full p-2 border border-gray-300 rounded-md h-24"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Additional Notes
            </label>
            <textarea
              value={epilepsyInfo.notes}
              onChange={(e) => setEpilepsyInfo({ ...epilepsyInfo, notes: e.target.value })}
              placeholder="Any additional information"
              className="w-full p-2 border border-gray-300 rounded-md h-24"
            />
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-1">Type of Epilepsy</h3>
            <p className="text-gray-600">
              {epilepsyInfo.type || "Click 'Edit' to add epilepsy type..."}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-1">Diagnosis Details</h3>
            <p className="text-gray-600">
              {epilepsyInfo.diagnosis || "Click 'Edit' to add diagnosis details..."}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-1">Treatment Plan</h3>
            <p className="text-gray-600">
              {epilepsyInfo.treatment || "Click 'Edit' to add treatment plan..."}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-1">Additional Notes</h3>
            <p className="text-gray-600">
              {epilepsyInfo.notes || "Click 'Edit' to add additional notes..."}
            </p>
          </div>
        </div>
      )}
    </HealthSection>
  );
}