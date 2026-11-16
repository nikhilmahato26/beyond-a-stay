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

export interface RoomType {
  id: string;
  name: string;
  variant: string;
  description: string;
  image: string;
  images: string[];
  features: string[];
}

export const rooms: RoomType[] = [
  {
    id: "budget-double",
    name: "Budget Double Room",
    variant: "AC & Non-AC",
    description:
      "A minimalist double room with warm wooden furnishings and a private bathroom, kept honest and unfussy for travellers who just need a comfortable place to rest.",
    image: "/images/bedroom-ac-budget.jpg",
    images: [
      "/images/bedroom-ac-budget.jpg",
      "/images/bedroom-bright-comfort.jpg",
      "/images/bedroom-spacious-view.jpg",
      "/images/bathroom-shower.jpg",
    ],
    features: ["Private bathroom", "Air conditioning", "Fan", "Non-smoking"],
  },
  {
    id: "double-balcony",
    name: "Double Room with Balcony",
    variant: "AC & Non-AC",
    description:
      "Your private sanctuary, flooded with natural light and cooled by the sea breeze through a private balcony that opens onto the garden.",
    image: "/images/balcony-veranda.jpg",
    images: [
      "/images/balcony-veranda.jpg",
      "/images/bedroom-deluxe-double.jpg",
      "/images/bedroom-blue-linen.jpg",
      "/images/washroom-vanity.jpg",
    ],
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

export const propertyImage = "/images/exterior-gate.jpg";

export interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  category: "rooms" | "outdoors" | "bathrooms";
}

export const galleryImages: GalleryItem[] = [
  {
    src: "/images/exterior-gate.jpg",
    alt: "Mermaid Marari entrance gate, front driveway and official sign board",
    title: "Entrance & Gated Courtyard",
    category: "outdoors",
  },
  {
    src: "/images/villa-front-courtyard.jpg",
    alt: "Two-story white homestay villa with palm trees, steps and access ramp",
    title: "The Villa & Front Courtyard",
    category: "outdoors",
  },
  {
    src: "/images/balcony-veranda.jpg",
    alt: "First-floor open balcony veranda with handcrafted wooden seating overlooking palm trees",
    title: "First-Floor Balcony Veranda",
    category: "outdoors",
  },
  {
    src: "/images/veranda-sitout.jpg",
    alt: "Ground-floor entrance sit-out with wooden bench and textured terracotta laterite wall",
    title: "Ground-Floor Porch Sit-Out",
    category: "outdoors",
  },
  {
    src: "/images/bedroom-deluxe-double.jpg",
    alt: "Spacious deluxe bedroom with wooden double bed, work desk, wardrobe, and modern lighting",
    title: "Deluxe Double Bedroom",
    category: "rooms",
  },
  {
    src: "/images/bedroom-ac-budget.jpg",
    alt: "Air-conditioned double bedroom with work desk, flat-screen TV, and sheer curtains",
    title: "Budget Double AC Room",
    category: "rooms",
  },
  {
    src: "/images/bedroom-blue-linen.jpg",
    alt: "Double bed with sea-blue linens, folded bath towels, and vanity corridor view",
    title: "Double Room with Blue Linens",
    category: "rooms",
  },
  {
    src: "/images/bedroom-bright-comfort.jpg",
    alt: "Bright double bedroom with crisp white linens, TV, wardrobe, and study desk",
    title: "Bright Comfort Double Room",
    category: "rooms",
  },
  {
    src: "/images/bedroom-cozy-stay.jpg",
    alt: "Cozy guest room with colorful quilt runner, split air conditioning, and TV",
    title: "Cozy Guest Bedroom",
    category: "rooms",
  },
  {
    src: "/images/bedroom-spacious-view.jpg",
    alt: "Spacious bedroom interior with wooden dining/work table and full-length mirror wardrobe",
    title: "Spacious Room Interior",
    category: "rooms",
  },
  {
    src: "/images/bathroom-shower.jpg",
    alt: "Clean, modern private bathroom with overhead shower, fixtures, and bidet spray",
    title: "Private En-Suite Bathroom",
    category: "bathrooms",
  },
  {
    src: "/images/washroom-vanity.jpg",
    alt: "Washbasin vanity area with round LED illuminated mirror and turquoise vanity cabinet",
    title: "Washbasin Vanity & LED Mirror",
    category: "bathrooms",
  },
];

export const attractionsSectionId = "nearby";
