import { defineCollection, z } from "astro:content";

const ServiceTypeSchema = z.enum([
  "Website",
  "Mobile Application",
  "Chrome Extension",
  "Rest API",
  "Desktop Application",
  "Web Application",
  "SaaS",
  "Browser Plugin",
  "Mobile Game",
  "CLI Tool",
  "SDK/Library",
  "Data Processing Service",
  "AI Service",
]);

// Define blog collection schema
const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  tags: z.array(z.string()).default([]),
  tweetURL: z.string().optional(),
});

// Define privacy policy collection schema
const privacySchema = z.object({
  title: z.string(),
  description: z.string(),
  appName: z.string(),
  serviceType: ServiceTypeSchema,
  effectiveDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
});

// Define terms collection schema
const termsSchema = z.object({
  title: z.string(),
  description: z.string(),
  appName: z.string(),
  serviceType: ServiceTypeSchema,
  effectiveDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  version: z.string().optional(),
  jurisdiction: z.string().optional(), // Governing law
});

// Define collections with their schemas
const blog = defineCollection({
  type: "content",
  schema: blogSchema,
});

// Define with support for both .md and .mdx files
const privacy = defineCollection({
  type: "content",
  schema: privacySchema,
});

const terms = defineCollection({
  type: "content",
  schema: termsSchema,
});

// Export for Astro
export const collections = {
  blog,
  privacy,
  terms,
};

// Export schemas for type usage elsewhere
export type BlogSchema = z.infer<typeof blogSchema>;
export type PrivacySchema = z.infer<typeof privacySchema>;
