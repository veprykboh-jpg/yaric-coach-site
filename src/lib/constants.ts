export const TRAINER = {
  name: 'Yaroslav Golod',
  firstName: 'Yaroslav',
  title: 'Elite Boxing & Fitness Coach',
  location: 'Dubai, UAE',
  whatsapp: '+971559708331',
  whatsappDisplay: '+971 55 970 8331',
  instagram: 'yaroslav_golod',
  instagramUrl: 'https://www.instagram.com/yaroslav_golod',
  whatsappUrl: 'https://wa.me/971559708331',
  whatsappBookingUrl:
    'https://wa.me/971559708331?text=Hi%20Yaroslav%2C%20I%27d%20like%20to%20book%20a%20training%20session',
} as const

export const PRICING = {
  single: {
    price: 300,
    currency: 'AED',
    label: 'Single Session',
    perSession: 300,
    description: 'One-on-one personal training session. Full flexibility, no commitment.',
  },
  package: {
    price: 2500,
    currency: 'AED',
    label: '10-Session Package',
    perSession: 250,
    totalSessions: 10,
    savings: 500,
    savingsPercent: 17,
    description: 'The serious athlete\'s choice. Commit to your transformation.',
  },
} as const

export const STATS = [
  { value: 8, suffix: '+', label: 'Years Experience' },
  { value: 200, suffix: '+', label: 'Clients Trained' },
  { value: 15, suffix: '+', label: 'Championships' },
  { value: 3000, suffix: '+', label: 'Hours Coached' },
] as const

export const PROGRAMS = [
  {
    id: 'boxing',
    title: 'Boxing Training',
    subtitle: 'The Art of Combat',
    description:
      'Master footwork, powerful combinations, and ring strategy. Train like a professional fighter under the guidance of Dubai\'s premier boxing coach.',
    features: [
      'Technical pad work & mitts',
      'Footwork & ring movement',
      'Combination sequences',
      'Sparring preparation',
    ],
    icon: 'Swords',
  },
  {
    id: 'personal',
    title: 'Personal Training',
    subtitle: 'Your Body, Transformed',
    description:
      'Fully customized strength and conditioning programs built around your goals, schedule, and current fitness level. Real progress, every session.',
    features: [
      'Custom workout programming',
      'Nutrition strategy & guidance',
      'Progress tracking & analysis',
      'Body composition optimization',
    ],
    icon: 'Dumbbell',
  },
  {
    id: 'fitness',
    title: 'Fitness & Conditioning',
    subtitle: 'Peak Performance',
    description:
      'High-intensity conditioning circuits that forge athletic endurance, explosive power, and the mental toughness that separates champions from the rest.',
    features: [
      'HIIT & metabolic circuits',
      'Strength & power training',
      'Cardiovascular conditioning',
      'Core strength & stability',
    ],
    icon: 'Zap',
  },
] as const

export const WHY_TRAIN = [
  {
    title: 'Elite Technique',
    description:
      'Precision coaching refined through years of competitive boxing and professional training. Every session has a purpose.',
    icon: 'Target',
  },
  {
    title: 'Proven Results',
    description:
      'Over 200 clients transformed. Every program is engineered around measurable outcomes — not just effort.',
    icon: 'TrendingUp',
  },
  {
    title: 'Premium Dubai Facilities',
    description:
      'Training at the most exclusive gyms across Dubai. The environment matches the ambition.',
    icon: 'MapPin',
  },
  {
    title: 'Total Flexibility',
    description:
      'Sessions built around your schedule — early morning, evening, or weekends. Your life, your timeline.',
    icon: 'Clock',
  },
] as const

export const TESTIMONIALS = [
  {
    name: 'Ahmed Al-Rashid',
    role: 'Business Executive, Dubai',
    text: 'Yaroslav completely transformed my fitness in 3 months. His attention to technique and the intensity he brings to every session is unlike anything I\'ve experienced before. Worth every dirham.',
    rating: 5,
  },
  {
    name: 'Sarah Mitchell',
    role: 'Expat Professional, DIFC',
    text: 'I came in knowing nothing about boxing. Now I train four times a week and feel stronger than I ever have. The sessions are challenging but incredibly motivating. Best decision I\'ve made in Dubai.',
    rating: 5,
  },
  {
    name: 'Marcus Weber',
    role: 'Entrepreneur, Palm Jumeirah',
    text: 'The 10-session package is the best investment I\'ve made. Real results, expert coaching, and the kind of discipline that carries into every part of your life. Yaroslav is the real deal.',
    rating: 5,
  },
] as const

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
] as const
