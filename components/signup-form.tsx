"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSignupStore } from "@/store/signup-store";
import { AccountCreationStep } from "./signup-steps/account-creation-step";
import { VerificationStep } from "./signup-steps/verification-step";
import { PasswordStep } from "./signup-steps/password-step";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const { currentStep, goToPreviousStep } = useSignupStore();

  const handleBack = () => {
    if (currentStep === "account") {
      router.back();
    } else {
      goToPreviousStep();
    }
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

      {currentStep === "account" && <AccountCreationStep />}
      {currentStep === "verification" && <VerificationStep />}
      {currentStep === "password" && <PasswordStep />}
    </div>
  );
}
