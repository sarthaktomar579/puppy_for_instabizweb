/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        milk: "var(--color-milk, #fffdf8)",
        cocoa: "var(--color-cocoa, #2a170e)",
        "cocoa-soft": "var(--color-cocoa-soft, #5a3a28)",
        honey: "var(--color-honey, #f2be6b)",
        "honey-soft": "var(--color-honey-soft, #fbe3b4)",
        toffee: "var(--color-toffee, #c2622b)",
        "toffee-deep": "var(--color-toffee-deep, #a24a1a)",
        "toffee-ink": "var(--color-toffee-ink, #8e3f15)",
        blush: "var(--color-blush, #f9cdbf)",
        sky: "var(--color-sky, #bfddf5)",
        "sky-deep": "var(--color-sky-deep, #2f6e9e)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-figtree)", "system-ui", "sans-serif"],
        hand: ["var(--font-shantell)", "cursive"],
      },
    },
  },
  plugins: [],
};

