import React, { useState } from 'react';
import { Edit2, Save, Plus, X } from 'lucide-react';
import ProfileSection from './ProfileSection';

interface Medication {
  id: string;
  name: string;
  dosage: string;
}

export default function MedicationInfo() {
  const [medications, setMedications] = useState<Medication[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [newMed, setNewMed] = useState({ name: '', dosage: '' });

  const addMedication = () => {
    if (newMed.name && newMed.dosage) {
      setMedications([...medications, { ...newMed, id: Date.now().toString() }]);
      setNewMed({ name: '', dosage: '' });
    }
  };

  const removeMedication = (id: string) => {
    setMedications(medications.filter(med => med.id !== id));
  };

  return (
    <ProfileSection
      title="Medication List"
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
      {isEditing && (
        <div className="mb-4 flex space-x-2">
          <input
            type="text"
            placeholder="Medication name"
            value={newMed.name}
            onChange={(e) => setNewMed({ ...newMed, name: e.target.value })}
            className="flex-1 p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Dosage"
            value={newMed.dosage}
            onChange={(e) => setNewMed({ ...newMed, dosage: e.target.value })}
            className="flex-1 p-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={addMedication}
            className="p-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      )}

      <div className="space-y-2">
        {medications.map((med) => (
          <div key={med.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
            <div>
              <span className="font-medium">{med.name}</span>
              <span className="ml-2 text-gray-600">({med.dosage})</span>
            </div>
            {isEditing && (
              <button
                onClick={() => removeMedication(med.id)}
                className="text-red-600 hover:text-red-700"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        ))}
        {medications.length === 0 && (
          <p className="text-gray-500 text-center py-4">No medications added yet</p>
        )}
      </div>
    </ProfileSection>
  );
}