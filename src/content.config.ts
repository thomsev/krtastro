import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/pages' }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    hero: z
      .object({
        title: z.string(),
        subtitle: z.string().optional(),
        image: z.string().optional()
      })
      .optional(),
    body: z.string()
  })
});

export const collections = { pages };
