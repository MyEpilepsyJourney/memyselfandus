import React from 'react';

interface MedicationInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className?: string;
}

export default function MedicationInput({
  label,
  value,
  onChange,
  placeholder,
  className = ''
}: MedicationInputProps) {
  return (
    <input
      type="text"
      aria-label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`p-2 border border-gray-300 rounded-md ${className}`}
    />
  );
}