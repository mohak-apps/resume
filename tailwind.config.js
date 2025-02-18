const { title } = require("process");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      colors: {
        primary: "#0f1010",
        secondary: "#2a2f33",
        tertiary: "#8c8c9c",
        nomad: "#bbb6a5",
        shark: "#2a2f33",
        "black-100": "#8c9491",
        box: "rgba(255, 255, 255, 0.15)",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        shadow: {
          "3d": "20px 20px 30px rgba(0, 0, 0, 0.2), -20px -20px 30px rgba(0, 0, 0, 0.1)",
          "3d-hover":
            "30px 30px 50px rgba(0, 0, 0, 0.3), -30px -30px 50px rgba(0, 0, 0, 0.2)",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      transitionDuration: {
        1000: "1000ms",
      },
      fontFamily: {
        RockSaltRegular: ["RockSalt-Regular", "sans-serif"], // Add your font and fallback
        BaseNeueTrialThin: ["BaseNeueTrial-Thin", "sans-serif"],
        BaseNeueTrialWideBlack: ["BaseNeueTrial-WideBlack", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
