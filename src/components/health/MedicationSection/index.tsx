import React from 'react';
import { Edit2, Save } from 'lucide-react';
import HealthSection from '../HealthSection';
import MedicationForm from './MedicationForm';
import MedicationList from './MedicationList';
import { useMedications } from '../../../hooks/useMedications';

export default function MedicationSection() {
  const { medications, isEditing, setIsEditing, addMedication, removeMedication } = useMedications();

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
      {isEditing && <MedicationForm onSubmit={addMedication} />}
      <MedicationList 
        medications={medications} 
        isEditing={isEditing}
        onRemove={removeMedication}
      />
    </HealthSection>
  );
}