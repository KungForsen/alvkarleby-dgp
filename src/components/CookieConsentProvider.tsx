"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Consent = "accepted" | "declined" | null;

const CookieConsentContext = createContext<{
  consent: Consent;
  accept: () => void;
  decline: () => void;
}>({
  consent: null,
  accept: () => {},
  decline: () => {},
});

const STORAGE_KEY = "adgp-cookie-consent";

export function CookieConsentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [consent, setConsent] = useState<Consent>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "accepted" || stored === "declined") {
      setConsent(stored);
    }
    setHydrated(true);
  }, []);

  function accept() {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setConsent("accepted");
  }

  function decline() {
    window.localStorage.setItem(STORAGE_KEY, "declined");
    setConsent("declined");
  }

  return (
    <CookieConsentContext.Provider
      value={{ consent: hydrated ? consent : null, accept, decline }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  return useContext(CookieConsentContext);
}
