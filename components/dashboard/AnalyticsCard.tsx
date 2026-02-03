import Image from "next/image";
import React from "react";

interface AnalyticsCardProps {
  subtext: string;
  title: string;
  footer?: string;
  percentage?: string;
  icon: React.ReactNode;
  trend?: "up" | "down";
}

const AnalyticsCard = ({
  subtext,
  title,
  footer,
  percentage,
  icon,
  trend,
}: AnalyticsCardProps) => {
  return (
    <div className="bg-secondary aspect-auto   rounded-xl p-4 space-y-13">
      <div className="flex justify-between items-center">
        <span className="space-y-4">
          <p className="text-gray-dark">{subtext}</p>
          <h1 className="font-extrabold text-white text-2xl">{title}</h1>
        </span>
        <span className="text-primary p-4 rounded-lg border border-gray-light flex items-center justify-center">
          {icon}
        </span>
      </div>

      <div className="flex items-center gap-2">
        {trend === "up" ? (
          <Image
            src="/assets/svgs/trend-up.svg"
            width={24}
            height={24}
            alt="trend-up-icon"
          />
        ) : trend === "down" ? (
          <Image
            src="/assets/svgs/trend-down.svg"
            width={24}
            height={24}
            alt="trend-up-icon"
          />
        ) : (
          ""
        )}

        {percentage && trend && (
          <p className="text-[#606060]">
            <span
              className={`${trend === "up" ? "text-[#176F05]" : "text-[#D80027]"}`}
            >
              {percentage}
            </span>{" "}
            {footer}
          </p>
        )}
      </div>
    </div>
  );
};

export default AnalyticsCard;
