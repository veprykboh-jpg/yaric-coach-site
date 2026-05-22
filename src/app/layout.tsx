import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Rajdhani, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const rajdhani = Rajdhani({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-rajdhani',
  display: 'swap',
})

const jakartaSans = Plus_Jakarta_Sans({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yaroslav Golod — Elite Boxing & Fitness Coach Dubai',
  description:
    'Premium personal boxing and fitness training in Dubai. Train with Yaroslav Golod — elite technique, proven results, exclusive sessions.',
  keywords: [
    'boxing coach Dubai',
    'personal trainer Dubai',
    'fitness training Dubai',
    'boxing training Dubai',
    'elite fitness Dubai',
  ],
  openGraph: {
    title: 'Yaroslav Golod — Elite Boxing & Fitness Coach Dubai',
    description: 'Elite personal boxing and fitness training in Dubai.',
    type: 'website',
    locale: 'en_AE',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#C9A84C',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${rajdhani.variable} ${jakartaSans.variable}`}
    >
      <body className="bg-[#0A0A0A] text-[#FAFAFA] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
