import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Service pages (the 4 coaching offerings + the retreats page). One shared
// template renders every entry, so adding a service later = adding one file.
const services = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    // Sort order in "More Services" lists and the /services index.
    order: z.number(),
    // Short hero sentence under the title.
    intro: z.string(),
    // The six key-point features. Retreats uses these too (its six pillars).
    features: z
      .array(z.object({ title: z.string(), description: z.string() })),
    // Optional "Approach" section -- the 4 coaching pages have it, retreats
    // does not. When present the markdown body renders as its prose.
    approach: z
      .object({ heading: z.string() })
      .optional(),
    // Image slugs (files in src/assets/images, without extension).
    keypointsImage: z.string().optional(),
    approachImages: z.array(z.string()).default([]),
    // SEO
    seoTitle: z.string().optional(),
    seoDescription: z.string(),
    // Copy generated as a placeholder, pending Mehdi's real wording.
    draftCopy: z.boolean().default(false),
  }),
});

// Retreats -- a category of their own, kept separate from services so they
// don't appear in the Services dropdown/index. One page each, plus an overview.
const retreats = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/retreats" }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    // Short label under the title, e.g. "The hero's journey retreat".
    tagline: z.string(),
    intro: z.string(),
    // Facts only Mehdi can confirm -- left blank in drafts.
    location: z.string().optional(),
    // Optional link for the location (e.g. a venue site). When set, the
    // location renders as a link.
    venueUrl: z.string().optional(),
    dates: z.string().optional(),
    heroImage: z.string().optional(),
    // Attribution for a licensed hero photo (e.g. CC-BY). Rendered as a small
    // caption under the image.
    heroCredit: z
      .object({
        author: z.string(),
        authorUrl: z.string().optional(),
        license: z.string(),
        licenseUrl: z.string().optional(),
      })
      .optional(),
    // What makes this retreat distinct.
    highlights: z.array(z.object({ title: z.string(), description: z.string() })),
    seoTitle: z.string().optional(),
    seoDescription: z.string(),
    draftCopy: z.boolean().default(false),
  }),
});

// Blog posts. User will supply new articles as markdown files here.
const posts = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Field notes -- long-form personal essays tied to specific retreats. Kept out
// of the blog feed on purpose; each is surfaced from the retreat page(s) it
// relates to via `relatedRetreats` (retreat slugs).
const fieldnotes = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/fieldnotes" }),
  schema: z.object({
    title: z.string(),
    // Subtitle / standfirst under the title on the full-essay page.
    dek: z.string(),
    // The teaser shown in full on the related retreat page(s). Multi-paragraph;
    // paragraphs are split on blank lines. Ends with the hook that leads into
    // "Read the full story".
    teaser: z.string(),
    // Retreat slugs this note belongs to (drives the teaser + back-links).
    relatedRetreats: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { services, retreats, posts, fieldnotes };
