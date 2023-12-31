/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'beaver-orange': '#D73F09',
        'moondust': '#C6DAE7',
        'luminance': '#FFB500',
        'stratosphere': '#006A8E'
      }
    },
  },
  plugins: [],
}

