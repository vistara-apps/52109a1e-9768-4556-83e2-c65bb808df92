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
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Design system color tokens
        primary: {
          DEFAULT: "hsl(210, 80%, 50%)",
          50: "hsl(210, 80%, 95%)",
          100: "hsl(210, 80%, 90%)",
          200: "hsl(210, 80%, 80%)",
          300: "hsl(210, 80%, 70%)",
          400: "hsl(210, 80%, 60%)",
          500: "hsl(210, 80%, 50%)",
          600: "hsl(210, 80%, 40%)",
          700: "hsl(210, 80%, 30%)",
          800: "hsl(210, 80%, 20%)",
          900: "hsl(210, 80%, 10%)",
          950: "hsl(210, 80%, 5%)",
        },
        secondary: {
          DEFAULT: "hsl(215, 25%, 70%)",
          50: "hsl(215, 25%, 95%)",
          100: "hsl(215, 25%, 90%)",
          200: "hsl(215, 25%, 80%)",
          300: "hsl(215, 25%, 70%)",
          400: "hsl(215, 25%, 60%)",
          500: "hsl(215, 25%, 50%)",
          600: "hsl(215, 25%, 40%)",
          700: "hsl(215, 25%, 30%)",
          800: "hsl(215, 25%, 20%)",
          900: "hsl(215, 25%, 10%)",
          950: "hsl(215, 25%, 5%)",
        },
        accent: {
          DEFAULT: "hsl(170, 70%, 40%)",
          50: "hsl(170, 70%, 95%)",
          100: "hsl(170, 70%, 90%)",
          200: "hsl(170, 70%, 80%)",
          300: "hsl(170, 70%, 70%)",
          400: "hsl(170, 70%, 60%)",
          500: "hsl(170, 70%, 50%)",
          600: "hsl(170, 70%, 40%)",
          700: "hsl(170, 70%, 30%)",
          800: "hsl(170, 70%, 20%)",
          900: "hsl(170, 70%, 10%)",
          950: "hsl(170, 70%, 5%)",
        },
        // Custom design system colors
        surface: "hsl(215, 25%, 20%)",
        textPrimary: "hsl(0, 0%, 95%)",
        textSecondary: "hsl(0, 0%, 70%)",
        success: "hsl(130, 70%, 45%)",
        warning: "hsl(30, 70%, 50%)",
        error: "hsl(0, 70%, 50%)",
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          1: "var(--chart-1)",
          2: "var(--chart-2)",
          3: "var(--chart-3)",
          4: "var(--chart-4)",
          5: "var(--chart-5)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
