import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.string().min(1, {
    message: "Email must be at least 2 character",
  }),
});

export type NewsletterSchema = z.infer<typeof newsletterSchema>;
