import { asset } from "./utils";

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
  { title: "Breeder Farms", image: asset("healthy-birds-01.jpg") },
  { title: "Hatcheries", image: asset("farm-complex.jpg") },
  { title: "Broiler Farms", image: asset("aerial-farm-01.jpg") },
  { title: "Feed Manufacturing", image: asset("feed-bags-chicks.jpg") },
  { title: "Broiler Sales and Distribution", image: asset("aerial-complex-05.jpg") },
  { title: "Feed Sales", image: asset("feed-trough.jpg") },
];

export const valueChain = [
  {
    step: "01",
    title: "Breeding",
    summary:
      "Our quality journey begins at the breeder-farm level, where parent birds are managed as an important foundation of the broiler production cycle.",
    image: asset("healthy-birds-01.jpg"),
  },
  {
    step: "02",
    title: "Hatchery",
    summary:
      "Our hatcheries incubate and hatch broiler chicks in controlled environments with a strong focus on hygiene and biosecurity.",
    image: asset("farm-complex.jpg"),
  },
  {
    step: "03",
    title: "Feed Manufacturing",
    summary:
      "Balanced nutrition plays an important role in poultry health and performance. Our feed operations support the nutritional requirements of breeder and broiler birds through breeder feed and broiler feed.",
    image: asset("feed-bags-chicks.jpg"),
  },
  {
    step: "04",
    title: "Broiler Farming",
    summary:
      "At the commercial broiler farming stage, birds are raised in clean environments and provided balanced nutrition to support their overall well-being and development.",
    image: asset("aerial-farm-03.jpg"),
  },
  {
    step: "05",
    title: "Integrated Logistics",
    summary:
      "Chicks, feed and live birds move through a coordinated logistics network so each stage of the chain stays on schedule.",
    image: asset("aerial-complex-02.jpg"),
  },
  {
    step: "06",
    title: "Sales and Distribution",
    summary:
      "Our integrated operations extend to broiler bird and poultry feed sales, connecting production with customers and business partners.",
    image: asset("aerial-complex-05.jpg"),
  },
];

export const homeProducts = [
  {
    slug: "hatching-eggs",
    name: "Hatching Eggs",
    short:
      "We supply fertile broiler hatching eggs produced within our own hatching egg production operations, with a focus on quality and uniformity for incubation.",
    image: asset("healthy-birds-02.jpg"),
  },
  {
    slug: "day-old-chicks",
    name: "Broiler Day-Old Chicks",
    short:
      "Our broiler chicks are incubated and hatched in our own hatcheries, where hygiene and biosecurity are important parts of hatchery operations.",
    image: asset("feed-bags-chicks.jpg"),
  },
  {
    slug: "live-broilers",
    name: "Broiler Birds",
    short:
      "We supply broiler birds produced through our integrated poultry operations with continued emphasis on quality throughout the production cycle.",
    image: asset("chickens-feeding.jpg"),
  },
  {
    slug: "poultry-feed",
    name: "Breeder Feed",
    short:
      "Our breeder poultry feed is designed to support breeder nutrition and the production of quality fertile eggs and broiler chicks.",
    image: asset("feed-trough.jpg"),
  },
  {
    slug: "poultry-feed",
    name: "Broiler Feed",
    short:
      "Our broiler poultry feed provides nutrition required to support broiler growth and performance.",
    image: asset("cage-rows.jpg"),
  },
];

