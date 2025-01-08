export type Season = 'christmas' | 'autumn' | 'spring' | 'summer' | 'default';

export interface SeasonalColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
}

export interface SeasonalConfig {
  season: Season;
  colors: SeasonalColors;
  enableAnimations: boolean;
  enableSounds: boolean;
}