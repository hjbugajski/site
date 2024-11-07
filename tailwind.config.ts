import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

// eslint-disable-next-line @typescript-eslint/unbound-method
const utilitiesPlugin = plugin(({ addUtilities }) => {
  addUtilities({
    '.font-normal': {
      fontWeight: '400',
      fontVariationSettings: '"wght" 400',
    },
    '.font-medium': {
      fontWeight: '500',
      fontVariationSettings: '"wght" 500',
    },
    '.font-semibold': {
      fontWeight: '600',
      fontVariationSettings: '"wght" 600',
    },
    '.font-bold': {
      fontWeight: '700',
      fontVariationSettings: '"wght" 700',
    },
    '.font-optical-sizing-auto': {
      fontOpticalSizing: 'auto',
    },
  });
});

const config: Config = {
  content: [
    './src/app/(site)/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      background: {
        DEFAULT: 'hsl(var(--ds-background-100) / <alpha-value>)',
        secondary: 'hsl(var(--ds-background-200) / <alpha-value>)',
      },
      gray: {
        'bg-default': 'hsla(var(--ds-gray-100) / <alpha-value>)',
        'bg-hover': 'hsla(var(--ds-gray-200) / <alpha-value>)',
        'bg-active': 'hsla(var(--ds-gray-300) / <alpha-value>)',
        'border-default': 'hsla(var(--ds-gray-400) / <alpha-value>)',
        'border-hover': 'hsla(var(--ds-gray-500) / <alpha-value>)',
        'border-active': 'hsla(var(--ds-gray-600) / <alpha-value>)',
        'bg-high-contrast': 'hsla(var(--ds-gray-700) / <alpha-value>)',
        'bg-high-contrast-hover': 'hsla(var(--ds-gray-800) / <alpha-value>)',
        'text-secondary': 'hsla(var(--ds-gray-900) / <alpha-value>)',
        'text-primary': 'hsla(var(--ds-gray-1000) / <alpha-value>)',
      },
      blue: {
        'bg-default': 'hsla(var(--ds-blue-100) / <alpha-value>)',
        'bg-hover': 'hsla(var(--ds-blue-200) / <alpha-value>)',
        'bg-active': 'hsla(var(--ds-blue-300) / <alpha-value>)',
        'border-default': 'hsla(var(--ds-blue-400) / <alpha-value>)',
        'border-hover': 'hsla(var(--ds-blue-500) / <alpha-value>)',
        'border-active': 'hsla(var(--ds-blue-600) / <alpha-value>)',
        'bg-high-contrast': 'hsla(var(--ds-blue-700) / <alpha-value>)',
        'bg-high-contrast-hover': 'hsla(var(--ds-blue-800) / <alpha-value>)',
        'text-secondary': 'hsla(var(--ds-blue-900) / <alpha-value>)',
        'text-primary': 'hsla(var(--ds-blue-1000) / <alpha-value>)',
      },
      red: {
        'bg-default': 'hsla(var(--ds-red-100) / <alpha-value>)',
        'bg-hover': 'hsla(var(--ds-red-200) / <alpha-value>)',
        'bg-active': 'hsla(var(--ds-red-300) / <alpha-value>)',
        'border-default': 'hsla(var(--ds-red-400) / <alpha-value>)',
        'border-hover': 'hsla(var(--ds-red-500) / <alpha-value>)',
        'border-active': 'hsla(var(--ds-red-600) / <alpha-value>)',
        'bg-high-contrast': 'hsla(var(--ds-red-700) / <alpha-value>)',
        'bg-high-contrast-hover': 'hsla(var(--ds-red-800) / <alpha-value>)',
        'text-secondary': 'hsla(var(--ds-red-900) / <alpha-value>)',
        'text-primary': 'hsla(var(--ds-red-1000) / <alpha-value>)',
      },
      amber: {
        'bg-default': 'hsla(var(--ds-amber-100) / <alpha-value>)',
        'bg-hover': 'hsla(var(--ds-amber-200) / <alpha-value>)',
        'bg-active': 'hsla(var(--ds-amber-300) / <alpha-value>)',
        'border-default': 'hsla(var(--ds-amber-400) / <alpha-value>)',
        'border-hover': 'hsla(var(--ds-amber-500) / <alpha-value>)',
        'border-active': 'hsla(var(--ds-amber-600) / <alpha-value>)',
        'bg-high-contrast': 'hsla(var(--ds-amber-700) / <alpha-value>)',
        'bg-high-contrast-hover': 'hsla(var(--ds-amber-800) / <alpha-value>)',
        'text-secondary': 'hsla(var(--ds-amber-900) / <alpha-value>)',
        'text-primary': 'hsla(var(--ds-amber-1000) / <alpha-value>)',
      },
      green: {
        'bg-default': 'hsla(var(--ds-green-100) / <alpha-value>)',
        'bg-hover': 'hsla(var(--ds-green-200) / <alpha-value>)',
        'bg-active': 'hsla(var(--ds-green-300) / <alpha-value>)',
        'border-default': 'hsla(var(--ds-green-400) / <alpha-value>)',
        'border-hover': 'hsla(var(--ds-green-500) / <alpha-value>)',
        'border-active': 'hsla(var(--ds-green-600) / <alpha-value>)',
        'bg-high-contrast': 'hsla(var(--ds-green-700) / <alpha-value>)',
        'bg-high-contrast-hover': 'hsla(var(--ds-green-800) / <alpha-value>)',
        'text-secondary': 'hsla(var(--ds-green-900) / <alpha-value>)',
        'text-primary': 'hsla(var(--ds-green-1000) / <alpha-value>)',
      },
      teal: {
        'bg-default': 'hsla(var(--ds-teal-100) / <alpha-value>)',
        'bg-hover': 'hsla(var(--ds-teal-200) / <alpha-value>)',
        'bg-active': 'hsla(var(--ds-teal-300) / <alpha-value>)',
        'border-default': 'hsla(var(--ds-teal-400) / <alpha-value>)',
        'border-hover': 'hsla(var(--ds-teal-500) / <alpha-value>)',
        'border-active': 'hsla(var(--ds-teal-600) / <alpha-value>)',
        'bg-high-contrast': 'hsla(var(--ds-teal-700) / <alpha-value>)',
        'bg-high-contrast-hover': 'hsla(var(--ds-teal-800) / <alpha-value>)',
        'text-secondary': 'hsla(var(--ds-teal-900) / <alpha-value>)',
        'text-primary': 'hsla(var(--ds-teal-1000) / <alpha-value>)',
      },
      purple: {
        'bg-default': 'hsla(var(--ds-purple-100) / <alpha-value>)',
        'bg-hover': 'hsla(var(--ds-purple-200) / <alpha-value>)',
        'bg-active': 'hsla(var(--ds-purple-300) / <alpha-value>)',
        'border-default': 'hsla(var(--ds-purple-400) / <alpha-value>)',
        'border-hover': 'hsla(var(--ds-purple-500) / <alpha-value>)',
        'border-active': 'hsla(var(--ds-purple-600) / <alpha-value>)',
        'bg-high-contrast': 'hsla(var(--ds-purple-700) / <alpha-value>)',
        'bg-high-contrast-hover': 'hsla(var(--ds-purple-800) / <alpha-value>)',
        'text-secondary': 'hsla(var(--ds-purple-900) / <alpha-value>)',
        'text-primary': 'hsla(var(--ds-purple-1000) / <alpha-value>)',
      },
      pink: {
        'bg-default': 'hsla(var(--ds-pink-100) / <alpha-value>)',
        'bg-hover': 'hsla(var(--ds-pink-200) / <alpha-value>)',
        'bg-active': 'hsla(var(--ds-pink-300) / <alpha-value>)',
        'border-default': 'hsla(var(--ds-pink-400) / <alpha-value>)',
        'border-hover': 'hsla(var(--ds-pink-500) / <alpha-value>)',
        'border-active': 'hsla(var(--ds-pink-600) / <alpha-value>)',
        'bg-high-contrast': 'hsla(var(--ds-pink-700) / <alpha-value>)',
        'bg-high-contrast-hover': 'hsla(var(--ds-pink-800) / <alpha-value>)',
        'text-secondary': 'hsla(var(--ds-pink-900) / <alpha-value>)',
        'text-primary': 'hsla(var(--ds-pink-1000) / <alpha-value>)',
      },
    },
    extend: {
      screens: {
        xs: '425px',
        'xs-alt': '672px',
      },
    },
    fontFamily: {
      sans: [
        ['var(--font-geist-sans)', 'sans-serif', ...defaultTheme.fontFamily.sans],
        {
          fontVariationSettings: "'wght' 400",
        },
      ],
    },
  },
  plugins: [utilitiesPlugin],
};

export default config;
