import daisyui from "daisyui"; // ✅ require() এর পরিবর্তে import ব্যবহার করুন

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui], // ✅ ES Module উপযোগী
};
