"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useSignupStore } from "@/store/signup-store";
import {
  accountSchema,
  type AccountFormData,
} from "@/lib/validations/signup-schema";

export function AccountCreationStep() {
  const { formData, updateFormData, goToNextStep } = useSignupStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AccountFormData>({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      name: formData.name || "",
      email: formData.email || "",
    },
  });

  const onSubmit = async (data: AccountFormData) => {
    // TODO: Send verification code to email
    updateFormData(data);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    goToNextStep();
  };

  const handleSocialSignup = (provider: "google" | "apple") => {
    // TODO: Implement social auth
    console.log(`Signup with ${provider}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-semibold">Create your account</h1>
        <p className="text-base text-balance">
          Sign up now to have access to voyage admin portal
        </p>
      </div>

      {/* Progress indicator - 1/3 */}
      <div className="flex gap-2">
        <div className="h-1 flex-1 bg-primary rounded" />
        <div className="h-1 flex-1 bg-gray-700 rounded" />
        <div className="h-1 flex-1 bg-gray-700 rounded" />
      </div>

      <Field>
        <FieldLabel htmlFor="name">
          Name<span className="text-red-500">*</span>
        </FieldLabel>
        <Input
          id="name"
          type="text"
          placeholder="Enter your name"
          className="border border-[#D0D5DD] h-16"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </Field>

      <Field>
        <FieldLabel htmlFor="email">
          Email<span className="text-red-500">*</span>
        </FieldLabel>
        <Input
          id="email"
          type="email"
          placeholder="Enter your name"
          className="border border-[#D0D5DD] h-16"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </Field>

      <Field>
        <Button type="submit" className="h-13" disabled={isSubmitting}>
          {isSubmitting ? "Processing..." : "Continue"}
        </Button>
      </Field>

      <div className="flex justify-between gap-4 items-center">
        <Image
          src={"/assets/svgs/line.svg"}
          width={300}
          height={300}
          alt="line"
        />
        <span className="text-gray-dark">OR</span>
        <Image
          src={"/assets/svgs/line.svg"}
          width={300}
          height={300}
          alt="line"
        />
      </div>

      <Field>
        <Button
          variant="outline"
          type="button"
          className="h-13 text-gray-700 text-sm"
          onClick={() => handleSocialSignup("google")}
        >
          <Image
            src={"/assets/svgs/google.svg"}
            width={20}
            height={20}
            alt="google"
          />
          Sign Up with Google
        </Button>
        <Button
          variant="outline"
          type="button"
          className="h-13 bg-black text-sm border-0"
          onClick={() => handleSocialSignup("apple")}
        >
          <Image
            src={"/assets/svgs/apple.svg"}
            width={20}
            height={20}
            alt="apple"
          />
          Sign Up with Apple
        </Button>
        <FieldDescription className="px-6 text-center text-gray-dark text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-primary">
            Log In
          </Link>
        </FieldDescription>
      </Field>
    </form>
  );
}
