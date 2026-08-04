import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Integritetspolicy – Älvkarleby IK Discgolf",
};

export default function Integritetspolicy() {
  return (
    <>
      <Header />
      <main className="bg-cream px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="eyebrow mb-3 text-teal">Integritetspolicy</p>
          <h1 className="font-display text-3xl font-medium uppercase tracking-wide text-forest sm:text-4xl">
            Så behandlar vi dina uppgifter
          </h1>
          <p className="mt-4 text-sm text-stone">Senast uppdaterad: augusti 2026</p>

          <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-ink/80">
            <section>
              <h2 className="font-display text-lg font-medium uppercase tracking-wide text-forest">
                Personuppgiftsansvarig
              </h2>
              <p className="mt-2">
                Älvkarleby IK Discgolf ansvarar för behandlingen av
                personuppgifter som samlas in via denna webbplats. Frågor kan
                skickas till{" "}
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
                Kontaktformuläret
              </h2>
              <p className="mt-2">
                När du skickar ett meddelande via kontaktformuläret behandlas
                namn, e-postadress och meddelandetext. Uppgifterna skickas
                via tredjepartstjänsten{" "}
                <a
                  href="https://web3forms.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal underline underline-offset-2"
                >
                  Web3Forms
                </a>{" "}
                till klubbens e-post och används enbart för att kunna
                besvara ditt meddelande.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-medium uppercase tracking-wide text-forest">
                Skydd mot spam (hCaptcha)
              </h2>
              <p className="mt-2">
                Kontaktformuläret skyddas av{" "}
                <a
                  href="https://www.hcaptcha.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal underline underline-offset-2"
                >
                  hCaptcha
                </a>
                , en tjänst som verifierar att formuläret skickas av en
                människa och inte en robot. hCaptcha kan behandla din
                IP-adress och viss information om enhet och beteende.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-medium uppercase tracking-wide text-forest">
                Kakor (cookies)
              </h2>
              <p className="mt-2">
                En kaka är en liten textfil som sparas på din enhet när du
                besöker en webbplats. Vissa kakor tas bort när du stänger
                webbläsaren, andra ligger kvar längre. Du kan alltid ta bort
                eller blockera kakor via inställningarna i din webbläsare.
              </p>
              <p className="mt-4">
                Vår webbplats i sig sätter inga egna kakor. Två inbäddade
                tredjepartstjänster gör det dock, och sätter kakor först när
                du godkänner det i bannern som visas vid ditt första besök:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-forest">Google Maps</strong> — för
                  att visa kartan till banan i kontaktsektionen.
                </li>
                <li>
                  <strong className="text-forest">Elfsight</strong> — för att
                  visa kalendern med kommande händelser.
                </li>
              </ul>
              <p className="mt-4">
                Vi använder inga kakor för marknadsföring eller
                reklamriktning, och det finns ingen inloggning på
                webbplatsen. Besöksstatistiken vi använder (Vercel Analytics)
                är kakfri och identifierar inte enskilda besökare.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-medium uppercase tracking-wide text-forest">
                Kalender
              </h2>
              <p className="mt-2">
                Kalendern på webbplatsen tillhandahålls av{" "}
                <a
                  href="https://elfsight.com/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal underline underline-offset-2"
                >
                  Elfsight
                </a>
                , som kan samla in anonymiserad användningsdata och sätta
                cookies för att widgeten ska fungera.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-medium uppercase tracking-wide text-forest">
                Karta
              </h2>
              <p className="mt-2">
                Sidan visar en inbäddad karta från Google Maps för att visa
                vägen till discgolfbanan. När kartan laddas kan Google
                behandla din IP-adress i enlighet med{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal underline underline-offset-2"
                >
                  Googles integritetspolicy
                </a>
                .
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
                Dina rättigheter
              </h2>
              <p className="mt-2">
                Du har rätt att begära information om, rättelse av eller
                radering av personuppgifter vi behandlar om dig. Kontakta oss
                på{" "}
                <a
                  href="mailto:kontakt@alvkarlebydgp.se"
                  className="text-teal underline underline-offset-2"
                >
                  kontakt@alvkarlebydgp.se
                </a>{" "}
                för sådana förfrågningar.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
