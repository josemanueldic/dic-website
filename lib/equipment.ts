// PLACEHOLDER. The current site has an Equipment page but its list could not be read.
// Replace these groups and items with your real equipment before launch.

export type EquipmentGroup = {
  title: string;
  supports: string;
  items: { name: string; image?: string }[];
};

export const equipmentGroups: EquipmentGroup[] = [
  {
    title: "Earthworks and trenching",
    supports: "Wet utility and civil works",
    items: [{ name: "Equipment name" }, { name: "Equipment name" }, { name: "Equipment name" }],
  },
  {
    title: "Road works and paving",
    supports: "Sub-base, asphalt courses and ancillary works",
    items: [{ name: "Equipment name" }, { name: "Equipment name" }, { name: "Equipment name" }],
  },
  {
    title: "Steel fabrication and erection",
    supports: "DIC Steel Division",
    items: [{ name: "Equipment name" }, { name: "Equipment name" }, { name: "Equipment name" }],
  },
  {
    title: "Blasting, coating and flooring",
    supports: "Epoxy flooring and protective coating",
    items: [{ name: "Equipment name" }, { name: "Equipment name" }, { name: "Equipment name" }],
  },
];
