import { InlineCode } from '@/once-ui/components';

const person = {
  firstName: 'Dogu',
  lastName: 'Yilmaz',
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: 'Software Developer',
  avatar: '/images/avatar.jpg',
  location: 'Istanbul',
  languages: ['Turkish', 'English'],
};

const newsletter = {
  display: false,
  title: <>{person.firstName}'s Newsletter</>,
  description: (
    <>
      Subscribe to get updates about software development, technology, and building scalable
      applications.
    </>
  ),
};

const social = [
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/doguyilmaz',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://linkedin.com/in/doguyilmaz',
  },
  {
    name: 'Email',
    icon: 'email',
    link: 'mailto:dogukyilmaz@gmail.com',
  },
];

const home = {
  label: 'Home',
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Developer & Computer Engineer</>,
  subline: (
    <>
      I'm Dogu, a Software Developer at <InlineCode>{'<>Togg'}</InlineCode>, where I develop energy
      and EV-focused products for mobility ecosystem.
    </>
  ),
};

const about = {
  label: 'About',
  title: 'About me',
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: '',
  },
  intro: {
    display: true,
    title: 'Introduction',
    description: (
      <>
        I am a software developer specializing in building web and mobile applications with modern
        technologies. My focus is on creating scalable, high-performance applications with great
        user experiences.
      </>
    ),
  },
  work: {
    display: true,
    title: 'Work Experience',
    experiences: [
      {
        company: 'Togg',
        timeframe: 'December 2023 - Present',
        role: 'Software Developer',
        achievements: [
          <>
            Developing energy and EV-focused products, monitoring tools and CMS for mobility
            ecosystem.
          </>,
          <>
            Building web and mobile applications for charging, EV, fleet and management operations.
          </>,
          <>
            Contributing to scalable, high-performance applications, enhancing user experience and
            operational workflows.
          </>,
        ],
        images: [
          {
            src: 'https://togg-prd-cdn-ebcuc9ayg8fgegc8.z01.azurefd.net/assets/wsc/images/uploads/smart-device-car.webp',
            alt: 'Togg Smart Device',
            width: 16,
            height: 9,
          },
          {
            src: 'https://www.trugo.com.tr/images/trugo_stock_with_car.png',
            alt: 'Trugo Charging Station',
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: 'TGA',
        timeframe: 'July 2022 - December 2023',
        role: 'Software Development Team Lead',
        achievements: [
          <>
            Led a development team, managing project planning, tracking and delivery of multiple
            applications.
          </>,
          <>
            Oversaw the creation of web and mobile applications, emphasizing data visualization and
            user experience.
          </>,
          <>Supervised team growth and fostered collaboration for efficient development.</>,
          <>
            Delivered impactful applications for the Ministry of Culture and Tourism, supporting
            national tourism goals.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: 'Education',
    institutions: [
      {
        name: 'Istanbul University',
        description: <>Bachelor's Degree in Computer Engineering</>,
      },
    ],
  },
  technical: {
    display: true,
    title: 'Technical Skills',
    skills: [
      {
        title: 'Frontend Development',
        description: (
          <>
            JavaScript, TypeScript, React, Next.js, React Native, Redux, Zustand, Tailwind, Astro,
            Framer Motion, Figma
          </>
        ),
        images: [],
      },
      {
        title: 'Backend Development',
        description: <>Node.js, Express, Go, ElysiaJS, Bun</>,
        images: [],
      },
      {
        title: 'Databases & Services',
        description: <>MongoDB, PostgreSQL, Prisma, Supabase, PocketBase, Firebase, Redis</>,
        images: [],
      },
      {
        title: 'DevOps & Tools',
        description: <>Docker, Jest, Vitest, Cypress, Playwright</>,
        images: [],
      },
      {
        title: 'Data Visualization',
        description: (
          <>Highcharts, Visx, ApexCharts, Kepler.gl, Carto, Deck.gl, MapGL, Mapbox, Leaflet</>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  label: 'Blog',
  title: 'Writing about software development...',
  description: `Read what ${person.name} has been up to recently`,
};

const work = {
  label: 'Work',
  title: 'My Projects',
  description: `Software development projects by ${person.name}`,
};

const gallery = {
  label: 'Gallery',
  title: 'My Gallery',
  description: `A collection by ${person.name}`,
  images: [
    {
      src: '/images/gallery/img-01.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-02.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
