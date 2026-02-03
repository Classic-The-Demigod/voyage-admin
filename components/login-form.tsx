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
  type AccountFormData,
} from "@/lib/validations/signup-schema";
import { Checkbox } from "./ui/checkbox";

export function LoginForm({
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

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-semibold">Sign In</h1>
          <p className="text-base text-gray-dark">
            Welcome back! Please enter your credentials to sign in your admin
            account.
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
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </Field>

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
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </Field>

        <div className="flex items-center justify-between">
          <Field className="w-fit">
            <div className="flex items-center gap-2">
              <Checkbox
                id="agreeToTerms"
                {...register("remember")}
                className="mt-1"
              />
              <label htmlFor="agreeToTerms" className="text-sm cursor-pointer">
                Remember for 30 days
              </label>
            </div>
          </Field>

          <Link href="/admin/forgot-password" className="text-primary">
            Forgot Password
          </Link>
        </div>

        <Field>
          <Button type="submit" className="h-13" disabled={isSubmitting}>
            {isSubmitting ? "Signing in..." : "Sign In"}
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
            // onClick={() => handleSocialSignup("google")}
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
            className="h-13 bg-black hover:bg-black hover:text-white text-sm border-0"
            // onClick={() => handleSocialSignup("apple")}
          >
            <Image
              src={"/assets/svgs/apple.svg"}
              width={20}
              height={20}
              alt="apple"
            />
            Sign Up with Apple
          </Button>
          <FieldDescription className="px-6 text-center  text-gray-dark text-sm">
            Don't have an account?{" "}
            <Link href="/login" className="text-primary">
              Sign Up
            </Link>
          </FieldDescription>
        </Field>
      </form>
    </div>
  );
}
