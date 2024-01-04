import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        heroPop: "url('/hero/pop.png')",
        dots: "url('/dots.png')",
        dot: "url('/dot.png')",
      }),
      backgroundSize: {
        "100": "10px",
      },
      colors: {
        main: "#d0f500",
        secondary: "#a66cff",
        dark: "#131313",
        gray: "#e6e6e6",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
