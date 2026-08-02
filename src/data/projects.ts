export interface Project {
  slug: string;
  name: string;
  location: string;
  type: string;
  size: string;
  heroImage: string;
  thumbnailImage: string;
  description: string;
  address: string;
  architects: string;
  structural: string;
  reraNo?: string;
  floorPlans: {
    title: string;
    image: string;
    area?: string;
    facing?: string;
  }[];
  specifications: {
    category: string;
    details: string;
  }[];
  amenities: string[];
  nearbyPlaces: string[];
}

export const projectsData: Record<string, Project> = {
  apple: {
    slug: "apple",
    name: "Apple",
    location: "Kanuru, Vijayawada",
    type: "3 BHK Premium Apartments",
    size: "1445 SFT",
    heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
    thumbnailImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
    description: "A premium 3 BHK apartment project offering independent flats designed as per Vaastu with excellent ventilation. Situated in an ideal location near markets, schools, and hospitals.",
    address: "Near Mahadev Puram Colony Arch, 1st Lane, Manikya Nagar, Kanuru, Vijayawada",
    architects: "D+D Architecture (Ramesh K, B.Arch, CPM, RACA, AIIA)",
    structural: "Anne Raghu Ram",
    floorPlans: [
      {
        title: "Typical Floor Plan (2 Units)",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
        area: "1445 sft"
      }
    ],
    specifications: [
      { category: "Structure", details: "RCC framed structure designed to withstand wind and seismic loads." },
      { category: "Super Structure", details: "Light weight clay brick masonry in cement mortar for internal and external walls." },
      { category: "Plastering", details: "Internal Walls: Single coat smooth finished plastering. External Walls: Double coat smooth finished plastering." },
      { category: "Joinery", details: "Maindoor: Melamine polished teak wood frame with teak wood shutter esthetically designed and designer hardware of reputed make. Internal Doors: Teak wood frames with water proof flush door shutters. Windows: UPVC Windows / Window frames and shutters with teak wood, MS safety grill and glass panel." },
      { category: "Cupboards", details: "Finished cupboards upto 20% of plinth area." },
      { category: "Flooring", details: "Inside Flat: Vitrified tiled flooring. Common Areas: Granite. Parking Area: Parking Tiles. Bathroom Floors: Anti skid Ceramic tiles. Walls: Glazed tiles dado up to ceiling level." },
      { category: "Painting", details: "Interior walls: One coat of primer and two coats of plastic emulsion paint over interior wall putty. Exterior walls: One coat of primer and two coats of Apex paints over exterior wall putty." },
      { category: "Plumbing & Sanitary", details: "CPVC hot and cold water plumbing lines with C.P. Fittings of Jaquar or equivalent make. UPVC sanitary pipe lines with sanitaryware of hindware or equivalent make." },
      { category: "Kitchen", details: "Black Granite platform with stainless steel sink and 2' height glazed ceramic tiles dado over platform. Glazed tiles dado up to 3' height in wash/utility." },
      { category: "Electrical", details: "Concealed copper wiring of finolex/Havells or equivalent make. Premium quality distribution boards and MCBs shall be of reputed make. Modular switches and sockets of Legrand, GM or equivalent make." },
      { category: "Generator", details: "Generator backup for lift, water motor, common lighting, all lights and fans inside the flat." },
      { category: "Communication", details: "Intercom facility to all flats connecting the security. Telephone points in master bedroom and living room." },
      { category: "Lifts", details: "Automatic 6 passengers lift of Johnson or equivalent make." }
    ],
    amenities: [
      "Ideal location",
      "Quality Construction",
      "Independent Flats",
      "100% Vaastu Compliant",
      "Clear Title",
      "Excellent Ventilation",
      "Beautiful and aesthetic elevation",
      "Earthquake Resistant Design",
      "Power Backup Generator",
      "Car Parking for each Flat",
      "Intercom System"
    ],
    nearbyPlaces: [
      "Time Hospital",
      "Autonagar Bus Terminal",
      "Dhanekula Kalyana Mandapam",
      "Akshara International School"
    ]
  },
  blueberry: {
    slug: "blueberry",
    name: "Blueberry",
    location: "Ayodhya Nagar, Vijayawada",
    type: "3 BHK Luxury Flats",
    size: "1930 SFT & 2020 SFT",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    thumbnailImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    description: "An elegant residential development featuring spacious 3 BHK flats. Experience quality construction with earthquake-resistant design and beautiful aesthetic elevation.",
    address: "Lotus Land Mark, Road No - 3, Sector - 3, Ayodhya Nagar, Vijayawada",
    architects: "Clark Lloyd International (S.Rajeswara Rao)",
    structural: "VAP Engineers (I) Pvt. Ltd. (Dr. V.Anjaneya Prasad)",
    floorPlans: [
      {
        title: "Typical Floor Plan (Unit 1)",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
        area: "1930 SFT"
      },
      {
        title: "Typical Floor Plan (Unit 2)",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
        area: "2020 SFT"
      }
    ],
    specifications: [
      { category: "Structure", details: "RCC framed structure designed to withstand wind and seismic loads." },
      { category: "Super Structure", details: "Light weight clay brick masonry in cement mortar for internal and external walls." },
      { category: "Plastering", details: "Internal Walls: Single coat smooth finished plastering. External Walls: Double coat smooth finished plastering." },
      { category: "Joinery", details: "Maindoor: Melamine polished teak wood frame with teak wood shutter esthetically designed and designer hardware of reputed make. Internal Doors: Teak wood frames with water proof flush door shutters. Windows: UPVC Windows / Window frames and shutters with teak wood, MS safety grill and glass panel." },
      { category: "Cupboards", details: "Finished cupboards upto 20% of plinth area." },
      { category: "Flooring", details: "Inside Flat: Vitrified tiled flooring. Common Areas: Granite. Parking Area: Parking Tiles. Bathroom Floors: Anti skid Ceramic tiles. Walls: Glazed tiles dado up to ceiling level." },
      { category: "Painting", details: "Interior walls: One coat of primer and two coats of plastic emulsion paint over interior wall putty. Exterior walls: One coat of primer and two coats of Apex paints over exterior wall putty." },
      { category: "Plumbing & Sanitary", details: "CPVC hot and cold water plumbing lines with C.P. Fittings of Jaquar or equivalent make." },
      { category: "Kitchen", details: "Black Granite platform with stainless steel sink and 2' height glazed ceramic tiles dado over platform." },
      { category: "Electrical", details: "Concealed copper wiring of finolex/Havells or equivalent make. Modular switches and sockets of Legrand, GM or equivalent make." },
      { category: "Generator", details: "Generator backup for lift, water motor, common lighting, all lights and fans inside the flat." },
      { category: "Communication", details: "Intercom facility to all flats connecting the security." },
      { category: "Lifts", details: "Automatic 6 passengers lift of Johnson or equivalent make." }
    ],
    amenities: [
      "Ideal location",
      "Quality Construction",
      "Independent Flats",
      "All flats are designed as per Vaastu",
      "Clear Title",
      "Excellent Ventilation",
      "Beautiful and aesthetic elevation",
      "Earthquake Resistant Design",
      "Power Backup Generator",
      "Car Parking for each Flat"
    ],
    nearbyPlaces: [
      "Kedaravara Pet Fruit Market",
      "Prabhas College",
      "KCP Godown",
      "Raghavendra Theater",
      "Eluru Canal"
    ]
  },
  cherry: {
    slug: "cherry",
    name: "Cherry",
    location: "Kanuru, Vijayawada",
    type: "3 BHK Flats",
    size: "1625 SFT",
    heroImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    thumbnailImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    description: "Modern 3 BHK flats designed for luxury and comfort. Ideally located near major transport hubs with 100% Vaastu compliance.",
    address: "Varalakshmi Puram, Kanuru, Vijayawada",
    architects: "D+D Architecture (Ramesh K)",
    structural: "Anne Raghu Ram",
    floorPlans: [
      {
        title: "Typical Floor Plan (33' Wide Road & 40' Wide Road)",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
        area: "1625 SFT"
      }
    ],
    specifications: [
      { category: "Structure", details: "R.C.C framed structure to withstand wind and seismic loads." },
      { category: "Super Structure", details: "Light weight clay brick masonry in cement mortar for internal and external walls." },
      { category: "Plastering", details: "Internal Walls: Single coat smooth finished plastering. External Walls: Double coat smooth finished plastering." },
      { category: "Joinery", details: "Maindoor: Melamine polished teak wood frame with teak wood shutter esthetically designed and designer hardware of reputed make. Internal Doors: Teak wood frames with water proof flush door shutters. Windows: UPVC Windows with mosquito mess track." },
      { category: "Flooring", details: "Living, dining, bedroom and kitchen: 800X800mm Vitrified tiles. Bathrooms: Acid-resistant, anti-skid tiles. Corridors and Staircase: Granite." },
      { category: "Tile Cladding", details: "Bathrooms: Glazed tile dado up to 7ft height. Kitchen: Glazed tile dado up to 2ft height above kitchen platform." },
      { category: "Painting", details: "Internal: Smooth putty finish with two coats of emulsion paint. External: Textured/putty finish with two coats of exterior emulsion paint." },
      { category: "Kitchen", details: "Granite platform with stainless steel sink. Provision for Municipal/Panchayath water along with bore well water." },
      { category: "Bathrooms", details: "All C.P fittings and sanitary ware of reputed make. Provision for geysers in all bathrooms." },
      { category: "Electrical", details: "Concealed copper wiring of reputed make. 3 phase supply for each flat and individual meter boards. MCB for each distribution board." },
      { category: "Generator", details: "Generator backup for lift, water motor, common lighting, six points inside each flat." },
      { category: "Communication", details: "Intercom facility to all flats connecting the security. Cable TV and Internet provision in each flat." },
      { category: "Lifts", details: "Six passenger lift of reputed make with vitrified tile/granite cladding." },
      { category: "Parking", details: "One car park each for all the flats." }
    ],
    amenities: [
      "100% Vaastu Compliant",
      "Power Backup Generator",
      "Car Parking for each Flat",
      "Intercom Facility",
      "Earthquake Resistant Design"
    ],
    nearbyPlaces: [
      "Time Hospital",
      "Cinepolis",
      "Capital Super Market",
      "Nagarjuna Hospital",
      "V.R.Siddartha Engg College"
    ]
  },
  daffodils: {
    slug: "daffodils",
    name: "Daffodils",
    location: "Poranki, Vijayawada",
    type: "3 BHK Flats",
    size: "1700 SFT & 1730 SFT",
    reraNo: "P06180033262",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    thumbnailImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    description: "Premium AP RERA approved 3 BHK apartments offering East Facing and North Facing units. A masterpiece of structure and design with uncompromising quality.",
    address: "Tadigadapa 100FT Road, Poranki, Vijayawada",
    architects: "Anne Raghuram",
    structural: "Anne Raghu Ram",
    floorPlans: [
      {
        title: "3BHK (East Facing)",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
        area: "1700 SFT",
        facing: "East"
      },
      {
        title: "3BHK (North Facing)",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
        area: "1730 SFT",
        facing: "North"
      }
    ],
    specifications: [
      { category: "Structure", details: "R.C.C framed structure to withstand wind and seismic loads." },
      { category: "Super Structure", details: "Light weight clay brick masonry in cement mortar for internal and external walls." },
      { category: "Plastering", details: "Internal Walls: Single coat smooth finished plastering. External Walls: Double coat smooth finished plastering." },
      { category: "Joinery", details: "Maindoor: Melamine polished teak wood frame with teak wood shutter esthetically designed and designer hardware of reputed make. Internal Doors: Teak wood frames with water proof flush door shutters. Windows: UPVC Windows with mosquito mess track and MS Safety Grill." },
      { category: "Flooring", details: "Living, dining, bedrooms and kitchen with Vitrified tiles. Bathrooms: Acid-resistant, anti-skid tiles. Corridors and Staircase: Granite." },
      { category: "Tile Cladding", details: "Bathrooms: Glazed tile dado up to 7ft height. Kitchen: Glazed tile dado up to 2ft height above kitchen platform." },
      { category: "Painting", details: "Internal: Smooth putty finish with two coats of emulsion paint. External: Textured/putty finish with two coats of exterior emulsion paint." },
      { category: "Kitchen", details: "Granite platform with stainless steel sink. Provision for Municipal/Panchayath water along with bore well water." },
      { category: "Bathrooms", details: "All C.P fittings and sanitary ware of reputed make. Provision for geysers in all bathrooms." },
      { category: "Electrical", details: "Concealed copper wiring of reputed make. 3 phase supply for each flat and individual meter boards." },
      { category: "Cupboards", details: "Finished cupboards up to 20% of plinth area." },
      { category: "Ceiling", details: "Gypsum ceiling in bedrooms, living and dining." },
      { category: "Generator", details: "Generator backup for lift, water motor, common lighting, six points inside each flat." },
      { category: "Communication", details: "Intercom facility to all flats connecting the security. Cable TV and Internet provision in each flat." },
      { category: "Lifts", details: "Six passenger lift of reputed make. Lift entrance with vitrified tile/granite cladding." },
      { category: "Parking", details: "One car park each for all the flats." }
    ],
    amenities: [
      "Gypsum Ceiling included",
      "Cupboards included",
      "AP RERA Approved",
      "Power Backup Generator",
      "Car Parking for each Flat"
    ],
    nearbyPlaces: [
      "Kamineni Hospital - 1 Kms",
      "Shamrock School - 4 Kms",
      "Gannavaram Airport - 12 Kms",
      "Railway Station - 12 Kms",
      "Bus Station - 12 Kms",
      "Benz Circle - 8 Kms",
      "D-Mart & Best Price - 2 Kms"
    ]
  }
};
export const getAllProjects = () => Object.values(projectsData);
export const getProjectBySlug = (slug: string) => projectsData[slug];
