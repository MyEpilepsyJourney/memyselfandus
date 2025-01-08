export interface HealthDevice {
  id: string;
  name: string;
  type: 'smartwatch' | 'fitness_tracker' | 'medical_device';
  connected: boolean;
  lastSync?: string;
}

export interface MedicationSchedule {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  timeOfDay: string[];
  notes?: string;
}

export interface EmergencyContact {
  id: string;
  name: string;
  relationship: string;
  phone: string;
  email?: string;
  isMainContact: boolean;
}

export interface HealthStatus {
  lastUpdate: string;
  medications: MedicationSchedule[];
  devices: HealthDevice[];
  emergencyContacts: EmergencyContact[];
}