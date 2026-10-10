export const resortDetails = {
  name: "Shriji Resorts & Marriage Garden",
  tagline: "Rewa's Most Prestigious Destination Wedding & Luxury Resort",
  address: "Shiv Nagar Road, Near Makhan Lal Chaturvedi University, Allahabad Road, Rewa, Madhya Pradesh 486001",
  landmark: "Near Makhan Lal Chaturvedi University",
  city: "Rewa, Madhya Pradesh",
  pincode: "486001",
  phones: ["+91 94251 86600", "+91 98272 55500", "+91 7662 292040"],
  email: "reservations@shrijiresortrewa.com",
  whatsapp: "919425186600",
  openingHours: "Open 24 Hours / 7 Days a Week",
  capacity: "Up to 2,000 Guests",
  lawnSize: "35,000 Sq. Ft. Manicured Greenery",
  banquetSize: "10,000 Sq. Ft. Air-Conditioned Grand Hall",
  features: [
    "Sprawling 1500+ Guest Capacity Marriage Lawn",
    "Fully Air-Conditioned Royal Banquet Hall",
    "Pristine Crystal Blue Swimming Pool & Lounge",
    "Luxury AC Rooms & Heritage Suites for Guests",
    "In-house Gourmet Catering (Veg & Multi-Cuisine)",
    "Grand Entrance Arch & Royal Barat Pathway",
    "Ample Secured Parking (200+ Vehicles)",
    "24/7 Power Backup & CCTV Surveillance"
  ]
};

export const venues = [
  {
    id: "marriage-lawn",
    name: "Royal Marriage Lawn",
    capacity: "1,500 - 2,000 Guests",
    type: "Open-Air Garden",
    image: "/gallery/mandap.jpg",
    description: "Expansive 35,000 sq ft lush green manicured lawn featuring custom mandap stage in vibrant drapery, ambient lighting, and grand Barat welcome walkway.",
    highlights: ["Open Sky Royal Mandap", "Illuminated Floral Arch", "Dedicated Dining Pavilion", "Barat Stage & DJ Floor"]
  },
  {
    id: "banquet-hall",
    name: "Imperial AC Banquet & VIP Lounge",
    capacity: "400 - 600 Guests",
    type: "Air-Conditioned Indoor",
    image: "/gallery/banquet.jpg",
    description: "Opulent indoor banquet hall and VIP dining lounge featuring royal sofa seating, VIP dining setup, acoustic wall panels, and central AC.",
    highlights: ["Central AC & Climate Control", "Plush Royal Sofa Lounge", "VIP Dining Setup", "Acoustic Wall Panels & Lighting"]
  },
  {
    id: "poolside-lounge",
    name: "Crystal Poolside & Haldi Stage",
    capacity: "150 - 500 Guests",
    type: "Pool Deck & Event Stage",
    image: "/gallery/poolside_haldi.jpg",
    description: "Serene poolside venue equipped with custom Haldi & Mehendi stage truss, sun loungers, and crystal-clear swimming pool deck for sundowner celebrations.",
    highlights: ["Crystal Blue Swimming Pool", "Custom Haldi/Mehendi Stage", "Poolside Loungers & Umbrellas", "Sunset & Golden Hour Lighting"]
  },
  {
    id: "night-canopy",
    name: "Night Canopy Garden Lawn",
    capacity: "200 - 600 Guests",
    type: "Garden Lawn & Cabana",
    image: "/gallery/lawn_night_tents.jpg",
    description: "Atmospheric open lawn adorned with colorful canopy tents, illuminated dining pavilions, and plush seating ideal for Haldi, Mehendi, Sangeet & night receptions.",
    highlights: ["Tented Canopy Lounges", "Luxury Cabanas & Seating", "Buffet & Mocktail Counter", "Night Ambient Floodlights"]
  },
  {
    id: "heritage-villas",
    name: "Resort Accommodations",
    capacity: "25+ AC Luxury Rooms",
    type: "Guest Lodging",
    image: "/gallery/suite.jpg",
    description: "Elegantly appointed air-conditioned rooms and heritage suites with plush double bedding, lounge seating, attached baths, and resort views.",
    highlights: ["24/7 Room Service", "Private Lounge Seating", "Attach Bathrooms with Geysers", "Air Conditioning & TV"]
  }
];

