import { asset } from "./utils";
import { productEnquireHref } from "./products";

export const farmersSeo = {
  title: "Poultry Contract Farming & Business Partnerships | Sakthi Poultry",
  description:
    "At Sakthi Poultry Private Limited, strong relationships are an important part of building a sustainable poultry ecosystem. Grow with Sakthi Poultry through farmer partnerships and business relationships.",
};

export const farmerImages = {
  hero: asset("sakthi-poultry-contract-broiler-farm.jpg"),
  intro: asset("sakthi-poultry-contract-broiler-farm.jpg"),
  contract: asset("sakthi-poultry-contract-broiler-farm.jpg"),
  technical: asset("sakthi-poultry-broiler-chicks.jpg"),
  apply: asset("aerial-farm-05.jpg"),
  traders: asset("sakthi-poultry-broiler-birds.jpg"),
  feed: asset("sakthi-poultry-feed-manufacturing.jpg"),
  suppliers: asset("sakthi-poultry-farm-aerial-complex.jpg"),
  institutional: asset("sakthi-poultry-hatching-eggs.jpg"),
  close: asset("sakthi-poultry-farm-aerial-complex.jpg"),
};

export const farmerEnquire = {
  farmer: "#apply",
  partners: "#partners",
  trader: "/contact?type=dealer",
  feed: "/contact?type=dealer",
  supplier: "/contact?type=vendor",
  institutional: productEnquireHref(),
  general: "/contact?type=general",
} as const;

export const farmerBenefits = [
  {
    title: "Technical Guidance",
    text: "Access to guidance from our poultry team to support better understanding of poultry management and production practices.",
  },
  {
    title: "Modern Farming Knowledge",
    text: "Support in understanding and adopting appropriate modern poultry farming practices.",
  },
  {
    title: "Husbandry Guidance",
    text: "Practical guidance around proper poultry husbandry and responsible bird management.",
  },
  {
    title: "Connection to an Integrated Poultry Business",
    text: "Farmers become connected to a wider poultry ecosystem covering breeder operations, hatcheries, feed production and commercial broiler farming.",
  },
  {
    title: "Long-Term Partnership Approach",
    text: "We believe in building fair and mutually beneficial relationships rather than focusing only on short-term transactions.",
  },
  {
    title: "Community Development",
    text: "Through farmer partnerships, Sakthi Poultry aims to support farming communities, rural livelihood opportunities and long-term development.",
  },
];

export const technicalFocus = [
  "Poultry husbandry practices",
  "Farm management awareness",
  "Bird health and well-being",
  "Poultry nutrition awareness",
  "Hygiene and biosecurity awareness",
  "Modern poultry farming practices",
  "Production management guidance",
];

export const farmerEnquireWho = [
  "Existing poultry farmers",
  "Farmers interested in broiler farming",
  "Rural entrepreneurs exploring poultry farming opportunities",
  "Farming families interested in working with an integrated poultry business",
];

export const partnerProductRange = [
  { title: "Hatching Eggs", href: "/products#hatching-eggs" },
  { title: "Broiler Day-Old Chicks", href: "/products#day-old-chicks" },
  { title: "Broiler Birds", href: "/products#live-broilers" },
  { title: "Breeder Feed", href: "/products#breeder-feed" },
  { title: "Broiler Feed", href: "/products#broiler-feed" },
];

export const whyPartner = [
  {
    title: "Integrated Poultry Operations",
    text: "Our business connects breeder farms, hatcheries, poultry feed production and commercial broiler farms within an integrated poultry value chain.",
  },
  {
    title: "Quality Forever",
    text: "Our commitment to “Quality forever” remains embedded in our day-to-day poultry operations and business relationships.",
  },
  {
    title: "Farmer-Based Approach",
    text: "We recognise poultry farmers as an important part of our business ecosystem and support them through technical guidance and farming knowledge.",
  },
  {
    title: "Experienced Poultry Team",
    text: "Our dedicated team brings experience across different areas of commercial broiler integration.",
  },
  {
    title: "Long-Term Relationships",
    text: "We believe that sustainable growth comes from relationships that create value for both Sakthi Poultry and its partners.",
  },
];

export const closingEnquiries = [
  {
    title: "Become a Sakthi Farmer",
    text: "Explore poultry farming opportunities with Sakthi Poultry.",
    href: farmerEnquire.farmer,
    cta: "Become a Sakthi Farmer",
  },
  {
    title: "Trader / Retailer Enquiry",
    text: "Connect with us regarding poultry product requirements.",
    href: farmerEnquire.trader,
    cta: "Trader / Retailer Enquiry",
  },
  {
    title: "Feed Distributor Enquiry",
    text: "Explore poultry feed distribution opportunities.",
    href: farmerEnquire.feed,
    cta: "Feed Distributor Enquiry",
  },
  {
    title: "Supplier Enquiry",
    text: "Submit your business details for relevant supply opportunities.",
    href: farmerEnquire.supplier,
    cta: "Supplier Enquiry",
  },
  {
    title: "Institutional Buyer Enquiry",
    text: "Discuss your poultry product requirements with our team.",
    href: farmerEnquire.institutional,
    cta: "Institutional Buyer Enquiry",
  },
  {
    title: "General Partner Enquiry",
    text: "Connect with Sakthi Poultry regarding other relevant business opportunities.",
    href: farmerEnquire.general,
    cta: "General Partner Enquiry",
  },
];
