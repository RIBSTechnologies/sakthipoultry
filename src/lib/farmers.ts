import { asset } from "./utils";
import { productEnquireHref } from "./products";

export const farmersSeo = {
  title: "Farmers & Partners | Sakthi Poultry",
  description:
    "Sakthi Poultry works with farmers, poultry businesses, traders, distributors and other business partners through integrated poultry operations and a Quality Forever approach.",
};

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
  apply: asset("aerial-farm-05.jpg"),
  close: asset("sakthi-poultry-farm-aerial-complex.jpg"),
};
