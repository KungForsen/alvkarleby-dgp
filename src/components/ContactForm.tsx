"use client";

import { useRef, useState, type FormEvent } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

type Status = "idle" | "sending" | "sent" | "error" | "missing-captcha";

// Byt ut mot er egna access key från https://web3forms.com (gratis, ingen
// backend behövs). VIKTIGT: mejlet skickas till den e-postadress som är
// kopplad till Web3Forms-kontot access key:en tillhör – skapa alltså
// kontot med kontakt@alvkarlebydgp.se, inte med en privat mejladress.
const WEB3FORMS_ACCESS_KEY = "6f9ec556-9060-4746-9637-2c9c35e725c4";

// Web3Forms gratisplanens delade hCaptcha-sitekey (samma för alla
// gratiskonton – byt bara om ni uppgraderar till en betalplan).
const HCAPTCHA_SITEKEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!captchaToken) {
      setStatus("missing-captcha");
      return;
    }

    setStatus("sending");
    setErrorMessage(null);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "Nytt meddelande från alvkarlebydgp.se");
    formData.append("h-captcha-response", captchaToken);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      // Logga hela svaret i webbläsarkonsolen (F12 → Console) tills felet
      // är hittat – ta bort raden när formuläret skickar korrekt.
      console.log("Web3Forms-svar:", response.status, result);

      if (result.success) {
        setStatus("sent");
        event.currentTarget.reset();
      } else {
        setStatus("error");
        setErrorMessage(
          result.message ?? result.body?.message ?? "Okänt fel från formulärtjänsten."
        );
      }
    } catch (err) {
      console.error("Web3Forms – nätverksfel:", err);
      setStatus("error");
      setErrorMessage(
        "Kunde inte nå formulärtjänsten. Kontrollera internetuppkopplingen."
      );
    } finally {
      captchaRef.current?.resetCaptcha();
      setCaptchaToken(null);
    }
  }

  if (status === "sent") {
    return (
      <p className="rounded-md border border-teal-light/30 bg-forest-light/40 px-5 py-4 text-sm text-cream">
        Tack för ditt meddelande! Vi återkommer så snart vi kan.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        name="name"
        required
        placeholder="Namn"
        className="rounded-md border border-cream/15 bg-forest-light/40 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="E-post"
        className="rounded-md border border-cream/15 bg-forest-light/40 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
      />
      <textarea
        name="message"
        required
        rows={4}
        placeholder="Meddelande"
        className="resize-none rounded-md border border-cream/15 bg-forest-light/40 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
      />

      <div className="mt-1">
        <HCaptcha
          ref={captchaRef}
          sitekey={HCAPTCHA_SITEKEY}
          reCaptchaCompat={false}
          theme="dark"
          onVerify={(token) => {
            setCaptchaToken(token);
            if (status === "missing-captcha") setStatus("idle");
          }}
          onExpire={() => setCaptchaToken(null)}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-1 rounded-md bg-gold px-6 py-3 text-sm font-medium text-forest-deep transition hover:bg-gold-dark disabled:opacity-60"
      >
        {status === "sending" ? "Skickar…" : "Skicka"}
      </button>

      {status === "missing-captcha" && (
        <p className="text-sm text-clay">Bekräfta captchan innan du skickar.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-clay">
          {errorMessage ?? "Något gick fel. Prova igen, eller mejla oss direkt."}
        </p>
      )}
    </form>
  );
}
