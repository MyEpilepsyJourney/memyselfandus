import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Auth from '../pages/Auth';
import Home from '../pages/Home';
import Settings from '../pages/Settings';
import AccountSettings from '../pages/AccountSettings';
import PrivacyAndSecurity from '../pages/PrivacyAndSecurity';
import ConnectedApps from '../pages/ConnectedApps';
import HelpSupport from '../pages/HelpSupport';
import TermsAndConditions from '../pages/TermsAndConditions';
import Bio from '../pages/Bio';
import Profile from '../pages/Profile';
import Friends from '../pages/Friends';
import HealthCenter from '../pages/HealthCenter';
import Donate from '../pages/Donate';

export const router = createBrowserRouter([
  {
    path: '/auth',
    element: <Auth />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'settings', element: <Settings /> },
      { path: 'settings/account', element: <AccountSettings /> },
      { path: 'settings/privacy', element: <PrivacyAndSecurity /> },
      { path: 'settings/apps', element: <ConnectedApps /> },
      { path: 'help', element: <HelpSupport /> },
      { path: 'terms', element: <TermsAndConditions /> },
      { path: 'bio', element: <Bio /> },
      { path: 'profile', element: <Profile /> },
      { path: 'friends', element: <Friends /> },
      { path: 'health', element: <HealthCenter /> },
      { path: 'donate', element: <Donate /> },
    ],
  },
]);