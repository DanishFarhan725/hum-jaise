import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

// Experiences are written by the Hum Jaise team as recognisable prompts.
// They are NOT quotes from real people. When member stories arrive (with consent),
// add them as a separate collection with `source: 'member'` and explicit permission fields.
const experiences = defineCollection({
  loader: file('src/content/experiences.json'),
  schema: z.object({
    setting: z.enum(['home', 'study-work', 'senses', 'mind', 'told']),
    text: z.string(),
    featured: z.boolean().default(false),
  }),
});

// Every resource carries `verified`. Unverified entries show a visible
// "check before you go" note. Flip to true only after someone has confirmed details.
const resources = defineCollection({
  loader: file('src/content/resources.json'),
  schema: z.object({
    group: z.enum(['right-now', 'pakistan', 'online']),
    name: z.string(),
    description: z.string(),
    where: z.string().optional(),
    phone: z.string().optional(),
    url: z.string().optional(),
    source: z.string().optional(),
    verified: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

export const collections = { experiences, resources };
