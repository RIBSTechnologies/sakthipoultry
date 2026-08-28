import { enquiryTypes } from "@/lib/data";
import type { LeadInput } from "@/lib/validations";

const contactEnquiryLabels = Object.fromEntries(
  enquiryTypes.map((item) => [item.id, item.label]),
) as Record<Exclude<LeadInput["type"], "career">, string>;

export const enquiryLabels: Record<LeadInput["type"], string> = {
  ...contactEnquiryLabels,
  career: "Career Application",
};

export function enquiryLabel(type: LeadInput["type"]) {
  return enquiryLabels[type];
}
