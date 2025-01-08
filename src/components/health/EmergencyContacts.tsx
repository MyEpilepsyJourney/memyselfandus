import React from 'react';
import { Phone, Mail, UserPlus } from 'lucide-react';
import { EmergencyContact } from '../../types/health';

interface EmergencyContactsProps {
  contacts: EmergencyContact[];
  onAdd: (contact: Omit<EmergencyContact, 'id'>) => Promise<void>;
}

export default function EmergencyContacts({ contacts, onAdd }: EmergencyContactsProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Emergency Contacts</h3>
        <button
          onClick={() => onAdd({
            name: '',
            relationship: '',
            phone: '',
            isMainContact: contacts.length === 0
          })}
          className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-full"
        >
          <UserPlus className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        {contacts.map(contact => (
          <div
            key={contact.id}
            className={`p-3 rounded-lg ${
              contact.isMainContact ? 'bg-indigo-50 border border-indigo-100' : 'bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <h4 className="font-medium text-gray-800">{contact.name}</h4>
                <p className="text-sm text-gray-600">{contact.relationship}</p>
              </div>
              {contact.isMainContact && (
                <span className="text-xs font-medium text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full">
                  Main Contact
                </span>
              )}
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>{contact.phone}</span>
              </div>
              
              {contact.email && (
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>{contact.email}</span>
                </div>
              )}
            </div>
          </div>
        ))}

        {contacts.length === 0 && (
          <p className="text-center text-gray-500 py-4">No emergency contacts added</p>
        )}
      </div>
    </div>
  );
}