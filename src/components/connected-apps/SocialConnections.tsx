import React from 'react';
import { Twitter, Instagram, Music2, Linkedin } from 'lucide-react';
import { useSocialConnections } from '../../hooks/useSocialConnections';
import SocialConnectionCard from './SocialConnectionCard';

export default function SocialConnections() {
  const { connections, toggleConnection, updateUsername } = useSocialConnections();

  return (
    <div className="space-y-4">
      <SocialConnectionCard
        platform="Twitter"
        icon={<Twitter className="w-6 h-6" />}
        connected={connections.twitter.connected}
        username={connections.twitter.username}
        onToggle={() => toggleConnection('twitter')}
        onUpdateUsername={(username) => updateUsername('twitter', username)}
      />

      <SocialConnectionCard
        platform="Instagram"
        icon={<Instagram className="w-6 h-6" />}
        connected={connections.instagram.connected}
        username={connections.instagram.username}
        onToggle={() => toggleConnection('instagram')}
        onUpdateUsername={(username) => updateUsername('instagram', username)}
      />

      <SocialConnectionCard
        platform="TikTok"
        icon={<Music2 className="w-6 h-6" />}
        connected={connections.tiktok.connected}
        username={connections.tiktok.username}
        onToggle={() => toggleConnection('tiktok')}
        onUpdateUsername={(username) => updateUsername('tiktok', username)}
      />

      <SocialConnectionCard
        platform="LinkedIn"
        icon={<Linkedin className="w-6 h-6" />}
        connected={connections.linkedin.connected}
        username={connections.linkedin.username}
        onToggle={() => toggleConnection('linkedin')}
        onUpdateUsername={(username) => updateUsername('linkedin', username)}
      />
    </div>
  );
}