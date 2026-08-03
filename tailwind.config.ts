import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#173B2C",
          deep: "#0F2A1F",
          light: "#22503C",
        },
        teal: {
          DEFAULT: "#0F6E56",
          light: "#9FE1CB",
        },
        gold: {
          DEFAULT: "#E0A72E",
          dark: "#B5811B",
        },
        clay: "#C0392B",
        cream: "#F7F5EE",
        ink: "#16241C",
        stone: "#8A8878",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        contour: "url('/images/contour.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