export const products = [
  {
    slug: "hatching-eggs",
    name: "Hatching Eggs",
    category: "Genetics",
    short:
      "Uniform, sanitised hatching eggs selected for hatchability and chick quality.",
    image: asset("healthy-birds-02.jpg"),
    highlights: [
      "High hatchability parent stock",
      "Uniform egg size and shell quality",
      "Sanitised handling and packaging",
      "Traceable batches from breeder farms",
    ],
    specs: [
      { label: "Source", value: "In-house breeder farms" },
      { label: "Focus", value: "Hatchability & chick uniformity" },
      { label: "Handling", value: "Sanitised collection and graded packing" },
      { label: "Supply", value: "B2B hatcheries and integrated partners" },
    ],
  },
  {
    slug: "day-old-chicks",
    name: "Broiler Day-Old Chicks",
    category: "DOC",
    short:
      "Vaccinated broiler DOC with high livability and rapid-growth genetics.",
    image: asset("feed-bags-chicks.jpg"),
    highlights: [
      "High livability genetics",
      "Vaccinated hatchery stock",
      "Graded, counted and climate-protected dispatch",
      "Technical guidance for placement",
    ],
    specs: [
      { label: "Genetics", value: "Commercial broiler (incl. Vencobb lines)" },
      { label: "Health", value: "Hatchery vaccination as per protocol" },
      { label: "Dispatch", value: "Climate-aware chick boxes, counted lots" },
      { label: "Support", value: "Placement & early-life advisory" },
    ],
  },
  {
    slug: "live-broilers",
    name: "Live Broiler Birds",
    category: "Live birds",
    short:
      "Uniform-weight, high-yield broilers for wholesale, retail and institutional buyers.",
    image: asset("chickens-feeding.jpg"),
    highlights: [
      "Uniform live weight lots",
      "Disease-monitored flocks",
      "High dressing yield",
      "Reliable supply for wet markets and traders",
    ],
    specs: [
      { label: "Market", value: "Wholesale, retail butcheries, institutions" },
      { label: "Quality", value: "Uniform weight, healthy finish" },
      { label: "Sourcing", value: "Company and contract farms" },
      { label: "Logistics", value: "Scheduled live-bird movement" },
    ],
  },
  {
    slug: "poultry-feed",
    name: "Poultry & Livestock Feed",
    category: "Nutrition",
    short:
      "Breeder, broiler and cattle feed manufactured on automated mash and pellet lines.",
    image: asset("feed-trough.jpg"),
    highlights: [
      "Breeder poultry feed",
      "Broiler pre-starter, starter and finisher",
      "Custom / commercial formulations",
      "Cattle feed range",
    ],
    specs: [
      { label: "Pellet capacity", value: "20–25 tonnes per hour" },
      { label: "Mash capacity", value: "8–10 tonnes per hour" },
      { label: "Range", value: "Breeder, broiler & cattle feed" },
      { label: "QC", value: "Raw material and finished-feed testing" },
    ],
    variants: [
      {
        name: "Breeder Poultry Feed",
        detail: "Phase nutrition for parent stock productivity and egg quality.",
      },
      {
        name: "Broiler Pre-starter",
        detail: "Highly digestible crumbs for the first days of life.",
      },
      {
        name: "Broiler Starter",
        detail: "Balanced protein and energy for early frame growth.",
      },
      {
        name: "Broiler Finisher",
        detail: "Formulated for efficient weight gain and finish.",
      },
      {
        name: "Custom & Commercial Feed",
        detail: "Partner-specific formulations for distributors and farms.",
      },
      {
        name: "Cattle Feed",
        detail: "Livestock rations produced on the same quality-controlled mill.",
      },
    ],
  },
] as const;

export const operations = [
  {
    slug: "breeders-hatcheries",
    title: "Breeder Farms & Hatcheries",
    image: asset("healthy-birds-01.jpg"),
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
    image: asset("aerial-farm-03.jpg"),
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
    image: asset("feed-bags-chicks.jpg"),
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
    image: asset("aerial-complex-06.jpg"),
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
    title: "Retailers & butcher shops",
    text: "Reliable live-bird supply for neighbourhood and town markets.",
  },
  {
    id: "trader",
    title: "Traders & wholesale buyers",
    text: "Volume lots with uniform weight for redistribution.",
  },
  {
    id: "feed-distributor",
    title: "Feed distributors",
    text: "Sakthi feed range for farms in your catchment.",
  },
  {
    id: "supplier",
    title: "Raw material suppliers",
    text: "Grains, additives and packing vendors for the mill.",
  },
  {
    id: "institutional",
    title: "Institutional buyers",
    text: "Scheduled supply for processors, hotels and organised retail.",
  },
];

export const locationTypes = [
  "All",
  "Head Office",
  "Hatchery & Farms",
  "Feed Mill",
  "Distribution",
] as const;

