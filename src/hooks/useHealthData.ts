import { useState, useEffect } from 'react';
import { HealthStatus, EmergencyContact, HealthDevice, MedicationSchedule } from '../types/health';

const MOCK_INITIAL_DATA: HealthStatus = {
  lastUpdate: new Date().toISOString(),
  medications: [],
  devices: [],
  emergencyContacts: []
};

export function useHealthData() {
  const [healthData, setHealthData] = useState<HealthStatus>(MOCK_INITIAL_DATA);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addEmergencyContact = async (contact: Omit<EmergencyContact, 'id'>) => {
    try {
      const newContact = {
        ...contact,
        id: Date.now().toString()
      };
      setHealthData(prev => ({
        ...prev,
        emergencyContacts: [...prev.emergencyContacts, newContact]
      }));
    } catch (err) {
      setError('Failed to add emergency contact');
      throw err;
    }
  };

  const connectDevice = async (device: Omit<HealthDevice, 'id' | 'connected'>) => {
    try {
      const newDevice = {
        ...device,
        id: Date.now().toString(),
        connected: true,
        lastSync: new Date().toISOString()
      };
      setHealthData(prev => ({
        ...prev,
        devices: [...prev.devices, newDevice]
      }));
    } catch (err) {
      setError('Failed to connect device');
      throw err;
    }
  };

  const addMedication = async (medication: Omit<MedicationSchedule, 'id'>) => {
    try {
      const newMedication = {
        ...medication,
        id: Date.now().toString()
      };
      setHealthData(prev => ({
        ...prev,
        medications: [...prev.medications, newMedication]
      }));
    } catch (err) {
      setError('Failed to add medication');
      throw err;
    }
  };

  const sendEmergencyAlert = async (message: string) => {
    try {
      setIsLoading(true);
      // Simulate API call to emergency contacts
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Emergency alert sent:', {
        contacts: healthData.emergencyContacts,
        message
      });
    } catch (err) {
      setError('Failed to send emergency alert');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    healthData,
    isLoading,
    error,
    addEmergencyContact,
    connectDevice,
    addMedication,
    sendEmergencyAlert
  };
}