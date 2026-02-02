import VoyageFAQEnhanced from "@/components/waitlist/Faq";
import Footer from "@/components/waitlist/Footer";
import VoyageWaitlistEnhanced from "@/components/waitlist/Waitlist";
import Image from "next/image";

export default function Home() {
  return (
    <section className="bg  p-4">
      <div className="flex  items-center justify-center text-primary font-outfit font-medium text-lg py-1 px-3 w-fit mx-auto rounded-lg bg-primary/20">
        <p>Coming soon to Lagos, Abuja!!</p>
      </div>

      <VoyageWaitlistEnhanced />
      <VoyageFAQEnhanced />
      <Footer />
    </section>
  );
}
