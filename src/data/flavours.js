export const FLAVOURS_DATA = [
  {
    id: "strawberry-cloud",
    name: "STRAWBERRY CLOUD",
    tagline: "Strawberry · Cream",
    description: "Sun-ripened organic strawberries whipped into velvety sweet cream with delicate strawberry fruit ribbons.",
    color: "#E84A5F",
    bgColor: "#FDF0F2",
    accentColor: "#F8B1BA",
    image: "./images/1.png",
    ingredients: ["Fresh Strawberries", "Double Cream", "Cane Sugar", "Lemon Zest"],
    intensity: "Light & Refreshing"
  },
  {
    id: "pistachio-dream",
    name: "PISTACHIO DREAM",
    tagline: "Pistachio · Roasted Nut",
    description: "Slow-roasted Sicilian Bronte pistachios blended into a silky, nutty cream base topped with crushed pistachios.",
    color: "#6B8E4E",
    bgColor: "#F2F7EE",
    accentColor: "#BCD4A5",
    image: "./images/2.png",
    ingredients: ["Bronte Pistachios", "Fresh Whole Milk", "Sweet Cream", "Sea Salt"],
    intensity: "Rich & Nutty"
  },
  {
    id: "mango-sun",
    name: "MANGO SUN",
    tagline: "Mango · Cream",
    description: "Bright golden Alphonso mango puree folded into sweet cream with a passionfruit glaze swirl. Pure sunshine.",
    color: "#EE8A19",
    bgColor: "#FFF7ED",
    accentColor: "#FCD34D",
    image: "./images/3.png",
    ingredients: ["Alphonso Mango", "Passionfruit Glaze", "Heavy Cream", "Vanilla"],
    intensity: "Vibrant & Tropical"
  },
  {
    id: "dark-chocolate",
    name: "DARK CHOCOLATE",
    tagline: "Cocoa · Dark Chocolate",
    description: "70% Single-origin Ecuadorian dark chocolate churned into deep cocoa velvet with bittersweet chocolate curls.",
    color: "#4A2E2B",
    bgColor: "#F4EFEB",
    accentColor: "#A3847C",
    image: "./images/4.png",
    ingredients: ["70% Cocoa Solids", "Ecuadorian Cacao", "Whole Milk", "Demerara Sugar"],
    intensity: "Deep & Indulgent"
  },
  {
    id: "salted-caramel",
    name: "SALTED CARAMEL",
    tagline: "Caramel · Sea Salt",
    description: "Slow-cooked amber caramel with a hint of French Maldon sea salt flakes and golden butter ribbons.",
    color: "#C86D27",
    bgColor: "#FAF2EB",
    accentColor: "#E8BA93",
    image: "./images/5.png",
    ingredients: ["Burned Sugar Caramel", "Maldon Sea Salt", "Grass-fed Butter", "Fresh Cream"],
    intensity: "Sweet & Salty"
  },
  {
    id: "vanilla-bean",
    name: "VANILLA BEAN",
    tagline: "Vanilla · Madagascar Vanilla",
    description: "Pure Madagascar Bourbon vanilla beans simmered slowly with organic farm-fresh milk and sweet pasture cream.",
    color: "#9E7D47",
    bgColor: "#FAF7F2",
    accentColor: "#D6C3A5",
    image: "./images/6.png",
    ingredients: ["Madagascar Vanilla Pods", "Organic Cream", "Cane Sugar", "Egg Yolks"],
    intensity: "Classic & Smooth"
  }
];

export const INGREDIENTS_JOURNEY = [
  {
    id: "strawberry",
    name: "STRAWBERRY",
    subtitle: "Organic Sun-Ripe Strawberries",
    rawImage: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1000&auto=format&fit=crop",
    craftedImage: "./images/1.png",
    origin: "Val de Loire, France",
    note: "Picked at peak ripeness for natural sweetness and vivid aroma."
  },
  {
    id: "mango",
    name: "MANGO",
    subtitle: "Alphonso King Mangoes",
    rawImage: "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=1000&auto=format&fit=crop",
    craftedImage: "./images/3.png",
    origin: "Ratnagiri, India",
    note: "Silky, non-fibrous pulp bursting with sunshine flavor."
  },
  {
    id: "pistachio",
    name: "PISTACHIO",
    subtitle: "Roasted Bronte Pistachios",
    rawImage: "https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=1000&auto=format&fit=crop",
    craftedImage: "./images/2.png",
    origin: "Mount Etna, Sicily",
    note: "Slowly roasted over beechwood to unlock buttery, earthy aromas."
  },
  {
    id: "cocoa",
    name: "COCOA",
    subtitle: "70% Single Origin Cocoa Beans",
    rawImage: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1000&auto=format&fit=crop",
    craftedImage: "./images/4.png",
    origin: "Esmeraldas, Ecuador",
    note: "Floral and fruity undertones balanced by deep cocoa intensity."
  },
  {
    id: "vanilla",
    name: "VANILLA",
    subtitle: "Bourbon Vanilla Pods",
    rawImage: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1000&auto=format&fit=crop",
    craftedImage: "./images/6.png",
    origin: "Sava Region, Madagascar",
    note: "Hand-pollinated vanilla pods packed with aromatic caviar seeds."
  }
];

