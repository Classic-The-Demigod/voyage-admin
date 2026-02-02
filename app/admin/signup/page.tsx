import { GalleryVerticalEnd } from "lucide-react";

import { SignupForm } from "@/components/signup-form";
import Image from "next/image";

export default function SignupPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2 font-outfit">
      <div className="bg-signup relative hidden lg:block">
        <div className="p-10 space-y-3">
          <h1 className="text-5xl text-white font-medium">
            Earn, Drive, or Ride <br />{" "}
            <span className="font-normal font-redressed text-black">
              Voyage In Style
            </span>{" "}
          </h1>
          <p className="text-white text-lg">
            Voyage empowers owners, drivers, and riders with <br /> affordable
            mobility options that work for everyone.
          </p>
        </div>
        <Image src={"/assets/svgs/phone-mockup.svg"} width={700} height={700} alt="mockup" />

        {/* <div className="bg-signup h-full w-full"></div> */}
      </div>
      <div className="flex flex-col gap-4 p-6 md:px-10 md:py-20 bg-secondary">
        <div className="flex flex-1 items-center justify-center ">
          <div className="w-full max-w-lg ">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
}
