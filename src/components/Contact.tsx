import ContactForm from "./ContactForm";

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
          <iframe
            title="Karta till Älvkarleby discgolfbana"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1960.5303422912602!2d17.452370600000002!3d60.568453399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4660eb0008cef801%3A0x273d06d7e4cdeeeb!2s%C3%84lvkarleby%20discgolf!5e0!3m2!1ssv!2sse!4v1774736839579!5m2!1ssv!2sse"
            className="absolute inset-0 h-full w-full grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
