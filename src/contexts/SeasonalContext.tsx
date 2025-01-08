import React, { createContext, useContext, useState, useEffect } from 'react';
import { Season, SeasonalConfig } from '../types/seasonal';
import { getCurrentSeason, getSeasonalColors } from '../utils/seasonalUtils';

interface SeasonalContextType {
  config: SeasonalConfig;
  updateConfig: (updates: Partial<SeasonalConfig>) => void;
}

const SeasonalContext = createContext<SeasonalContextType | undefined>(undefined);

export function SeasonalProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<SeasonalConfig>(() => {
    const season = getCurrentSeason();
    return {
      season,
      colors: getSeasonalColors(season),
      enableAnimations: true,
      enableSounds: false
    };
  });

  useEffect(() => {
    // Check for season changes daily
    const interval = setInterval(() => {
      const newSeason = getCurrentSeason();
      if (newSeason !== config.season) {
        setConfig(prev => ({
          ...prev,
          season: newSeason,
          colors: getSeasonalColors(newSeason)
        }));
      }
    }, 24 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, [config.season]);

  const updateConfig = (updates: Partial<SeasonalConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }));
  };

  return (
    <SeasonalContext.Provider value={{ config, updateConfig }}>
      {children}
    </SeasonalContext.Provider>
  );
}

export function useSeasonalContext() {
  const context = useContext(SeasonalContext);
  if (!context) {
    throw new Error('useSeasonalContext must be used within a SeasonalProvider');
  }
  return context;
}