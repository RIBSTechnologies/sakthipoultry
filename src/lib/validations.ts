import { z } from "zod";

const phone = z
  .string()
  .trim()
  .min(10, "Enter a valid 10-digit mobile number")
  .regex(/^[0-9+\-\s]{10,15}$/, "Enter a valid phone number");

export const leadSchema = z.object({
  type: z.enum(["product", "farmer", "dealer", "vendor", "general", "career"]),
  name: z.string().trim().min(2, "Please enter your name"),
  phone,
  email: z.string().trim().email("Enter a valid email").or(z.literal("")).optional(),
  organisation: z.string().trim().optional(),
  message: z.string().trim().max(2000).optional(),
  product: z.string().trim().optional(),
  farmLocation: z.string().trim().optional(),
  shedCapacity: z.string().trim().optional(),
  waterAvailable: z.string().optional(),
  electricityAvailable: z.string().optional(),
  partnerSegment: z.string().trim().optional(),
  gstin: z.string().trim().optional(),
  role: z.string().trim().optional(),
  website: z.string().optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