export const accommodations = [
  {
    id: "deluxe-yellow-suite",
    name: "Executive Luxury AC Room",
    price: 3500,
    per: "night",
    image: "/gallery/suite.jpg",
    bed: "King Bed + Plush Lounge Sofa",
    view: "Resort Garden View",
    size: "380 sq ft",
    amenities: ["Air Conditioning", "Sofa Seating Lounge", "Attached Modern Bath", "24/7 Hot Water", "Daily Housekeeping"],
    popular: true
  },
  {
    id: "poolside-villa",
    name: "Poolside Luxury Villa",
    price: 4800,
    per: "night",
    image: "/gallery/poolside_haldi.jpg",
    bed: "King Bed + Pool Deck Access",
    view: "Swimming Pool View",
    size: "420 sq ft",
    amenities: ["Direct Pool Access", "Haldi Deck View", "AC Climate Control", "Luxury Bathrobe", "Room Service"]
  },
  {
    id: "royal-suite",
    name: "Royal Maharaja Suite",
    price: 6500,
    per: "night",
    image: "/gallery/suite.jpg",
    bed: "King Four-Poster Bed",
    view: "Lawn & Garden View",
    size: "550 sq ft",
    amenities: ["Free Wi-Fi", "4K Smart TV", "Mini Fridge", "Royal Balcony", "Tea/Coffee Maker", "Complimentary Breakfast"]
  }
];

export const galleryImages = [
  { id: 1, title: "Royal Marriage Lawn & Mandap", category: "weddings", url: "/gallery/mandap.jpg", desc: "Illuminated wedding mandap stage on the 35,000 sq ft marriage lawn" },
  { id: 2, title: "Shreeji AC Banquet Hall", category: "banquet", url: "/gallery/banquet.jpg", desc: "Grand AC banquet hall featuring acoustic wall branding & sofa seating" },
  { id: 3, title: "Night Canopy Garden Lounge", category: "weddings", url: "/gallery/lawn_night_tents.jpg", desc: "Illuminated open-air canopy tent lounges & dining pavilion" },
  { id: 4, title: "Executive Luxury AC Suite", category: "rooms", url: "/gallery/suite.jpg", desc: "Luxury suite accommodation with king bedding & modern bath" },
  { id: 5, title: "Crystal Poolside & Haldi Deck", category: "resort", url: "/gallery/poolside_haldi.jpg", desc: "Poolside lounge deck & custom Haldi / Mehendi event stage" },
  { id: 6, title: "Royal Wedding Dining Hall", category: "banquet", url: "/gallery/banquet.jpg", desc: "AC banquet hall dining tables & stage decor" }
];

export const faqs = [
  {
    q: "What is the total guest capacity of Shriji Resorts & Marriage Garden?",
    a: "Our open marriage garden can accommodate up to 2,000 guests comfortably, while our indoor AC Banquet Hall accommodates up to 600 guests."
  },
  {
    q: "Do you provide room lodging for wedding guests?",
    a: "Yes! We have 25+ fully air-conditioned luxury rooms and heritage suites right inside the resort premises with 24/7 room service and hot water."
  },
  {
    q: "Where is Shriji Resorts located in Rewa?",
    a: "We are conveniently located on Shiv Nagar Road, near Makhan Lal Chaturvedi University on Allahabad Road, Rewa, MP (Pincode 486001)."
  },
  {
    q: "Can we customize our catering menu and decor theme?",
    a: "Absolutely! We offer 100% customizable pure vegetarian multi-cuisine catering menus and custom decor themes."
  }
];

