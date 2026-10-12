export interface GalleryPhoto {
  slug: string;
  title: string;
  detail: string;
  alt: string;
  width: number;
  height: number;
}

/** Selected photographs supplied by the owner of Kevin's roof replacement work. */
export const projectPhotos = [
  { slug: 'gray-shingle-dormer', title: 'Rooflines & dormers', detail: 'Gray shingles across intersecting rooflines and a dormer.', alt: 'Gray shingle roof with a white-sided dormer, hip caps, and intersecting slopes', width: 923, height: 1234 },
  { slug: 'brown-shingle-ridge', title: 'A warm finish', detail: 'Brown architectural shingles with a view along the ridge.', alt: 'Brown architectural shingles on both sides of a ridge leading toward a chimney', width: 1234, height: 923 },
  { slug: 'gray-shingle-hips', title: 'Every angle', detail: 'A closer look at the shingle-covered hips.', alt: 'Gray architectural shingles and overlapping hip caps meeting at a roof junction', width: 1299, height: 972 },
  { slug: 'brown-shingle-slope', title: 'Across the roof', detail: 'A broad view of a brown shingle roof slope.', alt: 'Brown architectural shingles extending across a residential roof slope', width: 1440, height: 1078 },
  { slug: 'chimney-flashing', title: 'Around the chimney', detail: 'Shingles and white flashing at a brick chimney.', alt: 'Brown roof shingles meeting white flashing at the base of a red brick chimney', width: 1299, height: 972 },
  { slug: 'gray-shingle-ridge-detail', title: 'Ridge details', detail: 'Gray shingles and ridge caps beside a chimney.', alt: 'Gray architectural shingles with overlapping ridge caps and a chimney at the left', width: 972, height: 1299 },
  { slug: 'steep-roof-dormer', title: 'Steep rooflines', detail: 'A view of dark shingles around a dormer during installation.', alt: 'Dark shingle roof with a dormer, hip caps, and white trim photographed during installation', width: 1368, height: 1024 },
  { slug: 'gray-shingle-roof-view', title: 'From up close', detail: 'Shingle courses and vents photographed from the roof.', alt: 'Rows of gray architectural shingles extending across a roof with vents and an installation hose', width: 876, height: 1172 },
] as const;

/** Examples supplied by the owner of roof damage Kevin can address. */
export const roofProblemPhotos = [
  { slug: 'broken-roof-decking', title: 'Broken decking', detail: 'A broken roof board with a large opening beneath it.', alt: 'Exposed wooden roof decking with a split board and a large hole', width: 1440, height: 1080 },
  { slug: 'damaged-roof-edge', title: 'Damage at the roof edge', detail: 'Broken board ends and gaps along the edge of the roof.', alt: 'Damaged wooden roof boards with broken ends and openings near the roof edge', width: 1440, height: 1080 },
  { slug: 'split-roof-boards', title: 'Split & missing wood', detail: 'Cracked boards and missing sections of the roof deck.', alt: 'Exposed roof boards with cracks and missing wood beside metal flashing', width: 1080, height: 1440 },
  { slug: 'roof-decking-gaps', title: 'Gaps in the decking', detail: 'A wide opening between damaged boards near the roof ridge.', alt: 'Wooden roof decking with a wide gap near the ridge and roofing ropes in view', width: 1080, height: 1440 },
  { slug: 'roof-deck-opening', title: 'An opening below the roof', detail: 'A missing section of decking beside remaining roofing material.', alt: 'Large opening in exposed roof decking beside underlayment and remaining shingles', width: 1440, height: 1080 },
  { slug: 'exposed-roof-support', title: 'Exposed roof support', detail: 'Broken decking with the support beneath visible through the opening.', alt: 'Broken wooden roof boards with a roof support visible through a large opening', width: 1440, height: 1080 },
] as const satisfies readonly GalleryPhoto[];
