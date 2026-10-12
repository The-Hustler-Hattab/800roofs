// Enter only information confirmed by Kevin. Null values never become fabricated claims.
export const business = {
  name: '800Roofs.com', owner: 'Kevin', url: 'https://800roofs.com',
  phone: null as string | null, // Verified international format, e.g. +1 followed by ten digits.
  phoneDisplay: null as string | null,
  cities: ['Pittsburgh, Pennsylvania'] as string[], // Pittsburgh only; no surrounding cities confirmed.
  address: null as { streetAddress: string; addressLocality: string; addressRegion: string; postalCode: string; addressCountry: string } | null,
};
// Proposed service pages: Kevin must confirm these offerings before launch.
export const services = [
  { slug: 'roof-repair', title: 'Roof repair', intro: 'Understand the problem. Make a clear plan.', description: 'Learn about roof leaks, damaged shingles, and repair considerations with 800Roofs.com.', detail: 'A leak can begin around flashing, roof penetrations, or damaged roofing materials. A careful inspection helps identify the source and whether a targeted repair is appropriate.', points: ['Leak sources and water intrusion', 'Missing or damaged shingles', 'Flashing and roof penetrations'] },
  { slug: 'roof-replacement', title: 'Roof replacement', intro: 'A fresh start, from the roof up.', description: 'Explore roof replacement planning, materials, and project considerations with 800Roofs.com.', detail: 'When planning a replacement, consider the condition of the roof deck, ventilation, underlayment, and finish materials together. Discuss the scope, cleanup, and material options before work begins.', points: ['Roof condition and replacement scope', 'Materials and ventilation', 'Installation planning and cleanup'] },
  { slug: 'roof-inspection', title: 'Roof inspection', intro: 'Know what’s overhead.', description: 'Understand roof inspection considerations and maintenance planning with 800Roofs.com.', detail: 'An inspection can help you understand visible wear, drainage issues, and vulnerable roof details. Findings should explain what was observed and which next steps may be worth considering.', points: ['Visible roof wear and damage', 'Flashing, drainage, and ventilation', 'Maintenance and next-step planning'] },
];
