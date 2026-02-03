

import AnalyticsCard from "@/components/dashboard/AnalyticsCard";
import { MediaStoreList } from "@/components/dashboard/MediaStoreList";
import { PayoutTable } from "@/components/dashboard/PayoutTable";
import BookingsIcon from "@/components/svgs/bookings-icon";
import ClockIcon from "@/components/svgs/clock-icon";
import KycIcon from "@/components/svgs/kyc-icon";
import MediaIcon from "@/components/svgs/media-icon";
import PayoutIcon from "@/components/svgs/payout-icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";


export default function PayoutPage() {
    return (
      <section className="flex flex-1 flex-col gap-4 p-6 bg-gray-light font-outfit">
        <div className="bg-secondary p-6 space-y-2 rounded-xl border border-[#D6D6D6]/40">
          <h1 className="text-3xl text-white">Payouts & Settlements</h1>
          <p className="text-gray-dark text-base">
            Manage owner payouts and financial settlements
          </p>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <AnalyticsCard
            subtext="Pending Payouts"
            title="5"
            icon={<PayoutIcon width="24" height="24" color="currentColor" />}
          />

          <AnalyticsCard
            subtext="Scheduled Today"
            title="1"
            icon={<BookingsIcon width="24" height="24" color="currentColor" />}
          />
          <AnalyticsCard
            subtext="Total Spending Amount"
            title="2"
            icon={<PayoutIcon width="24" height="24" color="currentColor" />}
          />
          <AnalyticsCard
            subtext="Completed This Week"
            title="1"
            icon={<PayoutIcon width="24" height="24" color="currentColor" />}
          />
        </div>

      


        <PayoutTable />
      </section>
    );
}