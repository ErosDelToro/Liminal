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

// Primary navigation. The old site had a dead "Start-up coaching" item that
// pointed at the retreats page — dropped here on purpose.
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Retreats", href: "/service/liminal-coaching-retreats" },
  { label: "Blog", href: "/blog" },
];

// Services dropdown in the header.
export const SERVICE_LINKS = [
  { label: "Growth coaching", href: "/service/growth-coaching" },
  { label: "Sales coaching", href: "/service/sales-coaching" },
  { label: "Marketing coaching", href: "/service/marketing-coaching" },
  { label: "Leadership coaching", href: "/service/leadership-coaching" },
];
