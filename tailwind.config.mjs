/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Correct path to `app`
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        customScroll: "customScroll 40s linear infinite", // Define your custom animation
        arrowAnime: 'arrowAnime 3s ease-out infinite',
      },
      keyframes: {
        customScroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(calc(450px * -10))" },
        },
        arrowAnime: {
          "0%": { transform: "translate(0px)" },
          "25%": { transform: "translate(15px)" },
          "75%": { transform: "translate(0px)" },
          "100%": { transform: "translate(0px)" },
        },
        
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Use Inter as the default sans
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        paraColor: "#878787",
        primary: "#1BB1F1",
        secondary: "#c2edff",
        gray: "#878787",
      },
      boxShadow: {
        custom: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
