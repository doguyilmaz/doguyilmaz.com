// Add type declaration for window.siteConfig
declare global {
  interface Window {
    siteConfig?: {
      patterns?: {
        currentPattern?: string;
      };
    };
  }
}

export interface SocialLink {
  platform: "github" | "twitter" | "linkedin" | "instagram";
  url: string;
}

export interface SocialLinks {
  github?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  website?: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Job {
  title: string;
  company: string;
  logoPath: string;
  isLogoRounded: boolean;
  timeRange: string;
  description: string;
  projects: string[];
  technologies: string[];
}

export interface PageMeta {
  title: string;
  description: string;
  type: "website" | "content" | "notfound";
  image?: string;
}

export interface Pattern {
  name: string;
  class: string;
  description: string;
}

export type PatternType =
  | "original"
  | "dots"
  | "circuit"
  | "matrix"
  | "dna"
  | "neural"
  | "quantum"
  | "algorithm"
  | "code"
  | "tech"
  | "memphis"
  | "flow"
  | "pixels"
  | "constellation"
  | "blueprint"
  | "devicons"
  | "git"
  | "stack"
  | "ide"
  | "terminal";

export interface FloatingButton {
  text: string;
  show: boolean;
}

export interface FloatingButtons {
  pattern?: FloatingButton;
  random: FloatingButton;
}

export interface PatternSelector {
  show: boolean;
  floatingButtons: {
    pattern?: FloatingButton;
    random: FloatingButton;
  };
}

export interface Skill {
  name: string;
  category?:
    | "frontend"
    | "backend"
    | "mobile"
    | "database"
    | "devops"
    | "tools"
    | "visualization";
}

export interface Language {
  name: string;
  level: string;
}

export const siteConfig = {
  // Main site info
  siteName: "Dogu Yilmaz",
  siteTitle: "Engineer, Developer, Tech Enthusiast & Mr. Know It All",
  siteDescription:
    "Experienced software developer specializing in web and mobile application development, with expertise in JavaScript/TypeScript ecosystem and a focus on building scalable solutions.",
  siteUrl: "https://doguyilmaz.com",
  siteLanguage: "en",
  profileImage: "/images/profile.jpg",

  // Contact Information
  contact: {
    email: "hello@doguyilmaz.com",
    phone: "", // redacted for privacy
  },

  // Skills categorized
  skills: [
    { name: "JavaScript", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "React Native", category: "mobile" },
    { name: "Redux", category: "frontend" },
    { name: "Zustand", category: "frontend" },
    { name: "Tailwind", category: "frontend" },
    { name: "Astro", category: "frontend" },
    { name: "Framer Motion", category: "frontend" },
    { name: "Figma", category: "tools" },
    { name: "Node.js", category: "backend" },
    { name: "Express", category: "backend" },
    { name: "Go", category: "backend" },
    { name: "ElysiaJS", category: "backend" },
    { name: "Bun", category: "tools" },
    { name: "MongoDB", category: "database" },
    { name: "PostgreSQL", category: "database" },
    { name: "Prisma", category: "database" },
    { name: "Supabase", category: "database" },
    { name: "PocketBase", category: "database" },
    { name: "Firebase", category: "database" },
    { name: "Redis", category: "database" },
    { name: "Docker", category: "devops" },
    { name: "Highcharts", category: "visualization" },
    { name: "Visx", category: "visualization" },
    { name: "ApexCharts", category: "visualization" },
    { name: "Kepler.gl", category: "visualization" },
    { name: "Carto", category: "visualization" },
    { name: "Deck.gl", category: "visualization" },
    { name: "MapGL", category: "visualization" },
    { name: "Mapbox", category: "visualization" },
    { name: "Leaflet", category: "visualization" },
    { name: "Jest", category: "tools" },
    { name: "Vitest", category: "tools" },
    { name: "Cypress", category: "tools" },
    { name: "Playwright", category: "tools" },
  ],

  // Languages
  languages: [
    { name: "Turkish", level: "Native" },
    { name: "English", level: "Professional Proficiency" },
  ],

  // SEO and metadata
  seo: {
    title: "Dogu Yilmaz - Software Developer & Computer Engineer",
    description:
      "Experienced software developer specializing in web and mobile application development, with expertise in JavaScript/TypeScript ecosystem.",
    keywords: [
      "software developer",
      "software engineer",
      "engineer",
      "developer",
      "tech enthusiast",
      "computer engineer",
      "javascript",
      "typescript",
      "react",
      "react native",
      "node.js",
      "go",
      "astro",
      "vue",
      "web development",
      "mobile development",
    ],
    ogImage: "/images/og-image.jpg",
    twitterHandle: "@dogukyilmaz",
  },

  // Experience section
  experience: {
    sectionTitle: "Experience",
    jobs: [
      {
        title: "Software Developer",
        company: "Togg",
        logoPath: "/images/experience/togg.png",
        isLogoRounded: true,
        timeRange: "December 2023 - Present",
        description:
          "Creating digital tools for energy and EV management, making mobility smarter and more connected.",
        projects: [
          "Developing energy and EV-focused products, monitoring tools and CMS for mobility ecosystem",
          "Building web and mobile applications for charging, EV, fleet and management operations",
          "Contributing to scalable applications, enhancing user experience and workflows",
        ],
        technologies: [
          "Vue.js",
          "React Native",
          "TypeScript",
          "Expo",
          "React",
          "Primefaces",
          "Tamagui",
          "Bun",
        ],
      },
      {
        title: "Software Development Team Lead",
        company: "Türkiye Tourism Promotion and Development Agency",
        logoPath: "/images/experience/tga.png",
        isLogoRounded: true,
        timeRange: "July 2022 - December 2023",
        description:
          "Led a development team, driving web and mobile apps for project success and tourism growth.",
        projects: [
          "Managed a development team, overseeing project planning and delivery of multiple applications",
          "Directed the creation of web and mobile apps, emphasizing data visualization and user experience",
          "Supervised team growth and collaboration for efficient development",
          "Delivered applications for the Ministry of Culture and Tourism, supporting national tourism goals",
        ],
        technologies: [
          "Next.js",
          "React Native",
          "TypeScript",
          "React",
          "JavaScript",
          "Team Leadership",
        ],
      },
      {
        title: "Software Development Specialist",
        company: "Türkiye Tourism Promotion and Development Agency",
        logoPath: "/images/experience/tga.png",
        isLogoRounded: true,
        timeRange: "December 2020 - July 2022",
        description:
          "Simplified complex data with interactive tools for better accessibility through modern apps.",
        projects: [
          "Built a multi-module analytics platform to manage and analyze large-scale tourism data and insights",
          "Delivered a comprehensive Attaché management module, improving operational efficiency",
          "Designed interactive data visualizations with React, Highcharts, and Deck.gl for better interpretation",
          "Developed mobile apps with React Native and microservices using Node.js and Go",
          "Enhanced decision-making with big data visualizations for tourism events",
        ],
        technologies: [
          "React",
          "Next.js",
          "React Native",
          "Node.js",
          "Go",
          "Highcharts",
          "Deck.gl",
        ],
      },
      {
        title: "Full-stack Developer",
        company: "Freelance",
        logoPath: "/images/experience/archosch.png",
        isLogoRounded: true,
        timeRange: "February 2020 - November 2020",
        description:
          "Delivered personalized software solutions, solving real client challenges with technical expertise.",
        projects: [
          "Developed custom web, mobile, and desktop applications tailored to client needs",
          "Designed and implemented REST APIs using Node.js and Spring Boot",
        ],
        technologies: [
          "TypeScript",
          "React Native",
          "JavaScript",
          "React",
          "Vue.js",
          "Spring Boot",
          "PostgreSQL",
          "MongoDB",
          "Node.js",
        ],
      },
      {
        title: "Software Intern",
        company: "Experto | AR-GE ve Tasarım Merkezi Danışmanlık",
        logoPath: "/images/experience/experto.png",
        isLogoRounded: true,
        timeRange: "September 2019 - February 2020",
        description:
          "Contributed to data tools and R&D projects while focusing frontend and DevOps.",
        projects: [
          "Focused on Frontend and DevOps development",
          "Built scripts for data parsing, improving data accuracy and CRM solutions",
          "Gained hands-on experience in R&D processes, including project planning and execution",
          "Developed a strong understanding of innovation-driven R&D methodologies",
        ],
        technologies: [
          "JavaScript",
          "React",
          "Node.js",
          "Material UI",
          "PostgreSQL",
          "Bootstrap",
        ],
      },
      {
        title: "Freelance Software Developer",
        company: "Freelance",
        logoPath: "/images/experience/myhosch.png",
        isLogoRounded: true,
        timeRange: "October 2018 - September 2019",
        description:
          "Helped clients bring ideas to life through web apps and API development tailored to their goals.",
        projects: [
          "Developed web applications and RESTful APIs for diverse client needs",
        ],
        technologies: [
          "Node.js",
          "Knex.js",
          "React",
          "HTML",
          "JavaScript",
          "CSS",
          "Material UI",
        ],
      },
    ],
  },

  // Education
  education: {
    degree: "Bachelor's Degree in Computer Engineering",
    institution: "Istanbul University",
  },

  // Page-specific metadata
  pages: {
    home: {
      title: "Dogu Yilmaz - Software Developer & Computer Engineer",
      description:
        "Experienced software developer specializing in web and mobile application development, with expertise in JavaScript/TypeScript ecosystem.",
      type: "website" as const,
    },
    about: {
      title: "About | Dogu Yilmaz",
      description:
        "Learn more about Dogu Yilmaz, a software developer passionate about building elegant solutions to complex problems.",
      type: "content" as const,
    },
    blog: {
      title: "Blog | Dogu Yilmaz",
      description:
        "Thoughts, experiences, and insights about software development, engineering, and technology.",
      type: "content" as const,
    },
    blogPost: {
      type: "article" as const,
    },
    projects: {
      title: "Projects | Dogu Yilmaz",
      description:
        "Explore the projects and applications built by Dogu Yilmaz, showcasing expertise in web and mobile development.",
      type: "content" as const,
    },
    gallery: {
      title: "Gallery | Dogu Yilmaz",
      description:
        "Visual journey through the work and experiences of Dogu Yilmaz.",
      type: "content" as const,
    },
    notFound: {
      title: "404 | Page Not Found",
      description:
        "The page you're looking for doesn't exist or has been moved.",
      type: "notfound" as const,
    },
  },

  // Homepage settings
  homepage: {
    showLatestPosts: false,
    showContactForm: true,
    contactButtonText: "Want to reach out?",
  },

  // About page settings
  about: {
    title: "About Me",
    description:
      "Experienced software developer specializing in web and mobile application development, with expertise in JavaScript/TypeScript ecosystem and a focus on building scalable solutions.",
    pageTitle: "About | Dogu Yilmaz",
    pageDescription:
      "Learn more about Dogu Yilmaz, a software developer passionate about building elegant solutions to complex problems.",
    mainImage: "/images/personal/about.jpg",
    content: {
      heading: "Hello, I'm Dogu Yilmaz",
      paragraphs: [
        "Software Developer at Togg, focusing on energy and EV-focused products.",
        "I specialize in building scalable web and mobile applications with modern technologies.",
        "Currently working with Vue.js, React, and React Native. I'm passionate about creating elegant solutions to complex problems, with expertise in JavaScript/TypeScript ecosystem. Always enthusiastic about exploring new technologies and optimizing systems.",
      ],
    },
  },

  // Footer settings
  footer: {
    text: "Dogu Yilmaz",
    email: "hello@doguyilmaz.com",
    copyright: "All rights reserved",
  },

  // Navigation (used in both header and footer)
  navigation: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    // { label: "Projects", path: "/projects" },
    // { label: "Blog", path: "/blog" },
    // { label: "Gallery", path: "/gallery" },
  ],

