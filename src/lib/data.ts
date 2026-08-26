import { asset, videoAsset } from "./utils";

export const metrics = [
  {
    value: "3L+",
    label: "Hatching eggs / week",
    detail: "Installed capacity for consistent DOC supply",
  },
  {
    value: "20–25",
    label: "TPH pellet feed",
    detail: "Automated milling for uniform nutrition",
  },
  {
    value: "8–10",
    label: "TPH mash feed",
    detail: "Formulated for breeders, broilers and livestock",
  },
  {
    value: "30+",
    label: "Years of leadership",
    detail: "Poultry experience at the helm of the enterprise",
  },
];

export const homeStrengths = [
  { title: "Breeder Farms", image: asset("sakthi-poultry-breeding.jpg") },
  { title: "Hatcheries", image: asset("sakthi-poultry-modern-hatchery.jpg") },
  { title: "Broiler Farms", image: asset("sakthi-poultry-contract-broiler-farm.jpg") },
  { title: "Feed Manufacturing", image: asset("sakthi-poultry-feed-manufacturing.jpg") },
  { title: "Broiler Sales and Distribution", image: asset("sakthi-poultry-live-birds.jpg") },
  { title: "Feed Sales", image: asset("sakthi-bromix-broiler-feed.jpg") },
];

export const valueChain = [
  {
    step: "01",
    title: "Breeding",
    summary:
      "Quality breeding supported by stringent biosecurity and scientific flock management to maintain healthy and productive flocks.",
    image: asset("sakthi-poultry-breeding.jpg"),
  },
  {
    step: "02",
    title: "Modern Hatchery",
    summary:
      "Advanced hatchery operations with in-ovo vaccination technology, controlled processes and high standards of hygiene and biosecurity to deliver quality day-old chicks.",
    image: asset("sakthi-poultry-modern-hatchery.jpg"),
  },
  {
    step: "03",
    title: "Feed Manufacturing",
    summary:
      "Quality poultry feed manufactured using carefully selected raw materials and controlled processes to support healthy growth and efficient bird performance.",
    image: asset("sakthi-poultry-feed-manufacturing.jpg"),
  },
  {
    step: "04",
    title: "Contract Broiler Farming",
    summary:
      "A strong contract farming network backed by dedicated veterinary and technical teams, providing farmers with chicks, feed, technical guidance, flock health support and biosecurity practices.",
    image: asset("sakthi-poultry-contract-broiler-farm.jpg"),
  },
  {
    step: "05",
    title: "Integrated Logistics",
    summary:
      "Our company-owned fleet supports the transportation of Parent Birds, Hatching Eggs and Broiler Day-Old Chicks, including refrigerated transportation where required, as well as timely delivery of live broiler birds to retail outlets.",
    image: asset("sakthi-poultry-logistics-truck.jpg"),
  },
  {
    step: "06",
    title: "Live Bird Sales & Distribution",
    summary:
      "Reliable supply of quality live birds to wholesale traders and retail outlets through dedicated market channels, supported by responsive service and timely delivery.",
    image: asset("sakthi-poultry-live-birds.jpg"),
  },
];

export const homeProducts = [
  {
    slug: "hatching-eggs",
    name: "Hatching Eggs",
    short:
      "We supply fertile broiler hatching eggs produced within our own hatching egg production operations, with a focus on quality and uniformity for incubation.",
    image: asset("sakthi-poultry-hatching-eggs.jpg"),
  },
  {
    slug: "day-old-chicks",
    name: "Broiler Day-Old Chicks",
    short:
      "Our broiler chicks are incubated and hatched in our own hatcheries, where hygiene and biosecurity are important parts of hatchery operations.",
    image: asset("sakthi-poultry-broiler-chicks.jpg"),
  },
  {
    slug: "live-broilers",
    name: "Broiler Birds",
    short:
      "We supply broiler birds produced through our integrated poultry operations with continued emphasis on quality throughout the production cycle.",
    image: asset("sakthi-poultry-broiler-birds.jpg"),
  },
  {
    slug: "poultry-feed",
    name: "Breeder Feed",
    short:
      "Our breeder poultry feed is designed to support breeder nutrition and the production of quality fertile eggs and broiler chicks.",
    image: asset("sakthi-poultry-breeder-feed.jpg"),
  },
  {
    slug: "poultry-feed",
    name: "Broiler Feed",
    short:
      "Our broiler poultry feed provides nutrition required to support broiler growth and performance.",
    image: asset("sakthi-bromix-broiler-feed.jpg"),
  },
];

