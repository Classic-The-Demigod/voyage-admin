"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";
import DashboardIcon from "./svgs/dashboard-icon";
import KycIcon from "./svgs/kyc-icon";
import BookingsIcon from "./svgs/bookings-icon";
import DisputeIcon from "./svgs/dispute-icon";
import PayoutIcon from "./svgs/payout-icon";
import MediaIcon from "./svgs/media-icon";
import AnalyticsIcon from "./svgs/analytics-icon";
import NotificationIcon from "./svgs/notification-icon";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const navItems = [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: <DashboardIcon width="20" height="20" color="currentColor" />,
    },
    {
      title: "KYC Queue",
      url: "/kyc",
      icon: <KycIcon width="20" height="20" color="currentColor" />,
    },
    {
      title: "Bookings",
      url: "/bookings",
      icon: <BookingsIcon width="20" height="20" color="currentColor" />,
    },
    {
      title: "Dispute & Claims",
      url: "/disupute",
      icon: <DisputeIcon width="20" height="20" color="currentColor" />,
    },
    {
      title: "Payout",
      url: "/payout",
      icon: <PayoutIcon width="20" height="20" color="currentColor" />,
    },
    {
      title: "Media Store",
      url: "/media-store",
      icon: <MediaIcon width="20" height="20" color="currentColor" />,
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: <AnalyticsIcon width="20" height="20" color="currentColor" />,
    },
    {
      title: "Notification",
      url: "/Notification",
      icon: <NotificationIcon width="20" height="20" color="currentColor" />,
    },
  ];

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* <TeamSwitcher teams={data.teams} /> */}
        <main className="border-b border-b-gray-dark p-4 space-y-2">
          <div className=" flex items-center gap-6 ">
            <div className="bg-primary rounded w-16 h-16 flex items-baseline-last justify-center">
              <Image
                src="/assets/svgs/logo-alone.svg"
                width={100}
                height={100}
                alt="logo"
              />
            </div>

            <h1 className="text-2xl text-white font-outfit font-medium">
              Voyage
            </h1>
          </div>
          <p className="text-base text-gray-dark font-outfit">
            Operations Dashboard
          </p>
        </main>
      </SidebarHeader>
      <SidebarContent className="py-4">
        <NavMain items={navItems} />
      </SidebarContent>
      <SidebarFooter className="p-4 border-t border-t-gray-dark">
        <button
          // onClick={handleLogout}
          className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-red-500/10 transition-colors text-red-500"
        >
          <Image
            src={"/assets/svgs/logout.svg"}
            width={20}
            height={20}
            alt="logout"
          />
          {/* <LogoutIcon width="20" height="20" /> */}
          <span className="group-data-[collapsible=icon]:hidden font-outfit">
            Log Out
          </span>
        </button>
      </SidebarFooter>
      {/* <SidebarRail /> */}
    </Sidebar>
  );
}
