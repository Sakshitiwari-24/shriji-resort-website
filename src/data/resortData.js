export const resortDetails = {
  name: "Shriji Resorts & Marriage Garden",
  tagline: "Best Wedding Venue, Marriage Garden & Resort in Rewa",
  address: "Shiv Nagar Road, Near Makhan Lal Chaturvedi University, Allahabad Road, Rewa, Madhya Pradesh 486001",
  landmark: "Near Makhan Lal Chaturvedi University",
  city: "Rewa, Madhya Pradesh",
  pincode: "486001",
  phones: ["+91 94251 86600", "+91 98272 55500", "+91 7662 292040"],
  email: "reservations@shrijiresortrewa.com",
  whatsapp: "919425186600",
  openingHours: "Open 24 Hours, 7 Days a Week",
  capacity: "Up to 2,000 Guests",
  lawnSize: "35,000 Sq. Ft. Open Green Lawn",
  banquetSize: "10,000 Sq. Ft. AC Banquet Hall",
  features: [
    "Large Marriage Lawn for 1,500 to 2,000 Guests",
    "Fully Air-Conditioned Indoor Banquet Hall",
    "Clean Swimming Pool & Poolside Area",
    "25+ AC Guest Rooms & Bridal Suites",
    "Pure Veg & Multi-Cuisine In-House Catering",
    "Grand Entrance Gate & Barat Pathway",
    "Safe Parking for 200+ Vehicles",
    "24/7 Power Backup & CCTV Security"
  ]
};

export const venues = [
  {
    id: "marriage-lawn",
    name: "Main Marriage Lawn",
    capacity: "1,500 - 2,000 Guests",
    type: "Open-Air Garden",
    image: "/gallery/mandap.jpg",
    description: "Large 35,000 sq ft green lawn with a decorated mandap stage, bright lights, dining area, and wide Barat entrance.",
    highlights: ["Open-Air Mandap Stage", "Decorated Entrance Gate", "Separate Dining Area", "Barat Stage & DJ Floor"]
  },
  {
    id: "banquet-hall",
    name: "AC Banquet Hall",
    capacity: "400 - 600 Guests",
    type: "Air-Conditioned Indoor",
    image: "/gallery/banquet.jpg",
    description: "Spacious air-conditioned indoor hall with comfortable sofa seating, VIP dining area, and clean lighting and sound.",
    highlights: ["Full Central AC", "Comfortable Sofa Seating", "VIP Dining Area", "Quality Sound & Lighting"]
  },
  {
    id: "poolside-lounge",
    name: "Poolside & Haldi Deck",
    capacity: "150 - 500 Guests",
    type: "Poolside Event Area",
    image: "/gallery/poolside_haldi.jpg",
    description: "Clean swimming pool area with poolside seating and a stage setup, great for Haldi, Mehendi, and evening gatherings.",
    highlights: ["Clean Swimming Pool", "Haldi & Mehendi Stage", "Poolside Chairs & Umbrellas", "Evening Decorative Lights"]
  },
  {
    id: "night-canopy",
    name: "Garden Tent Lawn",
    capacity: "200 - 600 Guests",
    type: "Open Lawn & Tents",
    image: "/gallery/lawn_night_tents.jpg",
    description: "Open garden area decorated with canopy tents, warm lights, and dining stalls for Haldi, Mehendi, Sangeet, and night functions.",
    highlights: ["Decorative Canopy Tents", "Comfortable Lounge Seating", "Buffet & Drink Counters", "Bright Night Lighting"]
  },
  {
    id: "heritage-villas",
    name: "AC Guest Rooms",
    capacity: "25+ AC Rooms",
    type: "Guest Stay",
    image: "/gallery/suite.jpg",
    description: "Clean, air-conditioned rooms and family suites with comfortable beds, seating, and attached modern bathrooms right inside the resort.",
    highlights: ["24/7 Room Service", "Comfortable Seating", "Attached Bathrooms with Geyser", "AC & Smart TV"]
  }
];

