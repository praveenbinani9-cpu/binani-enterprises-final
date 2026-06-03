import { z } from "zod"

export const creditCardSchema = z.object({
  fullname: z.string().min(2, "Name is required"),

  email: z.string().email("Invalid email"),

  mobile: z.string().min(10, "Phone number required"),

  amount: z.string(),

  employmentType: z.string().min(2, "Employment type is required"),

  pinCode: z.string()
    .min(6, "PIN code is required")
    .max(6),

  companyName: z.string().optional(),

  monthlySalary: z.string().optional(),

  annualITR: z.string().optional(),

  consent: z.boolean(),
})

export type CreditCardFormData = z.infer<typeof creditCardSchema>

export const personalLoanSchema = creditCardSchema

export type PersonalLoanFormData =
  z.infer<typeof personalLoanSchema>
