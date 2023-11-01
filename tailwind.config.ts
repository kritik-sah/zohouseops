import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "space-grotesk": ['var(--font-space-grotesk)'],
      },
      colors: {
        'zo-primary': '#FFFFFF',
        'zo-secondary': '#5A5A5A',
        'zo-dark': '#121212',
        'zo-stroke': '#202020',
        'zo-highlight': '#CFFF50',
        'zo-green': '#66DF48',
        'zo-green-dark': '#293329',
        'zo-yellow': '#FFD600',
        'zo-orange': '#FF9E4C',
        'zo-orange-dark': '#332D29',
      },
    },
  },
  plugins: [],
}
export default config