export const accommodations = [
  {
    id: "deluxe-yellow-suite",
    name: "Deluxe AC Room",
    image: "/gallery/suite.jpg",
    bed: "King Bed + Sofa Seating",
    view: "Garden View",
    size: "380 sq ft",
    amenities: ["Air Conditioning", "Sofa Seating", "Attached Modern Bath", "24/7 Hot Water", "Daily Cleaning"],
    popular: true
  },
  {
    id: "poolside-villa",
    name: "Poolside AC Room",
    image: "/gallery/poolside_haldi.jpg",
    bed: "King Bed + Poolside Access",
    view: "Pool View",
    size: "420 sq ft",
    amenities: ["Direct Pool Access", "Pool Deck View", "Air Conditioning", "Attached Modern Bath", "24/7 Room Service"]
  },
  {
    id: "royal-suite",
    name: "Family & Bridal Suite",
    image: "/gallery/suite.jpg",
    bed: "Large King Bed",
    view: "Lawn & Garden View",
    size: "550 sq ft",
    amenities: ["Free Wi-Fi", "Smart TV", "Mini Fridge", "Private Balcony", "Tea/Coffee Maker", "Breakfast Included"]
  }
];

export const galleryImages = [
  { id: 1, title: "Marriage Lawn & Mandap", category: "weddings", url: "/gallery/mandap.jpg", desc: "Decorated wedding mandap stage on our 35,000 sq ft open lawn" },
  { id: 2, title: "AC Banquet Hall", category: "banquet", url: "/gallery/banquet.jpg", desc: "Spacious indoor AC hall with comfortable sofa seating" },
  { id: 3, title: "Evening Tent Garden", category: "weddings", url: "/gallery/lawn_night_tents.jpg", desc: "Lit open-air canopy tents and dining space for night events" },
  { id: 4, title: "Deluxe AC Suite", category: "rooms", url: "/gallery/suite.jpg", desc: "Clean AC room with large bed and attached modern bathroom" },
  { id: 5, title: "Poolside & Haldi Stage", category: "resort", url: "/gallery/poolside_haldi.jpg", desc: "Swimming pool area with Haldi and Mehendi event stage" },
  { id: 6, title: "Indoor Dining Hall", category: "banquet", url: "/gallery/vip_lounge_hall.jpg", desc: "Comfortable indoor dining area with sofa seating for guests" },
  { id: 7, title: "Floral Mandap Setup", category: "weddings", url: "/gallery/sunset_mandap.jpg", desc: "Beautiful evening mandap decorated with fresh flowers" },
  { id: 8, title: "Guest Room", category: "rooms", url: "/gallery/room_yellow.jpg", desc: "Comfortable AC guest room with neat bedding and warm lighting" },
  { id: 9, title: "Green Garden Area", category: "resort", url: "/gallery/canopy_lawn.jpg", desc: "Open green lawn with white garden seating tents" },
  { id: 10, title: "Grand Welcome Gate", category: "weddings", url: "/gallery/real_1.jpg", desc: "Brightly lit main entrance gate for welcoming the Barat" },
  { id: 11, title: "Evening Poolside", category: "resort", url: "/gallery/poolside.jpg", desc: "Swimming pool with poolside chairs and evening lights" },
  { id: 12, title: "Shriji Resort Building", category: "resort", url: "/gallery/exterior_facade.jpg", desc: "Front view of Shriji Resort surrounded by open greenery" }
];

export const faqs = [
  {
    q: "How many guests can Shriji Resort host?",
    a: "Our open marriage lawn can comfortably host up to 2,000 guests, and our indoor AC Banquet Hall can host up to 600 guests."
  },
  {
    q: "Are rooms available for wedding guests?",
    a: "Yes, we have 25+ clean AC rooms and family suites inside the resort with 24/7 room service and hot water."
  },
  {
    q: "Where is Shriji Resort located in Rewa?",
    a: "We are on Shiv Nagar Road, near Makhan Lal Chaturvedi University, Allahabad Road, Rewa, MP (486001)."
  },
  {
    q: "Can we choose our own catering menu and decoration?",
    a: "Yes! You can customize the pure veg catering menu and choose the decoration style you want for your event."
  }
];