  // Social links (used in header and footer)
  socialLinks: {
    github: "https://github.com/doguyilmaz",
    linkedin: "https://www.linkedin.com/in/doguyilmaz",
    twitter: "https://x.com/dogukyilmaz",
    // instagram: "https://www.instagram.com/dogukylmaz",
  } satisfies SocialLinks,

  // Background patterns
  patterns: {
    defaultPattern: "flow" as PatternType,
    isRandom: false,
    showFloatingSelector: false,
  },
} as const;

// Utility function to get navigation items
export const getNavigation = () => siteConfig.navigation;

// Utility function to get social links
export const getSocialLinks = () => {
  const links: SocialLink[] = [];
  const { socialLinks } = siteConfig;

  Object.entries(socialLinks).forEach(([platform, url]) => {
    if (url) {
      links.push({ platform: platform as SocialLink["platform"], url });
    }
  });

  return links;
};

export const getRandomPattern = (): PatternType => {
  const patterns: PatternType[] = [
    "original",
    "dots",
    "circuit",
    "matrix",
    "dna",
    "neural",
    "quantum",
    "algorithm",
    "code",
    "tech",
    "memphis",
    "flow",
    "pixels",
    "constellation",
    "blueprint",
    "devicons",
    "git",
    "stack",
    "ide",
    "terminal",
  ];
  return patterns[Math.floor(Math.random() * patterns.length)];
};

export const getPattern = (): PatternType => {
  const { showFloatingSelector, isRandom, defaultPattern } =
    siteConfig.patterns;

  // If random is enabled, return a random pattern
  if (isRandom) {
    return getRandomPattern();
  }

  // If we're in the browser, check for dynamic pattern
  if (
    typeof window !== "undefined" &&
    window.siteConfig?.patterns?.currentPattern
  ) {
    return window.siteConfig.patterns.currentPattern as PatternType;
  }

  // Otherwise use config pattern
  return defaultPattern;
};
