/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "font-heading": ["Clash Display", "sans-serif"],
        "font-body": ["Satoshi", "sans-serif"],
      },
      colors: {
        "primary-green": "#035e5d",
        "content-white": "#f2f2f2",
      },
      backgroundImage: {
        "gradient-unmaze-1":
          "linear-gradient(104deg, #fff000 0%, #ccfd62 100%)",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [],
};
