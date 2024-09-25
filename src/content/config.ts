import { z, defineCollection } from "astro:content";
const projectsSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date().optional(),
    updatedDate: z.string().optional(),
    images: z.array(z.string()).optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
    url: z.string().optional(),
    repoUrl: z.string().optional(),
});

const storeSchema = z.object({
    title: z.string(),
    description: z.string(),
    custom_link_label: z.string(),
    custom_link: z.string().optional(),
    updatedDate: z.coerce.date(),
    pricing: z.string().optional(),
    oldPricing: z.string().optional(),
    badge: z.string().optional(),
    checkoutUrl: z.string().optional(),
    heroImage: z.string().optional(),
});

export type projectsSchema = z.infer<typeof projectsSchema>;
export type StoreSchema = z.infer<typeof storeSchema>;

const projectsCollection = defineCollection({ schema: projectsSchema });
const storeCollection = defineCollection({ schema: storeSchema });

export const collections = {
    'projects': projectsCollection,
    'store': storeCollection
}