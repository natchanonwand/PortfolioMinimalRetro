// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem'
      }
    },
    extend: {},
    fontFamily: {
      'bauhaus': ["'Bauhaus 93'", "sans-serif"], // Ensure the font name is quoted
    },
    boxShadow: {
      neumorphism: '5px 5px 0px #707070, -5px -5px 0px #ffffff',
      lowneumorphism: '2px 2px 0px #707070, -2px -2px 0px #ffffff',
      'custom-initial': 'inset 0 0 0 0 #54b3d6',
      'custom-hover': 'inset 100px 0 0 0 #54b3d6',
    },
  },
  plugins: [],
};
