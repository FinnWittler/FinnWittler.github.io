import { useState } from 'react';
import { FaCookie } from 'react-icons/fa';

interface CookieBannerProps {
  onAccept: (preferences: CookiePreferences) => void;
  onDecline: () => void;
}

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ onAccept, onDecline }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  const handleAcceptAll = () => {
    onAccept({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const handleAcceptSelected = () => {
    onAccept(preferences);
  };

  const handleDeclineAll = () => {
    onDecline();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-base-200 border-t border-base-300 shadow-2xl">
      <div className="container mx-auto p-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
          <div className="flex items-center gap-3 flex-1">
            <FaCookie className="text-2xl text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-base-content">We use cookies</h3>
              <p className="text-sm text-base-content/70">
                We use cookies to enhance your browsing experience and analyze our traffic. 
                By clicking "Accept All", you consent to our use of cookies.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="btn btn-ghost btn-sm"
            >
              Customize
            </button>
            <button
              onClick={handleDeclineAll}
              className="btn btn-outline btn-sm"
            >
              Decline All
            </button>
            <button
              onClick={handleAcceptAll}
              className="btn btn-primary btn-sm"
            >
              Accept All
            </button>
          </div>
        </div>

        {showDetails && (
          <div className="mt-4 p-4 bg-base-100 rounded-lg border border-base-300">
            <h4 className="font-semibold mb-3 text-base-content">Cookie Preferences</h4>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <label className="font-medium text-base-content">Necessary Cookies</label>
                  <p className="text-xs text-base-content/60">
                    Essential for the website to function properly
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.necessary}
                  disabled
                  className="checkbox checkbox-primary"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="font-medium text-base-content">Analytics Cookies</label>
                  <p className="text-xs text-base-content/60">
                    Help us understand how visitors interact with our website
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                  className="checkbox checkbox-primary"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="font-medium text-base-content">Marketing Cookies</label>
                  <p className="text-xs text-base-content/60">
                    Used to deliver personalized advertisements
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences(prev => ({ ...prev, marketing: e.target.checked }))}
                  className="checkbox checkbox-primary"
                />
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button
                onClick={handleAcceptSelected}
                className="btn btn-primary btn-sm"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;
