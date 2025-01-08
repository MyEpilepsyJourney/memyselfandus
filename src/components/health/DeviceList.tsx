import React from 'react';
import { Smartphone, Watch, Activity } from 'lucide-react';
import { HealthDevice } from '../../types/health';

interface DeviceListProps {
  devices: HealthDevice[];
  onConnect: (device: Omit<HealthDevice, 'id' | 'connected'>) => Promise<void>;
}

export default function DeviceList({ devices, onConnect }: DeviceListProps) {
  const getDeviceIcon = (type: HealthDevice['type']) => {
    switch (type) {
      case 'smartwatch':
        return <Watch className="w-6 h-6" />;
      case 'fitness_tracker':
        return <Activity className="w-6 h-6" />;
      case 'medical_device':
        return <Smartphone className="w-6 h-6" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Connected Devices</h3>
      
      <div className="space-y-4">
        {devices.map(device => (
          <div
            key={device.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              {getDeviceIcon(device.type)}
              <div>
                <p className="font-medium text-gray-800">{device.name}</p>
                <p className="text-sm text-gray-500">
                  Last synced: {new Date(device.lastSync || '').toLocaleString()}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`w-2 h-2 rounded-full ${device.connected ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className="text-sm text-gray-600">
                {device.connected ? 'Connected' : 'Disconnected'}
              </span>
            </div>
          </div>
        ))}

        {devices.length === 0 && (
          <p className="text-center text-gray-500 py-4">No devices connected</p>
        )}

        <button
          onClick={() => onConnect({
            name: 'New Device',
            type: 'smartwatch'
          })}
          className="w-full mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Connect New Device
        </button>
      </div>
    </div>
  );
}