"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSignupStore } from "@/store/signup-store";
import {
  passwordSchema,
  type PasswordFormData,
} from "@/lib/validations/signup-schema";
import { Checkbox } from "../ui/checkbox";

export function PasswordStep() {
  const router = useRouter();
  const { formData, updateFormData, resetForm } = useSignupStore();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
  });

  const password = watch("password");

  const onSubmit = async (data: PasswordFormData) => {
    updateFormData(data);

    // TODO: Call API to create account with all form data
    const completeFormData = {
      ...formData,
      ...data,
    };

    console.log("Complete signup data:", completeFormData);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Reset form and redirect to success page or login
    resetForm();
    router.push("/signup-success"); // or "/login"
  };

  // Password strength indicators
  const hasMinLength = password?.length >= 8;
  const hasUppercase = /[A-Z]/.test(password || "");
  const hasNumber = /[0-9]/.test(password || "");
  const hasSpecialChar = /[@#$]/.test(password || "");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-semibold">Set password</h1>
        <p className="text-base text-balance">
          Set password to create account. Must be at least 8 characters.
        </p>
      </div>

      {/* Progress indicator - 3/3 */}
      <div className="flex gap-2">
        <div className="h-1 flex-1 bg-primary rounded" />
        <div className="h-1 flex-1 bg-primary rounded" />
        <div className="h-1 flex-1 bg-primary rounded" />
      </div>

      <Field>
        <FieldLabel htmlFor="password">
          Password<span className="text-red-500">*</span>
        </FieldLabel>
        <Input
          id="password"
          type="password"
          placeholder="Enter your new password"
          className="border border-[#D0D5DD] h-16"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </Field>

      <Field>
        <FieldLabel htmlFor="confirmPassword">
          Confirm password<span className="text-red-500">*</span>
        </FieldLabel>
        <Input
          id="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          className="border border-[#D0D5DD] h-16"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </Field>

      {/* Password requirements */}
      <div className="text-sm text-gray-400 space-y-1">
        <p>
          Use at least 8 characters, including one uppercase letter, one number,
          and one special character (e.g. @, #, $).
        </p>

        {password && (
          <div className="space-y-1 mt-2">
            <div className={hasMinLength ? "text-green-500" : "text-gray-400"}>
              {hasMinLength ? "✓" : "○"} At least 8 characters
            </div>
            <div className={hasUppercase ? "text-green-500" : "text-gray-400"}>
              {hasUppercase ? "✓" : "○"} One uppercase letter
            </div>
            <div className={hasNumber ? "text-green-500" : "text-gray-400"}>
              {hasNumber ? "✓" : "○"} One number
            </div>
            <div
              className={hasSpecialChar ? "text-green-500" : "text-gray-400"}
            >
              {hasSpecialChar ? "✓" : "○"} One special character (@, #, $)
            </div>
          </div>
        )}
      </div>

      <Field>
        <div className="flex items-start gap-2">
          <Checkbox
            id="agreeToTerms"
            {...register("agreeToTerms")}
            className="mt-1"
          />
          <label htmlFor="agreeToTerms" className="text-sm cursor-pointer">
            By clicking and creating an account, I agree to Voyage's{" "}
            <Link href="/terms" className="text-primary hover:underline">
              Term of Use
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </label>
        </div>
        {errors.agreeToTerms && (
          <p className="text-red-500 text-sm mt-1">
            {errors.agreeToTerms.message}
          </p>
        )}
      </Field>

      <Field>
        <Button type="submit" className="h-13" disabled={isSubmitting}>
          {isSubmitting ? "Creating Account..." : "Continue"}
        </Button>
      </Field>

      <FieldDescription className="px-6 text-center text-gray-dark text-sm">
        Already have an account?{" "}
        <Link href="/login" className="text-primary">
          Log In
        </Link>
      </FieldDescription>
    </form>
  );
}
