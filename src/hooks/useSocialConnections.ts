import { useState } from 'react';

interface SocialConnection {
  connected: boolean;
  username: string;
}

interface SocialConnections {
  twitter: SocialConnection;
  instagram: SocialConnection;
  tiktok: SocialConnection;
  linkedin: SocialConnection;
}

export function useSocialConnections() {
  const [connections, setConnections] = useState<SocialConnections>({
    twitter: { connected: false, username: '' },
    instagram: { connected: false, username: '' },
    tiktok: { connected: false, username: '' },
    linkedin: { connected: false, username: '' },
  });

  const toggleConnection = (platform: keyof SocialConnections) => {
    setConnections(prev => ({
      ...prev,
      [platform]: {
        ...prev[platform],
        connected: !prev[platform].connected,
      },
    }));
  };

  const updateUsername = (platform: keyof SocialConnections, username: string) => {
    setConnections(prev => ({
      ...prev,
      [platform]: {
        ...prev[platform],
        username,
      },
    }));
  };

  return {
    connections,
    toggleConnection,
    updateUsername,
  };
}