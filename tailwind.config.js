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
        "primary-yellow": "#fff000",
        "light-green": "#ccfd62",
        "dark-green": "#023a39",
      },
      backgroundImage: {
        "gradient-unmaze-1":
          "linear-gradient(104deg, #fff000 0%, #ccfd62 100%)",
        "gradient-unmaze-2":
          "linear-gradient(96deg, #FFF000 0%, #CCFD62 83.15%)",
        "gradient-unmaze-3":
          "linear-gradient(154deg, #035e5d 16.3%, #023a39 83.7%)",
        "gradient-unmaze-4": "linear-gradient(to right, #ccfd62, #fff000)",
        "gradient-unmaze-hero":
          "linear-gradient(98deg, #fff000 5.1%, #ccfd62 92.77%)",
      },
      boxShadow: {
        "nav-shadow": "0px 1px 8px 0px rgba(2, 58, 57, 0.20);",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [],
};
