import { defineCollection, z } from 'astro:content';

// What the vendor's own pages say, field by field. Free text is the vendor's statement or "Not stated on the pages we read."
const materialPrices = z.object({
  // included: vendor says the feed is part of the plan. separate: vendor says it is licensed or sold on its own.
  // connects: vendor names a feed or update service but does not say what it costs.
  // you-enter: prices come from a list you keep or import. not-stated: the pages say nothing usable.
  status: z.enum(['included', 'separate', 'connects', 'you-enter', 'not-stated']),
  note: z.string().min(1),
});

const scope = z.object({
  takeoff: z.string().min(1),
  library: z.string().min(1),
  laborUnits: z.string().min(1),
  materialPrices,
});

const listings = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string().min(1),
    // Extend this enum if a niche needs another kind (the jet charter site added 'service-provider').
    directoryType: z.enum(['software-tool', 'local-business']),
    summary: z.string().min(1),
    // A concrete comparative judgment the top-ranking pages do not already have (guardrail 2).
    differentiator: z.string().min(1),
    url: z.string().url(),
    // Tracked referral link, set once an affiliate program approves us. The plain
    // url stays as the fallback so a listing never links nowhere.
    affiliateUrl: z.string().url().optional(),
    pricing: z.string().nullable().optional(),
    address: z.string().nullable().optional(),
    category: z.string().min(1),
    scope,
    // Where the price came from. Never show a price without one of these.
    pricingConfidence: z.enum(['vendor', 'third-party', 'quote']).default('quote'),
    bestFor: z.string().optional(),
    skipIf: z.string().optional(),
    watchOut: z.array(z.string()).default([]),
    // Date the vendor's own pages were last read, and the pages themselves.
    lastChecked: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
    sources: z.array(z.string().url()).default([]),
  }),
});

export const collections = { listings };
