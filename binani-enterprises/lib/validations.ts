import { z } from "zod"

export const creditCardSchema = z.object({
  name: z.string().min(2, "Name is required"),

  email: z.string().email("Invalid email"),

  phone: z.string().min(10, "Phone number required"),

  amount: z.string(),

  employmentType: z.string().min(2, "Employment type is required"),

  pinCode: z.string()
    .min(6, "PIN code is required")
    .max(6),

  companyName: z.string().optional(),

  monthlySalary: z.string().optional(),

  itrAmount: z.string().optional(),

  consent: z.boolean(),
})

export type CreditCardFormData = z.infer<typeof creditCardSchema>

export const personalLoanSchema = creditCardSchema