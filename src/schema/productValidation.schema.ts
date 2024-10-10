import { z } from "zod";

export const productValidationSchema = z
  .object({
    name: z.string(),
    price: z.number(),
    stockQuantity: z.number().min(0),
    description: z.string(),
    category: z.string(),
    ratings: z.number().min(1).max(5),
    images: z.array(z.string()),
  })
  .required();
