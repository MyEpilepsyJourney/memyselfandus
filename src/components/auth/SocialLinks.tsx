import React from 'react';
import { Linkedin, Twitter, Instagram, Music2 } from 'lucide-react';

export default function SocialLinks() {
  const socialLinks = [
    {
      icon: <Linkedin className="w-8 h-8" />,
      url: 'https://linkedin.com/in/my-epilepsy-journey',
      label: 'LinkedIn'
    },
    {
      icon: <Twitter className="w-8 h-8" />,
      url: 'https://twitter.com/EpilepsyMy',
      label: 'Twitter'
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      url: 'https://instagram.com/_myepilepsyjourney_',
      label: 'Instagram'
    },
    {
      icon: <Music2 className="w-8 h-8" />,
      url: 'https://tiktok.com/@myepilepsyjourney',
      label: 'TikTok'
    }
  ];

  return (
    <div className="flex justify-center space-x-6 mt-8">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-indigo-200 transition-colors"
          aria-label={`Follow on ${link.label}`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}