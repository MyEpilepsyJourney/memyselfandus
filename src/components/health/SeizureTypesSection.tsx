import React, { useState } from 'react';
import { Edit2, Save, Plus, X } from 'lucide-react';
import HealthSection from './HealthSection';

interface SeizureType {
  id: string;
  type: string;
  description: string;
  triggers?: string;
  frequency?: string;
}

export default function SeizureTypesSection() {
  const [seizureTypes, setSeizureTypes] = useState<SeizureType[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [newType, setNewType] = useState({
    type: '',
    description: '',
    triggers: '',
    frequency: ''
  });

  const addSeizureType = () => {
    if (newType.type && newType.description) {
      setSeizureTypes([...seizureTypes, { ...newType, id: Date.now().toString() }]);
      setNewType({ type: '', description: '', triggers: '', frequency: '' });
    }
  };

  const removeSeizureType = (id: string) => {
    setSeizureTypes(seizureTypes.filter(type => type.id !== id));
  };

  return (
    <HealthSection
      title="Types of Seizures"
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
            placeholder="Seizure type name"
            value={newType.type}
            onChange={(e) => setNewType({ ...newType, type: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <textarea
            placeholder="Description of seizure type"
            value={newType.description}
            onChange={(e) => setNewType({ ...newType, description: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md h-24"
          />
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Known triggers"
              value={newType.triggers}
              onChange={(e) => setNewType({ ...newType, triggers: e.target.value })}
              className="flex-1 p-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Frequency"
              value={newType.frequency}
              onChange={(e) => setNewType({ ...newType, frequency: e.target.value })}
              className="flex-1 p-2 border border-gray-300 rounded-md"
            />
            <button
              onClick={addSeizureType}
              className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {seizureTypes.map((type) => (
          <div key={type.id} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-gray-900">{type.type}</h3>
              {isEditing && (
                <button
                  onClick={() => removeSeizureType(type.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <p>{type.description}</p>
              {type.triggers && <p>Triggers: {type.triggers}</p>}
              {type.frequency && <p>Frequency: {type.frequency}</p>}
            </div>
          </div>
        ))}
        {seizureTypes.length === 0 && (
          <p className="text-center text-gray-500 py-4">No seizure types added yet</p>
        )}
      </div>
    </HealthSection>
  );
}