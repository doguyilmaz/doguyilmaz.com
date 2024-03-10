type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  summary: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const EXPERIENCE = new Date().getFullYear() - 2019;

const presentation: Presentation = {
  mail: 'info@doguyilmaz.com',
  title: 'Hello, I’m Dogu 👋',
  // profile: '/profile.png',
  summary: `I'm a *software developer* with over *${EXPERIENCE} years* of web experience.`,
  description: `Describe myself as highly motivated software developer and dedicated team player.
  Enthusiastic about exploring new technologies and optimizing systems.
  Enjoys developing web and mobile applications.
  Passionate about JavaScript & TypeScript.
  Recently exploring *React Native and Swift*.
  `,
  // I am currently working with *NextJS and Typescript*. Outside of work I complete my pokemon card collection and learning TypeScript.
  socials: [
    {
      label: 'X',
      link: 'https://twitter.com/dogukyilmaz',
    },
    {
      label: 'Bento',
      link: 'https://bento.me/doguyilmaz',
    },
    {
      label: 'Github',
      link: 'https://github.com/doguyilmaz',
    },
    {
      label: 'Linkedin',
      link: 'https://www.linkedin.com/in/doguyilmaz',
    },
  ],
};

export default presentation;
