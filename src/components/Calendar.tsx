import Script from "next/script";

export default function Calendar() {
  return (
    <section id="kalender" className="bg-cream px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow mb-3 text-center text-teal">Kalender</p>
        <h2 className="text-center font-display text-3xl font-medium uppercase tracking-wide text-forest sm:text-4xl">
          Kommande händelser
        </h2>

        <div className="mt-10">
          {/* Elfsight-widget: https://dash.elfsight.com/widget/411dd602-991d-4acf-98c4-3d9aea07a4dc */}
          <div
            className="elfsight-app-411dd602-991d-4acf-98c4-3d9aea07a4dc"
            data-elfsight-app-lazy
          />
        </div>
      </div>

      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="lazyOnload"
      />
    </section>
  );
}
