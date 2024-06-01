import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: "rgb(138, 108, 96)",
        greee: "rgba(255, 255, 255, 0.2)"
      },
      screens: {
        'xs': '220px', 
        'xsm': '480px',
        '3xl': '1920px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        dg: ["diagrid"],
        brad: ["brad"]
      }
    },
  },
  plugins: [],
};
export default config;
