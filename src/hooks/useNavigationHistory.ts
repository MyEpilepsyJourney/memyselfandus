import { useState, useEffect } from 'react';

export function useNavigationHistory() {
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    // Check if we can go back in history
    setCanGoBack(window.history.length > 1);

    // Listen for history changes
    const handlePopState = () => {
      setCanGoBack(window.history.length > 1);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const goBack = () => {
    if (canGoBack) {
      window.history.back();
    }
  };

  return { canGoBack, goBack };
}