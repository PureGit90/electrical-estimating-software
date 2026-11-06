// Per-site settings. /build-directory fills these in; nothing else in the template names the niche.
export const SITE_NAME = 'Electrical Estimating Software Compared';
export const TAGLINE = 'Electrical estimating software, compared on what vendors state.';
export const SITE_DESCRIPTION = 'Estimating, takeoff and field service tools for electrical contractors, with each vendor\'s own statements on price, assemblies and price feeds.';

// Nothing is crawlable until GATE approval. /publish-directory sets PUBLIC_NOINDEX=false on production only.
export const NOINDEX = import.meta.env.PUBLIC_NOINDEX !== 'false';

// Shown on the legal, About and Corrections pages; the line is omitted when null.
export const CONTACT_EMAIL: string | null = 'sunshinesolutions305@outlook.com';
export const OPERATOR_NAME = 'PALM ICON LLC';
export const OPERATOR_PLACE = 'Miami, Florida';

// The date the vendors' own pages were last read. Update it whenever the data is re-read.
export const DATA_DATE = '2026-11-05';
export const DATA_DATE_LABEL = 'November 5, 2026';

// Main navigation. Keep it to 4 or 5 links.
export const NAV: { href: string; label: string }[] = [
  { href: '/all/', label: 'All tools' },
  { href: '/category/bid-estimating/', label: 'Bid estimating' },
  { href: '/category/field-service/', label: 'Field service' },
  { href: '/how-we-compare/', label: 'Method' },
];

export const CATEGORIES: { slug: string; name: string; short: string; intro: string; seoTitle: string }[] = [
  {
    slug: 'bid-estimating',
    name: 'Bid estimating and takeoff',
    short: 'Bid estimating',
    intro: 'Tools built to price electrical bids from plans, with a material database, assemblies, labor units and takeoff. What separates them is what comes in the box and what you license on top.',
    seoTitle: 'Electrical Estimating Software for Bids Compared',
  },
  {
    slug: 'ai-takeoff',
    name: 'AI takeoff tools',
    short: 'AI takeoff',
    intro: 'Tools that read electrical plan PDFs and count devices, usually with a person checking the result. Most say little about assemblies, labor units or where prices come from.',
    seoTitle: 'AI Electrical Takeoff Software Compared',
  },
  {
    slug: 'field-service',
    name: 'Field service with quoting',
    short: 'Field service',
    intro: 'Service management platforms that also write estimates from a price book you keep. The pages we read describe no plan takeoff, and one says so outright.',
    seoTitle: 'Electrician Job Management Software Compared',
  },
  {
    slug: 'quotes-invoices',
    name: 'Quotes and invoices',
    short: 'Quotes and invoices',
    intro: 'Light tools for estimates, invoices and payments. None carries an electrical database, so they fit service and small-job work where you already know your prices.',
    seoTitle: 'Electrician Quote and Invoice Software Compared',
  },
];

// Price-source labels. Tone picks the tag color: primary, signal or neutral.
export const CONFIDENCE: Record<string, { label: string; note: string; tone: string }> = {
  vendor: { label: 'Vendor-published', note: "Taken from the vendor's own page.", tone: 'primary' },
  'third-party': { label: 'Third-party reported', note: 'Not confirmed on the vendor page; from a named third party and may differ.', tone: 'signal' },
  quote: { label: 'Quote only', note: 'The vendor does not publish a price on the pages we read.', tone: 'neutral' },
};

// How each tool gets material prices into an estimate, as the vendor describes it.
export const PRICE_FEED: Record<string, { label: string; note: string; tone: string }> = {
  included: { label: 'Included', note: 'The vendor says the price feed is part of the plan.', tone: 'primary' },
  separate: { label: 'Sold separately', note: 'The vendor says the feed or price list is licensed or sold on its own.', tone: 'signal' },
  connects: { label: 'Offered, cost not stated', note: 'The vendor names a feed or update service but does not say what it costs.', tone: 'neutral' },
  'you-enter': { label: 'You enter or import', note: 'Prices come from a list you keep or import.', tone: 'neutral' },
  'not-stated': { label: 'Not stated', note: 'The pages we read do not say.', tone: 'neutral' },
};

// The one memorable thing on the home page: a real, sourced artifact from a vendor's own page.
// This is Conest's own "at a glance" box for IntelliBid, copied as published.
export const HERO_PANEL: {
  title: string;
  subtitle?: string;
  rows: { label: string; value: string; kind?: 'sub' | 'total' }[];
  source: { label: string; href: string };
} | null = {
  title: 'IntelliBid at a glance',
  subtitle: 'A vendor summary box, as Conest published it',
  rows: [
    { label: 'Primary product', value: 'IntelliBid electrical estimating software' },
    { label: 'Built for', value: 'Electrical, low voltage, datacom and solar contractors' },
    { label: 'Material database', value: 'Over 140,000 NEC-friendly items, over 500,000 pre-built assemblies' },
    { label: 'Pricing services', value: 'NetPricer, EPIC and TRA-SER (sold separately)', kind: 'sub' },
    { label: 'Editions', value: 'Standard, Plus and Pro' },
    { label: 'Deployment', value: 'Local PC or network, or hosted on CE Cloud' },
    { label: 'In business since', value: '1989' },
  ],
  source: { label: 'Conest, Electrical Estimating Software page', href: 'https://conest.com/electrical-estimating-software/' },
};

export const categoryBySlug = (slug: string) => CATEGORIES.find((c) => c.slug === slug);
export const categoryByName = (name: string) => CATEGORIES.find((c) => c.name === name);
