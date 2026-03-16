import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

const courses = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    level: z.enum(['beginner', 'intermediate', 'advanced']),
    duration: z.string(), // e.g., "4 hours"
    price: z.number().optional(),
    tier: z.enum(['free', 'pro', 'premium']).default('free'),
    tags: z.array(z.string()).default([]),
    thumbnail: z.string().optional(),
    quiz: z.array(z.object({
      question: z.string(),
      options: z.array(z.string()),
      correctIndex: z.number(),
      explanation: z.string(),
    })).optional(),
  }),
});

export const collections = { blog, courses };
