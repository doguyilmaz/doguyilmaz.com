export const siteConfig = {
  title: 'Dogu Kaan YILMAZ - Software Developer',
  description:
    'Personal portfolio and blog of Dogu Kaan YILMAZ, a Software Developer specializing in web and mobile development.',
  url: 'https://doguyilmaz.com',
  ogImage: '/images/og.jpg',
  links: {
    github: 'https://github.com/doguyilmaz',
    linkedin: 'https://linkedin.com/in/doguyilmaz',
    email: 'mailto:dogukyilmaz@gmail.com',
  },
  navigation: [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ],
  theme: {
    colors: {
      primary: '#3b82f6',
      secondary: '#60a5fa',
      accent: '#93c5fd',
      background: '#ffffff',
      text: '#000000',
    },
    fonts: {
      heading: 'Inter',
      body: 'Inter',
    },
  },
};

export { routes, display } from '@/app/resources/config';
export { renderContent } from '@/app/resources/renderContent';
