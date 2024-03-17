import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {

    },
    screens: {
      mini: [{ 'min': '0px', 'max': '320px' }],
      mobile: [{ 'min': '321px', 'max': '480px' }],
      tablet: [{ 'min': '481px', 'max': '768px' }],
      laptop: [{ 'min': '769px', 'max': '1090px' }],
      desktop: [{ 'min': '1091px', 'max': '1600px' }],
      super: [{ 'min': '1601px', 'max': '1900px' }]
    }
  },
  plugins: [],
};
export default config;
