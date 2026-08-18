import Image from "next/image";

const sponsors = [
  { name: "Bolist Älvkarleby", file: "bolist.png" },
  { name: "Br. Larssons Snickeri AB", file: "brlarsson.png" },
  { name: "Coop Älvkarleby", file: "coop.png" },
  { name: "Dalälvens VVS AB", file: "dalalvensvvs.png" },
  { name: "Gröna Källan", file: "gronakallan.png" },
  { name: "La Fornetto", file: "lafornetto.png" },
  { name: "Oskars Service", file: "oskarsservice.png" },
  { name: "Valbo Trä", file: "valbotra.png" },
  { name: "Älvkarlebyhus", file: "abyhus.png" },
];

// Listan upprepas 4 gånger så spåret alltid har gott om innehåll kvar
// innan det hinner loopa - även på mycket breda skärmar. Vid 25% har
// tre hela uppsättningar alltid hunnit "väntat" bakom synfältet.
const track = [...sponsors, ...sponsors, ...sponsors, ...sponsors];

export default function SponsorStrip() {
  return (
    <div className="overflow-hidden border-b border-forest/10 bg-cream py-10">
      <p className="eyebrow mb-6 text-center text-stone">Våra sponsorer</p>
      <div className="marquee-track flex w-max items-center gap-4 px-5 sm:px-8">
        {track.map((sponsor, i) => (
          <div
            key={`${sponsor.file}-${i}`}
            className="flex h-24 w-40 shrink-0 items-center justify-center rounded-lg border border-forest/5 bg-white p-4"
          >
            <div className="relative h-full w-full">
              <Image
                src={`/images/sponsors/${sponsor.file}`}
                alt={sponsor.name}
                fill
                className="object-contain grayscale transition-all duration-300 hover:grayscale-0"
                sizes="160px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
