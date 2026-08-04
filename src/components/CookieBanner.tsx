"use client";

import { useCookieConsent } from "./CookieConsentProvider";

export default function CookieBanner() {
  const { consent, accept, decline } = useCookieConsent();

  if (consent !== null) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-cream/10 bg-forest-deep px-5 py-4 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-cream/80">
          Vi använder externa tjänster som använder cookies för att visa
          visst innehåll och tillhandahålla funktioner på webbplatsen. Du kan
          välja att godkänna cookies för att aktivera detta innehåll. Läs mer
          i vår{" "}
          <a
            href="/integritetspolicy"
            className="text-teal-light underline underline-offset-2"
          >
            integritetspolicy
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={decline}
            className="rounded-md border border-cream/20 px-4 py-2 text-sm text-cream transition hover:border-gold"
          >
            Neka
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-md bg-gold px-4 py-2 text-sm font-medium text-forest-deep transition hover:bg-gold-dark"
          >
            Godkänn
          </button>
        </div>
      </div>
    </div>
  );
}
