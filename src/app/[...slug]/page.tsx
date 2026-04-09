import InnerPageShell from "@/components/InnerPageShell";

// Maps URL slugs to human-readable page titles and subtitles
const PAGE_MAP: Record<
  string,
  { title: string; subtitle?: string; section?: string }
> = {
  // About
  about: { title: "About KEA", subtitle: "Our story and purpose", section: "About Us" },
  "about/history": { title: "History of Equestrian Sport", subtitle: "From ancient cavalry to modern competition", section: "About Us" },
  "about/president": { title: "President's Message", subtitle: "A word from our President", section: "About Us" },
  "about/secretary": { title: "Secretary's Message", subtitle: "A word from our Secretary General", section: "About Us" },
  "about/bylaws": { title: "Bylaws", subtitle: "Governing rules of the Association", section: "About Us" },

  // Office Bearers
  "office-bearers": { title: "Present Office Bearers", subtitle: "Our current leadership team", section: "Office Bearers" },
  "office-bearers/executive-committee": { title: "Executive Committee", subtitle: "Members of the executive body", section: "Office Bearers" },
  "office-bearers/committees": { title: "Committees", subtitle: "Standing and ad-hoc committees", section: "Office Bearers" },
  "office-bearers/district-chapters": { title: "District Chapters", subtitle: "KEA representation across Karnataka", section: "Office Bearers" },
  "office-bearers/past-presidents": { title: "Past Presidents & Secretaries", subtitle: "Honouring those who led before us", section: "Office Bearers" },

  // Disciplines
  disciplines: { title: "Disciplines", subtitle: "Five equestrian disciplines governed by KEA", section: "Disciplines" },
  "disciplines/dressage": { title: "Dressage", subtitle: "Ballet on horseback", section: "Disciplines" },
  "disciplines/show-jumping": { title: "Show Jumping", subtitle: "Agility, speed, and precision", section: "Disciplines" },
  "disciplines/eventing": { title: "Eventing", subtitle: "The ultimate test of versatility", section: "Disciplines" },
  "disciplines/tent-pegging": { title: "Tent Pegging", subtitle: "Ancient cavalry sport", section: "Disciplines" },
  "disciplines/endurance": { title: "Endurance", subtitle: "Stamina across vast terrain", section: "Disciplines" },

  // Membership
  membership: { title: "Membership", subtitle: "Join the Karnataka Equestrian Association", section: "Membership" },
  "member-login": { title: "Member Login", subtitle: "Access your member account", section: "Membership" },

  // Events
  events: { title: "Events & Competitions", subtitle: "Upcoming equestrian events in Karnataka", section: "Events" },

  // More
  gallery: { title: "Photo Gallery", subtitle: "Moments from our competitions and events", section: "Gallery" },
  contact: { title: "Contact Us", subtitle: "Reach the Karnataka Equestrian Association", section: "Contact" },
};

export default async function InnerPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const key = slug.join("/");
  const page = PAGE_MAP[key];

  const title = page?.title ?? toTitle(slug[slug.length - 1]);
  const subtitle = page?.subtitle;
  const section = page?.section ?? toTitle(slug[0]);

  // Build breadcrumbs
  const breadcrumbs = [
    { label: "Home", href: "/" },
    ...(slug.length > 1
      ? [{ label: section, href: `/${slug[0]}` }]
      : []),
    { label: title },
  ];

  return (
    <InnerPageShell title={title} subtitle={subtitle} breadcrumbs={breadcrumbs} />
  );
}

// Fallback: convert a kebab-case slug segment to Title Case
function toTitle(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}
