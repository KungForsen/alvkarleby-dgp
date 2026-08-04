"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Kostar det att spela?",
    a: "Nej, banan är gratis att spela på. Om du vill stötta klubben uppskattar vi gärna en frivillig donation.",
  },
  {
    q: "Får hundar följa med?",
    a: "Ja, kopplade hundar är välkomna. Tänk på att plocka upp efter din hund och visa hänsyn till andra besökare.",
  },
  {
    q: "Finns det parkering?",
    a: "Ja, det finns parkering i direkt anslutning till banan.",
  },
  {
    q: "Finns det regler jag bör tänka på?",
    a: "Ja. Visa hänsyn till andra spelare, gående och naturen. Kasta aldrig om någon befinner sig inom räckhåll, och släpp gärna igenom snabbare grupper när det är möjligt.",
  },
  {
    q: "Jag har hittat eller tappat bort en disc - vad gör jag?",
    a: "Hittade diskar lämnas i brevlådan vid informationstavlan. Om en märkt disc återfinns skickar vi ett SMS till ägaren. Discen kan därefter hämtas i samband med veckogolfen eller enligt överenskommelse.",
  },
  {
    q: "Får jag spela när det är tävling eller andra aktiviteter?",
    a: "Ja, men vid tävlingar eller organiserade aktiviteter kan hela eller delar av banan vara avstängda. Kontrollera kalendern eller klubbens sociala medier för aktuell information innan du besöker banan.",
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
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-[15px] leading-relaxed text-cream/70">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