export const locations = [
  {
    id: "ho-pollachi",
    type: "Head Office",
    name: "Corporate & Head Office",
    address:
      "No. 7, Om Shanthi Nagar, 1st Cross, Opp. Lathangi School, T. Kottampatti, Pollachi, Coimbatore, Tamil Nadu 642002",
    region: "Coimbatore",
    mapQuery: "T.Kottampatti Pollachi Coimbatore 642002",
    lat: 10.658,
    lng: 77.008,
    notes: "Registered office, enquiries, farmer onboarding and commercial coordination.",
  },
  {
    id: "singampunari",
    type: "Hatchery & Farms",
    name: "Production Complex — Singampunari",
    address:
      "South Singampunari Village, Singampunari Taluk, Sivagangai District, Tamil Nadu",
    region: "Sivagangai",
    mapQuery: "South Singampunari Village Singampunari Sivagangai Tamil Nadu",
    lat: 10.18,
    lng: 78.43,
    notes:
      "Poultry, hatchery and farm operations serving the southern Tamil Nadu production belt.",
  },
  {
    id: "feed-unit",
    type: "Feed Mill",
    name: "Automated Feed Manufacturing",
    address: "Integrated feed mill, Tamil Nadu",
    region: "Tamil Nadu",
    mapQuery: "Pollachi Tamil Nadu",
    lat: 10.658,
    lng: 77.008,
    notes:
      "Mash (8–10 TPH) and pellet (20–25 TPH) lines for breeder, broiler and cattle feed.",
  },
  {
    id: "distribution-west",
    type: "Distribution",
    name: "Western TN sales corridor",
    address: "Pollachi – Coimbatore catchment",
    region: "Coimbatore",
    mapQuery: "Pollachi Coimbatore",
    lat: 10.66,
    lng: 77.01,
    notes: "Live broiler and feed distribution to wholesale and retail butcher networks.",
  },
  {
    id: "distribution-south",
    type: "Distribution",
    name: "Southern TN sales corridor",
    address: "Sivagangai and adjoining districts",
    region: "Sivagangai",
    mapQuery: "Sivagangai Tamil Nadu",
    lat: 10.18,
    lng: 78.43,
    notes: "Regional offtake for contract farm harvests and institutional buyers.",
  },
];

export const gallery = {
  photos: [
    { src: asset("aerial-farm-01.jpg"), alt: "Aerial view of poultry sheds and access road", tag: "Farms" },
    { src: asset("aerial-farm-03.jpg"), alt: "Parallel broiler houses in agricultural landscape", tag: "Farms" },
    { src: asset("aerial-complex-02.jpg"), alt: "Integrated farm complex among coconut groves", tag: "Infrastructure" },
    { src: asset("farm-complex.jpg"), alt: "Climate-controlled sheds with support buildings", tag: "Infrastructure" },
    { src: asset("farm-aerial-sheds.jpg"), alt: "Long poultry houses with surrounding plantations", tag: "Farms" },
    { src: asset("feed-bags-chicks.jpg"), alt: "Sakthi feed bags and chick rearing cages", tag: "Feed" },
    { src: asset("chickens-feeding.jpg"), alt: "Broilers feeding from a continuous trough", tag: "Flock" },
    { src: asset("chicken-drinker.jpg"), alt: "Automated nipple drinker in a poultry house", tag: "Systems" },
    { src: asset("cage-rows.jpg"), alt: "Rows of healthy birds in managed housing", tag: "Flock" },
    { src: asset("healthy-birds-01.jpg"), alt: "Parent stock in a modern house", tag: "Breeders" },
    { src: asset("feed-trough.jpg"), alt: "Granulated feed in a farm trough", tag: "Feed" },
    { src: asset("waste-management.jpg"), alt: "Organised litter handling under elevated housing", tag: "Sustainability" },
  ],
  videos: [
    {
      src: "",
      poster: asset("aerial-complex-01.jpg"),
      title: "Sakthi Poultry operations film",
      caption: "Aerial and on-farm footage of housing, landscape and production flow.",
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
    image: asset("feed-bags-chicks.jpg"),
    tag: "Quality",
  },
  {
    slug: "farmer-engagement",
    date: "2025-11-20",
    title: "Contract farming onboarding window",
    excerpt:
      "Sakthi Poultry continues to evaluate shed-ready farmers with water and power for the next placement cycle.",
    image: asset("aerial-farm-04.jpg"),
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
