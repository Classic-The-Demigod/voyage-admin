import React from "react";
import { DashboardTextHeader } from "@/components/dashboard-text-header";
import { Calendar, ChevronDown } from "lucide-react";
import DollarPath from "@/public/assets/svgs/payout.svg";
import GroupPath from "@/public/assets/svgs/Group.svg";
import WarningPath from "@/public/assets/svgs/cuida_warning-outline.svg";
import FallPath from "@/public/assets/svgs/fall.svg";
import RisePath from "@/public/assets/svgs/rise.svg";

export default function Page() {
    const stats = [
        { name: "Active Policies", num: "1,247", icon: DollarPath.src || DollarPath, isLucide: false, text: "+12.5% Up from yesterday", rise: true },
        { name: "Monthly Revenue", num: "₦84,290", icon: Calendar, isLucide: true, text: "+8.2% Up from last week", rise: true },
        { name: "Churn Rate", num: "2.4%", icon: GroupPath.src || GroupPath, isLucide: false, text: "-5.3% Down from yesterday", rise: false },
        { name: "Open Disputes", num: "4", icon: WarningPath.src || WarningPath, isLucide: false, text: "+2.1% Up from last week", rise: true }
    ];

    const urgentActions = ["Open Dispute", "Offer Update", "Pending Payout"];

    const recentActivities = [
        { title: "New Offer", subtitle: "by Abs Insurance", amount: "₦20,000/mon", time: "2 hours ago" },
        { title: "Claim Filed", subtitle: "by Sarah Ojo", amount: "₦20,000", time: "5 hours ago" },
        { title: "Payment Received", subtitle: "by Michael Chen", amount: "₦120,000", time: "1 day ago" },
        { title: "Dispute Resolved", subtitle: "by Fleet Motors Ltd", amount: "₦120,000", time: "1 day ago" },
    ];

    return (
        <div className="flex flex-1 flex-col gap-8 p-6 bg-gray-light font-outfit min-h-screen">
            <DashboardTextHeader
                title="Welcome back, ABS Insurance!"
                description="Here's what's happening with your insurance offerings on Voyage"
            />


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <section className="lg:col-span-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                        <div className="bg-secondary p-6 rounded-xl border border-gray-dark flex flex-col justify-between" key={index}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-gray-dark text-sm mb-1">{stat.name}</h4>
                                    <p className="text-2xl font-bold text-white">{stat.num}</p>
                                </div>
                                <div className="p-2 bg-gray-dark/10 rounded-lg">
                                    {stat.isLucide ? <stat.icon size={24} color="#CB9E4B" /> : <img src={stat.icon} alt="" className="w-6 h-6" />}
                                </div>
                            </div>
                            <div className="mt-4 flex items-center gap-2 text-xs">
                                <img src={stat.rise ? RisePath.src || RisePath : FallPath.src || FallPath} alt="" className="w-4 h-4" />
                                <span className={stat.rise ? "text-green-500" : "text-red-500"}>{stat.text}</span>
                            </div>
                        </div>
                    ))}
                </section>

                <aside className="bg-secondary rounded-2xl border border-[#D6D6D666] flex flex-col">
                    <h3 className="text-white font-semibold border-b border-[#D6D6D666] p-5">Urgent Actions</h3>
                    <div className="flex flex-col gap-3 p-5">
                        {urgentActions.map((action, i) => (
                            <div key={i} className="bg-[#CB9E4B33] p-4 rounded-xl border border-gray-dark flex flex-col hover:border-white/20 transition-all cursor-pointer">
                                <span className="text-white text-sm font-medium">{action}</span>
                                <p className="text-[#D6D6D6] text-xs mt-1">Action Required</p>
                            </div>
                        ))}
                    </div>
                </aside>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">

                <section className="bg-secondary rounded-2xl border border-[#D6D6D666] overflow-hidden">
                    <h3 className="text-white font-semibold p-5 border-b border-[#D6D6D666]">Recent Activity</h3>
                    <div className="flex flex-col">
                        {recentActivities.map((activity, i) => (
                            <div key={i} className="flex items-center justify-between p-5 border-b border-[#D6D6D633] last:border-0 hover:bg-white/5 transition-colors">
                                <div>
                                    <p className="text-white text-sm font-medium">{activity.title}</p>
                                    <p className="text-gray-dark text-xs">{activity.subtitle}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-white text-sm font-bold">{activity.amount}</p>
                                    <p className="text-gray-dark text-[10px]">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Monthly Payout Placeholder (Visual Style matching your image) */}
                <section className="bg-secondary rounded-2xl border border-[#D6D6D666] p-6">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <p className="text-gray-dark text-sm uppercase tracking-wider">ABS Monthly Payout</p>
                            <div className="flex items-center gap-3">
                                <h2 className="text-3xl font-bold text-white">₦2,360,000</h2>
                                <span className="flex items-center gap-1 bg-green-500/10 text-green-500 text-[10px] px-2 py-0.5 rounded border border-green-500/20">
                                    <img src={RisePath.src || RisePath} className="w-3 h-3" alt="" /> 8.2%
                                </span>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 bg-gray-dark/10 text-white text-xs px-3 py-1.5 rounded-lg border border-gray-dark">
                            January <ChevronDown size={14} />
                        </button>
                    </div>
                    
                    <div className="h-32 w-full mt-4 flex items-end gap-1 border-b border-[#D6D6D633] relative">
                        <div className="absolute top-0 left-0 text-[10px] text-gray-dark">400</div>
                        <div className="absolute bottom-2 left-0 text-[10px] text-gray-dark">300</div>
                        <div className="w-full h-[2px] bg-blue-500/30 absolute bottom-10"></div>
                        <div className="absolute bottom-12 left-1/3 transform -translate-x-1/2">
                           <div className="bg-[#CB9E4B] text-black text-[10px] px-2 py-1 rounded relative font-bold">
                             ₦2,360,000
                             <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#CB9E4B] rotate-45"></div>
                           </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}