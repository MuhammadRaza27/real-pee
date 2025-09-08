/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        sans: ['Inter', 'ui-sans-serif', 'system-ui'] 
      },
      colors: {
        ink: '#0F172A', 
        soft: '#64748B', 
        line: '#E2E8F0',
        brand: '#16A34A', 
        brandDark: '#15803D'
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,23,42,.06), 0 8px 24px rgba(15,23,42,.06)'
      }
    },
  },
  plugins: [],
}
