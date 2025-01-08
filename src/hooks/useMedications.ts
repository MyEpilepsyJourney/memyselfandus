import { useState } from 'react';
import { Medication } from '../types/health';

export function useMedications() {
  const [medications, setMedications] = useState<Medication[]>([]);
  const [isEditing, setIsEditing] = useState(false);

  const addMedication = (medication: Omit<Medication, 'id'>) => {
    setMedications([...medications, { ...medication, id: Date.now().toString() }]);
  };

  const removeMedication = (id: string) => {
    setMedications(medications.filter(med => med.id !== id));
  };

  return {
    medications,
    isEditing,
    setIsEditing,
    addMedication,
    removeMedication
  };
}