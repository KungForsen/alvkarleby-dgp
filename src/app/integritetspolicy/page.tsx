import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Integritets- och cookiepolicy – Älvkarleby IK Discgolf",
};

export default function Integritetspolicy() {
  return (
    <>
      <Header />
      <main className="bg-cream px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="eyebrow mb-3 text-teal">Integritets- och cookiepolicy</p>
          <h1 className="font-display text-3xl font-medium uppercase tracking-wide text-forest sm:text-4xl">
            Så behandlar vi dina personuppgifter och använder cookies
          </h1>
          <p className="mt-4 text-sm text-stone">Senast uppdaterad: augusti 2026</p>

          <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-ink/80">
            <section>
              <h2 className="font-display text-lg font-medium uppercase tracking-wide text-forest">
                Personuppgiftsansvarig
              </h2>
              <p className="mt-2">
                Älvkarleby IK Discgolf är personuppgiftsansvarig för den
                behandling av personuppgifter som sker via denna webbplats.
              </p>
              <p className="mt-2">
                Om du har frågor om hur vi behandlar personuppgifter eller
                vill utöva dina rättigheter är du välkommen att kontakta
                oss:{" "}
                <a
                  href="mailto:kontakt@alvkarlebydgp.se"
                  className="text-teal underline underline-offset-2"
                >
                  kontakt@alvkarlebydgp.se
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-medium uppercase tracking-wide text-forest">
                Behandling av personuppgifter
              </h2>
              <h3 className="mt-4 text-sm font-medium uppercase tracking-wide text-stone">
                Kontaktformulär
              </h3>
              <p className="mt-2">
                När du kontaktar oss via webbplatsens kontaktformulär
                behandlar vi de uppgifter du själv lämnar, exempelvis namn,
                e-postadress och meddelande. Uppgifterna används endast för
                att hantera och besvara din förfrågan och sparas inte längre
                än vad som är nödvändigt för ändamålet.
              </p>
              <p className="mt-2">
                Kontaktformuläret tillhandahålls genom tredjepartstjänsten{" "}
                <a
                  href="https://web3forms.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal underline underline-offset-2"
                >
                  Web3Forms
                </a>
                , vilket innebär att informationen kan behandlas av denna
                tjänst som ett tekniskt verktyg för att vidarebefordra
                meddelandet till oss.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-medium uppercase tracking-wide text-forest">
                Cookies och externa tjänster
              </h2>
              <p className="mt-2">
                Denna webbplats använder externa tjänster som kan använda
                cookies eller liknande tekniker för att tillhandahålla
                vissa funktioner och visa innehåll.
              </p>
              <p className="mt-2">
                Cookies är små textfiler som sparas på din enhet när du
                besöker en webbplats. De kan användas exempelvis för att en
                funktion ska fungera, komma ihåg inställningar eller samla
                in information om hur tjänster används.
              </p>
              <p className="mt-2">
                Du kan själv välja om du vill godkänna cookies som används
                av externa tjänster. Om du inte godkänner dessa kan vissa
                funktioner på webbplatsen vara begränsade.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-medium uppercase tracking-wide text-forest">
                Kalender
              </h2>
              <p className="mt-2">
                Webbplatsens kalenderfunktion tillhandahålls av{" "}
                <a
                  href="https://elfsight.com/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal underline underline-offset-2"
                >
                  Elfsight
                </a>
                . Tjänsten kan använda cookies och behandla teknisk
                information, exempelvis information om webbläsare och
                användning, för att kunna leverera kalenderfunktionen och
                förbättra tjänsten.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-medium uppercase tracking-wide text-forest">
                Karta
              </h2>
              <p className="mt-2">
                Webbplatsen använder en inbäddad karta från Google Maps för
                att visa banans placering och vägbeskrivning.
              </p>
              <p className="mt-2">
                När kartan aktiveras kan Google behandla teknisk information
                såsom IP-adress och information om enheten enligt{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal underline underline-offset-2"
                >
                  Googles egna villkor och integritetspolicy
                </a>
                .
              </p>
              <p className="mt-2">
                Om du inte godkänner cookies från externa tjänster kan
                kartfunktionen vara inaktiverad.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-medium uppercase tracking-wide text-forest">
                Typsnitt
              </h2>
              <p className="mt-2">
                Webbplatsens typsnitt hämtas och lagras på våra egna servrar
                vid publicering. Ingen begäran skickas till Google när du
                besöker sidan.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-medium uppercase tracking-wide text-forest">
                Rättslig grund
              </h2>
              <p className="mt-2">
                Behandling av personuppgifter sker huvudsakligen för att
                kunna besvara inkommande frågor och tillhandahålla
                webbplatsens funktioner.
              </p>
              <p className="mt-2">
                För cookies och externa tjänster som inte är nödvändiga för
                webbplatsens grundläggande funktion används samtycke som
                rättslig grund. Du kan när som helst ändra eller återkalla
                ditt samtycke genom cookieinställningarna på webbplatsen.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-medium uppercase tracking-wide text-forest">
                Dina rättigheter
              </h2>
              <p className="mt-2">
                Enligt dataskyddsförordningen (GDPR) har du rätt att:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>begära information om vilka personuppgifter vi behandlar om dig</li>
                <li>begära rättelse av felaktiga uppgifter</li>
                <li>begära radering av personuppgifter när förutsättningarna för detta är uppfyllda</li>
                <li>invända mot viss behandling</li>
                <li>begära begränsning av behandling</li>
              </ul>
              <p className="mt-4">
                För att utöva dina rättigheter kontaktar du oss via:{" "}
                <a
                  href="mailto:kontakt@alvkarlebydgp.se"
                  className="text-teal underline underline-offset-2"
                >
                  kontakt@alvkarlebydgp.se
                </a>
                .
              </p>
              <p className="mt-2">
                Du har även rätt att lämna in ett klagomål till{" "}
                <a
                  href="https://www.imy.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal underline underline-offset-2"
                >
                  Integritetsskyddsmyndigheten (IMY)
                </a>{" "}
                om du anser att dina personuppgifter behandlas på ett
                felaktigt sätt.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
