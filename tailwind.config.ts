import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4A847',
          light: '#F0C866',
          dark: '#9A7830',
          glow: '#FFB800',
        },
        red: {
          DEFAULT: '#CC2936',
          light: '#E53E4A',
          glow: '#FF3344',
        },
        surface: {
          1: '#181818',
          2: '#202020',
          3: '#2A2A2A',
        },
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'Impact', 'sans-serif'],
        heading: ['var(--font-rajdhani)', 'Helvetica Neue', 'sans-serif'],
        body: ['var(--font-jakarta)', 'Helvetica Neue', 'sans-serif'],
      },
      fontSize: {
        '8xl': ['6rem',   { lineHeight: '1',    letterSpacing: '-0.02em' }],
        '9xl': ['8rem',   { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        '10xl': ['10rem', { lineHeight: '0.9',  letterSpacing: '-0.04em' }],
      },
      animation: {
        float:            'float 6s ease-in-out infinite',
        'pulse-gold':     'pulseGold 2.5s ease-in-out infinite',
        'pulse-red':      'pulseRed 2s ease-in-out infinite',
        shimmer:          'goldShimmer 3.5s linear infinite',
        marquee:          'marquee 30s linear infinite',
        'smoke-a':        'smokeA 22s ease-in-out infinite',
        'smoke-b':        'smokeB 28s ease-in-out infinite',
        'smoke-c':        'smokeC 18s ease-in-out infinite',
        'smoke-d':        'smokeD 32s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        smokeA: {
          '0%,100%': { transform: 'translate(0,0) scale(1)',    opacity: '0.6' },
          '25%':     { transform: 'translate(28px,-22px) scale(1.08)', opacity: '1' },
          '50%':     { transform: 'translate(-16px,-40px) scale(0.94)', opacity: '0.4' },
          '75%':     { transform: 'translate(18px,-14px) scale(1.04)', opacity: '0.8' },
        },
        smokeB: {
          '0%,100%': { transform: 'translate(0,0) scale(1)',    opacity: '0.5' },
          '33%':     { transform: 'translate(-38px,-26px) scale(1.12)', opacity: '0.9' },
          '66%':     { transform: 'translate(22px,-48px) scale(0.91)', opacity: '0.3' },
        },
        smokeC: {
          '0%,100%': { transform: 'translate(0,0) scale(1)',    opacity: '0.7' },
          '40%':     { transform: 'translate(32px,-18px) scale(1.1)', opacity: '0.4' },
          '70%':     { transform: 'translate(-24px,-32px) scale(0.96)', opacity: '1' },
        },
        smokeD: {
          '0%,100%': { transform: 'translate(0,0) scale(1)',    opacity: '0.4' },
          '20%':     { transform: 'translate(-20px,-15px) scale(1.06)', opacity: '0.8' },
          '55%':     { transform: 'translate(35px,-38px) scale(0.93)', opacity: '0.5' },
          '80%':     { transform: 'translate(-10px,-20px) scale(1.02)', opacity: '0.7' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212,168,71,0.3)' },
          '50%':      { boxShadow: '0 0 55px rgba(212,168,71,0.7), 0 0 110px rgba(212,168,71,0.25)' },
        },
        pulseRed: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(204,41,54,0.3)' },
          '50%':      { boxShadow: '0 0 40px rgba(204,41,54,0.7), 0 0 80px rgba(204,41,54,0.2)' },
        },
        goldShimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backdropBlur: { xs: '2px' },
      boxShadow: {
        gold:       '0 0 35px rgba(212,168,71,0.5)',
        'gold-lg':  '0 0 70px rgba(212,168,71,0.4), 0 0 140px rgba(212,168,71,0.15)',
        red:        '0 0 30px rgba(204,41,54,0.5)',
        'red-lg':   '0 0 60px rgba(204,41,54,0.35)',
        glass:      '0 8px 32px rgba(0,0,0,0.6)',
        card:       '0 1px 0 rgba(255,255,255,0.06) inset, 0 20px 60px rgba(0,0,0,0.7)',
      },
    },
  },
  plugins: [],
}

export default config
