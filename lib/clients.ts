// Client names come from the text of the current dicqa.com. Logos are placeholders for now.

export type Client = { name: string; note?: string; logo?: string };

export const authorities: Client[] = [
  { name: "Ashghal" },
  { name: "Kahramaa" },
  { name: "QatarEnergy", note: "formerly Qatar Petroleum" },
  { name: "Qatar Rail" },
  { name: "Qatar Olympic Committee" },
  { name: "Private Engineering Office" },
];

export const partners: Client[] = [
  { name: "ALYSJ JV" },
  { name: "ISG JV" },
  { name: "FYAP JV" },
  { name: "Daewoo E&C" },
  { name: "China Harbor Engineering", note: "CHEC" },
  { name: "Stream Industrial & Engineering" },
  { name: "Cobra" },
  { name: "Urbacon" },
  { name: "Barwa Real Estate" },
  { name: "Shapoorji Pallonji Qatar" },
];
