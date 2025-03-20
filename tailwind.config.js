/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',      // 12px
        sm: '0.875rem',     // 14px
        base: '1rem',       // 16px
        lg: '1.125rem',     // 18px
        xl: '1.25rem',      // 20px
        '2xl': '1.5rem',    // 24px
        '3xl': '1.875rem',  // 30px
        '4xl': '2.25rem',   // 36px
        '5xl': '3rem',      // 48px
        '6xl': '4rem',      // 64px
        '7xl': '5rem',      // 80px
        '8xl': '6rem',      // 96px
        '9xl': '8rem',      // 128px
        '10xl': '10rem',    // 160px
        '14xl': '14rem',    // 224px
      },
      fontWeight: {
        normal: '400',      // Regular weight
        medium: '500',      // Medium weight
        semibold: '600',    // Semibold weight
        bold: '700',        // Bold weight
      },      
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        myCol: "#121063",   // Custom color
      },
      spacing: {
        xl: '1rem',        // 16px
        '2xl': '1.5rem',   // 24px
        '3xl': '2rem',     // 32px
        '4xl': '2.5rem',   // 40px
        '5xl': '3rem',     // 48px
        '6xl': '4rem',     // 64px
        '7xl': '5rem',     // 80px
        '8xl': '6rem',     // 96px
      },
      borderRadius: {
        xl: '0.5rem',      // 8px (Common for rounded corners)
        '2xl': '0.75rem',  // 12px
        '3xl': '1rem',     // 16px
        '4xl': '1.25rem',  // 20px
        '5xl': '1.5rem',   // 24px
        '6xl': '2rem',     // 32px
        '7xl': '3rem',     // 48px
        '8xl': '4rem',     // 64px
      },
      screens: {
        sm: '640px',       // Small devices (mobile)
        md: '768px',       // Medium devices (tablets)
        lg: '1024px',      // Large devices (desktops)
        xl: '1280px',      // Extra large devices (large desktops)
        '2xl': '1536px',   // 2x extra large devices (larger desktops)
      },      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}