export const eventCategories = [
  {
    id: "weddings",
    title: "Weddings & Receptions",
    subtitle: "Barat, Mandap & Wedding Dinner",
    category: "weddings",
    tag: "Grand Weddings",
    capacity: "500 – 2,000 Guests",
    venue: "Main Marriage Lawn + AC Banquet Hall",
    image: "/gallery/mandap.jpg",
    description: "Our 35,000 sq ft open lawn is ideal for big weddings, with a grand Barat entrance, decorated mandap stage, sofa seating, and pure veg dinner.",
    highlights: [
      "Wide Barat Entrance & Welcome Stage",
      "Decorated Mandap with Floral Setup",
      "Pure Veg Multi-Cuisine Wedding Dinner",
      "25+ AC Guest Rooms Inside the Resort"
    ]
  },
  {
    id: "engagements",
    title: "Engagements & Ring Ceremonies",
    subtitle: "Ring Exchange & Family Gathering",
    category: "engagements",
    tag: "Special Occasion",
    capacity: "200 – 600 Guests",
    venue: "AC Banquet Hall & Lounge",
    image: "/gallery/banquet.jpg",
    description: "Host your engagement in our comfortable AC banquet hall with a floral stage, warm lighting, sofa seating for elders, and tasty food.",
    highlights: [
      "Decorated Ring Ceremony Stage",
      "Full Central AC with Good Sound System",
      "Comfortable Sofa Seating for Elders",
      "Welcome Drinks & Full Veg Dinner"
    ]
  },
  {
    id: "birthdays",
    title: "Birthday Parties",
    subtitle: "Kids, Family & Milestone Birthdays",
    category: "birthdays",
    tag: "Fun & Lively",
    capacity: "100 – 500 Guests",
    venue: "Poolside Deck & Garden Tents",
    image: "/gallery/poolside.jpg",
    description: "Celebrate birthdays with colorful theme decoration, open poolside space, DJ dance floor, live snack stalls, and tasty party food.",
    highlights: [
      "Theme Decoration & Balloon Arches",
      "DJ Music & Party Lighting",
      "Live Chaat, Pizza & Mocktail Stalls",
      "Open Poolside Seating Area"
    ]
  },
  {
    id: "retirement",
    title: "Retirement & Office Events",
    subtitle: "Farewell Parties & Corporate Meets",
    category: "retirement",
    tag: "Well-Organized",
    capacity: "100 – 450 Guests",
    venue: "AC Banquet Hall & Dining Lounge",
    image: "/gallery/vip_lounge_hall.jpg",
    description: "A clean and comfortable hall for retirement farewells and office meetings, with stage, mic and speakers, neat seating, and family dinner.",
    highlights: [
      "Stage with Podium, Mic & Sound Setup",
      "Sofa & Round Table Dining Seating",
      "Pure Veg Multi-Course Dinner",
      "Photo & Gift Corner"
    ]
  },
  {
    id: "mundan",
    title: "Mundan & Family Pooja",
    subtitle: "Traditional Pooja, Havan & Ceremonies",
    category: "mundan",
    tag: "Traditional & Peaceful",
    capacity: "150 – 500 Guests",
    venue: "Poolside & Green Garden Lawn",
    image: "/gallery/sunset_mandap.jpg",
    description: "Peaceful outdoor space for havan and family pooja ceremonies, followed by pure veg or satvik meals and AC rooms for family rest.",
    highlights: [
      "Clean Havan & Pooja Stage Setup",
      "Pure Veg, Jain & Satvik Food Options",
      "Morning & Afternoon Event Support",
      "AC Rooms for Family Rest"
    ]
  },
  {
    id: "anniversaries",
    title: "Anniversaries & Sangeet Nights",
    subtitle: "Jubilee Parties & Musical Evenings",
    category: "anniversaries",
    tag: "Evening Celebrations",
    capacity: "200 – 800 Guests",
    venue: "Garden Tent Lawn & Pool Deck",
    image: "/gallery/lawn_night_tents.jpg",
    description: "Celebrate evenings under lit garden tents with fairy lights, a big dance stage for Sangeet, music, and hot snacks and desserts.",
    highlights: [
      "Lit Canopy Tents & Garden Seating",
      "Big Dance & Sangeet Stage",
      "Family Photo Display Wall",
      "Hot Desserts & Tea/Coffee Stalls"
    ]
  }
];

