export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: 'TBD',
    techs: ['React Native', 'Expo', 'TypeScript'],
    link: '/',
    isComingSoon: true,
  },
  {
    title: 'burayyuksel.com',
    techs: ['Next.js', 'TypeScript', 'Chakra UI', 'Vercel', 'Supabase'],
    link: 'https://github.com/doguyilmaz/burayyuksel.com',
  },
  {
    title: 'use-typewriter-animation',
    techs: ['An utility hook to create typewriter animation effect in React.', 'TypeScript', 'esbuild'],
    link: 'https://github.com/doguyilmaz/use-typewriter-animation',
  },
  {
    title: 'online-docs',
    techs: ['JavaScript', 'React', 'WebSocket', 'Socket.IO', 'JWT'],
    link: 'https://github.com/doguyilmaz/online-docs',
  },
  {
    title: 'social-network-app',
    techs: ['A fully socail network app API.', 'MongoDB', 'Express', 'React', 'Node.js'],
    link: '/',
  },
];

export default projects;
