export default defineAppConfig({
  ui: {
    primary: 'gray',
    gray: 'neutral',
    colors: ['primary', 'gray'],
  },
  nuxtUx: {
    branding: {
      logoLight: '/branding/logo-black.png',
      logoDark: '/branding/logo-white.jpg',
      companyName: 'Quantium Rock',
      tagline: 'Technology & Cloud Solutions'
    },
    theme: {
      colors: {
        // Quantium Rock Color Palette (dark to light)
        qr: {
          50: '#f5f5f5',
          100: '#e5e5e5',
          200: '#C5C5C5',
          300: '#B1B0B1',
          400: '#9B9B9B',
          500: '#706F70',
          600: '#585858',
          700: '#3E3E3E',
          800: '#2e2e2e',
          900: '#1e1e1e',
          950: '#0e0e0e'
        }
      }
    }
  }
})
