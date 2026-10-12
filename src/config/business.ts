// Enter only information confirmed by Kevin. Null values never become fabricated claims.
export const business = {
  name: 'Mutual Builders Corporation', owner: 'Kevin', url: 'https://800roofs.com',
  phone: '+14124786526' as string | null,
  phoneDisplay: '(412) 478-6526' as string | null,
  history: 'Over 70 years in business', // Supplied by owner; no exact founding year provided.
  hicNumber: 'PA010376',
  hicVerificationUrl: 'https://hicsearch.attorneygeneral.gov/',
  financingAvailable: true, // No lender, rate, repayment period, or approval terms supplied.
  cities: ['Pittsburgh, Pennsylvania'] as string[], // Pittsburgh only; no surrounding cities confirmed.
  address: null as { streetAddress: string; addressLocality: string; addressRegion: string; postalCode: string; addressCountry: string } | null,
};
// Core services confirmed by the owner. Discuss property-specific scope with Kevin.
export const services = [
  { slug: 'roofing', title: 'Complete roofing', intro: 'A roof that brings it all together.', description: 'Complete roofing in Pittsburgh, PA from Mutual Builders Corporation. Call Kevin to discuss your roof, project scope, and financing options.', detail: 'Your roof works as a system. Mutual Builders Corporation offers complete roofing for Pittsburgh homes. Talk with Kevin about your roof’s condition and the scope of work your property needs.', points: ['Existing roof condition and project scope', 'Roofing materials, flashing, and ventilation', 'Project planning, timing, and cleanup'], planning: 'Describe any leaks or visible wear, share the roofing material if known, and explain whether you’re addressing a problem or planning a new roof.' },
  { slug: 'siding', title: 'Siding', intro: 'Give your home a fresh exterior.', description: 'Siding services in Pittsburgh, PA from Mutual Builders Corporation. Discuss your exterior, siding options, project scope, and financing with Kevin.', detail: 'Siding helps protect your home’s exterior and shapes its appearance. Mutual Builders Corporation offers siding services in Pittsburgh. Discuss the existing condition, the look you want, and the right scope for your home.', points: ['Current siding condition and project goals', 'Available materials, colors, and finish options', 'Exterior details and installation planning'], planning: 'Tell Kevin about visible damage, the current exterior material if known, and the areas of your home you want to update.' },
  { slug: 'gutters', title: 'Gutters', intro: 'Help water find its way away.', description: 'Gutter services in Pittsburgh, PA from Mutual Builders Corporation. Call Kevin to discuss gutter condition, drainage, and your home’s needs.', detail: 'Gutters and downspouts help direct roof runoff away from your home. Mutual Builders Corporation offers gutter services in Pittsburgh. Talk with Kevin about your existing gutters and any overflow, leaks, or drainage concerns.', points: ['Gutter condition, leaks, and overflow', 'Downspout placement and runoff direction', 'Available gutter options and project scope'], planning: 'Describe where you’re seeing overflow or leaks and share any drainage concerns around your home.' },
];
