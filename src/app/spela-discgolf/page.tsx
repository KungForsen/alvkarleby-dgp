import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Spela discgolf – nybörjarguide – Älvkarleby IK Discgolf",
  description:
    "Ny på discgolf? Här går vi igenom hur spelet fungerar, poäng, vanliga regler och vad du behöver veta innan du börjar.",
};

export default function SpelaDiscgolf() {
  return (
    <>
      <Header />
      <main>
        {/* Intro */}
        <section className="bg-forest px-5 py-20 text-center sm:px-8">
          <p className="eyebrow mb-3 text-teal-light">Nybörjarguide</p>
          <h1 className="mx-auto max-w-2xl font-display text-4xl font-medium uppercase tracking-wide text-cream sm:text-5xl">
            Spela discgolf – så enkelt är det
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-cream/70">
            Discgolf fungerar ungefär som vanlig golf – men istället för
            klubbor och en boll använder du en disc, och istället för ett
            hål spelar du mot en korg. Målet är enkelt: få discen i korgen
            på så få kast som möjligt.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-cream/70">
            Du börjar vid hålets tee, kastar mot korgen och fortsätter sedan
            från där discen landade. När discen ligger i korgen är hålet
            klart.
          </p>
          <p className="mt-6 font-mono text-sm tracking-wide text-gold">
            Tee → kasta → hitta discen → kasta igen → korg
          </p>
        </section>

        {/* Så spelar du ett hål */}
        <section className="bg-cream px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow mb-3 text-teal">Grunderna</p>
            <h2 className="font-display text-3xl font-medium uppercase tracking-wide text-forest sm:text-4xl">
              Så spelar du ett hål
            </h2>

            <div className="mt-10 space-y-6">
              {[
                {
                  title: "Börja vid tee",
                  body: "Härifrån gör du ditt första kast.",
                },
                {
                  title: "Kasta mot korgen",
                  body: "Efter varje kast spelar du vidare från där discen landade.",
                },
                {
                  title: "Fortsätt tills discen är i korgen",
                  body: "Varje kast räknas.",
                },
                {
                  title: "Skriv ner resultatet",
                  body: "Sedan går ni vidare till nästa hål.",
                },
              ].map((step, i) => (
                <div key={step.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest font-mono text-sm text-cream">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-display text-base font-medium uppercase tracking-wide text-forest">
                      {step.title}
                    </p>
                    <p className="mt-1 text-[15px] leading-relaxed text-ink/70">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 text-[15px] leading-relaxed text-ink/70">
              Det är egentligen allt du behöver kunna för att börja spela.
            </p>
          </div>
        </section>

        {/* Par */}
        <section className="bg-forest px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow mb-3 text-teal-light">Poängräkning</p>
            <h2 className="font-display text-3xl font-medium uppercase tracking-wide text-cream sm:text-4xl">
              Vad betyder par?
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-cream/70">
              Varje hål har ett par. Det är ungefär hur många kast hålet är
              tänkt att ta. Exempel, om hålet har par 3:
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { term: "Birdie", desc: "2 kast – ett kast under par." },
                { term: "Par", desc: "3 kast – exakt par." },
                { term: "Bogey", desc: "4 kast – ett kast över par." },
                { term: "Double bogey", desc: "5 kast – två kast över par." },
              ].map((row) => (
                <div
                  key={row.term}
                  className="rounded-lg bg-forest-deep p-5"
                >
                  <p className="font-display text-base font-medium uppercase tracking-wide text-gold">
                    {row.term}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-cream/60">
                    {row.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-[15px] leading-relaxed text-cream/70">
              Ett annat vanligt uttryck är <strong className="text-cream">eagle</strong> –
              två kast under par. Du behöver inte kunna alla uttryck för att
              spela – det viktigaste är att hålla koll på hur många kast du
              gör.
            </p>
          </div>
        </section>

        {/* OB, mando, hazard */}
        <section className="bg-cream px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow mb-3 text-teal">Bra att känna till</p>
            <h2 className="font-display text-3xl font-medium uppercase tracking-wide text-forest sm:text-4xl">
              OB, mando och hazard
            </h2>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-forest/10 bg-white p-6">
                <p className="font-display text-lg font-medium uppercase tracking-wide text-forest">
                  OB (Out of Bounds)
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  Discen har hamnat utanför spelområdet, till exempel ett
                  markerat område eller en väg. Du får normalt ett
                  pliktkast och spelar vidare enligt markeringen för det
                  hålet.
                </p>
              </div>
              <div className="rounded-lg border border-forest/10 bg-white p-6">
                <p className="font-display text-lg font-medium uppercase tracking-wide text-forest">
                  Mando (Mandatory)
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  Discen måste passera ett visst hinder på rätt sida, till
                  exempel &quot;mando vänster&quot;. Mandot markeras på banan
                  och visas på hålkartan vid tee.
                </p>
              </div>
              <div className="rounded-lg border border-forest/10 bg-white p-6">
                <p className="font-display text-lg font-medium uppercase tracking-wide text-forest">
                  Hazard
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  Ett markerat område du kan hamna i med discen. Du får
                  normalt ett pliktkast, men discen får ligga kvar och du
                  spelar vidare därifrån.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-lg border border-gold/30 bg-gold/10 p-6">
              <p className="font-display text-base font-medium uppercase tracking-wide text-forest">
                Kolla hålkartan
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                Vid varje tee finns en hålkarta som visar var tee och korg
                finns, hålets par, OB, mando, hazard och andra regler som
                gäller just det hålet. Ta gärna en titt innan du kastar –
                särskilt viktigt på hål med OB, mando eller andra saker att
                tänka på.
              </p>
            </div>
          </div>
        </section>

        {/* UDisc */}
        <section className="bg-forest px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow mb-3 text-teal-light">Scorekort</p>
            <h2 className="font-display text-3xl font-medium uppercase tracking-wide text-cream sm:text-4xl">
              Håll koll på resultatet med UDisc
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-cream/70">
              Vi rekommenderar appen{" "}
              <a
                href="https://udisc.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline underline-offset-2 hover:text-gold-dark"
              >
                UDisc
              </a>{" "}
              för att hålla reda på resultatet under rundan. Med UDisc kan
              du hitta banan, starta en scorecard, lägga till dina
              medspelare, skriva in resultat efter varje hål och se din
              totala score.
            </p>
            <p className="mt-4 font-mono text-sm tracking-wide text-gold">
              Kasta → räkna → skriv in resultatet → gå vidare
            </p>
          </div>
        </section>

        {/* Discar */}
        <section className="bg-cream px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow mb-3 text-teal">Utrustning</p>
            <h2 className="font-display text-3xl font-medium uppercase tracking-wide text-forest sm:text-4xl">
              Behöver jag egna discar?
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink/70">
              Ja, för att spela behöver du en disc – men du behöver inte
              köpa en massa olika discar för att komma igång. En enkel
              putter eller midrange är ett bra ställe att börja.
            </p>
            <div className="mt-6 rounded-lg border border-forest/10 bg-white p-6">
              <p className="font-display text-base font-medium uppercase tracking-wide text-forest">
                Köp discar och stötta klubben
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                Det finns discar att köpa på Coop Älvkarleby. All
                försäljning går oavkortat till Älvkarleby IK Discgolf – så
                om du behöver en disc, passa gärna på att köpa den där och
                stötta klubben samtidigt.
              </p>
            </div>
          </div>
        </section>

        {/* Hänsyn */}
        <section className="bg-forest px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow mb-3 text-teal-light">Uppförande</p>
            <h2 className="font-display text-3xl font-medium uppercase tracking-wide text-cream sm:text-4xl">
              Visa hänsyn på banan
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-cream/70">
              Discgolf är en sport som spelas ute bland andra människor och
              i naturen. Tänk på att:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-cream/70">
              <li>Kasta aldrig om någon kan vara i vägen.</li>
              <li>Vänta tills hålet är fritt innan du kastar.</li>
              <li>Visa hänsyn till andra spelare.</li>
              <li>Ta med ditt skräp.</li>
              <li>Var rädd om naturen och banan.</li>
            </ul>
            <p className="mt-4 text-[15px] font-medium text-cream">
              Säkerhet går alltid först.
            </p>
          </div>
        </section>

        {/* Sammanfattning */}
        <section className="bg-cream px-5 py-20 text-center sm:px-8">
          <div className="mx-auto max-w-2xl">
            <p className="eyebrow mb-3 text-teal">Kom ihåg</p>
            <h2 className="font-display text-3xl font-medium uppercase tracking-wide text-forest sm:text-4xl">
              Det viktigaste att komma ihåg
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink/70">
              Du behöver inte kunna alla regler för att börja spela.
            </p>
            <ol className="mx-auto mt-6 max-w-sm space-y-2 text-left text-[15px] leading-relaxed text-ink/70">
              <li>1. Börja vid tee.</li>
              <li>2. Kasta mot korgen.</li>
              <li>3. Kasta vidare där discen landade.</li>
              <li>4. Räkna dina kast.</li>
              <li>5. Få discen i korgen.</li>
              <li>6. Gå vidare till nästa hål.</li>
            </ol>
            <p className="mt-8 font-display text-xl font-medium uppercase tracking-wide text-forest">
              Ha kul och välkommen ut på banan!
            </p>
            <a
              href="/"
              className="mt-8 inline-block rounded-md bg-gold px-6 py-3 text-sm font-medium text-forest-deep transition hover:bg-gold-dark"
            >
              Till startsidan
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
