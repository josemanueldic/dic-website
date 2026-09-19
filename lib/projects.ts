// Projects shown on the current dicqa.com. Slugs are unchanged so URLs keep their SEO value.
// Summaries are short drafts built only from the project title, client and service. Please review.

export type Project = {
  slug: string;
  title: string;
  client: string;
  serviceSlug: string;
  summary: string;
  images?: string[]; // first image is the cover
};

export const projects: Project[] = [
  {
    slug: "amenities-zone-infrastructure-works-barwa-city-phase-1",
    title: "Amenities Zone: Infrastructure Works, Barwa City Phase 1",
    client: "Barwa Real Estate / Shapoorji Pallonji Qatar",
    serviceSlug: "general-civil-infrastructure-works",
    summary:
      "Infrastructure works for the amenities zone of Barwa City Phase 1, carried out for Shapoorji Pallonji Qatar on behalf of Barwa Real Estate.",
  },
  {
    slug: "east-corridor-project-package-2-water-networks",
    title: "East Corridor Project (Package 2): Water Networks",
    client: "Ashghal / China Harbor Engineering",
    serviceSlug: "wet-utility-works",
    summary:
      "Water network works on Package 2 of the East Corridor Project, delivered with China Harbor Engineering for Ashghal.",
  },
  {
    slug: "supply-application-of-epoxy-flooring-marking-for-soque-waqif",
    title: "Supply & Application of Epoxy Flooring / Marking for Souq Waqif",
    client: "Urbacon / Private Engineering Office",
    serviceSlug: "epoxy-flooring-and-coating",
    summary:
      "Supply and application of epoxy flooring and marking at Souq Waqif, delivered for Urbacon and the Private Engineering Office.",
  },
  {
    slug: "epic-for-road-upgrade-from-station-n-to-khuff-h-l-within-dukhan-fields",
    title: "EPIC for Road Upgrade from Station-N to Khuff H/L within Dukhan Fields",
    client: "Qatar Petroleum / Stream Industrial & Engineering",
    serviceSlug: "road-works",
    summary:
      "Road upgrade works within the Dukhan fields, from Station-N to Khuff H/L, carried out with Stream Industrial & Engineering for Qatar Petroleum.",
  },
  {
    slug: "ro-water-station-at-abu-samra-associated-pipe-line",
    title: "RO Water Station at Abu Samra & Associated Pipeline",
    client: "Kahramaa / Cobra",
    serviceSlug: "wet-utility-works",
    summary:
      "Works for the RO water station at Abu Samra and its associated pipeline, delivered with Cobra for Kahramaa.",
  },
  {
    slug: "utility-diversion-hanging-and-protection-works-at-gold-line-metro-stations",
    title: "Utility Diversion, Hanging and Protection Works at Gold Line Metro Stations",
    client: "Qatar Rail / ALYSJ JV",
    serviceSlug: "wet-utility-works",
    summary:
      "Utility diversion, hanging and protection works at the Gold Line metro stations, delivered with ALYSJ JV for Qatar Rail.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
