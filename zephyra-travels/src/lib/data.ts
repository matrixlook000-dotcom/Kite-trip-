export const SITE_CONFIG = {
  name: "Zephyra Travels",
  tagline: "Fall In Love With Sri Lanka.",
  description:
    "Local travel experts dedicated to creating seamless, stress-free journeys throughout Sri Lanka.",
  address: "No 41, Robert Gunawardena Mawatha, Kirulapone, Colombo 06, Sri Lanka",
  email: "info@zephyratravels.com",
  phone: "+94 76 134 5718",
  whatsapp: "https://wa.me/message/APC6K67QK43IF1",
  social: {
    facebook: "https://www.facebook.com/zephyratravelslk",
    instagram: "https://www.instagram.com/zephyratravels/",
    linkedin: "https://www.linkedin.com/company/zephyratravels",
    tripadvisor:
      "https://www.tripadvisor.com/Attraction_Review-g293962-d33675398-Reviews-ZephyraTravels-Colombo_Western_Province.html",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Packages", href: "/packages" },
  { label: "Day Tours", href: "/day-tour" },
  { label: "Rent a Car", href: "/rent-a-car" },
  { label: "Partners", href: "/partners" },
  { label: "About Us", href: "/about" },
  { label: "Blogs", href: "/blogs" },
];

export const TOUR_PACKAGES = [
  {
    id: "island-romance",
    title: "Island Romance",
    category: "Honeymoon",
    duration: "7 Days",
    price: 899,
    rating: 4.9,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80",
    highlights: ["Ella Train Ride", "Yala Safari", "Beach Sunset", "Tea Plantation"],
    badge: "Best Seller",
  },
  {
    id: "cultural-heritage",
    title: "Cultural Heritage Trail",
    category: "Cultural",
    duration: "10 Days",
    price: 1199,
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80",
    highlights: ["Sigiriya Rock", "Kandy Temple", "Dambulla Cave", "Polonnaruwa"],
    badge: "Popular",
  },
  {
    id: "family-adventure",
    title: "Family Adventure",
    category: "Adventure",
    duration: "8 Days",
    price: 499,
    rating: 4.7,
    reviews: 211,
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80",
    highlights: ["Pinnawala Elephants", "Whale Watching", "River Rafting", "Zip-lining"],
    badge: "From $499",
  },
  {
    id: "sapphire-shores",
    title: "Sapphire Shores",
    category: "Beach",
    duration: "6 Days",
    price: 749,
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    highlights: ["Bentota Beach", "Galle Fort", "Mirissa Whales", "Unawatuna Snorkel"],
    badge: "New",
  },
  {
    id: "wildlife-safari",
    title: "Wildlife Safari Express",
    category: "Adventure",
    duration: "5 Days",
    price: 699,
    rating: 4.9,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80",
    highlights: ["Yala National Park", "Udawalawe Elephants", "Leopard Tracking", "Bird Watching"],
    badge: "Wildlife",
  },
  {
    id: "luxury-escape",
    title: "Luxury Island Escape",
    category: "Luxury",
    duration: "12 Days",
    price: 2499,
    rating: 5.0,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    highlights: ["5-Star Hotels", "Private Chef", "Helicopter Tour", "Spa & Wellness"],
    badge: "Premium",
  },
];

export const DAY_TOURS = [
  {
    id: "sigiriya-day",
    title: "Sigiriya & Dambulla Day Trip",
    duration: "Full Day",
    price: 89,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800&q=80",
    from: "Colombo",
  },
  {
    id: "kandy-day",
    title: "Kandy Cultural Day Tour",
    duration: "Full Day",
    price: 75,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80",
    from: "Colombo",
  },
  {
    id: "ella-day",
    title: "Ella Train & Scenic Tour",
    duration: "Full Day",
    price: 99,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    from: "Colombo",
  },
  {
    id: "galle-day",
    title: "Galle Fort Heritage Walk",
    duration: "Half Day",
    price: 65,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    from: "Colombo",
  },
];

export const ATTRACTIONS = [
  { name: "Sigiriya Rock", image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&q=80" },
  { name: "Nine Arch Bridge", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" },
  { name: "Yala National Park", image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&q=80" },
  { name: "Temple of Tooth", image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&q=80" },
  { name: "Galle Fort", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80" },
  { name: "Mirissa Beach", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80" },
  { name: "Pinnawala Elephants", image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80" },
  { name: "Adam's Peak", image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=80" },
];

export const FAQS = [
  {
    q: "Why should I choose Zephyra Travels for my Sri Lanka trip?",
    a: "Zephyra Travels is an SLTDA-registered local operator with deep knowledge of Sri Lanka. We offer direct booking with no middlemen, 24/7 support, free $10,000 travel insurance, and fully customizable itineraries. Our local expertise means you get authentic experiences at competitive prices.",
  },
  {
    q: "Can I fully customize my Sri Lanka tour itinerary?",
    a: "Absolutely! Every itinerary can be tailored to your interests, budget, and schedule. Whether you want extra beach days, wildlife safaris, cultural explorations, or adventure activities, our travel experts will craft the perfect journey for you.",
  },
  {
    q: "Is Sri Lanka safe for international tourists in 2026?",
    a: "Yes, Sri Lanka is very safe for international tourists in 2026. The country has returned to full stability, and tourism infrastructure is excellent. We also include $10,000 travel insurance with every package for your peace of mind.",
  },
  {
    q: "Is it better to rent a car with a driver or drive myself in Sri Lanka?",
    a: "We strongly recommend hiring a chauffeur-guided vehicle. Sri Lankan roads can be challenging for visitors unfamiliar with local driving conditions. Our trained, English-speaking driver-guides serve as local experts, photographers, and navigators — greatly enhancing your experience.",
  },
  {
    q: "What are the must-visit destinations in Sri Lanka for first-timers?",
    a: "For first-timers, we recommend Sigiriya Rock Fortress, the Temple of the Tooth in Kandy, the scenic train ride to Ella, Yala National Park for wildlife, and the beautiful beaches of Mirissa or Bentota. Our 7-10 day packages cover all these highlights perfectly.",
  },
];

export const CARS = [
  {
    id: "toyota-prius",
    name: "Toyota Prius",
    category: "Economy",
    seats: 4,
    price: 45,
    features: ["AC", "WiFi", "GPS"],
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&q=80",
  },
  {
    id: "toyota-hiace",
    name: "Toyota HiAce",
    category: "Van",
    seats: 9,
    price: 85,
    features: ["AC", "WiFi", "GPS", "Luggage Space"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: "mercedes-e",
    name: "Mercedes E-Class",
    category: "Luxury",
    seats: 4,
    price: 120,
    features: ["AC", "WiFi", "GPS", "Leather Seats", "Minibar"],
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=600&q=80",
  },
];
