import { z } from "zod";

// Step 1: Account Creation Schema
export const accountSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
});

export type AccountFormData = z.infer<typeof accountSchema>;

// Step 2: Verification Schema
export const verificationSchema = z.object({
  verificationCode: z
    .string()
    .length(4, "Code must be 4 digits")
    .regex(/^\d+$/, "Code must contain only numbers"),
});

export type VerificationFormData = z.infer<typeof verificationSchema>;

// Step 3: Password Schema
export const passwordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[@#$]/,
        "Password must contain at least one special character (@, #, $)",
      ),
    confirmPassword: z.string(),
    agreeToTerms: z.boolean().refine((val) => val === true, {
      message: "You must agree to the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type PasswordFormData = z.infer<typeof passwordSchema>;
