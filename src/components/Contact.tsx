import ContactForm from "./ContactForm";
import MapEmbed from "./MapEmbed";

export default function Contact() {
  return (
    <section id="kontakt" className="bg-forest px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <p className="eyebrow mb-3 text-teal-light">Kontakta oss</p>
          <h2 className="font-display text-3xl font-medium uppercase tracking-wide text-cream sm:text-4xl">
            Har du frågor kring banan, tävlingar eller sponsorskap?
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-cream/70">
            Tveka inte att höra av dig!
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>

        <div className="relative min-h-[320px] overflow-hidden rounded-lg">
          <MapEmbed />
        </div>
      </div>
    </section>
  );
}
