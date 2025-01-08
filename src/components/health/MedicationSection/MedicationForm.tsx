import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import MedicationInput from './MedicationInput';

interface MedicationFormData {
  name: string;
  dosage: string;
  frequency: string;
  notes: string;
}

interface MedicationFormProps {
  onSubmit: (data: MedicationFormData) => void;
}

export default function MedicationForm({ onSubmit }: MedicationFormProps) {
  const [formData, setFormData] = useState<MedicationFormData>({
    name: '',
    dosage: '',
    frequency: '',
    notes: ''
  });

  const handleSubmit = () => {
    if (formData.name && formData.dosage) {
      onSubmit(formData);
      setFormData({ name: '', dosage: '', frequency: '', notes: '' });
    }
  };

  const updateField = (field: keyof MedicationFormData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-3 mb-4">
      <MedicationInput
        label="Medication name"
        value={formData.name}
        onChange={updateField('name')}
        placeholder="Medication name"
        className="w-full"
      />
      
      <div className="flex space-x-2">
        <MedicationInput
          label="Dosage"
          value={formData.dosage}
          onChange={updateField('dosage')}
          placeholder="Dosage"
          className="flex-1"
        />
        <MedicationInput
          label="Frequency"
          value={formData.frequency}
          onChange={updateField('frequency')}
          placeholder="Frequency"
          className="flex-1"
        />
      </div>

      <div className="flex space-x-2">
        <MedicationInput
          label="Additional notes"
          value={formData.notes}
          onChange={updateField('notes')}
          placeholder="Additional notes"
          className="flex-1"
        />
        <button
          onClick={handleSubmit}
          className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}