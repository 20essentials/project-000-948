import { z, defineCollection } from 'astro:content';

const shoes = defineCollection({
  schema: z.object({
    name: z.string(),
    style: z.string(),
    img: z.string()
  })
});

export const collections = { shoes };
