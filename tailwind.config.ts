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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "custom-bg-color": "rgb(12, 12 ,12)",
        "custom-border-color": "rgb(72, 72, 72)",
        "custom-team-border-color": "rgb(35, 35, 35)",
        "custom-toolbar-color": "rgb(222, 222, 222)",
        "custom-headings-color": "rgb(217, 217, 217)",
        "custom-font-color": "rgb(159, 159, 159)",
        "custom-footer-bg": "rgb(4, 4, 4)",
        "custom-services-color": "rgb(200, 200, 200)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      spacing: {
        "ws-1": "0.25em",
        "ws-2": "0.5em",
        "ws-3": "1em",
      },
    },
  },
  plugins: [],
};
export default config;
