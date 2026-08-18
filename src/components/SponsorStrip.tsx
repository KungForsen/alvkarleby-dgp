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

// Listan dubbleras så att spåret kan loopa sömlöst: när det första settet
// har skrollat ut i -50% är det andra settet exakt där det första började.
const track = [...sponsors, ...sponsors];

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
