import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sidan hittades inte – Älvkarleby IK Discgolf",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[60vh] flex-col items-center justify-center bg-forest px-5 py-24 text-center sm:px-8">
        <p className="eyebrow mb-3 text-teal-light">404</p>
        <h1 className="font-display text-4xl font-medium uppercase tracking-wide text-cream sm:text-5xl">
          Här ligger ingen korg
        </h1>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-cream/70">
          Sidan du letar efter finns inte, eller så har den flyttat. Kolla
          adressen igen, eller ta dig tillbaka till start.
        </p>
        <a
          href="/"
          className="mt-8 inline-block rounded-md bg-gold px-6 py-3 text-sm font-medium text-forest-deep transition hover:bg-gold-dark"
        >
          Till startsidan
        </a>
      </main>
      <Footer />
    </>
  );
}
