"use client";

import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useSignupStore } from "@/store/signup-store";
import { useRef, useState } from "react";

export function VerificationStep() {
  const { formData, updateFormData, goToNextStep } = useSignupStore();
  const [code, setCode] = useState(["", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [isResending, setIsResending] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string>("");

  const handleCodeChange = (index: number, value: string) => {
    // Clear any existing errors
    if (error) setError("");

    // Only allow single digit
    if (value.length > 1) {
      value = value.slice(-1);
    }

    // Only allow numbers
    if (value && !/^\d$/.test(value)) {
      return;
    }

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all 4 digits are entered
    if (newCode.every((digit) => digit !== "") && index === 3) {
      setTimeout(() => {
        handleSubmit();
      }, 100);
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 4);

    if (!/^\d+$/.test(pastedData)) {
      return;
    }

    const newCode = pastedData.split("").concat(["", "", "", ""]).slice(0, 4);
    setCode(newCode);

    // Focus last filled input or last input
    const lastFilledIndex = Math.min(pastedData.length - 1, 3);
    inputRefs.current[lastFilledIndex]?.focus();

    // Auto-submit if complete
    if (pastedData.length === 4) {
      setTimeout(() => handleSubmit(), 100);
    }
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }

    const verificationCode = code.join("");

    if (verificationCode.length !== 4) {
      setError("Please enter the complete 4-digit code");
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Verify the code with backend
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      // For demo purposes, accept "2222" as valid
      // Comment this out when integrating with real API
      // if (verificationCode !== "2222") {
      //   setError("Invalid verification code. Please try again.");
      //   setIsSubmitting(false);
      //   return;
      // }

      console.log("Verification code:", verificationCode);

      updateFormData({ verificationCode });
      goToNextStep();
    } catch (err) {
      setError("An error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  const handleResendCode = async () => {
    setIsResending(true);
    try {
      // TODO: Call API to resend code
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Show success message (consider using a toast instead of alert)
      alert("Verification code resent!");
    } catch (err) {
      alert("Failed to resend code. Please try again.");
    } finally {
      setIsResending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-semibold">Enter code</h1>
        <p className="text-base text-balance">
          Enter a 4-digit code we've sent to{" "}
          <span className="text-primary">{formData.email}</span>
        </p>
      </div>

      {/* Progress indicator - 2/3 */}
      <div className="flex gap-2">
        <div className="h-1 flex-1 bg-primary rounded" />
        <div className="h-1 flex-1 bg-primary rounded" />
        <div className="h-1 flex-1 bg-gray-700 rounded" />
      </div>

      <Field>
        <div className="flex gap-4 justify-between border border-[#D0D5DD] rounded-xl">
          {code.map((digit, index) => (
            <Input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="text"
              placeholder="_"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={index === 0 ? handlePaste : undefined}
              className="h-20 text-center text-2xl font-semibold border-0"
              autoFocus={index === 0}
            />
          ))}
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </Field>

      <Field>
        <Button type="submit" className="h-13" disabled={isSubmitting}>
          {isSubmitting ? "Verifying..." : "Continue"}
        </Button>
      </Field>

      <div className="text-center text-sm">
        <span className="text-gray-dark">Didn't get a code? </span>
        <button
          type="button"
          onClick={handleResendCode}
          disabled={isResending}
          className="text-primary hover:underline disabled:opacity-50"
        >
          {isResending ? "Resending..." : "Click to resend"}
        </button>
      </div>
    </form>
  );
}
