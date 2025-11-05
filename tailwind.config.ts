import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        // Quantium Rock Brand Colors
        qr: {
          darkest: '#3E3E3E',
          darker: '#585858',
          dark: '#706F70',
          DEFAULT: '#9B9B9B',
          light: '#B1B0B1',
          lighter: '#C5C5C5'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    }
  }
}