export const testimonials = [
  {
    name: "Dr. Rajeshwar Shukla",
    event: "Daughter's Wedding & Reception",
    city: "Rewa, MP",
    date: "February 2026",
    rating: 5,
    text: "Shriji Resort made my daughter's wedding wonderful. The 35,000 sq ft lawn easily held our 1,400+ guests. Everyone loved the mandap decoration, lighting, and tasty pure veg food."
  },
  {
    name: "Pradeep & Ananya Tiwari",
    event: "Engagement & Sangeet Night",
    city: "Allahabad / Rewa",
    date: "December 2025",
    rating: 5,
    text: "We had our engagement in the AC Banquet Hall and Sangeet near the pool. The hall, AC, and sound were great, and our outstation guests stayed comfortably in the clean AC rooms."
  },
  {
    name: "Er. Vivek Mishra",
    event: "Brother's Wedding & Barat",
    city: "Satna, MP",
    date: "November 2025",
    rating: 5,
    text: "The wide Barat entrance and parking for 200+ vehicles made everything smooth for our guests. The staff was helpful all night and managed every detail well. Highly recommended in Rewa!"
  },
  {
    name: "Smt. Sunita Patel",
    event: "50th Anniversary & Family Dinner",
    city: "Rewa, MP",
    date: "January 2026",
    rating: 5,
    text: "The poolside setup and garden tents looked lovely in the evening. The live chaat stalls, mocktails, and sweets were delicious. Truly one of the best places for family functions in Rewa."
  }
];

export const cateringPackages = [
  {
    id: "silver",
    name: "Classic Veg Menu",
    type: "Pure Vegetarian",
    itemsCount: "35+ Food Items",
    items: [
      "Welcome Drinks (2 Varieties) & Fresh Lime Soda",
      "Paneer Butter Masala & Dal Tadka",
      "Seasonal Sabzi, Jeera Rice & Tandoori Roti/Naan",
      "Gulab Jamun with Rabri & Vanilla Ice Cream",
      "Live Street Chaat Counter (Pani Puri, Aloo Tikki)"
    ]
  },
  {
    id: "grand",
    name: "Grand Wedding Menu",
    type: "Multi-Cuisine Pure Veg",
    itemsCount: "50+ Food Items",
    items: [
      "Kesar Pista Milk & Fresh Fruit Mocktails",
      "Paneer Lababdar & Dal Makhani",
      "Kaju Curry, Veg Biryani & Assorted Naan Basket",
      "Live Pasta & Chinese Counter",
      "Moong Dal Halwa, Rasmalai & Ice Cream"
    ]
  },
  {
    id: "imperial",
    name: "Royal Feast Menu",
    type: "Special Wedding Catering",
    itemsCount: "70+ Food Items",
    items: [
      "Mocktail Bar & Fresh Cut Fruit Counter",
      "Shahi Paneer, Amritsari Chhole & Dal Bukhara",
      "Live Tandoor & Barbeque Starters",
      "Rajasthani Dal Baati Churma Counter",
      "Hot Jalebi with Rabri, Malpua & Special Sweets"
    ]
  }
];

