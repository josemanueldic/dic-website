// Company details. Everything here was taken from the current dicqa.com.
// Items marked "CONFIRM" should be checked before launch.

export const site = {
  name: "Doha International Co.",
  shortName: "DIC",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dicqa.com",
  description:
    "Doha International Co. is a Qatari-based contracting company specializing in infrastructure, civil works, buildings, and general engineering works.",

  phone: "+974 4038 3171",
  phoneHref: "tel:+97440383171",
  email: "info@dicqa.com",

  // CONFIRM: copied as-is from the current site.
  hours: "8:00 AM – 7:45 PM",

  address: {
    lines: [
      "The Commercial Avenue (Safwa Building)",
      "Bldg. No. 19, Office Block 29, 1st Floor",
      "Office No. C-103, Zone 56, Street No. 900",
      "P.O. Box 1907, Doha, Qatar",
    ],
    streetAddress:
      "The Commercial Avenue (Safwa Building), Bldg. No. 19, Office Block 29, 1st Floor, Office No. C-103, Zone 56, Street No. 900, P.O. Box 1907",
    locality: "Doha",
    country: "QA",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Safwa+Building+The+Commercial+Avenue+Doha+Qatar",
  },

  // CONFIRM: the current site says "28 years", written in 2021 or earlier.
  yearsExperience: 28,

  chairman: {
    name: "Sh. Thani Bin Khalifa Seoud Al Thani",
    title: "Chairman",
    image: undefined as string | undefined,
  },

  // Google+ link from the old site was dropped (the service no longer exists).
  social: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/Doha-International-Company-704461456394358/",
    },
    { label: "X (Twitter)", href: "https://twitter.com/dohaintlco" },
    { label: "Pinterest", href: "https://www.pinterest.com/dohainternation/" },
  ],

  // Shown in the strip under the hero. CONFIRM the QatarEnergy wording.
  approvals: ["Ashghal", "Kahramaa", "QatarEnergy", "Qatar Rail"],
};

export const nav = [
  { href: "/about-us", label: "About us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/equipments", label: "Equipment" },
  { href: "/our-clients", label: "Clients" },
  { href: "/contact-us", label: "Contact us" },
];
