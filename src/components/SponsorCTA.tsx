import { Target, Users, Globe, GraduationCap, type LucideIcon } from "lucide-react";

const perks: {
  code: string;
  title: string;
  body: string;
  icon: LucideIcon;
}[] = [
  {
    code: "TEE",
    title: "Synlighet på banan",
    body: "Exponering i direkt anslutning till spelmiljön, exempelvis via logotyp på teeskyltar, korgreklam och informationstavlor.",
    icon: Target,
  },
  {
    code: "INTRO",
    title: "Prova-på-dagar",
    body: "Möjlighet att arrangera egna introduktionsdagar för kunder, personal eller medlemmar och låta fler upptäcka discgolf på plats.",
    icon: Users,
  },
  {
    code: "WEB",
    title: "Digital närvaro",
    body: "Alla partners presenteras på vår hemsida och i våra sociala medier, med utökad synlighet beroende på stödnivå.",
    icon: Globe,
  },
  {
    code: "SKOLA",
    title: "Engagera lokala elever",
    body: "Bidra till ÄIK:s arbete med att introducera discgolf och rörelseglädje för barn och ungdomar i Älvkarleby.",
    icon: GraduationCap,
  },
];

export default function SponsorCTA() {
  return (
    <section id="sponsor" className="bg-cream px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3 text-teal">Sponsorskap</p>
          <h2 className="font-display text-3xl font-medium uppercase tracking-wide text-forest sm:text-4xl">
            Bli en del av Älvkarleby Discgolfpark
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/70">
            Genom ett sponsorskap stöttar du utvecklingen av discgolfen i
            Älvkarleby. Alla partners får synlighet anpassad efter stödnivå,
            samtidigt som varje bidrag hjälper oss att fortsätta utveckla
            banan och sporten lokalt.
          </p>
          <a
            href="#kontakt"
            className="mt-7 inline-block rounded-md bg-gold px-6 py-3 text-sm font-medium text-forest-deep transition hover:bg-gold-dark"
          >
            Kontakta oss idag
          </a>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((perk) => (
            <div key={perk.title} className="rounded-lg bg-forest-deep p-6">
              <perk.icon size={20} className="text-gold" strokeWidth={1.75} aria-hidden="true" />
              <span className="mt-3 block font-mono text-xs text-gold">
                {perk.code}
              </span>
              <h3 className="mt-1 font-display text-lg font-medium uppercase tracking-wide text-cream">
                {perk.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/60">
                {perk.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
