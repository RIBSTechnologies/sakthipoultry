import { asset } from "./utils";

export const productsSeo = {
  title: "Poultry Products in South India | Sakthi Poultry",
  description:
    "Sakthi Poultry Private Limited offers a focused range of poultry products supporting different stages of commercial broiler production — hatching eggs, broiler day-old chicks, broiler birds, breeder feed and broiler feed.",
};

export function productEnquireHref(slug?: string) {
  return slug
    ? `/contact?type=product&product=${slug}`
    : "/contact?type=product";
}

export const productRange = [
  {
    title: "Hatching Eggs",
    href: "#hatching-eggs",
    image: asset("sakthi-poultry-hatching-eggs.jpg"),
  },
  {
    title: "Broiler Day-Old Chicks",
    href: "#day-old-chicks",
    image: asset("sakthi-poultry-broiler-chicks.jpg"),
  },
  {
    title: "Broiler Birds",
    href: "#live-broilers",
    image: asset("sakthi-poultry-broiler-birds.jpg"),
  },
  {
    title: "Breeder Poultry Feed",
    href: "#breeder-feed",
    image: asset("sakthi-poultry-breeder-feed.jpg"),
  },
  {
    title: "Broiler Poultry Feed",
    href: "#broiler-feed",
    image: asset("sakthi-bromix-broiler-feed.jpg"),
  },
];

export const productDetails = [
  {
    id: "hatching-eggs",
    eyebrow: "Hatching Eggs",
    title: "Quality Hatching Eggs for Broiler Production",
    paragraphs: [
      "Sakthi Poultry supplies fertile broiler hatching eggs for incubation.",
      "Our hatching eggs originate from our own hatching egg production operations, allowing this important stage of broiler production to remain connected to our wider integrated poultry system.",
      "Attention to breeder management, bird nutrition and production practices supports our focus on producing hatching eggs with quality and uniformity.",
      "For hatcheries and poultry businesses looking for a dependable hatching eggs supplier, our team can assist with product enquiries and requirements.",
    ],
    cta: "Hatching Eggs Enquiry",
    href: productEnquireHref("hatching-eggs"),
    image: asset("sakthi-poultry-hatching-eggs.jpg"),
    alt: "Fertile broiler hatching eggs from Sakthi Poultry",
  },
  {
    id: "day-old-chicks",
    eyebrow: "Broiler Day-Old Chicks",
    title: "Broiler Chicks from Our Own Hatcheries",
    paragraphs: [
      "Sakthi Poultry supplies broiler day-old chicks incubated and hatched through our own poultry hatcheries.",
      "Hygiene and poultry biosecurity receive strong attention within our hatchery operations, supporting our quality-focused approach from hatching egg to chick.",
      "Our integrated production system connects breeder operations, hatching egg production and hatchery management, helping maintain continuity throughout the early stages of broiler poultry production.",
      "Our broiler chicks are intended for commercial poultry farming operations seeking chicks produced within an integrated poultry system.",
      "If you are looking for a broiler chicks supplier in South India, connect with Sakthi Poultry to discuss your requirement.",
    ],
    cta: "Broiler Chicks Enquiry",
    href: productEnquireHref("day-old-chicks"),
    image: asset("sakthi-poultry-broiler-chicks.jpg"),
    alt: "Broiler day-old chicks from Sakthi Poultry hatcheries",
  },
  {
    id: "live-broilers",
    eyebrow: "Broiler Birds",
    title: "Broiler Birds Produced with a Focus on Quality",
    paragraphs: [
      "Sakthi Poultry supplies broiler birds produced through our integrated commercial poultry operations.",
      "Quality management begins well before the broiler farming stage. Our production chain connects breeder operations, hatcheries, poultry nutrition and commercial broiler farms.",
      "During broiler production, birds are raised in clean environments and provided balanced nutrition to support their overall well-being and development.",
      "Our focus remains on responsible poultry management and consistent attention to quality throughout the growing cycle.",
      "For traders, retailers, institutional buyers and other poultry businesses requiring broiler birds, our team is available to understand your product requirements.",
    ],
    cta: "Broiler Bird Enquiry",
    href: productEnquireHref("live-broilers"),
    image: asset("sakthi-poultry-broiler-birds.jpg"),
    alt: "Broiler birds produced through Sakthi Poultry operations",
  },
];

