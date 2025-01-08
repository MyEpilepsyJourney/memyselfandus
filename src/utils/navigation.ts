import { NavigateFunction } from 'react-router-dom';

let navigationFunction: NavigateFunction;

export const initializeNavigation = (navigate: NavigateFunction) => {
  navigationFunction = navigate;
};

export const navigateTo = (path: string) => {
  if (!navigationFunction) {
    throw new Error('Navigation not initialized');
  }
  navigationFunction(path);
};

export const routes = {
  home: () => navigateTo('/'),
  profile: () => navigateTo('/profile'),
  bio: () => navigateTo('/bio'),
  health: () => navigateTo('/health'),
  friends: () => navigateTo('/friends'),
  settings: () => navigateTo('/settings'),
  accountSettings: () => navigateTo('/settings/account'),
  privacySettings: () => navigateTo('/settings/privacy'),
  connectedApps: () => navigateTo('/settings/apps'),
  helpSupport: () => navigateTo('/help'),
  terms: () => navigateTo('/terms'),
} as const;