import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/projects',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Agency', 'Branding', 'Portfolio', 'Other', 'Web Development', 'AI', 'QA Automation', 'Enterprise PLM', 'Cybersecurity']),
    image: z.string(),
    link: z.string().url().optional(),
    yearFinished: z.number(),
    timeline: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  projects,
};
