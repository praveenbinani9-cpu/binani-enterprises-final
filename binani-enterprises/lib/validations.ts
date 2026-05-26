import { z } from "zod"

export const creditCardSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone number required"),
  amount: z.string(),
})

export type CreditCardFormData = z.infer<typeof creditCardSchema>
export const personalLoanSchema = creditCardSchema