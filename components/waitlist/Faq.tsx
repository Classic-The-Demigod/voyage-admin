"use client";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Voyage?",
    answer:
      "Voyage is a premium ride-hailing service that connects discerning passengers with carefully vetted drivers in luxury vehicles. We focus on comfort, safety, and style.",
  },
  {
    question: "Which cities will Voyage serve?",
    answer:
      "We're launching in major metropolitan areas first, with plans to expand nationwide. You'll receive updates on city launches when you join our waitlist. We'll also send exclusive promotions once we're available in your area.",
  },
  {
    question: "How is Voyage different from other ride services?",
    answer:
      "Voyage focuses exclusively on premium experiences. All our drivers are professional, all vehicles are luxury models, and every ride includes premium amenities. We're not just a ride—we're an experience.",
  },
  {
    question: "Can I join as a driver or fleet partner?",
    answer:
      "Absolutely! We're actively recruiting experienced drivers and fleet partners. Our platform offers competitive rates, flexible scheduling, and support for growth. Join our waitlist with professional drivers to get first priority when we launch in your area.",
  },
  {
    question: "Is there a cost to join the waitlist?",
    answer:
      'Absolutely not! It\'s completely free to join our waitlist, and you\'ll get exclusive early access pricing when we launch. Select "Driver" or "Fleet Partner" if you\'re interested in joining the waitlist and our partnerships team will reach out.',
  },
  {
    question: "How will I be notified when Voyage launches?",
    answer:
      "We'll send you an email as soon as we launch in your area. You'll also receive exclusive early-bird offers, promotional codes, and VIP benefits. We'll only communicate important updates—no spam, we promise.",
  },
];

const FAQItemEnhanced = ({ item, index }: { item: FAQItem; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group  bg-[#252324] border border-[#FFFCF4]/15 rounded-lg"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Hover gradient effect */}

      {/* Left accent line */}
      <motion.div
        className=""
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative border-b border-gray-800 last:border-b-0">
        <motion.button
          className="w-full py-6 px-6 flex items-start justify-between gap-6 text-left"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ x: 8 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex-1">
            <motion.span
              className="text-lg font-semibold block"
              animate={{
                color: isOpen ? "#CB9E4B" : isHovered ? "#CB9E4B" : "#FFFFFF",
              }}
              transition={{ duration: 0.3 }}
            >
              {item.question}
            </motion.span>
          </div>

          {/* Animated icon */}
          <motion.div
            className="flex-shrink-0 relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="w-12 h-12 border-2 rounded-lg flex items-center justify-center relative overflow-hidden"
              animate={{
                borderColor: isOpen
                  ? "#CB9E4B"
                  : isHovered
                    ? "#CB9E4B"
                    : "#D9D9D9",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Plus icon vertical line */}
              <motion.div
                className="absolute w-0.5 h-4 bg-gray-400"
                animate={{
                  rotate: isOpen ? 90 : 0,
                  backgroundColor: isOpen
                    ? "#CB9E4B"
                    : isHovered
                      ? "#CB9E4B"
                      : "#6B7280",
                }}
                transition={{ duration: 0.3 }}
              />
              {/* Plus icon horizontal line */}
              <motion.div
                className="absolute w-4 h-0.5 bg-gray-400"
                animate={{
                  rotate: isOpen ? 90 : 0,
                  opacity: isOpen ? 0 : 1,
                  backgroundColor: isHovered ? "#CB9E4B" : "#6B7280",
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </motion.button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: "auto",
                opacity: 1,
                transition: {
                  height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                  opacity: { duration: 0.3, delay: 0.1 },
                },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: {
                  height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
                  opacity: { duration: 0.2 },
                },
              }}
              className="overflow-hidden"
            >
              <motion.div
                className="px-6 pb-6"
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <motion.p
                  className="text-gray-dark leading-relaxed pr-16 text-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  {item.answer}
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default function VoyageFAQEnhanced() {
  const [expandAll, setExpandAll] = useState(false);

  return (
    <section className="min-h-screen font-outfit text-white py-20 px-4 relative overflow-hidden">

      <motion.div
        className="absolute bottom-20 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
         

          <motion.h2
            className="text-5xl md:text-6xl font-medium mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Frequently Asked{" "}
            <span className="font-redressed text-primary">
              Questions
            </span>
          </motion.h2>

        
        </motion.div>

        {/* FAQ Container */}
        <motion.div
          className="backdrop-blur-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >


          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <FAQItemEnhanced key={index} item={item} index={index} />
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
      
      </div>

      
    </section>
  );
}
