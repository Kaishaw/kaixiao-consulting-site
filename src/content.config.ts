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
    category: z.string().default("Industry insights"),
    contentType: z.enum(["article", "opinion", "case-note", "tutorial"]).default("article"),
    featuredInsight: z.boolean().default(false),
    insightSummary: z.string().optional(),
    insightTopic: z.string().optional(),
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
    sector: z.string().optional(),
    scale: z.string().optional(),
    businessContext: z.string().optional(),
    executiveSummary: z.string().optional(),
    rolePerspective: z.string().optional(),
    outcome: z.string(),
    storyHook: z.string().optional(),
    storySetting: z.string().optional(),
    storyTrigger: z.string().optional(),
    storyTension: z.string().optional(),
    storyPeople: z.array(z.object({
      role: z.string(),
      need: z.string(),
    })).default([]),
    storyJourney: z.array(z.object({
      title: z.string(),
      body: z.string(),
    })).default([]),
    storyDecisions: z.array(z.object({
      title: z.string(),
      body: z.string(),
    })).default([]),
    storyEvidence: z.array(z.object({
      label: z.string(),
      body: z.string(),
    })).default([]),
    storyLenses: z.array(z.object({
      label: z.string(),
      title: z.string(),
      body: z.string(),
    })).default([]),
    storyReflection: z.string().optional(),
    demoType: z.string().optional(),
    videoUrl: z.string().url().optional(),
  }),
});

export const collections = { blog, projects };
