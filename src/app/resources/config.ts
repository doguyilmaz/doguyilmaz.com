import { personalConfig, experienceConfig, educationConfig } from '@/config';

export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'tr'],
};

export const display = {
  location: true,
  time: true,
};

export const routes = {
  '/': true,
  '/about': true,
  '/work': false,
  '/blog': false,
  '/gallery': false,
  '/contact': false,
};

export const renderContent = (t: any) => ({
  person: {
    name: personalConfig.name,
    role: personalConfig.title,
    location: 'Istanbul, Turkey',
    avatar: '/images/avatar.jpg',
    languages: personalConfig.languages.map((lang) => `${lang.name} (${lang.level})`),
  },
  home: {
    title: `${personalConfig.name} - Portfolio`,
    description: 'Personal portfolio showcasing my work and experience in software development.',
    headline: 'Software Developer & Computer Engineer',
    subline:
      "I'm Dogu, a Software Developer at <> Togg, where I develop energy and EV-focused products for mobility ecosystem. I specialize in building scalable web and mobile applications.",
  },
  about: {
    title: 'About',
    description: 'Learn more about my experience and skills',
    avatar: {
      display: true,
    },
    calendar: {
      display: false,
      link: '',
    },
    tableOfContent: {
      display: true,
    },
    intro: {
      title: 'Introduction',
      display: true,
      description:
        'I am a software developer specializing in building web and mobile applications with modern technologies. My focus is on creating scalable, high-performance applications with great user experiences.',
    },
    work: {
      title: 'Work Experience',
      display: true,
      experiences: experienceConfig.map((job) => ({
        company: job.company,
        role: job.title,
        timeframe: `${job.period.start} - ${job.period.end}`,
        achievements: job.responsibilities,
        images: [],
      })),
    },
    studies: {
      title: 'Education',
      display: true,
      institutions: educationConfig.map((edu) => ({
        name: edu.institution,
        description: `${edu.degree} in ${edu.field}`,
      })),
    },
    technical: {
      title: 'Technical Skills',
      display: true,
      skills: [
        {
          title: 'Frontend Development',
          description: 'React, Next.js, TypeScript, React Native',
          images: [],
        },
        {
          title: 'Backend Development',
          description: 'Node.js, Go, Express, ElysiaJS',
          images: [],
        },
        {
          title: 'Data Visualization',
          description: 'Highcharts, Deck.gl, Kepler.gl, MapGL',
          images: [],
        },
      ],
    },
  },
  social: [
    {
      name: 'GitHub',
      icon: 'github',
      link: `https://github.com/${personalConfig.contact.github}`,
    },
    {
      name: 'Email',
      icon: 'mail',
      link: `mailto:${personalConfig.contact.email}`,
    },
  ],
  newsletter: {
    display: false,
  },
});
