// Wet-utility system colour code, shared by the homepage list and the hero diagram.

export const systems = [
  { name: "Potable water", note: "Supply networks", color: "var(--color-water)" },
  { name: "TSE", note: "Treated sewage effluent lines", color: "var(--color-tse)" },
  { name: "Foul sewer", note: "Gravity and rising mains", color: "var(--color-sewer)" },
  { name: "Storm water drainage", note: "Drains and outfalls", color: "var(--color-storm)" },
] as const;
