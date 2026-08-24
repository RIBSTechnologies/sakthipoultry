import { asset } from "./utils";
import { productEnquireHref, productRange } from "./products";

export const farmersSeo = {
  title: "Farmers & Partners | Sakthi Poultry",
  description:
    "Sakthi Poultry works with farmers, poultry businesses, traders, distributors and other business partners through integrated poultry operations and a Quality Forever approach.",
};

export const farmersProductRange = productRange.map((item) => ({
  ...item,
  href: `/products${item.href}`,
}));

export const farmerSupport = [
  {
    title: "Technical Guidance",
    text: "Supporting farmers with technical guidance, resources and production knowledge.",
  },
  {
    title: "Feed Supply",
    text: "Our broiler production network supports contracted poultry farmers with feed supply throughout the production cycle.",
  },
  {
    title: "Veterinary Services",
    text: "Farmers receive veterinary services and field support as part of the wider poultry production system.",
  },
  {
    title: "Husbandry Practices",
    text: "Our team encourages proper husbandry practices and modern farming methods within the farming community.",
  },
  {
    title: "Broiler Day-Old Chicks",
    text: "Our broiler chicks are intended for commercial poultry farming operations seeking chicks produced within an integrated poultry system.",
  },
  {
    title: "Long-Term Relationships",
    text: "We believe in fair, mutually beneficial and long-term relationships with farmers and other associates connected to our poultry business.",
  },
];

export const partnerPaths = [
  {
    title: "Become a Sakthi Trader",
    text: "For traders, retailers, institutional buyers and other poultry businesses requiring broiler birds, our team is available to understand your product requirements.",
    href: "/contact?type=dealer",
    cta: "Trader Enquiry",
  },
  {
    title: "Become a Sakthi Retailer",
    text: "Retailers and other poultry businesses can connect with our team to discuss broiler bird requirements and supply.",
    href: "/contact?type=dealer",
    cta: "Retailer Enquiry",
  },
  {
    title: "Feed Distributors",
    text: "Farmers, poultry businesses and feed distributors looking for a broiler feed supplier can connect with our team to discuss their requirements.",
    href: productEnquireHref("broiler-feed"),
    cta: "Broiler Feed Enquiry",
  },
];

export const farmerImages = {
  hero: asset("sakthi-poultry-contract-broiler-farm.jpg"),
  intro: asset("sakthi-poultry-contract-broiler-farm.jpg"),
  support: asset("sakthi-poultry-broiler-chicks.jpg"),
  apply: asset("aerial-farm-05.jpg"),
  close: asset("sakthi-poultry-farm-aerial-complex.jpg"),
};