export const products = [
  {
    slug: "hatching-eggs",
    name: "Hatching Eggs",
    category: "Hatching Eggs",
    short:
      "Fertile broiler hatching eggs from our own hatching egg production operations.",
    image: asset("sakthi-poultry-hatching-eggs.jpg"),
    highlights: [
      "Own hatching egg production",
      "Connected to integrated poultry operations",
      "Focus on quality and uniformity",
      "Support for hatcheries and poultry businesses",
    ],
    specs: [
      { label: "Source", value: "Own hatching egg production operations" },
      { label: "Use", value: "Fertile broiler hatching eggs for incubation" },
      { label: "Focus", value: "Quality and uniformity" },
    ],
  },
  {
    slug: "day-old-chicks",
    name: "Broiler Day-Old Chicks",
    category: "Day-old chicks",
    short:
      "Broiler day-old chicks incubated and hatched through our own poultry hatcheries.",
    image: asset("sakthi-poultry-broiler-chicks.jpg"),
    highlights: [
      "Own hatchery operations",
      "Hygiene and biosecurity attention",
      "Connected breeder, egg and hatchery stages",
      "For commercial poultry farming operations",
    ],
    specs: [
      { label: "Source", value: "Own poultry hatcheries" },
      { label: "Focus", value: "Hygiene and poultry biosecurity" },
      { label: "Use", value: "Commercial broiler farming operations" },
    ],
  },
  {
    slug: "live-broilers",
    name: "Broiler Birds",
    category: "Live birds",
    short:
      "Broiler birds produced through our integrated commercial poultry operations.",
    image: asset("sakthi-poultry-broiler-birds.jpg"),
    highlights: [
      "Integrated commercial poultry operations",
      "Clean environments and balanced nutrition",
      "Responsible poultry management",
      "For traders, retailers and institutional buyers",
    ],
    specs: [
      { label: "Source", value: "Integrated commercial poultry operations" },
      { label: "Focus", value: "Quality throughout the growing cycle" },
      { label: "Buyers", value: "Traders, retailers and institutional buyers" },
    ],
  },
  {
    slug: "breeder-feed",
    name: "Breeder Poultry Feed",
    category: "Nutrition",
    short:
      "Breeder feed developed to support the nutritional requirements of breeder birds.",
    image: asset("sakthi-poultry-breeder-feed.jpg"),
    highlights: [
      "Nutrition for breeder birds",
      "Supports fertile eggs and broiler chicks",
      "Connected to breeder and hatchery operations",
    ],
    specs: [
      { label: "Use", value: "Breeder birds and hatching egg production" },
      { label: "Focus", value: "Nutrition supporting breeder performance" },
    ],
  },
  {
    slug: "broiler-feed",
    name: "Broiler Poultry Feed",
    category: "Nutrition",
    short:
      "Broiler feed designed to provide the nutrition broilers require for growth and performance.",
    image: asset("sakthi-bromix-broiler-feed.jpg"),
    highlights: [
      "Nutrition for broiler growth and performance",
      "Connected to commercial broiler operations",
      "For farmers, poultry businesses and feed distributors",
    ],
    specs: [
      { label: "Use", value: "Commercial broiler farming" },
      { label: "Focus", value: "Nutrition supporting broiler growth and performance" },
    ],
  },
] as const;

export const operations = [
  {
    slug: "breeders-hatcheries",
    title: "Breeder Farms & Hatcheries",
    image: asset("sakthi-poultry-breeding.jpg"),
    points: [
      "Layered biosecurity zones from perimeter to bird house",
      "Modern incubation, hatcher hygiene and chick grading",
      "Continuous chick health monitoring with veterinary oversight",
      "All-in / all-out discipline and sanitised egg flow",
    ],
  },
  {
    slug: "broiler-network",
    title: "Broiler Farms & Contract Network",
    image: asset("sakthi-poultry-contract-broiler-farm.jpg"),
    points: [
      "Controlled housing with ventilation and watering systems",
      "Standard operating procedures for placement to harvest",
      "Assured chick and feed supply to partner farmers",
      "Field support for flock performance and welfare",
    ],
  },
  {
    slug: "feed",
    title: "Feed Manufacturing",
    image: asset("sakthi-poultry-feed-manufacturing.jpg"),
    points: [
      "Automated milling with mash and pellet capability",
      "Nutritional formulation for breeder, broiler and cattle feed",
      "Incoming raw-material checks and finished-feed sampling",
      "Packaging and own-use integration with farm demand",
    ],
  },
  {
    slug: "lab",
    title: "In-House Lab & Veterinary Services",
    image: asset("chicken-drinker.jpg"),
    points: [
      "Disease diagnostics and flock health surveillance",
      "Feed and raw-material quality testing",
      "Proactive vaccination and treatment protocols",
      "Technical support to company and contract farms",
    ],
  },
  {
    slug: "sales",
    title: "Broiler Sales & Distribution",
    image: asset("sakthi-poultry-live-birds.jpg"),
    points: [
      "Scheduled live-bird supply to wholesale buyers",
      "Institutional and HORECA-ready lots",
      "Local retail butcher shop coverage",
      "Cold-chain-aware logistics planning from farm to market",
    ],
  },
];

