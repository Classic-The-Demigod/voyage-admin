"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useSignupStore } from "@/store/signup-store";
import {
  accountSchema,
  loginSchema,

} from "@/lib/validations/signup-schema";


export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<{ email: string; password: string; remember?: boolean }>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = async (data: {
    email: string;
    password: string;
    remember?: boolean;
  }) => {
    router.push("/admin/dashboard");
    console.log(data);
  };

  return (
    <div className={cn("flex flex-col text-white gap-4", className)} {...props}>
      <div>
        <button onClick={handleBack} className="flex items-center gap-2">
          <Image
            src={"/assets/svgs/arrow-left.svg"}
            width={24}
            height={24}
            alt="arrow-left"
          />
          Back
        </button>
      </div>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold">Forgot password?</h1>
          <p className="text-base text-balance">
            No worries, we’ll send you reset instructions.
          </p>
        </div>

        <Field>
          <FieldLabel htmlFor="email">
            Email<span className="text-red-500">*</span>
          </FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="Enter your name"
            className="border border-[#D0D5DD] h-16"
            // {...register("email")}
          />
        </Field>

        <Field>
          <Button type="submit" className="h-13" disabled={isSubmitting}>
            {isSubmitting ? "Submitting" : "Continue"}
          </Button>
        </Field>
      </form>
    </div>
  );
}
