export const WHATSAPP_NUMBER = "919676667666";
export const OFFICE_PHONE_1 = "+91 96766 67666";
export const OFFICE_PHONE_2 = "+91 99121 62349";
export const LANDLINE_PHONE = "0866-2555333";
export const OFFICE_EMAIL = "akhilpromoters@gmail.com";
export const OFFICE_ADDRESS = "Door No: 13-57, Pinnamaneni Teachers Colony, Kanuru, Vijayawada - 520007, Andhra Pradesh";

export interface FloorPlan {
  title: string;
  size: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  balconies: number;
  image?: string;
  dimensions: {
    masterBedroom: string;
    guestBedroom: string;
    childrenBedroom: string;
    drawingHall: string;
    dining: string;
    kitchen: string;
  };
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  location: string;
  area: string;
  city: string;
  status: "ONGOING" | "COMPLETED" | "UPCOMING";
  category: "Apartments" | "Villas" | "Commercial";
  heroImage: string;
  tagline: string;
  configurations: string[];
  siteArea: string;
  unitCount: string;
  overview: string;
  exteriorImage: string;
  isometricImage?: string;
  locationHighlights: string[];
  floorPlans: FloorPlan[];
  specifications: Record<string, string>;
  gallery: { id: string; title: string; category: string; image: string }[];
  highlights: string[];
  amenities: string[];
  locationDetails: string;
  architects: {
    design?: string;
    structural?: string;
    interiors?: string;
  };
  siteAddress: string;
}

