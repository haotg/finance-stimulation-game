import { z } from "zod";

export const AnalysisSchema = z.object({
  ebitda: z.coerce
    .number({
      invalid_type_error: "EBITDA must be a number",
    })
    .min(0, { message: "EBITDA must be greater than 0" })
    .optional(),
  interestRate: z.coerce
    .number({
      invalid_type_error: "Interest Rate must be a number",
    })
    .min(0, { message: "Interest Rate must be greater than 0" })
    .optional(),
  multiple: z.coerce
    .number({
      invalid_type_error: "Multiple must be a number",
    })
    .min(0, { message: "Multiple must be greater than 0" })
    .optional(),
  factorScore: z.coerce
    .number({
      invalid_type_error: "Factor Score must be a number",
    })
    .min(0, { message: "Factor Score must be greater than 0" })
    .optional(),
  companyName: z.string().optional(),
  description: z.string().optional(),
});

export type Analysis = z.infer<typeof AnalysisSchema>;
