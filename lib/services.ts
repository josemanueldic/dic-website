// Services. Slugs match the current dicqa.com URLs so existing search rankings carry over.
// `image` is empty for now: a placeholder is shown until a photo path or URL is set.

export type Service = {
  slug: string;
  name: string;
  summary: string; // one or two sentences, used in lists and meta descriptions
  body: string[]; // paragraphs on the detail page
  points?: { title: string; items: string[] };
  image?: string;
};

export const services: Service[] = [
  {
    slug: "wet-utility-works",
    name: "Wet Utility Works",
    summary:
      "Potable water, TSE, foul sewer and storm water drainage networks: installation, diversion, protection, testing and commissioning.",
    body: [
      "Our main expertise lies in wet utility works: potable water, TSE (treated sewage effluent), foul sewer and storm water drainage.",
      "We have completed, and have ongoing, wet utility works with major clients on key projects in Doha, including ALYSJ JV, ISG JV, FYAP JV, Daewoo E&C and CHEC. We hold approvals from authorities including Ashghal, Kahramaa, QP and Qatar Rail.",
    ],
    points: {
      title: "Scope we perform",
      items: [
        "New network installations",
        "Diversion",
        "Protection",
        "Testing",
        "Commissioning",
      ],
    },
  },
  {
    slug: "road-works",
    name: "Road Works",
    summary:
      "Sub-grade, sub-base and asphalt courses, plus road marking, paving, kerbstone and ancillary works.",
    body: [
      "Our road works scope goes beyond laying sub-grade, sub-base and asphalt courses. We also carry out road marking, paving, kerbstone and other ancillary works.",
      "We have delivered road asphalt projects for clients including Qatar Petroleum, where we worked under Stream as main contractor, the ALIJARAH Taxi Complex and Driving School, and the Golf Club Admin Building (MOYS).",
    ],
  },
  {
    slug: "general-civil-infrastructure-works",
    name: "General Civil & Infrastructure Works",
    summary:
      "From bridges to buildings and roads to rails, we take on a wide range of contracting projects.",
    body: [
      "From bridges to buildings, roads to rails, we undertake a wide range of contracting projects and bring our experience and insight of the industry to every one.",
      "Community well-being, environmental impact and the interests of our clients come first. We prefer to carry out projects collaboratively.",
    ],
  },
  {
    slug: "dic-steel-divisions",
    name: "DIC Steel Division",
    summary:
      "Our structural steel department, established in 2018 and ISO-certified, equipped for almost any structural steel requirement.",
    body: [
      "DIC Steel Division is a department of Doha International Co. Due to the increasing demand for structural steel works and services, it was established in 2018. It is equipped with modern equipment to meet almost any structural steel requirement.",
      "The division follows the principle Doha International Co. applies to everything it does: customer satisfaction comes first, and we are dedicated to delivering products and services that meet our clients' requirements.",
      "DIC Steel Division is ISO-certified and implements an Integrated Quality, Health and Safety Management System to ensure quality in all aspects of its operations and the welfare of its workers and employees.",
    ],
  },
  {
    slug: "steel-structuring",
    name: "Steel Structuring",
    summary:
      "A-to-Z steel structuring, from initial design through execution and installation.",
    body: [
      "We offer A-to-Z services in steel structuring, from the initial design stages to the final phase of executing and installing the project.",
      "Modern machinery lets us build steel structures with precision. We use only high-grade metal and materials, and employ skilled professionals with in-depth expertise.",
    ],
  },
  {
    slug: "mep-service",
    name: "MEP Services",
    summary:
      "Mechanical, electrical and plumbing systems, built and maintained as one coordinated whole.",
    body: [
      "We focus not only on building special projects but on maintaining them successfully, and we offer services across the full spectrum of mechanical, electrical and plumbing systems.",
      "Our approach is to take the entire project into consideration and look at how each essential system can complement and enhance the others.",
    ],
  },
  {
    slug: "epoxy-flooring-and-coating",
    name: "Epoxy Flooring and Coating",
    summary:
      "Industrial flooring, protective coatings, waterproofing and blasting. We are a Fosroc-approved applicator.",
    body: [
      "We established our epoxy flooring and coating works in Qatar in 2013, in partnership with Engineering Group for Contracting (ECG), a company established in 1990 and well known in the Egyptian market for corrosion protection, thermal insulation and fire proofing.",
      "Doha International Co. is certified by Fosroc as an approved applicator of Fosroc flooring and coating products. We use quality, certified products, and we take the measures needed to keep our workforce safe in a clean working environment.",
    ],
    points: {
      title: "Presently we offer",
      items: [
        "Corrosion protection by chemical and mechanical methods, including blast cleaning of steel structures, tanks and pipes (internal and external surfaces)",
        "Hydro blasting of ferrous and non-ferrous substrates using ultra-high-pressure water jetting",
        "Shot blasting of steel sections, pipes, sheets and plates",
        "Thermal insulation lining",
        "Onshore and offshore works",
        "Fire proofing systems",
        "Integrated civil and architectural contracting works",
        "Scaffolding and erection works",
        "Steel fabrication and erection works",
        "Medium and heavy duty flooring for industry",
        "Permanent aisle markings (yellow line) and zebra crossings",
        "Polyurethane wall coating and polyurethane flooring",
        "Solvent-less floor coating and self-levelling floors",
        "Anti-corrosive screeds and coatings",
        "Anti-skid and anti-static flooring",
        "M/C grouting",
        "Waterproofing of terraces and exterior walls",
        "Sign and number marking",
      ],
    },
  },
  {
    slug: "hard-and-soft-landscaping",
    name: "Hard and Soft Landscaping",
    summary:
      "Landscaping from concrete hardscape to planting design, shaped with you.",
    body: [
      "The outer environment should reflect the spirit of the structure it surrounds. We provide a range of landscaping services, from concrete hardscape to planted designs.",
      "Our team works with you to develop landscaping solutions that bring your space to life.",
    ],
  },
  {
    slug: "street-lighting-works",
    name: "Street Lighting Works",
    summary:
      "Lighting for public routes and structures, so streets stay well lit whenever needed.",
    body: [
      "We provide efficient, effective lighting works for public routes and architectural structures, keeping streets well lit at any time they are needed.",
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
