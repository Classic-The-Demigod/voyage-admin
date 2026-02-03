import AnalyticsCard from "@/components/dashboard/AnalyticsCard";
import { MediaStoreList } from "@/components/dashboard/MediaStoreList";
import BookingsIcon from "@/components/svgs/bookings-icon";
import ClockIcon from "@/components/svgs/clock-icon";
import KycIcon from "@/components/svgs/kyc-icon";
import MediaIcon from "@/components/svgs/media-icon";
import PayoutIcon from "@/components/svgs/payout-icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";



export default function MediaStorePage() {
  return (
    <section className="flex flex-1 flex-col gap-4 p-6 bg-gray-light font-outfit">
      <div className="bg-secondary p-6 space-y-2 rounded-xl border border-[#D6D6D6]/40">
        <h1 className="text-3xl text-white">Media & Evidence Store</h1>
        <p className="text-gray-dark text-base">
          Timestamped photos for inspections and claims
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <AnalyticsCard
          subtext="Total Media Items"
          title="5"
          icon={<MediaIcon width="24" height="24" color="currentColor" />}
        />
        <AnalyticsCard
          subtext="Inspection Photos"
          title="1"
          icon={<MediaIcon width="24" height="24" color="currentColor" />}
        />

        <AnalyticsCard
          subtext="Damage Evidence"
          title="4"
          icon={<KycIcon width="24" height="24" color="currentColor" />}
        />
        <AnalyticsCard
          subtext="Avg Retrieval Time"
          title="1.2s"
          icon={<ClockIcon width="24" height="24" color="currentColor" />}
        />
      </div>

      <div className="bg-secondary p-6 space-y-2 rounded-xl border border-[#D6D6D6]/40 flex justify-between items-center">
        <div className="px-4 py-2 min-w-80 rounded-lg border border-[#D6D6D6]/40 flex items-center gap-2">
          <Image
            src={"/assets/svgs/search.svg"}
            width={24}
            height={24}
            alt="search"
          />

          <Input
            placeholder="Search"
            className="p-0 border-0 placeholder:text-primary focus-visible:border-0 focus-visible:ring-0 text-primary"
          />
        </div>

        <div className="flex items-center gap-4">
          <Button className="bg-secondary border border-gray-dark h-12">
            All Request
            <span>
              <Image
                src={"/assets/svgs/chevron-down.svg"}
                width={24}
                height={24}
                alt="search"
              />
            </span>
          </Button>
          <Button className="border-0 h-12">
            <span>
              <Image
                src={"/assets/svgs/download-01.svg"}
                width={24}
                height={24}
                alt="search"
              />
            </span>
            Export CSV
          </Button>
        </div>
      </div>


      <MediaStoreList />
    </section>
  );
}
