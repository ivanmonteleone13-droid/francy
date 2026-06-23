export const business = {
  name: "Francy",
  tagline: "Skönhetssalong med fransar, naglar & brows i Gottsunda",
  description:
    "Francy på Murargatan 31 — fransar, gelénaglar, lashlift, browlift och trådning under samma tak. Ewelina har drivit salongen sedan 2019.",
  category: "Skönhetssalong",
  address: {
    street: "Murargatan 31",
    postalCode: "754 37",
    city: "Uppsala",
    country: "Sverige",
  },
  phone: "070-924 45 20",
  phoneLink: "tel:+46709244520",
  email: "ewelina.andersson@live.se" as string | null,
  emailLink: "mailto:ewelina.andersson@live.se" as string | null,
  bookingUrl: "https://www.bokadirekt.se/places/francy-28757",
  bookingLabel: "Boka på Bokadirekt",
  websiteUrl: "https://www.francy.se/" as string | null,
  logoImage: "/images/logo.jpg" as string | null,
  heroImage: "/images/hero.jpg",
  aboutImage: "/images/gallery-2.jpg",
  facebookUrl: "https://www.facebook.com/francy.uppsala" as string | null,
  instagramUrl: "https://www.instagram.com/francyuppsala/" as string | null,
  owner: "Ewelina",
  rating: 4.9,
  reviewCount: 575,
  foundedYear: 2019,
  coordinates: { lat: 59.8638, lng: 17.6776 },
  hours: {
    note: "Ring gärna innan besök.",
    regular: [
      { day: "Måndag", hours: "10:00 – 17:00" },
      { day: "Tisdag", hours: "10:00 – 17:00" },
      { day: "Onsdag", hours: "10:00 – 17:00" },
      { day: "Torsdag", hours: "10:00 – 17:00" },
      { day: "Fredag", hours: "10:00 – 17:00" },
      { day: "Lördag", hours: "Stängt" },
      { day: "Söndag", hours: "Stängt" },
    ],
  },
  trustBadges: [
    { label: "4,9 på Bokadirekt", icon: "star" },
    { label: "575+ verifierade omdömen", icon: "reviews" },
    { label: "Fransar, naglar & brows", icon: "location" },
    { label: "I Gottsunda sedan 2019", icon: "student" },
  ],
  usps: [
    {
      title: "Allt under ett tak",
      description: "Fransar, gelénaglar, lashlift, browlift och trådning — boka flera behandlingar samma dag.",
    },
    {
      title: "Ewelinas erfarenhet",
      description: "Salongen grundades 2019 — nagelterapeut sedan 2010, fransstylist sedan 2012.",
    },
    {
      title: "Hundratals femstjärniga omdömen",
      description: "575+ recensioner med 4,9 i snitt på Bokadirekt.",
    },
    {
      title: "Bekvämt i Gottsunda",
      description: "Murargatan 31 — enkelt att nå från hela Uppsala.",
    },
  ],
  services: [
    {
      id: "volymfransar",
      name: "Volymfransar",
      icon: "✨",
      description: "Vi mixar efter design, volym och singelfransar — skräddarsytt resultat.",
      duration: "30–90 min",
      priceFrom: 1600,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "gel-naglar",
      name: "Gelénaglar",
      icon: "💅",
      description: "Gellack, förlängning och design — valfri färg och glitter.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "lashlift",
      name: "Lashlift",
      icon: "💫",
      description: "Permanent lyft av fransarna för ett naturligt, fräscht resultat.",
      duration: "30–90 min",
      priceFrom: 1385,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "browlift",
      name: "Browlift",
      icon: "🌸",
      description: "Plock och design av bryn — formar ögonbrynen efter dina önskemål.",
      duration: "30–90 min",
      priceFrom: 1385,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "tradning",
      name: "Trådning",
      icon: "🧵",
      description: "Trådning av valfritt område — boka 15 minuter per zon.",
      duration: "30–90 min",
      priceFrom: 250,
      note: "Kontakta oss för aktuella priser.",
    },
  ],
  gallery: [
    { id: 1, label: "Salongen", image: "/images/hero.jpg" },
    { id: 2, label: "Behandling", image: "/images/gallery-1.jpg" },
    { id: 3, label: "Gelénaglar", image: "/images/gallery-2.jpg" },
    { id: 4, label: "Presentkort", image: "/images/gallery-3.jpg" },
    { id: 5, label: "Fransar", image: "/images/gallery-4.jpg" },
    { id: 6, label: "Naglar & brows", image: "/images/gallery-5.jpg" },
    { id: 7, label: "Ewelina", image: "/images/gallery-6.jpg" },
  ],
  testimonials: [
    {
      text: "Så otroligt trevlig tjej som gjorde ett fantastiskt jobb. Jag kan verkligen rekommendera henne.⭐️⭐️⭐️⭐️⭐️",
      author: "Sophie T.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/francy-28757",
      rating: 5,
      date: "2026-06-22",
    },
    {
      text: "Toppen som vanligt😊",
      author: "AnneCharlotte P.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/francy-28757",
      rating: 5,
      date: "2026-06-14",
    },
    {
      text: "Bästa :-)",
      author: "Anette W.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/francy-28757",
      rating: 5,
      date: "2026-05-25",
    },
    {
      text: "Alltid bäst!",
      author: "Madeleine L.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/francy-28757",
      rating: 5,
      date: "2026-05-08",
    },
  ],
  about: {
    headline: "Din skönhetssalong i Gottsunda sedan 2019",
    paragraphs: [
      "Välkomna till mig, Ewelina på Francy. Jag har ägt och drivit salongen sedan 2019. Jag började min resa 2010 när jag utbildade mig till nagelterapeut. 2012 utbildade jag mig till fransstylist och har även lash och browlist på meritlistan.",
      "På Murargatan 31 erbjuder Francy volymfransar, gelénaglar, lashlift, browlift och trådning i en välkomnande miljö — med 575+ recensioner och 4,9 i snittbetyg på Bokadirekt.",
      "Har ni frågor eller funderingar så kan ni nå mig på 0709244520.",
    ],
  },
  faq: [
    {
      question: "Var ligger Francy?",
      answer: "Vi finns på Murargatan 31, 754 37 Uppsala.",
    },
    {
      question: "Hur bokar jag tid hos Francy?",
      answer: "Boka via Bokadirekt eller ring 070-924 45 20.",
    },
    {
      question: "Vad säger andra kunder om Francy?",
      answer: "Vi har 4,9 i snittbetyg baserat på 575+ recensioner på Bokadirekt.",
    },
    {
      question: "Vilka öppettider har ni?",
      answer: "Se aktuella öppettider på Bokadirekt. Vi rekommenderar att boka tid i förväg.",
    },
    {
      question: "Kan jag avboka eller omboka min tid?",
      answer: "Avbokning sker 24 timmar innan bokad behandling via Bokadirekt, mail eller direktkontakt med behandlare — annars debiteras 100% av behandlingspriset.",
    },
    {
      question: "Vilka behandlingar erbjuder ni?",
      answer: "Volymfransar, gelénaglar, lashlift, browlift och trådning. Se hela utbudet på Bokadirekt.",
    },
    {
      question: "Kan jag boka flera behandlingar samma dag?",
      answer: "Ja, boka via Bokadirekt så hjälper vi dig kombinera behandlingar.",
    },
  ],
  seoKeywords: [
    "fransar Gottsunda",
    "naglar Uppsala",
    "lashlift Murargatan",
    "skönhetssalong Uppsala",
    "Francy Uppsala",
    "fransar och naglar Uppsala",
  ],
  brandColors: {
    primary: "#7B4B6F",
    secondary: "#F4C2C2",
    accent: "#FFF8FA",
    dark: "#4A2D42",
  },
} as const;

export function getFullAddress() {
  const { street, postalCode, city } = business.address;
  return `${street}, ${postalCode} ${city}`;
}

export function getMapsEmbedUrl() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps?q=${query}&output=embed`;
}

export function getMapsLink() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export function formatPrice(amount: number | null) {
  if (amount === null) return "Pris på förfrågan";
  return `från ${amount} kr`;
}
