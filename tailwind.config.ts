import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--boder)",
        dividerGrayColour:"var(--divider-gray)",
        textColourOne:"var(--text-colour-one)",

      },
      fontFamily: {
        sfPro: ["SF Pro", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
