import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkest: "#191917",
        green: "#047433",
        "lighter-green": "#79C551",
        "lightest-green": "#9BEA9A",
        red: "#CE1141",
        orange: "#D95745",
        tan: "#FBF9E7",
        blue: "#00437C",
        "lighter-blue": "#0062AB",
        black: "#00112B"
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        "roboto-condensed": ["Roboto Condensed", "sans-serif"],
      },
      display: ['group-hover'],
      fontSize: {
        '9xl': '148px',
      },
    },
    borderWidth: {
      DEFAULT: '1px',
    },
  },
  plugins: [],
};
export default config;
