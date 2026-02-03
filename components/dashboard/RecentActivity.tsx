import React from "react";

type ActivityType = "KYC" | "Booking" | "Dispute" | "Payout";
type StatusType = "Pending" | "Active" | "Urgent";

interface ActivityItem {
  id: string;
  type: ActivityType;
  status: StatusType;
  title: string;
  user: string;
  timestamp: string;
}

const activities: ActivityItem[] = [
  {
    id: "1",
    type: "KYC",
    status: "Pending",
    title: "KYC Submitted for review",
    user: "John Adebayo",
    timestamp: "5 mins ago",
  },
  {
    id: "2",
    type: "Booking",
    status: "Active",
    title: "New booking #BK-3421",
    user: "Sarah Ojo",
    timestamp: "12 mins ago",
  },
  {
    id: "3",
    type: "Dispute",
    status: "Urgent",
    title: "Damage claim filed",
    user: "Michael Chen",
    timestamp: "23 mins ago",
  },
  {
    id: "4",
    type: "Payout",
    status: "Pending",
    title: "Payout requested ₦450,000",
    user: "Fleet Motors Ltd",
    timestamp: "1 hr ago",
  },
];

const StatusBadge = ({
  type,
  status,
}: {
  type: ActivityType;
  status: StatusType;
}) => {
  const getStatusStyles = (s: StatusType) => {
    switch (s) {
      case "Pending":
        return "bg-[#3b3a21] text-[#eab308]";
      case "Active":
        return "bg-[#1e293b] text-[#3b82f6]";
      case "Urgent":
        return "bg-[#451a1a] text-[#ef4444]";
      default:
        return "bg-gray-800 text-gray-400";
    }
  };

  return (
    <div className="flex gap-2 items-center mb-2">
      <span className="bg-[#F7F0E4] text-primary px-2 py-0.5 rounded text-[12px] font-bold uppercase tracking-wide">
        {type}
      </span>
      <span
        className={`px-2 py-0.5 rounded text-[12px] font-medium ${getStatusStyles(status)}`}
      >
        {status}
      </span>
    </div>
  );
};

export const RecentActivity: React.FC = () => {
  return (
    <div className="w-full bg-secondary rounded-xl overflow-hidden font-outfit">
      <div className="p-4 border-b border-gray-800">
        <h2 className="text-white text-lg font-semibold">Recent Activity</h2>
      </div>

      <div className="divide-y divide-gray-800">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="p-5 flex justify-between items-start hover:bg-white/[0.02] transition-colors"
          >
            <div>
              <StatusBadge type={activity.type} status={activity.status} />
              <h3 className="text-gray-100 text-[15px] font-medium mb-1">
                {activity.title}
              </h3>
              <p className="text-gray-dark text-xs">
                by{" "}
                <span className="hover:underline cursor-pointer">
                  {activity.user}
                </span>
              </p>
            </div>
            <div className="text-gray-500 text-[11px] whitespace-nowrap pt-1">
              {activity.timestamp}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
