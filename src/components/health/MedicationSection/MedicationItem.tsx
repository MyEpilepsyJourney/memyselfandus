import React from 'react';
import { X } from 'lucide-react';
import { Medication } from '../../../types/health';

interface MedicationItemProps {
  medication: Medication;
  isEditing: boolean;
  onRemove: (id: string) => void;
}

export default function MedicationItem({ medication, isEditing, onRemove }: MedicationItemProps) {
  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium text-gray-900">{medication.name}</h3>
        {isEditing && (
          <button
            onClick={() => onRemove(medication.id)}
            className="text-red-600 hover:text-red-700"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      <div className="space-y-1 text-sm text-gray-600">
        <p>Dosage: {medication.dosage}</p>
        <p>Frequency: {medication.frequency}</p>
        {medication.notes && <p>Notes: {medication.notes}</p>}
      </div>
    </div>
  );
}