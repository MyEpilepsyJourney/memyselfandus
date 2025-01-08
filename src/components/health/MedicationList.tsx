import React from 'react';
import { Clock, Plus } from 'lucide-react';
import { MedicationSchedule } from '../../types/health';

interface MedicationListProps {
  medications: MedicationSchedule[];
  onAdd: (medication: Omit<MedicationSchedule, 'id'>) => Promise<void>;
}

export default function MedicationList({ medications, onAdd }: MedicationListProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Medications</h3>
        <button
          onClick={() => onAdd({
            name: 'New Medication',
            dosage: '',
            frequency: 'daily',
            timeOfDay: ['morning']
          })}
          className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-full"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        {medications.map(med => (
          <div
            key={med.id}
            className="p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-800">{med.name}</h4>
              <span className="text-sm text-gray-500">{med.dosage}</span>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>{med.frequency}</span>
              <span>•</span>
              <span>{med.timeOfDay.join(', ')}</span>
            </div>
            
            {med.notes && (
              <p className="mt-2 text-sm text-gray-500">{med.notes}</p>
            )}
          </div>
        ))}

        {medications.length === 0 && (
          <p className="text-center text-gray-500 py-4">No medications added</p>
        )}
      </div>
    </div>
  );
}