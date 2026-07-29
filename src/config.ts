/**
 * Site-wide configuration. Single source of truth for things that appear on
 * many pages. Change them here, not in individual components.
 */

// The primary "Book a Call" action: Mehdi's free Google Calendar appointment
// schedule (the exploration-call booking page). Swapping it here updates every
// "Book a Call" button on the site at once.
export const BOOKING_URL = "https://calendar.app.google/vDLC7nfRzPNSiUGYA";

// Live now, so buttons link to the booking page (BOOKING_READY = false would
// fall back to a mailto link instead).
export const BOOKING_READY = true;

export const CONTACT_EMAIL = "hello@liminal.coach";

// Public profiles used for the "sameAs" entity signal in structured data
// (JSON-LD). Add full profile URLs (LinkedIn, Instagram, etc.) and they flow
// into the site's Person/Organization schema automatically. Empty = omitted.
export const SOCIAL_LINKS: string[] = [];

// One tagline, reused in the footer and meta description base.
export const SITE_TAGLINE =
  "Coaching for adults in transition. I pair psychological insight with practical strategy, so you can move through change and shape what comes next.";

// Primary navigation. Retreats (the Liminal Odyssey) stays a top-level item;
// the other offerings live in the Services dropdown below.
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Mehdi", href: "/about" },
  { label: "Retreats", href: "/retreats" },
  { label: "Blog", href: "/blog" },
];

// Services dropdown in the header: the real offering from the live homepage.
// (Retreats appears as its own top-level nav item, so it's not repeated here.)
export const SERVICE_LINKS = [
  { label: "Transition Coaching", href: "/service/transition-coaching" },
  { label: "Executive Coaching", href: "/service/executive-coaching" },
  { label: "Speaking", href: "/service/speaking" },
  { label: "Workshops", href: "/service/workshops" },
];