export const qualityPillars = [
  {
    title: "Quality Assurance Framework",
    text: "Standards run from inbound grains and additives through milling, farm placement, harvest and dispatch. Each stage has checkpoints so quality is designed in — not inspected at the end.",
    image: asset("feed-trough.jpg"),
  },
  {
    title: "Biosecurity Measures",
    text: "Multi-tier perimeter controls, sanitisation gates, visitor logs and controlled access protect parent stock, hatcheries and broiler houses from preventable disease pressure.",
    image: asset("farm-aerial-sheds.jpg"),
  },
  {
    title: "Food Safety & Animal Welfare",
    text: "Ethical rearing protocols, balanced nutrition, stocking discipline and antibiotic stewardship support bird welfare and safer meat for the market.",
    image: asset("cage-rows.jpg"),
  },
  {
    title: "Laboratory & Testing",
    text: "Internal pathology and nutritional analysis capabilities give faster turnaround on flock health and feed quality — so field teams can act early.",
    image: asset("chicken-drinker.jpg"),
  },
  {
    title: "Sustainability",
    text: "Water-conscious operations, organised litter and waste handling, and energy-aware housing design reduce the footprint of production across units.",
    image: asset("waste-management.jpg"),
  },
];

export const timeline = [
  {
    year: "2019",
    title: "Company incorporated",
    text: "Sakthi Poultry Private Limited was incorporated in Pollachi, Coimbatore, to build an integrated poultry platform in Tamil Nadu.",
  },
  {
    year: "Leadership",
    title: "Three decades of poultry craft",
    text: "Managing Director A. Nagarajan brought 30+ years of industry experience, with a promoter-director team rooted in operations.",
  },
  {
    year: "Integration",
    title: "Breeding, hatching and feed",
    text: "The enterprise expanded across parent stock, hatchery throughput and automated mash/pellet feed manufacturing.",
  },
  {
    year: "Network",
    title: "Farms and market reach",
    text: "Company and contract broiler farms were linked to a sales network serving wholesale, institutional and retail butcher channels.",
  },
  {
    year: "Today",
    title: "Quality as the differentiator",
    text: "Installed capacity of about 3,00,000 eggs per week and high-throughput feed milling support consistent supply — with biosecurity at the centre.",
  },
];

export const leadership = [
  {
    name: "A. Nagarajan",
    role: "Managing Director",
    bio: "Promoter and Managing Director with over three decades in the poultry industry. Leads strategy, integration and quality culture across farms, hatchery and feed.",
  },
  {
    name: "A. Sekar",
    role: "Director",
    bio: "Board director supporting operations and enterprise governance as the company scaled its integrated model.",
  },
  {
    name: "A. Vairamani",
    role: "Director",
    bio: "Board director focused on organisational stewardship and long-term growth of the poultry value chain.",
  },
  {
    name: "R. Ezhilarasi",
    role: "Director",
    bio: "Board director contributing to governance, compliance and the family-enterprise foundation of Sakthi Poultry.",
  },
];

export const values = [
  {
    title: "Quality",
    text: "Uniform genetics, nutrition and handling so buyers and farmers receive predictable performance.",
  },
  {
    title: "Integrity",
    text: "Clear commitments on chicks, feed, buyback and payments — the basis of a trusted contract network.",
  },
  {
    title: "Biosecurity",
    text: "Discipline at the gate, in the hatchery and on the farm is non-negotiable, not a slogan.",
  },
  {
    title: "Partnership",
    text: "Farmers, dealers and institutions grow with us when supply, support and fairness stay consistent.",
  },
  {
    title: "Stewardship",
    text: "Responsible use of water, energy, medicines and waste protects both flocks and neighbouring communities.",
  },
  {
    title: "Sustainable growth",
    text: "Capacity is expanded only as quality systems, people and markets can absorb it.",
  },
];

