import React from "react";
import DashboardIcon from "../svgs/dashboard-icon";
import Image from "next/image";
import { Input } from "../ui/input";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between h-20 shrink-0 items-center gap-2  bg-secondary px-4">
      <div className="flex items-center gap-4 text-white">
        <DashboardIcon width="24" height="24" color="currentColor" />
        <h1 className="text-3xl font-outfit font-normal">Dashboard</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="px-4 py-2 min-w-75 rounded-lg border border-gray-dark flex items-center gap-2">
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

        <Link
          href={""}
          className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#F7F0E4]"
        >
          <Image
            src={"/assets/svgs/notification-bing.svg"}
            width={24}
            height={24}
            alt="notification"
          />
        </Link>
        <div className="relative">


        <Link
          href={""}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-primary text-white "
        >
          OD
        </Link>

          <span className="w-3 h-3 rounded-full bg-green-600 absolute right-1 bottom-0"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
