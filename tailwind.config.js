/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    fontFamily: {
      mono: ['"Fira Code"', 'monospace'],
    },
    extend: {
      colors: {
        default: "#232025",
        primary: "#5b00ff",
        "primary-content": "#d7daff",
        secondary: "#00c1ff",
        "secondary-content": "#000e16",
        accent: "#0000ff",
        "accent-content": "#c6dbff",
        neutral: "#262a26",
        "neutral-content": "#cfd0cf",
        "base-100": "#232025",
        "base-200": "#1d1a1f",
        "base-300": "#171519",
        "base-content": "#cecdcf",
        info: "#0082b8",
        "info-content": "#00060c",
        success: "#008900",
        "success-content": "#d3e8d1",
        warning: "#ff7a00",
        "warning-content": "#160500",
        error: "#ff7984",
        "error-content": "#160506",
      },
    },
  },
  plugins: [],
}