export const farmerBenefits = [
  {
    title: "Assured buyback",
    text: "A defined offtake arrangement so you can plan cycles with confidence.",
  },
  {
    title: "Quality chicks & feed",
    text: "DOC and formulated feed delivered to farm as per placement schedule.",
  },
  {
    title: "Veterinary guidance",
    text: "Field and lab-backed support for flock health, not just emergency visits.",
  },
  {
    title: "Timely payments",
    text: "Transparent growing charges and settlement discipline you can run a farm on.",
  },
  {
    title: "Standard operating procedures",
    text: "Practical SOPs for biosecurity, brooding, feeding and harvest readiness.",
  },
  {
    title: "Technical training",
    text: "Hands-on guidance so new and experienced farmers meet Sakthi performance standards.",
  },
];

export const farmerSteps = [
  {
    step: "01",
    title: "Share your farm profile",
    text: "Tell us location, shed capacity, and water / electricity availability through the application form.",
  },
  {
    step: "02",
    title: "Site assessment",
    text: "Our team reviews access, biosecurity potential, housing and utilities against contract-farming norms.",
  },
  {
    step: "03",
    title: "Agreement & onboarding",
    text: "Commercial terms, growing guidelines and placement calendar are aligned in writing.",
  },
  {
    step: "04",
    title: "First placement",
    text: "Chicks and feed move to farm with brooding support and a named field contact.",
  },
  {
    step: "05",
    title: "Grow-out & harvest",
    text: "Performance is tracked; birds are lifted as per schedule and accounts are settled.",
  },
];

export const partnerSegments = [
  {
    id: "retailer",
    title: "Retailers",
    text: "Connect with us regarding poultry product requirements.",
  },
  {
    id: "trader",
    title: "Traders",
    text: "Connect with us regarding poultry product requirements.",
  },
  {
    id: "feed-distributor",
    title: "Feed distributors",
    text: "Explore poultry feed distribution opportunities.",
  },
  {
    id: "supplier",
    title: "Suppliers",
    text: "Submit your business details for relevant supply opportunities.",
  },
  {
    id: "institutional",
    title: "Institutional buyers",
    text: "Discuss your poultry product requirements with our team.",
  },
];

export const locations = [
  {
    id: "corporate-office",
    type: "Corporate Office",
    name: "Sakthi Poultry Pvt Ltd",
    lines: [
      "7, Om Shanti Nagar 1st cross",
      "Opp. Lathangi School",
      "T. Kottampatti",
      "Pollachi 642 002",
      "Coimbatore District",
    ],
    mapsUrl: "https://maps.app.goo.gl/FDihvGsxyzdTsPbC7?g_st=aw",
    tab: "Corporate Office",
  },
  {
    id: "feed-mill",
    type: "Feed Mill",
    name: "Sakthi Poultry Pvt Ltd",
    lines: [
      "C/o Amba feeds",
      "SF.no.2/109",
      "Meenakshipuram",
      "Kambikudi (po)",
      "Kariyapatti 626 115",
      "Virudhunagar district",
    ],
    mapsUrl: "https://maps.app.goo.gl/7r4BCmPCy2mNBy9N8",
    tab: "Feed Mill",
  },
  {
    id: "dindigul",
    type: "",
    name: "Sakthi Poultry Pvt Ltd",
    lines: [
      "81, Thadikombu Main Road",
      "Kamakshipuram",
      "Kallipatti (Po)",
      "Dindigul 624 004",
    ],
    mapsUrl: "https://maps.app.goo.gl/wdXTXn7X7Cy8sDJQ9",
    tab: "Dindigul",
  },
];