export const feedProducts = [
  {
    id: "breeder-feed",
    eyebrow: "Breeder Poultry Feed",
    title: "Nutrition Supporting Breeder Performance",
    paragraphs: [
      "Our breeder feed is developed to support the nutritional requirements of breeder birds and the production cycle associated with quality fertile eggs and broiler chicks.",
      "Breeder nutrition is an important foundation of commercial broiler production. Our approach therefore connects poultry nutrition with the wider breeder and hatchery operations within the Sakthi Poultry value chain.",
      "Our breeder feed supports poultry operations seeking appropriate nutrition for breeder birds and hatching egg production.",
      "For breeder poultry feed requirements, connect with our team for product information and enquiries.",
    ],
    cta: "Breeder Feed Enquiry",
    href: productEnquireHref("breeder-feed"),
    image: asset("sakthi-poultry-breeder-feed.jpg"),
    alt: "Sakthi Poultry breeder feed",
  },
  {
    id: "broiler-feed",
    eyebrow: "Broiler Poultry Feed",
    title: "Nutrition Supporting Broiler Growth & Performance",
    paragraphs: [
      "Sakthi Poultry supplies broiler feed designed to provide the nutrition broilers require for growth and performance.",
      "Poultry nutrition forms an essential part of commercial broiler farming, and balanced feeding contributes to the overall development and well-being of birds.",
      "Our broiler feed forms part of Sakthi Poultry's integrated approach, connecting feed production with commercial broiler operations and farmer requirements.",
      "Farmers, poultry businesses and feed distributors looking for a broiler feed supplier can connect with our team to discuss their requirements.",
    ],
    cta: "Broiler Feed Enquiry",
    href: productEnquireHref("broiler-feed"),
    image: asset("sakthi-bromix-broiler-feed.jpg"),
    alt: "Sakthi Poultry broiler feed",
  },
];

export const whyChoose = [
  {
    title: "Integrated Poultry Operations",
    text: "Our products are supported by an operational chain that connects breeder farms, hatcheries, feed production and commercial broiler farms.",
  },
  {
    title: "Quality-Focused Approach",
    text: "Our commitment to “Quality forever” extends throughout our day-to-day poultry operations and product journey.",
  },
  {
    title: "Own Hatchery Operations",
    text: "Our broiler day-old chicks are incubated and hatched through our own hatcheries, with attention to hygiene and biosecurity.",
  },
  {
    title: "Focus on Poultry Nutrition",
    text: "Breeder and broiler nutrition are integrated into our wider poultry production approach.",
  },
  {
    title: "Experienced Poultry Team",
    text: "Our dedicated team brings knowledge and experience across different areas of commercial broiler integration.",
  },
  {
    title: "Farmer & Business Relationships",
    text: "We believe in fair, mutually beneficial and long-term relationships with farmers, retailers, suppliers, service providers and other associates connected to our poultry business.",
  },
];

export const productJourney = [
  "Breeder Farms",
  "Hatching Eggs",
  "Hatcheries",
  "Broiler Day-Old Chicks",
  "Poultry Feed",
  "Broiler Farms",
  "Broiler Birds",
];

export const productEnquiries = [
  {
    title: "Hatching Eggs",
    text: "Connect with us regarding fertile hatching egg requirements.",
    href: productEnquireHref("hatching-eggs"),
  },
  {
    title: "Broiler Day-Old Chicks",
    text: "Enquire about chicks for commercial broiler farming.",
    href: productEnquireHref("day-old-chicks"),
  },
  {
    title: "Broiler Birds",
    text: "Discuss broiler bird requirements with our team.",
    href: productEnquireHref("live-broilers"),
  },
  {
    title: "Breeder Feed",
    text: "Contact us for breeder poultry feed enquiries.",
    href: productEnquireHref("breeder-feed"),
  },
  {
    title: "Broiler Feed",
    text: "Connect with us regarding broiler poultry feed requirements.",
    href: productEnquireHref("broiler-feed"),
  },
];
