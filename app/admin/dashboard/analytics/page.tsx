import AnalyticsCard from "@/components/dashboard/AnalyticsCard";
import { ClaimsDistribution } from "@/components/dashboard/ClaimsDistribution";
import { GMVTrendChart } from "@/components/dashboard/GMVTRendChart";
import { MonthlyActivityChart } from "@/components/dashboard/MonthlyActivityChart";

import BookingsIcon from "@/components/svgs/bookings-icon";
import DisputeIcon from "@/components/svgs/dispute-icon";
import KycIcon from "@/components/svgs/kyc-icon";
import PayoutIcon from "@/components/svgs/payout-icon";

export default function AnalyticsPage() {
  return (
    <section className="flex flex-1 flex-col gap-4 p-6 bg-gray-light font-outfit">
      <div className="bg-secondary p-6 space-y-2 rounded-xl border border-[#D6D6D6]/40">
        <h1 className="text-3xl text-white">Analytics</h1>
        <p className="text-gray-dark text-base">
          Business metrics, funnels, and event tracking
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-2 justify-between">
          <AnalyticsCard
            subtext="Activation Rate"
            title="76%"
            percentage="+8.2%"
            footer="vs last week"
            trend="up"
            icon={<PayoutIcon width="24" height="24" color="currentColor" />}
          />
          <AnalyticsCard
            subtext="Avg Time to First Booking"
            title="1.7d"
            percentage="↓ 0.5d"
            footer="Improvement"
            trend="up"
            icon={<BookingsIcon width="24" height="24" color="currentColor" />}
          />
          <AnalyticsCard
            subtext="Claims Ratio"
            title="3.5%"
            percentage="-1.2%"
            footer="vs last month"
            trend="down"
            icon={<KycIcon width="24" height="24" color="currentColor" />}
          />
          <AnalyticsCard
            subtext="Rating Completion"
            title="77%"
            percentage="5.3%"
            footer="vs last week"
            trend="up"
            icon={<DisputeIcon width="24" height="24" color="currentColor" />}
          />
        </div>

        <div className="bg-secondary  rounded-xl border border-[#D6D6D6]/40 p-4">
          <ClaimsDistribution />
        </div>



      </div>


      <div className="grid grid-cols-2 gap-4">
<GMVTrendChart />
<MonthlyActivityChart />
      </div>
    </section>
  );
}
