"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Check, CheckCircle2, ChevronRight, X } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

// --- Types ---
type PayoutStatus = "Pending" | "Schedule" | "Completed";

interface PayoutData {
  id: string;
  payoutId: string;
  owner: string;
  bookings: number;
  period: string;
  grossAmount: string;
  commission: string;
  netPayout: string;
  status: PayoutStatus;
}

// --- Mock Data ---
const MOCK_PAYOUTS: PayoutData[] = [
  {
    id: "1",
    payoutId: "PO-001",
    owner: "John Adebayo",
    bookings: 4,
    period: "Jan 1-7, 2026",
    grossAmount: "₦180,000",
    commission: "-₦27,000",
    netPayout: "₦153,000",
    status: "Pending",
  },
  {
    id: "2",
    payoutId: "PO-002",
    owner: "OG Auto's",
    bookings: 8,
    period: "Jan 1-7, 2026",
    grossAmount: "₦180,000",
    commission: "-₦27,000",
    netPayout: "₦153,000",
    status: "Schedule",
  },
  {
    id: "3",
    payoutId: "PO-002",
    owner: "OG Auto's",
    bookings: 8,
    period: "Jan 1-7, 2026",
    grossAmount: "₦180,000",
    commission: "-₦27,000",
    netPayout: "₦153,000",
    status: "Completed",
  },
  {
    id: "4",
    payoutId: "PO-002",
    owner: "OG Auto's",
    bookings: 8,
    period: "Jan 1-7, 2026",
    grossAmount: "₦180,000",
    commission: "-₦27,000",
    netPayout: "₦153,000",
    status: "Pending",
  },
  {
    id: "5",
    payoutId: "PO-002",
    owner: "OG Auto's",
    bookings: 8,
    period: "Jan 1-7, 2026",
    grossAmount: "₦180,000",
    commission: "-₦27,000",
    netPayout: "₦153,000",
    status: "Completed",
  },
  {
    id: "6",
    payoutId: "PO-002",
    owner: "OG Auto's",
    bookings: 8,
    period: "Jan 1-7, 2026",
    grossAmount: "₦180,000",
    commission: "-₦27,000",
    netPayout: "₦153,000",
    status: "Schedule",
  },
];



export const PayoutTable: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const getStatusStyle = (status: PayoutStatus) => {
    switch (status) {
      case "Pending":
        return "bg-[#3b3a21] text-[#eab308]";
      case "Schedule":
        return "bg-[#1e293b] text-[#3b82f6]";
      case "Completed":
        return "bg-[#143b21] text-[#22c55e]";
    }
  };

  return (
    <>
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
          {selectedIds.length > 0 && (
            <div className="animate-in fade-in slide-in-from-right-4">
              <Button
                onClick={() => setShowModal(true)}
                className="bg-transparent border border-primary text-white h-12 rounded-lg text-sm font-bold hover:bg-[#D4A757]/10 transition-colors"
              >
                Process Selected ({selectedIds.length})
              </Button>
            </div>
          )}

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

      {/* Search/Header Extension - Inserting the Process Button */}

      <div className="bg-secondary rounded-xl border border-[#D6D6D6]/40 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-[11px] uppercase tracking-wider text-white border-b border-gray-800">
              <th className="px-6 py-4 w-12 text-center">
                <div className="w-4 h-4 border border-gray-600 rounded" />
              </th>
              <th className="px-6 py-4 font-medium">Payout ID</th>
              <th className="px-6 py-4 font-medium">Owner</th>
              <th className="px-6 py-4 font-medium">Period</th>
              <th className="px-6 py-4 font-medium">Gross Amount</th>
              <th className="px-6 py-4 font-medium">Commission (15%)</th>
              <th className="px-6 py-4 font-medium">Net Payout</th>
              <th className="px-6 py-4 font-medium text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800/50">
            {MOCK_PAYOUTS.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-white/[0.02] transition-colors group"
              >
                <td className="px-6 py-5">
                  <button
                    onClick={() => toggleSelect(row.id)}
                    className={`w-4 h-4 rounded border transition-colors flex items-center justify-center ${
                      selectedIds.includes(row.id)
                        ? "text-white border-primary bg-primary"
                        : "border-gray-dark"
                    }`}
                  >
                    {selectedIds.includes(row.id) && <Check />}
                  </button>
                </td>
                <td className="px-6 py-5 text-sm font-medium text-white">
                  {row.payoutId}
                </td>
                <td className="px-6 py-5">
                  <div className="text-sm font-medium text-white">
                    {row.owner}
                  </div>
                  <div className="text-[11px] text-gray-dark">
                    {row.bookings} Bookings
                  </div>
                </td>
                <td className="px-6 py-5 text-sm text-gray-300">
                  {row.period}
                </td>
                <td className="px-6 py-5 text-sm text-white font-medium">
                  {row.grossAmount}
                </td>
                <td className="px-6 py-5 text-sm text-red-500 font-medium">
                  {row.commission}
                </td>
                <td className="px-6 py-5 text-sm text-white font-bold">
                  {row.netPayout}
                </td>
                <td className="px-6 py-5 text-right">
                  <span
                    className={`px-3 py-1 rounded text-[10px] font-bold ${getStatusStyle(row.status)}`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-800 flex justify-between items-center">
          <div className="flex gap-2">
            {[1, 2, 3, "...", 8, 9, 10].map((p, i) => (
              <button
                key={i}
                className={`w-8 h-8 rounded flex items-center justify-center text-xs font-bold transition-colors ${p === 1 ? "bg-primary text-white" : "hover:bg-gray-800 text-gray-dark"}`}
              >
                {p}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-xs font-bold">
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* --- SUCCESS MODAL --- */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#D7D7D7]/60 backdrop-blur-sm p-4">
          <div className="bg-secondary border border-gray-800 w-full max-w-md rounded-lg p-10 text-center shadow-2xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-dark hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                <div className="relative bg-primary w-16 h-16 rounded-full flex items-center justify-center border-4 border-[#121417]">
                  <Check className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">
              Payment Process Successful
            </h2>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed px-4">
              Owner will be notified and will be credited in their voyage
              earnings
            </p>
            <button
              onClick={() => {
                setShowModal(false);
                setSelectedIds([]);
              }}
              className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-[#b88f46] transition-colors"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </>
  );
};
