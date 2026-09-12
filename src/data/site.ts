export const business = {
  name: "Mermaid Marari",
  tagline: "Beyond a Stay",
  phonePrimary: "+91 79077 14598",
  phonePrimaryHref: "tel:+917907714598",
  whatsappNumber: "+91 80897 14598",
  whatsappHref:
    "https://wa.me/918089714598?text=Hi%2C%20I'd%20like%20to%20know%20more%20about%20staying%20at%20Mermaid%20Marari.",
  whatsappNumberDigits: "918089714598",
  email: "holidays@mermaidmarari.com",
  address: "Mararikulam Beach Road, Alappuzha, Kerala 688523",
  instagram: "https://www.instagram.com/mermaidmarari",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Mararikulam+Beach+Road%2C+Alappuzha%2C+Kerala+688523",
};

export function buildWhatsappLink(message: string) {
  return `https://wa.me/${business.whatsappNumberDigits}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Nearby", href: "#nearby" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const rooms = [
  {
    id: "budget-double",
    name: "Budget Double Room",
    variant: "AC & Non-AC",
    description:
      "A minimalist double room with warm wooden furnishings and a private bathroom, kept honest and unfussy for travellers who just need a comfortable place to rest.",
    image:
      "https://img1.wsimg.com/isteam/ip/9f83ecb8-d4ba-4c37-9b41-bb2f2c755dd3/WhatsApp%20Image%202026-05-12%20at%204.08.19%20PM%20(1).jpeg/:/rs=w:1200,cg:true",
    features: ["Private bathroom", "Air conditioning", "Fan", "Non-smoking"],
  },
  {
    id: "double-balcony",
    name: "Double Room with Balcony",
    variant: "AC & Non-AC",
    description:
      "Your private sanctuary, flooded with natural light and cooled by the sea breeze through a private balcony that opens onto the garden.",
    image:
      "https://img1.wsimg.com/isteam/ip/9f83ecb8-d4ba-4c37-9b41-bb2f2c755dd3/WhatsApp%20Image%202026-05-12%20at%204.08.20%20PM%20(1).jpeg/:/rs=w:1200,cg:true",
    features: ["Private balcony", "Private bathroom", "Air conditioning", "Soundproofed"],
  },
];

export const amenities = [
  { icon: "Car", label: "Free private parking" },
  { icon: "Bath", label: "Private bathrooms" },
  { icon: "Users", label: "Family rooms" },
  { icon: "Snowflake", label: "Air conditioning" },
  { icon: "Trees", label: "Garden & outdoor seating" },
  { icon: "Bike", label: "Bicycle parking" },
  { icon: "VolumeX", label: "Soundproofed rooms" },
  { icon: "Droplets", label: "Free toiletries" },
  { icon: "PlaneTakeoff", label: "Airport shuttle (extra charge)" },
  { icon: "BellOff", label: "Non-smoking rooms" },
  { icon: "Tv", label: "TV (on request)" },
  { icon: "Flame", label: "Geyser (on request)" },
  { icon: "Coffee", label: "Electric kettle (on request)" },
] as const;

export const diningNotes = [
  "Continental",
  "American",
  "Full English / Irish",
  "Vegetarian",
  "Vegan",
];

export const attractions = [
  { name: "Marari Beach", distance: "8-minute walk" },
  { name: "Mararikulam Mahadeva Temple", distance: "1.5 km" },
  { name: "Kripasanam Church", distance: "3.5 km" },
  { name: "Elephant & Camel Safari", distance: "4 km" },
  { name: "International Coir Museum", distance: "5 km" },
  { name: "St. Andrew's Basilica, Arthunkal", distance: "7 km" },
  { name: "Pathiramanal Island", distance: "9 km" },
  { name: "Alleppey Backwaters", distance: "13 km" },
  { name: "Kumarakom Bird Sanctuary", distance: "27 km" },
  { name: "Cochin International Airport", distance: "69 km" },
];

export const propertyImage =
  "https://img1.wsimg.com/isteam/ip/9f83ecb8-d4ba-4c37-9b41-bb2f2c755dd3/Content-Creator-Project.png/:/rs=w:1000";

export const galleryImages = [
  { src: propertyImage, alt: "Mermaid Marari homestay building and gated courtyard" },
  {
    src: "https://img1.wsimg.com/isteam/ip/9f83ecb8-d4ba-4c37-9b41-bb2f2c755dd3/WhatsApp%20Image%202026-05-12%20at%204.08.19%20PM%20(1).jpeg/:/cr=t:0%25,l:4.82%25,w:88.63%25,h:100%25/rs=w:900",
    alt: "Minimalist bedroom with wooden furniture at Mermaid Marari",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/9f83ecb8-d4ba-4c37-9b41-bb2f2c755dd3/WhatsApp%20Image%202026-05-12%20at%204.08.20%20PM%20(1).jpeg/:/cr=t:47.29%25,l:0%25,w:100%25,h:50.11%25/rs=w:900",
    alt: "Cozy bedroom with balcony at Mermaid Marari",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/9f83ecb8-d4ba-4c37-9b41-bb2f2c755dd3/Beach-desktop-wallpaper-4K-with-a-pristine-tr.jpeg/:/rs=w:900",
    alt: "Shoreline near Marari Beach, an 8-minute walk from the homestay",
  },
];

export const attractionsSectionId = "nearby";
