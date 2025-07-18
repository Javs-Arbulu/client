module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Habilita modo oscuro basado en clase
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      colors: {
        // Colores primarios (azul moderno)
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb", // principal
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        // Colores secundarios (amarillo energético)
        secondary: {
          50: "#fffde7",
          100: "#fff9c4",
          200: "#fff59d",
          300: "#fff176",
          400: "#ffee58",
          500: "#fdd835",
          600: "#fbc02d", // principal
          700: "#f9a825",
          800: "#f57f17",
          900: "#f57c00",
          950: "#e65100",
        },
        // Colores de acento (coral/fucsia)
        accent: {
          50: "#fce4ec",
          100: "#f8bbd0",
          200: "#f48fb1",
          300: "#f06292",
          400: "#ec407a",
          500: "#ff4081",
          600: "#f50057",
          700: "#c51162",
          800: "#880e4f",
          900: "#560027",
          950: "#360019",
        },
        // Colores neutros
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
        // Colores especiales de la iglesia
        "divine-gold": {
          500: "#ffc233",
        },
        "sacred-purple": {
          500: "#a855f7",
        },
      },
      backgroundColor: {
        "primary-bg": "var(--background-primary)",
        "secondary-bg": "var(--background-secondary)",
        "tertiary-bg": "var(--background-tertiary)",
        "surface-primary": "var(--surface-primary)",
        "surface-secondary": "var(--surface-secondary)",
        "surface-tertiary": "var(--surface-tertiary)",
      },
      textColor: {
        "primary-text": "var(--text-primary)",
        "secondary-text": "var(--text-secondary)",
        "tertiary-text": "var(--text-tertiary)",
        "inverse-text": "var(--text-inverse)",
      },
      borderColor: {
        light: "var(--border-light)",
        medium: "var(--border-medium)",
        dark: "var(--border-dark)",
      },
      boxShadow: {
        "custom-sm": "var(--shadow-sm)",
        "custom-md": "var(--shadow-md)",
        "custom-lg": "var(--shadow-lg)",
        "custom-xl": "var(--shadow-xl)",
      },
      animation: {
        "fade-in": "fadeIn 0.2s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(0.25rem)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