export const gallery = {
  photos: [
    { src: asset("aerial-farm-01.jpg"), alt: "Aerial view of poultry sheds and access road", tag: "Farms" },
    { src: asset("aerial-farm-02.jpg"), alt: "Aerial view of poultry houses", tag: "Farms" },
    { src: asset("aerial-farm-03.jpg"), alt: "Parallel broiler houses in agricultural landscape", tag: "Farms" },
    { src: asset("aerial-farm-04.jpg"), alt: "Aerial view of a farm complex", tag: "Farms" },
    { src: asset("aerial-farm-05.jpg"), alt: "Aerial view of poultry sheds", tag: "Farms" },
    { src: asset("aerial-complex-01.jpg"), alt: "Aerial view of a Sakthi Poultry farm complex", tag: "Farms" },
    { src: asset("aerial-complex-02.jpg"), alt: "Integrated farm complex among coconut groves", tag: "Farms" },
    { src: asset("aerial-complex-03.jpg"), alt: "Aerial view of farm buildings", tag: "Farms" },
    { src: asset("aerial-complex-04.jpg"), alt: "Aerial view of poultry infrastructure", tag: "Farms" },
    { src: asset("aerial-complex-05.jpg"), alt: "Aerial view of sheds and surrounding land", tag: "Farms" },
    { src: asset("aerial-complex-06.jpg"), alt: "Aerial view of a production complex", tag: "Farms" },
    { src: asset("aerial-complex-07.jpg"), alt: "Aerial view of farm layout and access roads", tag: "Farms" },
    { src: asset("aerial-complex-08.jpg"), alt: "Aerial view of poultry houses", tag: "Farms" },
    { src: asset("sakthi-poultry-farm-aerial-complex.jpg"), alt: "Sakthi Poultry farm aerial complex", tag: "Farms" },
    { src: asset("farm-aerial-sheds.jpg"), alt: "Long poultry houses with surrounding plantations", tag: "Farms" },
    { src: asset("farm-complex.jpg"), alt: "Climate-controlled sheds with support buildings", tag: "Farms" },
    { src: asset("sakthi-poultry-contract-broiler-farm.jpg"), alt: "Contract broiler farm", tag: "Farms" },
    { src: asset("chickens-feeding.jpg"), alt: "Broilers feeding from a continuous trough", tag: "Flock" },
    { src: asset("chicken-drinker.jpg"), alt: "Automated nipple drinker in a poultry house", tag: "Flock" },
    { src: asset("cage-rows.jpg"), alt: "Rows of birds in managed housing", tag: "Flock" },
    { src: asset("healthy-birds-01.jpg"), alt: "Birds in a poultry house", tag: "Flock" },
    { src: asset("healthy-birds-02.jpg"), alt: "Birds inside a poultry house", tag: "Flock" },
    { src: asset("sakthi-poultry-about-live-bird.jpg"), alt: "A broiler bird at a Sakthi Poultry farm", tag: "Flock" },
    { src: asset("sakthi-poultry-welfare-bird.jpg"), alt: "A bird at a Sakthi Poultry farm", tag: "Flock" },
    { src: asset("sakthi-poultry-live-birds.jpg"), alt: "Live broiler birds", tag: "Flock" },
    { src: asset("sakthi-poultry-broiler-birds.jpg"), alt: "Broiler birds", tag: "Flock" },
    { src: asset("sakthi-poultry-broiler-chicks.jpg"), alt: "Broiler day-old chicks", tag: "Flock" },
    { src: asset("sakthi-poultry-breeding.jpg"), alt: "Birds in a poultry house", tag: "Flock" },
    { src: asset("feed-bags-chicks.jpg"), alt: "Sakthi feed bags and chick rearing cages", tag: "Feed" },
    { src: asset("feed-trough.jpg"), alt: "Granulated feed in a farm trough", tag: "Feed" },
    { src: asset("sakthi-poultry-breeder-feed.jpg"), alt: "Sakthi Poultry breeder feed", tag: "Feed" },
    { src: asset("sakthi-bromix-broiler-feed.jpg"), alt: "Sakthi Bromix broiler feed", tag: "Feed" },
    { src: asset("sakthi-poultry-feed-manufacturing.jpg"), alt: "Feed manufacturing", tag: "Feed" },
    { src: asset("sakthi-poultry-hatching-eggs.jpg"), alt: "Hatching eggs", tag: "Products" },
    { src: asset("sakthi-poultry-chicken-meat.jpg"), alt: "Chicken meat", tag: "Products" },
    { src: asset("sakthi-poultry-modern-hatchery.jpg"), alt: "Hatchery corridor with incubators", tag: "Operations" },
    { src: asset("sakthi-poultry-logistics-truck.jpg"), alt: "Logistics truck", tag: "Operations" },
    { src: asset("waste-management.jpg"), alt: "Litter handling under elevated housing", tag: "Operations" },
  ],
  videos: [
    {
      src: videoAsset("sakthi-poultry-tamil-nadu-farm-hero.mp4"),
      poster: asset("aerial-farm-01.jpg"),
      title: "Tamil Nadu farm",
    },
    {
      src: videoAsset("hero.mp4"),
      poster: asset("aerial-complex-01.jpg"),
      title: "Farm",
    },
    {
      src: videoAsset("hero.mov"),
      poster: asset("aerial-complex-01.jpg"),
      title: "Farm",
    },
  ],
};