export const projectData: Record<string, Project> = {
  "blueberry": {
    id: "blueberry",
    slug: "blueberry",
    name: "Blueberry",
    location: "Lotus Land Mark, Ayodhya Nagar",
    area: "Ayodhya Nagar",
    city: "Vijayawada",
    status: "ONGOING",
    category: "Apartments",
    heroImage: "/images/projects/blueberry.jpg",
    exteriorImage: "/images/projects/blueberry.jpg",
    tagline: "3 BHK Premium Flats @ Lotus Land Mark",
    configurations: ["3 BHK (1930 SFT)", "3 BHK (2020 SFT)"],
    siteArea: "Sector-3, Ayodhya Nagar",
    unitCount: "5 Floors | 3 BHK Residences",
    overview: "Blueberry offers elegant 3 BHK luxury residences situated in Sector-3, Lotus Land Mark, Ayodhya Nagar. Designed to deliver exceptional comfort and aesthetic perfection, each flat boasts 100% Vaastu compliance, generous balcony space, granite common areas, and high-end joinery.",
    locationHighlights: [
      "Located in Lotus Land Mark Sector-3",
      "Proximity to KCP Godown & Prabhas College",
      "Easy access to Railway Station & Eluru Canal Road",
      "Near major schools, hospitals, and commercial markets"
    ],
    floorPlans: [
      {
        title: "Typical 3 BHK (Type A)",
        size: "1930 SFT",
        type: "3 BHK Flat",
        bedrooms: 3,
        bathrooms: 3,
        balconies: 2,
        dimensions: {
          masterBedroom: "14'6\" x 12'0\"",
          guestBedroom: "13'10½\" x 11'3\"",
          childrenBedroom: "14'4\" x 11'3\"",
          drawingHall: "14'1½\" x 16'1½\"",
          dining: "13'11½\" x 16'10½\"",
          kitchen: "10'0\" x 12'0\" (with 4'6\" Wash)"
        }
      },
      {
        title: "Typical 3 BHK (Type B)",
        size: "2020 SFT",
        type: "3 BHK Flat",
        bedrooms: 3,
        bathrooms: 3,
        balconies: 2,
        dimensions: {
          masterBedroom: "15'4½\" x 12'0\"",
          guestBedroom: "11'4½\" x 13'3\"",
          childrenBedroom: "11'4\" x 13'3\"",
          drawingHall: "11'9\" x 18'1½\"",
          dining: "13'1\" x 16'10½\"",
          kitchen: "8'0\" x 12'0\" (with 4'6\" Wash)"
        }
      }
    ],
    specifications: {
      "Structure": "RCC framed structure designed to withstand wind and seismic loads.",
      "Super Structure": "Lightweight clay brick masonry in cement mortar for internal and external walls.",
      "Plastering": "Internal: Single coat smooth finished plastering. External: Double coat smooth finished plastering.",
      "Joinery": "Main Door: Melamine polished teak wood frame with teak wood shutter. Internal Doors: Teak wood frames with waterproof flush door shutters. Windows: UPVC Windows with teak wood frame/glass panels.",
      "Flooring": "Vitrified tiled flooring inside flat. Granite in common corridors & staircase. Anti-skid ceramic tiles in bathrooms.",
      "Electrical": "Concealed copper wiring of Finolex/Havells. Premium distribution boards and MCBs. Modular switches of Legrand/GM make.",
      "Plumbing": "CPVC hot and cold water supply lines with C.P. fittings of Jaquar/Hindware make.",
      "Lifts": "Automatic 6-passenger lift of Johnson or equivalent make.",
      "Generator": "Power backup generator for lift, water motor, common lighting, and interior points."
    },
    gallery: [
      { id: "g1", title: "Elevation Render", category: "Exterior", image: "/images/projects/blueberry.jpg" },
      { id: "g2", title: "Modern Living Area", category: "Interior", image: "/images/projects/blueberry.jpg" }
    ],
    highlights: ["100% Vaastu Compliant", "Johnson 6-Passenger Lift", "Teak Wood Main Doors", "Power Backup Generator", "Granite Common Area"],
    amenities: ["Intercom System", "Dedicated Car Parking", "Earthquake Resistant RCC", "Smooth Emulsion Wall Finish", "24/7 Water & Power Backup"],
    locationDetails: "Lotus Land Mark, Sector-3, Ayodhya Nagar, Vijayawada",
    architects: {
      design: "Clark Lloyd International (S. Rajeshwara Rao)",
      structural: "VAP Engineers (I) Pvt. Ltd.",
      interiors: "D+D Architecture (K. Ramesh)"
    },
    siteAddress: "Lotus Land Mark, Road No - 3, Sector - 3, Ayodhya Nagar, Vijayawada"
  },

  "apple": {
    id: "apple",
    slug: "apple",
    name: "Apple",
    location: "Mahadevpuram Colony, Kanuru",
    area: "Kanuru",
    city: "Vijayawada",
    status: "ONGOING",
    category: "Apartments",
    heroImage: "/images/projects/apple.jpg",
    exteriorImage: "/images/projects/apple.jpg",
    tagline: "3 BHK Luxury Flats @ Mahadevpuram Colony",
    configurations: ["3 BHK (1445 SFT)"],
    siteArea: "1st Lane, Manikya Nagar",
    unitCount: "5 Floors | 2 Flats per Floor",
    overview: "Apple Residences in Mahadevpuram Colony, Kanuru, provides 3 BHK modern apartments featuring spacious open floor layouts, 3D isometric interior planning, and premium architectural finishes. Perfect for modern families seeking proximity to Bandar Road and top educational hubs.",
    locationHighlights: [
      "Near Mahadev Puram Colony Arch",
      "5 mins from Bandar Road & Autonagar Bus Terminal",
      "Close to Time Hospital & Dhanekula Engineering College",
      "Near Akshara International School & Pinnamaneni Colony"
    ],
    floorPlans: [
      {
        title: "Flat 1 (Typical 3 BHK)",
        size: "1445 SFT",
        type: "3 BHK Flat",
        bedrooms: 3,
        bathrooms: 3,
        balconies: 2,
        dimensions: {
          masterBedroom: "14'6\" x 10'10\"",
          guestBedroom: "10'1½\" x 11'0\"",
          childrenBedroom: "10'1½\" x 14'3\"",
          drawingHall: "11'7½\" x 18'9\"",
          dining: "8'1½\" x 9'4\"",
          kitchen: "7'9\" x 9'0\""
        }
      },
      {
        title: "Flat 2 (Typical 3 BHK)",
        size: "1445 SFT",
        type: "3 BHK Flat",
        bedrooms: 3,
        bathrooms: 3,
        balconies: 2,
        dimensions: {
          masterBedroom: "10'10\" x 14'10\"",
          guestBedroom: "10'9\" x 10'6\"",
          childrenBedroom: "10'9\" x 10'4\"",
          drawingHall: "11'4\" x 26'0\" (Living & Dining)",
          dining: "11'4\" x 26'0\"",
          kitchen: "7'4\" x 10'4\""
        }
      }
    ],
    specifications: {
      "Structure": "RCC framed structure built for wind and earthquake resistance.",
      "Super Structure": "Lightweight clay brick masonry in cement mortar.",
      "Joinery": "Melamine polished teak wood main door frame & shutter. Teak wood frames for internal doors.",
      "Flooring": "Vitrified tiles in rooms. Granite in corridors. Anti-skid ceramic tiles in bathrooms.",
      "Kitchen": "Black granite platform with stainless steel sink and 2' glazed ceramic tiles dado.",
      "Electrical": "Finolex/Havells concealed copper wiring. Provision for AC in bedrooms & living.",
      "Lifts": "Automatic passenger lift of repute.",
      "Generator": "Generator backup for lift, common lighting, and essential flat points."
    },
    gallery: [
      { id: "g1", title: "Elevation View", category: "Exterior", image: "/images/projects/apple.jpg" }
    ],
    highlights: ["3D Isometric Floor Layouts", "Near Bandar Road", "Johnson Elevator", "Clear Title", "Vaastu Designed"],
    amenities: ["Intercom System", "Power Backup", "Covered Car Parking", "Granite Corridors"],
    locationDetails: "Near Mahadev Puram Colony Arch, 1st Lane, Manikya Nagar, Kanuru, Vijayawada",
    architects: {
      design: "D+D Architecture (Ramesh K, Visakhapatnam)",
      structural: "Anne Raghu Ram (Vijayawada)"
    },
    siteAddress: "Near Mahadev Puram Colony Arch, 1st Lane, Manikya Nagar, Kanuru, Vijayawada"
  },

  "cherry": {
    id: "cherry",
    slug: "cherry",
    name: "Cherry",
    location: "Varalakshmi Puram, Kanuru",
    area: "Kanuru",
    city: "Vijayawada",
    status: "COMPLETED",
    category: "Apartments",
    heroImage: "/images/projects/cherry.jpg",
    exteriorImage: "/images/projects/cherry.jpg",
    tagline: "1625 SFT 3 BHK Luxury Residences @ Kanuru",
    configurations: ["3 BHK (1625 SFT)"],
    siteArea: "Varalakshmi Puram",
    unitCount: "5 Floors | 3 BHK Premium Units",
    overview: "Cherry is a completed landmark residential project by Akhil Promoters in Varalakshmi Puram, Kanuru. Featuring 1625 SFT 3 BHK flats on 33' and 40' wide roads with 800x800mm vitrified tiles, teak wood main doors, and full power backup.",
    locationHighlights: [
      "Situated on 40' & 33' wide roads",
      "Near VR Siddhartha Engineering College & Cinepolis",
      "Quick connectivity to Benz Circle & Ramavarappadu Ring",
      "Proximity to Time Hospital & APCOB"
    ],
    floorPlans: [
      {
        title: "3 BHK Premium Unit",
        size: "1625 SFT",
        type: "3 BHK Flat",
        bedrooms: 3,
        bathrooms: 3,
        balconies: 2,
        dimensions: {
          masterBedroom: "14'7\" x 11'0\"",
          guestBedroom: "14'2\" x 10'6\"",
          childrenBedroom: "14'2\" x 11'0\"",
          drawingHall: "14'0\" x 22'7½\"",
          dining: "Combined Living/Dining",
          kitchen: "10'1\" x 10'6\""
        }
      }
    ],
    specifications: {
      "Structure": "RCC framed structure.",
      "Flooring": "800x800mm Vitrified tiles of reputed make.",
      "Doors": "Melamine polished teak wood main door.",
      "Windows": "UPVC Windows with mosquito mesh track.",
      "Lifts": "Six passenger lift with vitrified/granite cladding.",
      "Generator": "Backup for lift, water motor, common lighting & 6 points inside flat."
    },
    gallery: [
      { id: "g1", title: "Cherry Elevation", category: "Exterior", image: "/images/projects/cherry.jpg" }
    ],
    highlights: ["800x800mm Premium Tiles", "UPVC Mosquito Mesh Windows", "Near Benz Circle", "Completed Project"],
    amenities: ["Intercom", "Generator Backup", "Lift with Granite Cladding", "Car Parking"],
    locationDetails: "Varalakshmi Puram, Kanuru, Vijayawada",
    architects: {
      design: "D+D Architecture",
      structural: "Anne Raghu Ram"
    },
    siteAddress: "Varalakshmi Puram, Kanuru, Vijayawada"
  },

  "akhil-signature": {
    id: "akhil-signature",
    slug: "akhil-signature",
    name: "Akhil Signature",
    location: "Banjara Hills / VIP Zone",
    area: "VIP Zone",
    city: "Vijayawada",
    status: "UPCOMING",
    category: "Villas",
    heroImage: "/images/projects/apple.jpg",
    exteriorImage: "/images/projects/apple.jpg",
    tagline: "Signature Ultra-Luxury 4 & 5 BHK Villas",
    configurations: ["4 BHK Villas", "5 BHK Villas"],
    siteArea: "Gated Community",
    unitCount: "Exclusive Villa Enclave",
    overview: "Akhil Signature represents the pinnacle of luxury villa living, featuring individual private gardens, terrace club lounges, smart automation, and architectural grandiosity.",
    locationHighlights: [
      "Prime VIP Residential Zone",
      "Serene Landscaping & Gated Security",
      "Close to Premier International Schools & Shopping Centers"
    ],
    floorPlans: [],
    specifications: {
      "Structure": "Ultra-heavy RCC frame with smart home automation conduit.",
      "Flooring": "Italian Marble & Hardwood Flooring in Master Suite."
    },
    gallery: [],
    highlights: ["Private Terrace Lounges", "Smart Villa Automation", "CREDAI Accredited", "100% Vaastu"],
    amenities: ["Clubhouse", "Swimming Pool", "24/7 Gated Security", "Solar Power Grid"],
    locationDetails: "VIP Zone, Vijayawada",
    architects: { design: "Clark Lloyd International" },
    siteAddress: "VIP Zone, Vijayawada"
  },

  "akhil-heights": {
    id: "akhil-heights",
    slug: "akhil-heights",
    name: "Akhil Heights",
    location: "Pinnamaneni Colony, Kanuru",
    area: "Kanuru",
    city: "Vijayawada",
    status: "ONGOING",
    category: "Apartments",
    heroImage: "/images/projects/blueberry.jpg",
    exteriorImage: "/images/projects/blueberry.jpg",
    tagline: "Premium High-Rise Living in Kanuru",
    configurations: ["3 BHK", "4 BHK Luxury Apartments"],
    siteArea: "Kanuru High Growth Corridor",
    unitCount: "High-Rise Residential Towers",
    overview: "Akhil Heights brings futuristic high-rise residential towers to Kanuru with expansive balconies, multi-tier security, and state-of-the-art community club amenities.",
    locationHighlights: [
      "Walking distance from Akhil Promoters Head Office",
      "Proximity to Pinnamaneni Teachers Colony",
      "Direct access to Bandar Road"
    ],
    floorPlans: [],
    specifications: {
      "Structure": "Seismic Zone compliant high-rise RCC design.",
      "Joinery": "Teak doors and double-glazed soundproof UPVC windows."
    },
    gallery: [],
    highlights: ["High-rise Views", "Multi-tier Security", "Children Play Zone", "EV Charging Point"],
    amenities: ["Automatic Elevators", "High Speed Fiber Internet", "Power Backup", "Gym & Yoga Deck"],
    locationDetails: "Kanuru, Vijayawada",
    architects: { design: "D+D Architecture" },
    siteAddress: "Kanuru, Vijayawada"
  }
};
