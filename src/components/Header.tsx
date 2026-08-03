"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#information", label: "Information" },
  { href: "/#kalender", label: "Kalender" },
  { href: "/#sponsor", label: "Sponsor" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-forest/95 backdrop-blur supports-[backdrop-filter]:bg-forest/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
        >
          <Image
            src="/images/logo.png"
            alt="Älvkarleby IK Discgolf"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="truncate font-display text-base font-medium tracking-wide text-cream sm:text-lg">
            Älvkarleby IK Discgolf
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-cream/80 transition hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/AlvkarlebyDiscgolfpark/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Älvkarleby IK Discgolf på Facebook"
            className="hidden text-cream/70 transition hover:text-gold sm:block"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
            </svg>
          </a>

          <a
            href="https://www.svenskalag.se/alvkarlebyik/formular/bli-medlem-stodmedlem-aik-discgolf/31158"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md bg-gold px-4 py-2 text-sm font-medium text-forest-deep transition hover:bg-gold-dark sm:inline-block"
          >
            Bli medlem
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Stäng meny" : "Öppna meny"}
            aria-expanded={open}
            className="text-cream md:hidden"
          >
            <span
              className={`inline-block transition-transform duration-300 ${
                open ? "rotate-90" : "rotate-0"
              }`}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-cream/10 bg-forest px-5 transition-all duration-300 ease-out md:hidden ${
          open ? "max-h-96 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <nav
          className={`flex flex-col gap-4 transition-transform duration-300 ease-out ${
            open ? "translate-y-0" : "-translate-y-2"
          }`}
        >
          <a
            href="/"
            onClick={() => setOpen(false)}
            className="border-b border-cream/10 pb-4 text-sm font-medium text-cream transition hover:text-gold"
          >
            Startsida
          </a>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-cream/80 transition hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.facebook.com/AlvkarlebyDiscgolfpark/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-cream/80 transition hover:text-gold"
          >
            Facebook
          </a>
          <a
            href="https://www.svenskalag.se/alvkarlebyik/formular/bli-medlem-stodmedlem-aik-discgolf/31158"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="rounded-md bg-gold px-4 py-2 text-center text-sm font-medium text-forest-deep transition hover:bg-gold-dark"
          >
            Bli medlem
          </a>
        </nav>
      </div>
    </header>
  );
}
