"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Kostar det att spela?",
    a: "Nej, banan är gratis att spela. Det finns en frivillig kostnad/donering om du vill stötta klubben.",
  },
  {
    q: "Får hundar följa med?",
    a: "Ja, kopplade hundar är välkomna. Kom ihåg att plocka upp efter dem.",
  },
  {
    q: "Finns det parkering?",
    a: "Ja, parkering finns i anslutning till banan.",
  },
  {
    q: "Finns det regler jag bör tänka på?",
    a: "Ja. Visa hänsyn till andra spelare, gående och naturen. Kasta aldrig om någon befinner sig inom räckhåll, och låt snabbare grupper spela igenom om det är möjligt.",
  },
  {
    q: "Jag har hittat/tappat bort en disc, vad gör jag?",
    a: "Hittad disc lämnas in i brevlådan vid informationstavlan. Vid en borttappad disc som återfinns skickar vi ut ett SMS — den kan sedan hämtas i samband med veckogolf eller enligt överenskommelse med den som hör av sig.",
  },
  {
    q: "Får jag spela när det är tävling?",
    a: "Vid tävlingar eller organiserade aktiviteter kan banan vara helt eller delvis avstängd. Se kalendern eller klubbens sociala medier för aktuell information.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-forest px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow mb-3 text-center text-teal-light">Vanliga frågor</p>
        <h2 className="text-center font-display text-3xl font-medium uppercase tracking-wide text-cream sm:text-4xl">
          Bra att veta innan du spelar
        </h2>

        <div className="mt-10 divide-y divide-cream/10 border-t border-cream/10">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-base font-medium uppercase tracking-wide text-cream sm:text-lg">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-gold transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pb-5 text-[15px] leading-relaxed text-cream/70">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
