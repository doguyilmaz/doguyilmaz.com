# [doguyilmaz.com](https://github.com/doguyilmaz/doguyilmaz.com)

My personal website and blog built with Astro, TailwindCSS, and MDX. Visit [doguyilmaz.com](https://doguyilmaz.com) to see it live.

## 🚀 Features

- ⚡️ Built with Astro 5.0 for blazing-fast performance
- 🎨 Styled with TailwindCSS
- 📝 MDX for blog posts with rich content
- 🔍 SEO optimized with meta tags and sitemap
- 📱 Fully responsive design
- 🌙 Dark mode support
- 🔤 Custom font loading with Fontsource
- 📊 Reading time estimation
- 🎥 YouTube and Twitter embeds support
- 🤖 RSS feed generation
- 🚦 Vercel deployment ready

## 🛠️ Tech Stack

- [Astro](https://astro.build)
- [TailwindCSS](https://tailwindcss.com)
- [MDX](https://mdxjs.com)
- [TypeScript](https://www.typescriptlang.org)
- [Bun](https://bun.sh)

## 🏃‍♂️ Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/doguyilmaz.com.git
cd doguyilmaz.com
```

2. Install dependencies:

```bash
bun install
```

3. Start the development server:

```bash
bun dev
```

4. Build for production:

```bash
bun run build
```

## 📝 Adding Blog Posts

Blog posts are written in MDX format and stored in `src/content/blog/`. To add a new blog post:

1. Create a new `.mdx` file in the `src/content/blog/` directory
2. Add the required frontmatter at the top of your file:

```mdx
---
title: "Your Blog Post Title"
description: "A brief description of your post"
pubDate: "2024-01-01"
heroImage: "/path/to/hero-image.jpg"
tags: ["tag1", "tag2"]
---

Your blog post content here...
```

3. Write your content using MDX syntax
4. Add any images to the `public` directory
5. Preview your post by running the development server

### 🖼️ Supported MDX Features

- Markdown syntax
- Custom components
- YouTube embeds
- Twitter embeds
- Code blocks with syntax highlighting
- Images with captions
- And more!

## ⚙️ Site Configuration

The site configuration is managed through `src/config/site.ts`. This file contains all the main settings and content for the website:

### Key Configuration Areas:

```typescript
export const siteConfig = {
  // Basic site information
  siteName: "Your Name",
  siteTitle: "Your Title",
  siteDescription: "Your description",
  siteUrl: "https://yourdomain.com",
  siteLanguage: "en",
  profileImage: "/images/profile.jpg",

  // SEO and metadata
  seo: {
    title: "Your SEO Title",
    description: "Your SEO Description",
    keywords: ["keyword1", "keyword2"],
    ogImage: "/images/og-image.jpg",
    twitterHandle: "@yourhandle",
  },

  // Page-specific metadata
  pages: {
    home: { ... },
    about: { ... },
    blog: { ... },
    // ... other pages
  }
}
```

### Configurable Features:

1. **Basic Information**

   - Site name, title, and description
   - Profile image and language settings

2. **SEO Settings**

   - Meta titles and descriptions
   - Open Graph images
   - Social media handles

3. **Page Metadata**

   - Individual page titles and descriptions
   - Content types and images

4. **Homepage Settings**

   - Latest posts display options
   - Contact form visibility
   - Custom button text

5. **Social Links**

   - GitHub, Twitter, LinkedIn, Instagram

6. **Background Patterns**
   - Multiple pattern options
   - Pattern selector configuration
   - Floating button settings

To modify any of these settings, edit the corresponding values in `src/config/site.ts`.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
