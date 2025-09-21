export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = 'gitprofile-cookie-consent';
const COOKIE_PREFERENCES_KEY = 'gitprofile-cookie-preferences';

export const setCookieConsent = (hasConsented: boolean): void => {
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(hasConsented));
};

export const getCookieConsent = (): boolean | null => {
  const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
  return consent ? JSON.parse(consent) : null;
};

export const setCookiePreferences = (preferences: CookiePreferences): void => {
  localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(preferences));
};

export const getCookiePreferences = (): CookiePreferences => {
  const preferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);
  return preferences ? JSON.parse(preferences) : {
    necessary: true,
    analytics: false,
    marketing: false,
  };
};

export const clearCookieData = (): void => {
  localStorage.removeItem(COOKIE_CONSENT_KEY);
  localStorage.removeItem(COOKIE_PREFERENCES_KEY);
};

export const shouldShowCookieBanner = (): boolean => {
  return getCookieConsent() === null;
};

export const canUseAnalytics = (): boolean => {
  const consent = getCookieConsent();
  if (!consent) return false;
  const preferences = getCookiePreferences();
  return preferences.analytics;
};

export const canUseMarketing = (): boolean => {
  const consent = getCookieConsent();
  if (!consent) return false;
  const preferences = getCookiePreferences();
  return preferences.marketing;
};
