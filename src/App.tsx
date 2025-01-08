import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { SettingsProvider } from './contexts/SettingsContext';
import { SeasonalProvider } from './contexts/SeasonalContext';
import { router } from './routes';

export default function App() {
  return (
    <SettingsProvider>
      <SeasonalProvider>
        <RouterProvider router={router} />
      </SeasonalProvider>
    </SettingsProvider>
  );
}