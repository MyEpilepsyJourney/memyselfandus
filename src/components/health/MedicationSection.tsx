import React, { useState } from 'react';
import { Edit2, Save, Plus, X } from 'lucide-react';
import HealthSection from './HealthSection';

interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  notes?: string;
}

export default function MedicationSection() {
  const [medications, setMedications] = useState<Medication[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [newMed, setNewMed] = useState({
    name: '',
    dosage: '',
    frequency: '',
    notes: ''
  });

  const addMedication = () => {
    if (newMed.name && newMed.dosage) {
      setMedications([...medications, { ...newMed, id: Date.now().toString() }]);
      setNewMed({ name: '', dosage: '', frequency: '', notes: '' });
    }
  };

  const removeMedication = (id: string) => {
    setMedications(medications.filter(med => med.id !== id));
  };

  return (
    <HealthSection
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
        <div className="space-y-3 mb-4">
          <input
            type="text"
            placeholder="Medication name"
            value={newMed.name}
            onChange={(e) => setNewMed({ ...newMed, name: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Dosage"
              value={newMed.dosage}
              onChange={(e) => setNewMed({ ...newMed, dosage: e.target.value })}
              className="flex-1 p-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Frequency"
              value={newMed.frequency}
              onChange={(e) => setNewMed({ ...newMed, frequency: e.target.value })}
              className="flex-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Additional notes"
              value={newMed.notes}
              onChange={(e) => setNewMed({ ...newMed, notes: e.target.value })}
              className="flex-1 p-2 border border-gray-300 rounded-md"
            />
            <button
              onClick={addMedication}
              className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {medications.map((med) => (
          <div key={med.id} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-gray-900">{med.name}</h3>
              {isEditing && (
                <button
                  onClick={() => removeMedication(med.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <div className="space-y-1 text-sm text-gray-600">
              <p>Dosage: {med.dosage}</p>
              <p>Frequency: {med.frequency}</p>
              {med.notes && <p>Notes: {med.notes}</p>}
            </div>
          </div>
        ))}
        {medications.length === 0 && (
          <p className="text-center text-gray-500 py-4">No medications added yet</p>
        )}
      </div>
    </HealthSection>
  );
}