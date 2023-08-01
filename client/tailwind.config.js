/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  variants: {},
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#eff9f9',
        p_buttons: '#094067',
        p_buttons_text: '#eff9f9',
        p_buttons_hover: '#b6c7e2',
        p_buttons_hover_text: '#094067',
        p_text: '#094067',
        p_gradient: '#b6c7e2',
        secondary: '#202639',
        s_buttons: '#eff9f9',
        s_buttons_text: '#202639',
        s_buttons_hover: '#c8d8de',
        s_buttons_hover_text: '#202639',
        s_text: '#eff9f9',
        s_gradient: '#3f4c77',
      },
    },
  },
};
