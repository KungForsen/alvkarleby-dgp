"use client";

import { useCookieConsent } from "./CookieConsentProvider";

export default function MapEmbed() {
  const { consent, accept } = useCookieConsent();

  if (consent !== "accepted") {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-forest/5 p-6 text-center">
        <p className="text-sm text-ink/70">
          Kartan laddas via Google Maps, som sätter kakor.
        </p>
        <button
          type="button"
          onClick={accept}
          className="rounded-md bg-gold px-4 py-2 text-sm font-medium text-forest-deep transition hover:bg-gold-dark"
        >
          Godkänn och visa karta
        </button>
      </div>
    );
  }

  return (
    <iframe
      title="Karta till Älvkarleby discgolfbana"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1960.5303422912602!2d17.452370600000002!3d60.568453399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4660eb0008cef801%3A0x273d06d7e4cdeeeb!2s%C3%84lvkarleby%20discgolf!5e0!3m2!1ssv!2sse!4v1774736839579!5m2!1ssv!2sse"
      className="absolute inset-0 h-full w-full grayscale"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
