import Image from "next/image";
import { LoginForm } from "@/components/login-form";
import { ForgotPasswordForm } from "@/components/forgot-password-form";

export default function ForgotPasswordPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2 font-outfit">
      <div className="bg-signup relative hidden lg:block overflow-hidden">
        <div className="p-10 space-y-3">
          <h1 className="text-5xl text-white font-medium">
            <span className="font-normal font-redressed text-black">
              Trusted Marketplace
            </span>{" "}
            <br />
            for Every Journey{" "}
          </h1>
          <p className="text-white text-lg">
            Voyage brings verified users, secure bookings, <br /> insurance
            protection and transparent pricing
          </p>
        </div>

        <Image
          className="mx-5"
          src={"/assets/svgs/phone-group.svg"}
          width={700}
          height={700}
          alt="mockup"
        />

        {/* <div className="bg-signup h-full w-full"></div> */}
      </div>
      <div className="flex flex-col gap-4 p-6 md:px-10 md:py-20 bg-secondary">
        <div className="flex flex-1 items-center justify-center ">
          <div className="w-full max-w-lg ">
            <ForgotPasswordForm />
          </div>
        </div>
        <p className="text-center text-white">©Voyage 2026</p>
      </div>
    </div>
  );
}
