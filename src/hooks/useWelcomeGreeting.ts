import { useState, useEffect } from 'react';

export function useWelcomeGreeting() {
  const [showGreeting, setShowGreeting] = useState(false);
  const [hasSeenGreeting, setHasSeenGreeting] = useState(() => {
    return localStorage.getItem('hasSeenWelcomeGreeting') === 'true';
  });

  useEffect(() => {
    if (!hasSeenGreeting) {
      setShowGreeting(true);
    }
  }, [hasSeenGreeting]);

  const closeGreeting = () => {
    setShowGreeting(false);
    setHasSeenGreeting(true);
    localStorage.setItem('hasSeenWelcomeGreeting', 'true');
  };

  return {
    showGreeting,
    closeGreeting
  };
}