import React from 'react';
import { useSeasonalContext } from '../../contexts/SeasonalContext';
import ChristmasTheme from './themes/ChristmasTheme';
import AutumnTheme from './themes/AutumnTheme';
import SpringTheme from './themes/SpringTheme';
import SummerTheme from './themes/SummerTheme';

export default function SeasonalEffects() {
  const { config } = useSeasonalContext();

  if (!config.enableAnimations) return null;

  const getSeasonalTheme = () => {
    switch (config.season) {
      case 'christmas':
        return <ChristmasTheme />;
      case 'autumn':
        return <AutumnTheme />;
      case 'spring':
        return <SpringTheme />;
      case 'summer':
        return <SummerTheme />;
      default:
        return null;
    }
  };

  return (
    <>
      {getSeasonalTheme()}
      <div 
        className={`fixed inset-0 pointer-events-none z-20 bg-gradient-to-b ${config.colors.background} to-transparent`} 
      />
    </>
  );
}