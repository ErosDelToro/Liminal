# liminal.coach

The Liminal Coaching website — a static site built with [Astro](https://astro.build)
and [Tailwind CSS](https://tailwindcss.com), hosted free on Netlify.

This replaces the previous Webflow-hosted site, removing the recurring
subscription. The visual design is a faithful rebuild of the Webflow original;
the Webflow code export is kept locally as a reference for fonts, colours,
spacing and image assets, but is deliberately **not** committed.

## Running it locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the built site
```

## How the site is put together

| Path | What lives there |
| --- | --- |
| `src/pages/` | One file per page. `[slug].astro` files generate pages from content. |
| `src/layouts/` | The page shell — `<head>`, meta tags, header and footer. |
| `src/components/` | Reusable blocks: header, footer, cards, the "Ready to level up?" CTA. |
| `src/content/services/` | One Markdown file per service. Adding a service = adding a file. |
| `src/content/posts/` | One Markdown file per blog post. |
| `src/styles/global.css` | Design tokens — fonts, colours, spacing (Tailwind 4 configures in CSS). |
| `public/` | Images, favicon, and anything served as-is. |

## Editing content

**To publish a blog post:** add a Markdown file to `src/content/posts/`, copying
the frontmatter block from an existing post. It appears on `/blog` automatically.

**To change page copy:** edit the relevant file in `src/pages/` or
`src/content/`. Pushing to `main` triggers a rebuild and redeploy on Netlify.

## External services

- **Booking** — handled off-site by [practice.do](https://practice.do); every
  "Book a Call" button links there. Nothing to maintain in this repo.
- **Contact form** — Netlify Forms. Submissions appear in the Netlify dashboard
  and are emailed to `info.liminal.coach@gmail.com`. No backend code.

## Deployment

Netlify builds from `main` on every push using the settings in `netlify.toml`.
