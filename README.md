# Älvkarleby IK Discgolf

Ny version av alvkarlebydgp.se, byggd med Next.js, TypeScript och Tailwind CSS.

## Kom igång lokalt

```bash
npm install
npm run dev
```

Öppna http://localhost:3000

## Innan sidan är klar att driftsätta

1. **Bilder** – lägg dessa i `public/images/`:
   - `logo.png` – klubbens logotyp (den runda badgen)
   - `karta.jpg` – bilden av banans karta (finns redan på alvkarlebydgp.se/assets/images/karta-2.jpeg)
2. **Kontaktformulär** – skapa ett gratis konto på [web3forms.com](https://web3forms.com), hämta er access key och klistra in den i `src/components/ContactForm.tsx` (byt ut `YOUR_WEB3FORMS_ACCESS_KEY`).
3. **Sponsorer** – uppdatera listan i `src/components/SponsorStrip.tsx` med riktiga sponsornamn/loggor.

## Deploy

Koppla repot till [Vercel](https://vercel.com) – det byggs och driftsätts automatiskt vid varje push till huvudgrenen.

## Struktur

- `src/app/page.tsx` – sätter ihop startsidan av sektionerna nedan
- `src/components/Header.tsx` – navigation
- `src/components/Hero.tsx` – hero-sektion
- `src/components/FallDivider.tsx` – vattenfallsinspirerad övergång mellan sektioner
- `src/components/SponsorStrip.tsx` – sponsorrad
- `src/components/Info.tsx` – information om banan
- `src/components/SponsorCTA.tsx` – "bli sponsor"-sektion med förmånskort
- `src/components/Contact.tsx` + `ContactForm.tsx` – kontakt och karta
- `src/components/Footer.tsx` – sidfot
