import Image from "next/image";

export default function Info() {
  return (
    <section id="information" className="bg-cream px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="eyebrow mb-3 text-teal">Information</p>
          <h2 className="font-display text-3xl font-medium uppercase tracking-wide text-forest sm:text-4xl">
            18 hål, 9 tees,
            <br />
            fyra layouter
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/70">
            Banan är en 18-hålsbana med 9 tees och fyra olika layouter, vilket
            skapar variation och flera olika sätt att spela.
          </p>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink/70">
            Vi arbetar kontinuerligt med underhåll av banan genom att röja
            sly och grenar för att förbättra spelbarheten. Vi välkomnar även
            synpunkter och idéer som kan bidra till fortsatt utveckling av
            banan.
          </p>
          <div className="mt-6 border-l-2 border-gold pl-4">
            <p className="text-[15px] text-ink/80">
              Banan är lätt att hitta genom att söka på{" "}
              <em>Älvkarleby Discgolf</em>, eller genom adressen Carl
              Lindholms väg 1, Älvkarleby.
            </p>
            <p className="mt-1 text-sm text-stone">
              Parkering finns vid Sörgärdets skola.
            </p>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src="/images/karta.png"
            alt="Karta över Älvkarleby discgolfbana"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
