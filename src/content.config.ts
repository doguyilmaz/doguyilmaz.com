import { defineCollection, z } from "astro:content";

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
  effectiveDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
});

// Define collections with their schemas
const blog = defineCollection({
  type: "content",
  schema: blogSchema,
});

const privacy = defineCollection({
  type: "content",
  schema: privacySchema,
});

// Export for Astro
export const collections = {
  blog,
  privacy,
};

// Export schemas for type usage elsewhere
export type BlogSchema = z.infer<typeof blogSchema>;
export type PrivacySchema = z.infer<typeof privacySchema>;
