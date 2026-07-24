import type { ImageMetadata } from "astro";

// Eagerly import every optimisable image under src/assets/images so pages can
// look one up by its file slug (the frontmatter stores names without a path or
// extension). Astro optimises and hashes these at build time.
const images = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/*.{jpg,jpeg,png,webp,avif}",
  { eager: true },
);

/** Resolve a bare image slug (e.g. "coaching-8901687") to its ImageMetadata. */
export function getImage(slug: string | undefined): ImageMetadata | undefined {
  if (!slug) return undefined;
  for (const path in images) {
    const base = path.split("/").pop()!.replace(/\.[^.]+$/, "");
    if (base === slug) return images[path].default;
  }
  return undefined;
}
