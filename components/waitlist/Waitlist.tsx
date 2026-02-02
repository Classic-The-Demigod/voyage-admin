"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

// Floating image component with parallax effect
const FloatingImage = ({
  src,
  alt,
  position,
  delay = 0,
  duration = 4,
}: {
  src: string;
  alt: string;
  position: { top?: string; bottom?: string; left?: string; right?: string };
  delay?: number;
  duration?: number;
}) => {
  return (
    <motion.div
      className="absolute z-0"
      style={position}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -25, 0],
        x: [0, 15, 0],
        rotate: [0, 5, 0, -5, 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        y: {
          duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
        x: {
          duration: duration * 1.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
        rotate: {
          duration: duration * 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
    >
      <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40">
        <div className="absolute inset-0 rounded-3xl blur-xl"></div>
        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl  backdrop-blur-sm">
          <Image src={src} alt={alt} fill className="object-cover" />
        </div>
      </div>
    </motion.div>
  );
};

export default function VoyageWaitlistEnhanced() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log({ email, role });
    setIsSubmitting(false);
    // Handle form submission
  };

  return (
    <div className="min-h-screen font-outfit  text-white relative overflow-hidden flex items-center justify-center p-4">
      {/* Gradient Orbs for depth */}
      {/* <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div> */}

      {/* Floating Images - Replace src with your actual image paths */}
      <FloatingImage
        src="/assets/svgs/Rectangle 12313.svg"
        alt="Fleet owner"
        position={{ top: "5%", left: "5%" }}
        delay={0}
        duration={4}
      />

      <FloatingImage
        src="/assets/svgs/Rectangle 12314.svg"
        alt="Driver"
        position={{ top: "8%", right: "8%" }}
        delay={0.5}
        duration={4.5}
      />

      <FloatingImage
        src="/assets/svgs/Rectangle 12315.svg"
        alt="Rider"
        position={{ bottom: "12%", left: "10%" }}
        delay={1}
        duration={5}
      />

      <FloatingImage
        src="/assets/svgs/Rectangle 12316.svg"
        alt="Business owner"
        position={{ bottom: "15%", right: "12%" }}
        delay={1.5}
        duration={4.2}
      />

      {/* Main Content */}
      <motion.div
        className="max-w-xl w-full z-10 "
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Logo */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image
            src="/assets/svgs/Logo.svg"
            width={50}
            height={50}
            alt="logo"
          />
          <h1 className="text-xl font-bold font-outfit font-medium tracking-tight">
            Voyage
          </h1>
        </motion.div>

        {/* User Avatars */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-8 mx-auto bg-white/5 w-fit border border-[#FFFCF4]/15 px-3 py-2 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Image
            src="/assets/svgs/Group 4.svg"
            width={100}
            height={100}
            alt="group"
          />
          <p className="text-sm text-gray-dark">
            Join a wide network of fleet owners and drivers
          </p>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-outfit font-medium text-center mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Voyage:{" "}
          <span className="text-transparent bg-clip-text font-normal bg-primary font-redressed">
            Arrive In Style
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-center text-gray-dark mb-8  leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Join our exclusive waitlist and get early access when we launch.
          Whether you're a rider, driver, fleet owner, or business, there's a
          place for you.
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-5 bg-secondary p-5 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div>
            <label className="block text-sm font-medium mb-2">
              Email Address <span className="text-white">*</span>
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3.5 bg-[#252324] border border-gray-dark rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:primary/20 transition-all backdrop-blur-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              I'm interested as a <span className="text-white">*</span>
            </label>
            <div className="relative">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                className="w-full px-4 py-3.5 bg-[#252324] border border-gray-dark rounded-xl focus:outline-none focus:primary focus:ring-2 focus:primary/20 transition-all appearance-none cursor-pointer backdrop-blur-sm"
              >
                <option value="">Select your role</option>
                <option value="rider">Rider</option>
                <option value="driver">Driver</option>
                <option value="fleet-owner">Fleet Owner</option>
                <option value="business">Business</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4  bg-primary text-white font-bold rounded-xl hover:shadow-xl hover:primary/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">
              {isSubmitting ? "Joining..." : "Join the Waitlist"}
            </span>
          </motion.button>
        </motion.form>

        {/* Trusted By Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <Image
              src="/assets/svgs/Line 1.svg"
              alt="line"
              width={100}
              height={100}
            />
            <p className="text-xs text-white uppercase tracking-widest font-medium">
              Trusted by companies like
            </p>
            <Image
              src="/assets/svgs/Line 1.svg"
              alt="line"
              width={100}
              height={100}
            />
          </div>

          <div className="flex items-center justify-center gap-8 md:gap-12">
            <motion.div
              whileHover={{ scale: 1.1, color: "#fff" }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={"/assets/svgs/comoany1.svg"}
                alt="company"
                width={100}
                height={100}
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, color: "#fff" }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={"/assets/svgs/company2.svg"}
                alt="company"
                width={100}
                height={100}
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, color: "#fff" }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={"/assets/svgs/company3.svg"}
                alt="company"
                width={100}
                height={100}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
