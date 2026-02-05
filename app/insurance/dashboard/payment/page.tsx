"use client";
import React, { useState } from "react";
import { DashboardTextHeader } from "@/components/dashboard-text-header";
import { Search, ChevronDown, Download } from "lucide-react";
import DollarPath from "@/public/assets/svgs/payout.svg";
import { Pagination } from "@/components/pagination";

export default function Page() {
  const [page, setPage] = useState(1);

  const stats = [
    { label: "Total Revenue", value: "₦9,290,000" },
    { label: "This Month", value: "₦290,000" },
    { label: "Pending", value: "₦45,000" },
  ];

  const payments = Array(5).fill({
    id: "PAY-001",
    date: "2026-01-14",
    owner: "John Smith",
    offer: "Basic Driver Protection",
    amount: "₦20,000",
    method: "Credit Card",
    status: "Completed",
  });

  return (
    <div className="flex flex-1 flex-col gap-8 p-6 bg-gray-light font-outfit min-h-screen text-white">
      <DashboardTextHeader
        title="Payments"
        description="Track and manage your incoming payments"
      />

      {/* Revenue Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-secondary p-6 rounded-2xl border border-[#D6D6D61A] flex justify-between items-center">
            <div>
              <p className="text-gray-dark text-sm mb-1">{stat.label}</p>
              <h2 className="text-2xl font-bold">{stat.value}</h2>
            </div>
            <div className="p-3 bg-gray-dark/10 rounded-xl border border-[#CB9E4B] border-opacity-30">
              <img src={DollarPath.src || DollarPath} className="w-5 h-5" alt="" />
            </div>
          </div>
        ))}
      </div>

    
      <div className="flex flex-col md:flex-row justify-between gap-4 bg-secondary p-5 rounded-xl">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-dark w-5 h-5" />
          <input
            type="text"
            placeholder="Search by riders name or payment IDN"
            className="w-full bg-secondary border border-[#D6D6D633] rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-[#CB9E4B]"
          />
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-4 bg-secondary border border-[#D6D6D633] px-5 py-3 rounded-xl text-sm">
            All Status <ChevronDown size={16} />
          </button>
          <button className="flex items-center gap-2 bg-primary border border-[#CB9E4B]  px-5 py-3 rounded-xl text-sm font-bold">
            <Download size={18} /> Export CSV
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-secondary rounded-2xl border border-[#D6D6D633] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[#D6D6D633] text-gray-dark text-xs uppercase tracking-wider">
                <th className="px-6 py-6 font-semibold">Payment ID</th>
                <th className="px-6 py-6 font-semibold">Date</th>
                <th className="px-6 py-6 font-semibold">Owner</th>
                <th className="px-6 py-6 font-semibold">Offer</th>
                <th className="px-6 py-6 font-semibold">Amount</th>
                <th className="px-6 py-6 font-semibold">Method</th>
                <th className="px-6 py-6 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D6D6D61A]">
              {payments.map((item, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors text-sm mt- rounded-t-2xl">
                  <td className="px-6 py-6">{item.id}</td>
                  <td className="px-6 py-6">{item.date}</td>
                  <td className="px-6 py-6 font-medium">{item.owner}</td>
                  <td className="px-6 py-6">{item.offer}</td>
                  <td className="px-6 py-6 font-bold">{item.amount}</td>
                  <td className="px-6 py-6">{item.method}</td>
                  <td className="px-6 py-6">
                    <span className={`px-3 py-1 rounded-md text-[10px] font-bold ${
                      idx === 2 ? "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20" : 
                      idx === 4 ? "bg-red-500/10 text-red-500 border border-red-500/20" :
                      "bg-green-500/10 text-green-500 border border-green-500/20"
                    }`}>
                      {idx === 2 ? "Pending" : idx === 4 ? "Failed" : "Completed"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Integration */}
        <div className="px-6 py-3 border-t border-[#D6D6D633]">
          <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />
        </div>
      </div>
    </div>
  );
}