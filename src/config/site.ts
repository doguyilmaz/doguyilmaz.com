export interface SocialLink {
  platform: "github" | "twitter" | "linkedin" | "instagram";
  url: string;
}

export interface SocialLinks {
  github?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
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

export const siteConfig = {
  // Main site info
  siteName: "Dogu Yilmaz",
  siteTitle: "Engineer, Developer, Tech Enthusiast & Mr. Know It All",
  siteDescription: `Highly motivated software developer and dedicated team player. Enthusiastic about exploring new technologies and optimizing systems. Enjoys developing web and mobile applications. Passionate about JavaScript & TypeScript. Recently exploring Swift and Astro.`,
  siteUrl: "https://doguyilmaz.com", // Add your domain
  siteLanguage: "en",
  profileImage: "/images/profile.jpg",

  // SEO and metadata
  seo: {
    title: "Dogu Yilmaz - Software Engineer & Developer",
    description:
      "Highly motivated software developer and dedicated team player. Building elegant solutions to complex problems.",
    keywords: [
      "software engineer",
      "developer",
      "javascript",
      "typescript",
      "react",
      "vue",
      "swift",
      "astro",
    ],
    ogImage: "/images/og-image.jpg",
    twitterHandle: "@dogukyilmaz",
  },

  // Page-specific metadata
  pages: {
    home: {
      title: "Dogu Yilmaz - Software Engineer & Developer",
      description:
        "Highly motivated software developer and dedicated team player. Building elegant solutions to complex problems.",
      type: "website" as const,
    },
    about: {
      title: "About | Dogu Yilmaz",
      description:
        "Learn more about Dogu Yilmaz, a software engineer passionate about building elegant solutions to complex problems.",
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
    showPatternSelector: false,
  },

  // About page settings
  about: {
    title: "About Me",
    description:
      "Highly motivated software developer and dedicated team player. Enthusiastic about exploring new technologies and optimizing systems. Enjoys developing web and mobile applications. Passionate about JavaScript & TypeScript. Recently exploring Swift and Astro.",
    pageTitle: "About | Dogu Yilmaz",
    pageDescription:
      "Highly motivated software developer and dedicated team player. Enthusiastic about exploring new technologies and optimizing systems. Enjoys developing web and mobile applications. Passionate about JavaScript & TypeScript. Recently exploring Swift and Astro.",
    mainImage: "/images/personal/about.jpg",
    content: {
      heading: "Hello this is Dogu Yilmaz, Engineer & Developer",
      paragraphs: [
        "I am a Software Developer at Togg | Trugo.",
        "Building elegant solutions to complex problems...",
        `Currently working with Vue, React and React Native. Describe myself as a highly motivated software developer and dedicated team player. Enthusiastic about exploring new technologies and optimizing systems. Enjoys developing web and mobile applications. Passionate about JavaScript & TypeScript.`,
      ],
    },
    experience: {
      sectionTitle: "Experience",
      jobs: [
        {
          title: "Software Developer",
          company: "Togg",
          logoPath: "/images/experience/togg.png",
          isLogoRounded: true,
          timeRange: "Dec 2023 - Present",
          description:
            "Working as a Software Developer focusing on web and mobile application development.",
          projects: [],
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
          timeRange: "Jul 2022 - Dec 2022",
          description:
            "Led projects, created project plans and oversaw the team's progress while developing web and mobile applications.",
          projects: [
            "Led multiple development projects and managed team progress",
            "Developed web and mobile applications",
          ],
          technologies: [
            "Next.js",
            "React Native",
            "TypeScript",
            "React",
            "JavaScript",
            "Teamwork",
            "Team Leadership",
          ],
        },
        {
          title: "Software Development Specialist",
          company: "Türkiye Tourism Promotion and Development Agency",
          logoPath: "/images/experience/tga.png",
          isLogoRounded: true,
          timeRange: "Dec 2020 - Jul 2022",
          description:
            "Specialized in data visualization and mobile application development.",
          projects: [
            "Built data visualization apps using various charting libraries",
            "Developed mobile applications using React Native",
            "Created microservices using Node.js and Go",
          ],
          technologies: [
            "React",
            "Next.js",
            "React Native",
            "JavaScript",
            "Go",
            "Node.js",
          ],
        },
        {
          title: "Full-stack Developer",
          company: "Freelance",
          logoPath: "/images/experience/archosch.png",
          isLogoRounded: true,
          timeRange: "Feb 2020 - Nov 2020",
          description:
            "Worked as a freelance full-stack developer on various projects.",
          projects: [
            "Developed web, mobile and desktop applications",
            "Built REST APIs & backend services using NodeJs and Spring Boot",
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
          timeRange: "Sep 2019 - Feb 2020",
          description: "Internship focused on Frontend and DevOps development.",
          projects: [
            "Developed scripts for data parsing",
            "Participated in CRM application development",
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
          timeRange: "Oct 2018 - Sep 2019",
          description:
            "Worked on various freelance software development projects.",
          projects: [],
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
  },

  // Footer settings
  footer: {
    text: "Dogu Yilmaz",
    email: "info@doguyilmaz.com",
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