export const news = [
  {
    slug: "integrated-operations-update",
    date: "2026-01-29",
    title: "Drone survey of farm and hatchery infrastructure",
    excerpt:
      "Latest aerial documentation of shed layout, biosecure buffers and access roads across production units.",
    image: asset("aerial-complex-07.jpg"),
    tag: "Operations",
  },
  {
    slug: "feed-and-flock-standards",
    date: "2026-01-15",
    title: "Own-mill nutrition on the farm floor",
    excerpt:
      "Vencobb-line breeder grower mash and broiler rations produced for internal use, linking mill QC to flock performance.",
    image: asset("sakthi-bromix-broiler-feed.jpg"),
    tag: "Quality",
  },
  {
    slug: "farmer-engagement",
    date: "2025-11-20",
    title: "Contract farming onboarding window",
    excerpt:
      "Sakthi Poultry continues to evaluate shed-ready farmers with water and power for the next placement cycle.",
    image: asset("sakthi-poultry-contract-broiler-farm.jpg"),
    tag: "Farmers",
  },
];

export const jobs = [
  {
    id: "vet-officer",
    title: "Veterinary Officer",
    team: "Health & Biosecurity",
    location: "Tamil Nadu (field + hatchery)",
    type: "Full-time",
    summary:
      "Lead flock health protocols, diagnostics liaison and farmer field visits across breeder, hatchery and broiler units.",
  },
  {
    id: "hatchery-supervisor",
    title: "Hatchery Supervisor",
    team: "Hatchery",
    location: "Sivagangai / production sites",
    type: "Full-time",
    summary:
      "Own incubation hygiene, chick grading, vaccination and dispatch discipline on shift.",
  },
  {
    id: "feed-mill-tech",
    title: "Feed Mill Technician",
    team: "Nutrition",
    location: "Feed manufacturing unit",
    type: "Full-time",
    summary:
      "Operate and maintain mash/pellet lines, sampling and batch documentation.",
  },
  {
    id: "farm-supervisor",
    title: "Farm Supervisor",
    team: "Production",
    location: "Company & contract farms",
    type: "Full-time",
    summary:
      "Implement SOPs for brooding, environment, biosecurity and harvest readiness.",
  },
  {
    id: "sales-exec",
    title: "Sales Executive — Broiler & Feed",
    team: "Commercial",
    location: "Pollachi / Coimbatore / regional",
    type: "Full-time",
    summary:
      "Develop wholesale, butcher and dealer relationships; coordinate supply slots.",
  },
  {
    id: "qc-analyst",
    title: "Quality Control Analyst",
    team: "Laboratory",
    location: "Integrated units",
    type: "Full-time",
    summary:
      "Raw material and finished feed testing, farm sample logging and exception reporting.",
  },
];

export const enquiryTypes = [
  {
    id: "product",
    label: "Product Enquiry",
    detail: "For hatching eggs, broiler chicks, broiler birds, breeder feed and broiler feed.",
    href: "/contact?type=product",
  },
  {
    id: "farmer",
    label: "Farmer Enquiry",
    detail: "Interested in working with Sakthi Poultry as a poultry farmer?",
    href: "/contact?type=farmer",
  },
  {
    id: "dealer",
    label: "Dealer / Distributor Enquiry",
    detail: "Explore relevant poultry feed and distribution opportunities.",
    href: "/contact?type=dealer",
  },
  {
    id: "vendor",
    label: "Supplier Enquiry",
    detail: "Connect with our team regarding supply opportunities.",
    href: "/contact?type=vendor",
  },
  {
    id: "general",
    label: "General Enquiry",
    detail: "For other corporate or business-related enquiries.",
    href: "/contact?type=general",
  },
] as const;

export const trustBadges = [
  { title: "Veterinary care", text: "Flock health protocols from placement to harvest" },
  { title: "Lab testing", text: "Pathology and nutritional analysis in-house" },
  { title: "Food safety", text: "Hygiene, welfare and antibiotic stewardship" },
  { title: "Biosecurity", text: "Zoned access, sanitisation and visitor control" },
];
