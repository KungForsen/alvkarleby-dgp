export default function Footer() {
  return (
    <footer className="bg-forest-deep px-5 py-6 text-center sm:px-8">
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <a
          href="https://www.facebook.com/AlvkarlebyDiscgolfpark/"
          className="text-sm text-cream/50 transition hover:text-gold"
        >
          Facebook
        </a>
        <a
          href="/integritetspolicy"
          className="text-sm text-cream/50 transition hover:text-gold"
        >
          Integritetspolicy
        </a>
      </div>
      <p className="mt-2 text-xs text-cream/30">
        © {new Date().getFullYear()} Älvkarleby IK Discgolf. Alla rättigheter
        förbehållna.
      </p>
    </footer>
  );
}
