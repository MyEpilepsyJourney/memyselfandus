import React from 'react';
import { Medication } from '../../../types/health';
import MedicationItem from './MedicationItem';

interface MedicationListProps {
  medications: Medication[];
  isEditing: boolean;
  onRemove: (id: string) => void;
}

export default function MedicationList({ medications, isEditing, onRemove }: MedicationListProps) {
  if (medications.length === 0) {
    return (
      <p className="text-center text-gray-500 py-4">No medications added yet</p>
    );
  }

  return (
    <div className="space-y-3">
      {medications.map((medication) => (
        <MedicationItem
          key={medication.id}
          medication={medication}
          isEditing={isEditing}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}