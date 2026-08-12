export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-forest bg-contour bg-cover bg-center px-5 pb-20 pt-16 text-center sm:px-8 sm:pb-28 sm:pt-24"
    >
      <p className="eyebrow mb-4 text-teal-light">Älvkarleby · Carl Lindholms väg 1</p>
      <h1 className="mx-auto max-w-3xl font-display text-5xl font-bold uppercase leading-[0.95] tracking-wide text-cream sm:text-7xl">
        Älvkarleby IK
        <br />
        <span className="text-gold">Discgolf</span>
      </h1>
      <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-cream/70">
        Älvkarleby Discgolfpark startade 2025 och är en del av Älvkarleby
        Idrottsklubb. Vår vision är att skapa en mötesplats för rörelse,
        gemenskap och glädjen i discgolf för alla åldrar och nivåer.
      </p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <a
          href="https://www.svenskalag.se/alvkarlebyik/formular/bli-medlem-stodmedlem-aik-discgolf/31158"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-cream/25 px-6 py-3 text-sm font-medium text-cream transition hover:border-gold hover:text-gold"
        >
          Bli medlem
        </a>
        <a
          href="/spela-discgolf"
          className="rounded-md bg-gold px-6 py-3 text-sm font-medium text-forest-deep transition hover:bg-gold-dark"
        >
          Spela Discgolf
        </a>
        <a
          href="#sponsor"
          className="rounded-md border border-cream/25 px-6 py-3 text-sm font-medium text-cream transition hover:border-gold hover:text-gold"
        >
          Bli sponsor
        </a>
      </div>
    </section>
  );
}