export const eventCategories = [
  {
    id: "weddings",
    title: "Wedding Parties & Receptions",
    subtitle: "Grand Barat, Sacred Phere & Regal Feasts",
    category: "weddings",
    tag: "Royal Wedding Experience",
    capacity: "500 – 2,000 Guests",
    venue: "Royal Marriage Lawn + AC Banquet Hall",
    image: "/gallery/mandap.jpg",
    description: "Sprawling 35,000 sq ft illuminated open lawn featuring grand Barat welcome walkway, custom floral mandap stage, VIP sofa lounges, and gourmet banquet feast.",
    highlights: [
      "Grand Barat Welcome Pathway & Stage",
      "Central Mandap with Custom Royal Drapery",
      "Pure Vegetarian Gourmet Multi-Cuisine Feast",
      "25+ AC Luxury Guest Suites On-Site"
    ]
  },
  {
    id: "engagements",
    title: "Engagements & Ring Ceremonies",
    subtitle: "Auspicious Sagar & Ring Exchange",
    category: "engagements",
    tag: "Romantic Milestone",
    capacity: "200 – 600 Guests",
    venue: "Imperial AC Banquet Hall & VIP Lounge",
    image: "/gallery/banquet.jpg",
    description: "Opulent climate-controlled celebration featuring romantic floral backdrops, crystal chandelier ambience, plush sofa seating for elders, and decadent appetizers.",
    highlights: [
      "Custom Themed Ring Exchange Stage",
      "Central AC with Premium Acoustic Panels",
      "Plush Royal Sofa Seating for Elders & VIPs",
      "Welcome Mocktails & Multi-Course Dining"
    ]
  },
  {
    id: "birthdays",
    title: "Birthday Parties & Celebrations",
    subtitle: "1st to 50th Milestones & Kids Themes",
    category: "birthdays",
    tag: "High Energy & Fun",
    capacity: "100 – 500 Guests",
    venue: "Crystal Poolside Deck & Night Canopies",
    image: "/gallery/poolside.jpg",
    description: "High-energy celebration with vibrant theme decor, poolside breeze, live music DJ floor, interactive kids entertainment, and customized party catering.",
    highlights: [
      "Custom Themed Backdrop & Balloon Arches",
      "Live DJ Floor with Dynamic Party Lighting",
      "Live Chaat, Pizza & Mocktail Counters",
      "Crystal Swimming Pool Deck Ambience"
    ]
  },
  {
    id: "retirement",
    title: "Retirement Parties & Corporate Meets",
    subtitle: "Honoring Decades of Dedication",
    category: "retirement",
    tag: "Dignified & Memorable",
    capacity: "100 – 450 Guests",
    venue: "Imperial AC Banquet & VIP Dining Lounge",
    image: "/gallery/vip_lounge_hall.jpg",
    description: "A warm, dignified gathering to felicitate retirement and corporate milestones. Featuring AV presentation facilities, keynote stage, and fine family dining.",
    highlights: [
      "Felicitation Stage with Podium & AV Mic Setup",
      "Comfortable Sofa & Round Table Dining Setup",
      "Traditional Multi-Course Vegetarian Dinner",
      "Dedicated Photography & Memento Corner"
    ]
  },
  {
    id: "mundan",
    title: "Mundan Sanskar & Sacred Pooja",
    subtitle: "Holy Childhood Vedic Rites & Rituals",
    category: "mundan",
    tag: "Auspicious & Sacred",
    capacity: "150 – 500 Guests",
    venue: "Crystal Poolside & Green Garden Lawn",
    image: "/gallery/sunset_mandap.jpg",
    description: "Traditional Vedic havan arrangements and auspicious ceremony setups surrounded by peaceful greenery, followed by satvik traditional feast and family rest suites.",
    highlights: [
      "Sacred Havan Kund & Pooja Stage Setup",
      "100% Satvik, Jain & Traditional Pure Veg Meals",
      "Morning & Afternoon Auspicious Muhurat Support",
      "AC Guest Rooms for Family Rest & Changing"
    ]
  },
  {
    id: "anniversaries",
    title: "Anniversaries & Sangeet Nights",
    subtitle: "Silver/Golden Jubilees & Musical Sundowners",
    category: "anniversaries",
    tag: "Joyous Memories",
    capacity: "200 – 800 Guests",
    venue: "Night Canopy Garden Lawn & Pool Deck",
    image: "/gallery/lawn_night_tents.jpg",
    description: "Atmospheric evening under festive canopy tents with ambient fairy lights, nostalgic memory reels, live musical performances, and late-night celebrations.",
    highlights: [
      "Illuminated Night Canopy Tents & Cabanas",
      "Spacious Wooden Dance & Sangeet Stage",
      "Nostalgic Photo Memory Gallery Wall",
      "Late-Night Dessert & Traditional Chai Stalls"
    ]
  }
];

