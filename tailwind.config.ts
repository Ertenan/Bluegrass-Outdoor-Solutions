import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#001F3F',
          green: '#3B5134',
          bronze: '#8B7355',
          gold: '#D4AF37',
          cream: '#F7F4EC',
          mist: '#E8EFE5',
          ink: '#17212B'
        }
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'Arial', 'sans-serif']
      },
      boxShadow: {
        lift: '0 24px 60px rgba(0, 31, 63, 0.16)',
        glow: '0 12px 40px rgba(212, 175, 55, 0.2)'
      },
      backgroundImage: {
        'leaf-texture':
          'linear-gradient(135deg, rgba(247, 244, 236, 0.96), rgba(232, 239, 229, 0.94))'
      }
    }
  },
  plugins: []
};

export default config;
