/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "alvkarlebydgp.se",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Förhindrar att sajten läggs i en dold iframe på en annan sajt
          // (clickjacking / UI-redress-attacker).
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Hindrar webbläsaren från att gissa filtyper – minskar risken
          // för vissa typer av innehållsinjektion.
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Skickar inte full URL (med ev. query-parametrar) till externa
          // sajter när någon klickar sig vidare härifrån.
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Stänger av kamera/mikrofon/geolocation som sajten aldrig
          // behöver – minskar skadan om ett tredjepartsskript missbrukas.
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
