import AnalyticsCard from "@/components/dashboard/AnalyticsCard";
import RevenueChart from "@/components/dashboard/Chart";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import BookingsIcon from "@/components/svgs/bookings-icon";
import DisputeIcon from "@/components/svgs/dispute-icon";
import PayoutIcon from "@/components/svgs/payout-icon";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6 bg-gray-light font-outfit">
      <div className="bg-secondary p-6 space-y-2 rounded-xl border border-[#D6D6D6]/40">
        <h1 className="text-3xl text-white">Admin Dashboard</h1>
        <p className="text-gray-dark text-base">
          Comprehensive overview of your platform performance and management
        </p>
      </div>
    

      <div className="grid grid-cols-2 gap-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-2">
          <AnalyticsCard
            subtext="Total GMV"
            title="₦24,560,000"
            percentage="+12.5%"
            footer="Up from yesterday"
            trend="up"
            icon={<PayoutIcon width="24" height="24" color="currentColor" />}
          />
          <AnalyticsCard
            subtext="Active Bookings"
            title="342"
            percentage="+8.2%"
            footer="Up from last week"
            trend="up"
            icon={<BookingsIcon width="24" height="24" color="currentColor" />}
          />
          <AnalyticsCard
            subtext="Pending KYC"
            title="28"
            percentage="-5.3%"
            footer="Down from yesterday"
            trend="down"
            icon={<BookingsIcon width="24" height="24" color="currentColor" />}
          />
          <AnalyticsCard
            subtext="Open Disputes"
            title="12"
            percentage="+2.1%"
            footer="Up from last week"
            trend="up"
            icon={<DisputeIcon width="24" height="24" color="currentColor" />}
          />
        </div>

        <div className="bg-secondary  rounded-xl border border-[#D6D6D6]/40">
          <div className="p-4 border-b border-b-[#D6D6D6]/40">
            <h1 className="text-white text-xl font-medium">Urgent Action</h1>
          </div>

          <div className="p-6  text-white space-y-2">
            <div className="p-4 bg-primary/40 rounded-xl border border-primary flex items-center justify-between">
              <span>
                <h1 className="text-sm font-normal">
                  KYC approval backlog exceeding 48hrs
                </h1>
                <p className="text-[#D6D6D6] text-sm font-normal">
                  Action required
                </p>
              </span>

              <span className="size-4 bg-primary rounded-full items-center justify-center flex text-xs">
                4
              </span>
            </div>
            <div className="p-4 bg-primary/40 rounded-xl border border-primary flex items-center justify-between">
              <span>
                <h1 className="text-sm font-normal">
                  Claims pending resolution
                </h1>
                <p className="text-[#D6D6D6] text-sm font-normal">
                  Action required
                </p>
              </span>

              <span className="size-4 bg-primary rounded-full items-center justify-center flex text-xs">
                4
              </span>
            </div>
            <div className="p-4 bg-primary/40 rounded-xl border border-primary flex items-center justify-between">
              <span>
                <h1 className="text-sm font-normal">Scheduled Payout</h1>
                <p className="text-[#D6D6D6] text-sm font-normal">
                  Action required
                </p>
              </span>

              <span className="size-4 bg-primary rounded-full items-center justify-center flex text-xs">
                2
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-secondary min-h-[100vh] flex-1 rounded-xl md:min-h-min" /> */}
      <RevenueChart />
      <RecentActivity />
    </div>
  );
}
