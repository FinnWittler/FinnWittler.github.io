import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import GitProfile from './components/gitprofile.tsx';
import LoadingScreen from './components/loading-screen/index.tsx';
import CookieBanner from './components/cookie-banner/index.tsx';
import CONFIG from './gitprofile.config.ts';
import { 
  shouldShowCookieBanner, 
  setCookieConsent, 
  setCookiePreferences,
  clearCookieData,
  type CookiePreferences 
} from './utils/cookies.ts';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (!isLoading && CONFIG.cookies?.enabled) {
      setShowCookieBanner(shouldShowCookieBanner());
    }
  }, [isLoading]);

  const handleCookieAccept = (preferences: CookiePreferences) => {
    setCookieConsent(true);
    setCookiePreferences(preferences);
    setShowCookieBanner(false);
  };

  const handleCookieDecline = () => {
    setCookieConsent(false);
    clearCookieData();
    setShowCookieBanner(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      {!isLoading && (
        <React.StrictMode>
          <GitProfile config={CONFIG} />
          {showCookieBanner && (
            <CookieBanner 
              onAccept={handleCookieAccept}
              onDecline={handleCookieDecline}
            />
          )}
        </React.StrictMode>
      )}
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
