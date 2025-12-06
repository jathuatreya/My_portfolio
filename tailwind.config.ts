import type { Config } from "tailwindcss";

const config: Config = {
     darkMode: 'class',
     content: [
          "./pages/**/*.{js,ts,jsx,tsx,mdx}",
          "./components/**/*.{js,ts,jsx,tsx,mdx}",
          "./app/**/*.{js,ts,jsx,tsx,mdx}",
     ],
     theme: {
          extend: {
               screens: {
                    'xs': '475px',
                    '3xl': '1920px',
                    '4k': '2560px',
               },
               colors: {
                    background: "var(--background)",
                    "background-light": "var(--background-light)",
                    "background-dark": "var(--background-dark)",
                    foreground: "var(--foreground)",
                    primary: "var(--primary)",
                    "ui-background": "var(--ui-background)",
                    "text-light": "var(--text-light)",
                    "text-dark": "var(--text-dark)",
                    "nav-light": "var(--nav-light)",
                    "nav-dark": "var(--nav-dark)",
                    "card-light": "var(--card-light)",
                    "card-dark": "var(--card-dark)",
                    card: "var(--card)",
               },
               animation: {
                    'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    'pulse-slower': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
               },
          },
     },
     plugins: [],
};
export default config;
