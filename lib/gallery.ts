// Gallery slots. Replace `image` with a real photo path or URL and edit the caption.

export type GalleryItem = {
  caption: string;
  ratio: "4/3" | "3/4" | "3/2" | "1/1";
  image?: string;
};

export const gallery: GalleryItem[] = [
  { caption: "Pipe laying in an open trench", ratio: "4/3" },
  { caption: "Manhole and chamber construction", ratio: "3/4" },
  { caption: "Asphalt paving", ratio: "3/2" },
  { caption: "Steel fabrication in the workshop", ratio: "4/3" },
  { caption: "Epoxy flooring application", ratio: "1/1" },
  { caption: "Pressure testing of a water main", ratio: "3/4" },
  { caption: "Steel erection on site", ratio: "3/2" },
  { caption: "Street lighting installation", ratio: "3/4" },
  { caption: "Landscaping and paving", ratio: "4/3" },
  { caption: "Utility diversion works", ratio: "3/2" },
  { caption: "Road marking", ratio: "1/1" },
  { caption: "Team on site", ratio: "4/3" },
];
