import { Season } from '../types/seasonal';

export function getCurrentSeason(): Season {
  const month = new Date().getMonth();
  
  if (month === 11) return 'christmas';
  if (month >= 8 && month <= 10) return 'autumn';
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  return 'default';
}

export function getSeasonalColors(season: Season) {
  switch (season) {
    case 'christmas':
      return {
        primary: '#FF0000',
        secondary: '#006400',
        accent: '#FFD700',
        background: 'from-blue-900/10'
      };
    case 'autumn':
      return {
        primary: '#D4A017',
        secondary: '#8B4513',
        accent: '#FF6B6B',
        background: 'from-orange-100/20'
      };
    case 'spring':
      return {
        primary: '#98FB98',
        secondary: '#DDA0DD',
        accent: '#FFB6C1',
        background: 'from-green-100/20'
      };
    case 'summer':
      return {
        primary: '#87CEEB',
        secondary: '#98FB98',
        accent: '#FFD700',
        background: 'from-blue-100/20'
      };
    default:
      return {
        primary: '#4F46E5',
        secondary: '#818CF8',
        accent: '#C7D2FE',
        background: 'from-gray-100/20'
      };
  }
}