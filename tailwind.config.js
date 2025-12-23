/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1d1d1f",
        offwhite: "#f5f5f7",
        appleBlue: "#0066cc"
      },
      fontFamily: {
        // System font stack akin to Apple’s
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Text"',
          '"SF Pro Display"',
          '"Segoe UI"',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          '"Fira Sans"',
          '"Droid Sans"',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif'
        ]
      },
      backgroundImage: {
        'radial-soft': 'radial-gradient(1200px 600px at 50% 0%, rgba(0, 102, 204, 0.08), transparent 60%)',
        'ink-gradient': 'linear-gradient(180deg, rgba(29,29,31,1) 0%, rgba(29,29,31,0.7) 100%)'
      }
    }
  },
  darkMode: "class",
  plugins: []
}


