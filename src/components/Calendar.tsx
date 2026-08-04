"use client";

import Script from "next/script";
import { useCookieConsent } from "./CookieConsentProvider";

export default function Calendar() {
  const { consent, accept } = useCookieConsent();

  return (
    <section id="kalender" className="bg-cream px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow mb-3 text-center text-teal">Kalender</p>
        <h2 className="text-center font-display text-3xl font-medium uppercase tracking-wide text-forest sm:text-4xl">
          Kommande händelser
        </h2>

        <div className="mt-10">
          {consent === "accepted" ? (
            <>
              {/* Elfsight-widget: https://dash.elfsight.com/widget/411dd602-991d-4acf-98c4-3d9aea07a4dc */}
              <div
                className="elfsight-app-411dd602-991d-4acf-98c4-3d9aea07a4dc"
                data-elfsight-app-lazy
              />
              <Script
                src="https://static.elfsight.com/platform/platform.js"
                strategy="lazyOnload"
              />
            </>
          ) : (
            <div className="flex flex-col items-center gap-3 rounded-lg bg-forest/5 p-10 text-center">
              <p className="text-sm text-ink/70">
                Kalendern laddas via en tredjepartstjänst som sätter kakor.
              </p>
              <button
                type="button"
                onClick={accept}
                className="rounded-md bg-gold px-4 py-2 text-sm font-medium text-forest-deep transition hover:bg-gold-dark"
              >
                Godkänn och visa kalender
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
