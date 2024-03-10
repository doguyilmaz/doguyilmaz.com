export const SITE_URL = 'https://doguyilmaz.com';

const LANG_COLORS = {
  js: {
    bg: '#f7df1e',
    text: 'JavaScript',
    color: 'black',
  },
  ts: {
    bg: '#007acc',
    text: 'TypeScript',
    color: 'white',
  },
  react: {
    bg: '#61dafb',
    text: 'React',
    color: 'black',
  },
  vue: {
    bg: '#41b883',
    text: 'Vue',
    color: 'black',
  },
  rn: {
    bg: '#61dafb',
    text: 'React Native',
    color: 'black',
  },
  swift: {
    bg: '#ffac45',
    text: 'Swift',
    color: 'white',
  },
  astro: {
    bg: '#fff',
    text: 'Astro',
    color: 'white',
  },
};

export const getExperience = () => new Date().getFullYear() - 2019;
export const getLangColor = (lang: keyof typeof LANG_COLORS) => `<span style=" color: ${LANG_COLORS[lang].bg}; ">${LANG_COLORS[lang].text}</span>`;
