import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const sharedFields = {
  title: z.string(),
  slug: z.string().optional(),
  summary: z.string(),
  published: z.boolean().default(true),
  date: z.coerce.date(),
  coverImage: z.string().optional(),
  tags: z.array(z.string()).default([]),
  externalUrl: z.string().url().optional(),
  githubUrl: z.string().url().optional(),
};

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    ...sharedFields,
    category: z.string().default("Insight"),
    readingTime: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    ...sharedFields,
    type: z.enum(["work", "ai"]).default("work"),
    label: z.string(),
    clientType: z.string(),
    outcome: z.string(),
  }),
});

export const collections = { blog, projects };
