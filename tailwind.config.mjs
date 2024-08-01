/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        beige: '#FFF1E1',
        brown: '#EFB479',
        'gray-dark': '#1E1E1E',
      },
      boxShadow: {
        'solid-gray': '6px 7px 0px 0px rgba(30,30,30,1)',
        'solid-black': '6px 7px 0px 0px rgba(0,0,0,1)',
      },
    },
  },
  plugins: [],
};
