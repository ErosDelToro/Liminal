/**
 * Site-wide configuration. Single source of truth for things that appear on
 * many pages — change them here, not in individual components.
 */

// The primary "Book a Call" action. practice.do (the old booking tool) is dead
// — it 404s — so this is being replaced by a free Google Calendar appointment
// schedule. PLACEHOLDER until Mehdi creates the schedule and sends the link;
// swapping it here updates every "Book a Call" button on the site at once.
export const BOOKING_URL = "#book-placeholder";

// Whether BOOKING_URL is still the placeholder. Used to render a harmless
// fallback (mailto) so no button is dead while we wait for the real link.
export const BOOKING_READY = false;

export const CONTACT_EMAIL = "info.liminal.coach@gmail.com";

// One tagline, reused in the footer and meta description base.
export const SITE_TAGLINE =
  "Unlock your potential at Liminal Coaching. Dive into a personalized journey that blends psychological insights and practical strategies, designed to align your aspirations.";

// Primary navigation. Retreats (the Liminal Odyssey) stays a top-level item;
// the other offerings live in the Services dropdown below.
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Retreats", href: "/service/liminal-coaching-retreats" },
  { label: "Blog", href: "/blog" },
];

// Services dropdown in the header — the real offering from the live homepage
// (Retreats appears as its own top-level nav item, so it's not repeated here).
export const SERVICE_LINKS = [
  { label: "Transition Coaching", href: "/service/transition-coaching" },
  { label: "Executive Coaching", href: "/service/executive-coaching" },
  { label: "Speaking", href: "/service/speaking" },
  { label: "Workshops", href: "/service/workshops" },
];