export const CRAFT_STEPS = [
  {
    step: "01",
    title: "MILK + CREAM",
    desc: "Single-origin fresh organic pasture milk mixed with thick double cream.",
    image: "./images/16.png"
  },
  {
    step: "02",
    title: "FLAVOUR INFUSION",
    desc: "Real fruit purees, roasted nut pastes, and vanilla beans steep for 24 hours.",
    image: "./images/14.png"
  },
  {
    step: "03",
    title: "SLOW CHURN",
    desc: "Churned slowly in custom micro-batch churners for microscopic air pockets.",
    image: "./images/13.png"
  },
  {
    step: "04",
    title: "FREEZE & CURE",
    desc: "Blast-frozen at -30°C to lock in freshness, silky texture, and vibrant color.",
    image: "./images/15.png"
  },
  {
    step: "05",
    title: "PERFECT SCOOP",
    desc: "Hand-poured into artisan tubs ready to bring you a moment of pure joy.",
    image: "./images/8.png"
  }
];

export const TEXTURE_LAB = [
  {
    id: "silky",
    title: "SILKY",
    tagline: "Smooth cream-based notes",
    desc: "Micro-churned double cream creating a weightless velvet melt across your palate.",
    image: "./images/13.png",
    bg: "#FAF0E6"
  },
  {
    id: "creamy",
    title: "CREAMY",
    tagline: "Slow-melting rich density",
    desc: "Full-bodied butterfat density that lingers with warm luxury finish.",
    image: "./images/8.png",
    bg: "#FDF0F2"
  },
  {
    id: "crunchy",
    title: "CRUNCHY",
    tagline: "Roasted inclusions & shards",
    desc: "Hand-crushed caramel croquant, dark cocoa nibs, and wood-roasted nuts.",
    image: "./images/15.png",
    bg: "#F4EFEB"
  }
];

export const JOY_MOMENTS = [
  {
    id: 1,
    title: "Afternoon Sunshine",
    desc: "Sharing a waffle cone on a cobblestone street.",
    image: "./images/17.png"
  },
  {
    id: 2,
    title: "Golden Hour Pause",
    desc: "Taking five minutes between back-to-back meetings.",
    image: "./images/18.png"
  },
  {
    id: 3,
    title: "Late Night Scoop",
    desc: "Directly from the tub while watching your favorite film.",
    image: "./images/19.png"
  },
  {
    id: 4,
    title: "Shared Smiles",
    desc: "The joy of offering someone their favorite scoop.",
    image: "./images/20.png"
  }
];

export const MOOD_CATEGORIES = [
  {
    id: "fresh",
    label: "SOMETHING FRESH",
    flavours: [
      { name: "Strawberry Cloud", tagline: "Fresh Berry & Cream", image: "./images/1.png" },
      { name: "Mango Sun", tagline: "Golden Tropical Sunshine", image: "./images/3.png" }
    ]
  },
  {
    id: "rich",
    label: "SOMETHING RICH",
    flavours: [
      { name: "Dark Chocolate", tagline: "70% Cocoa Indulgence", image: "./images/4.png" },
      { name: "Salted Caramel", tagline: "Maldon Sea Salt Amber", image: "./images/5.png" }
    ]
  },
  {
    id: "nutty",
    label: "SOMETHING NUTTY",
    flavours: [
      { name: "Pistachio Dream", tagline: "Bronte Pistachio", image: "./images/2.png" },
      { name: "Hazelnut Crunch", tagline: "Piedmont Hazelnut", image: "./images/15.png" }
    ]
  },
  {
    id: "classic",
    label: "SOMETHING CLASSIC",
    flavours: [
      { name: "Vanilla Bean", tagline: "Madagascar Bourbon", image: "./images/6.png" }
    ]
  }
];

export const SIGNATURE_CREATIONS = [
  {
    id: "sundae",
    title: "THE SUNDAE",
    subtitle: "Ice cream · Chocolate · Caramel · Nuts",
    description: "Two scoops of Vanilla Bean and Dark Chocolate served in a frosted glass coupe, drizzled with hot dark chocolate fudge, warm salted caramel, and toasted roasted hazelnuts.",
    image: "./images/9.png"
  },
  {
    id: "crush",
    title: "THE CRUSH",
    subtitle: "Ice cream · Cookie crumble · Chocolate",
    description: "Strawberry Cloud ice cream layered over handmade dark cocoa cookie crumble, topped with fresh strawberry coulis and bittersweet chocolate shards.",
    image: "./images/10.png"
  },
  {
    id: "float",
    title: "THE FLOAT",
    subtitle: "Ice cream · Sparkling beverage · Fruit",
    description: "A ball of Vanilla Bean ice cream floating delicately in artisanal sparkling raspberry-lime botanical soda with fresh mint sprigs.",
    image: "./images/11.png"
  }
];
