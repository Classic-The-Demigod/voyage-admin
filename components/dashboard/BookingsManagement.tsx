"use client";
import React, { useState } from "react";
import {
  Search,
  Download,
  Eye,
  ChevronRight,
  Car,
  MapPin,
  X,
} from "lucide-react";

// --- Types ---
type BookingStatus = "Upcoming" | "Active" | "Completed" | "Cancelled";

interface Booking {
  id: string;
  rider: { name: string; id: string };
  owner: { name: string; id: string };
  vehicle: string;
  amount: string;
  status: BookingStatus;
  location?: string;
  start?: string;
  end?: string;
  escrow?: string;
}

// --- Mock Data ---
const BOOKINGS_DATA: Booking[] = [
  {
    id: "BK-3421",
    rider: { name: "Sarah Okonkwo", id: "R-1234" },
    owner: { name: "John Adebayo", id: "O-5678" },
    vehicle: "Toyota Camry 2020",
    amount: "₦45,000",
    status: "Upcoming",
    location: "Lekki Phase 1, Lagos",
    start: "1/8/2026, 9:00:00 AM",
    end: "1/10/2026, 6:00:00 PM",
    escrow: "Held",
  },
  {
    id: "BK-3420",
    rider: { name: "Michael Chen", id: "R-2345" },
    owner: { name: "Fleet Motors Ltd", id: "O-6789" },
    vehicle: "Honda Accord 2021",
    amount: "₦38,000",
    status: "Active",
  },
  {
    id: "BK-3419",
    rider: { name: "Michael Chen", id: "R-2345" },
    owner: { name: "Fleet Motors Ltd", id: "O-6789" },
    vehicle: "Honda Accord 2021",
    amount: "₦38,000",
    status: "Completed",
  },
  {
    id: "BK-3418",
    rider: { name: "Michael Chen", id: "R-2345" },
    owner: { name: "Fleet Motors Ltd", id: "O-6789" },
    vehicle: "Honda Accord 2021",
    amount: "₦38,000",
    status: "Cancelled",
  },
];

export const BookingsManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const getStatusStyles = (status: BookingStatus) => {
    switch (status) {
      case "Upcoming":
        return "bg-[#3b3a21] text-[#eab308]";
      case "Active":
        return "bg-[#1e293b] text-[#3b82f6]";
      case "Completed":
        return "bg-[#143b21] text-[#22c55e]";
      case "Cancelled":
        return "bg-[#451a1a] text-[#ef4444]";
      default:
        return "bg-gray-800 text-gray-dark";
    }
  };

  return (
    <div className="">
      {/* Bookings Table */}
      <div className="bg-secondary rounded-xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-[10px] uppercase tracking-widest text-white border-b border-[#D6D6D6]/40">
              <th className="px-6 py-4 font-bold">Booking ID</th>
              <th className="px-6 py-4 font-bold">Rider</th>
              <th className="px-6 py-4 font-bold">Owner</th>
              <th className="px-6 py-4 font-bold">Vehicle</th>
              <th className="px-6 py-4 font-bold">Amount</th>
              <th className="px-6 py-4 font-bold text-center">Status</th>
              <th className="px-6 py-4 font-bold text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#D6D6D6]/40">
            {BOOKINGS_DATA.map((booking) => (
              <tr
                key={booking.id}
                className="hover:bg-white/[0.01] transition-colors"
              >
                <td className="px-6 py-5 text-sm font-medium text-gray-200">
                  {booking.id}
                </td>
                <td className="px-6 py-5">
                  <div className="text-sm font-semibold text-gray-200">
                    {booking.rider.name}
                  </div>
                  <div className="text-[11px] text-gray-dark">
                    {booking.rider.id}
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="text-sm font-semibold text-gray-200">
                    {booking.owner.name}
                  </div>
                  <div className="text-[11px] text-gray-dark">
                    {booking.owner.id}
                  </div>
                </td>
                <td className="px-6 py-5 text-sm text-gray-300">
                  {booking.vehicle}
                </td>
                <td className="px-6 py-5 text-sm font-medium text-gray-200">
                  {booking.amount}
                </td>
                <td className="px-6 py-5 text-center">
                  <span
                    className={`px-3 py-1 rounded text-[10px] font-bold ${getStatusStyles(booking.status)}`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td className="px-6 py-5 text-right">
                  <button
                    onClick={() => setSelectedBooking(booking)}
                    className="p-1.5 bg-gray-800/50 rounded hover:bg-gray-700 text-gray-400 inline-flex items-center justify-center"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
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
                className={`w-8 h-8 rounded flex items-center justify-center text-xs font-bold ${p === 1 ? "bg-primary text-white" : "text-gray-dark hover:text-white"}`}
              >
                {p}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-lg text-xs font-bold">
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* --- BOOKING DETAILS MODAL --- */}
      {selectedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#D7D7D7]/60 backdrop-blur-sm">
          <div className="bg-secondary w-full max-w-md rounded overflow-hidden shadow-2xl">
            <div className="p-5 border-b border-gray-dark flex justify-between items-center">
              <h2 className="text-lg font-bold text-white">
                Booking Details - {selectedBooking.id}
              </h2>
              <button
                onClick={() => setSelectedBooking(null)}
                className="text-gray-dark hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Rider Section */}
              <section>
                <p className="text-xs text-gray-dark mb-3">Rider Information</p>
                <h3 className="text-white font-semibold text-base">
                  {selectedBooking.rider.name}
                </h3>
                <p className="text-xs text-gray-dark">
                  {selectedBooking.rider.id}
                </p>
              </section>

              <div className="h-px bg-gray-dark w-full" />

              {/* Vehicle Section */}
              <section className="space-y-3">
                <p className="text-xs text-gray-dark">Vehicle & Location</p>
                <div className="flex items-center gap-3 text-white text-sm">
                  <Car className="w-4 h-4 text-gray-dark" />
                  <span>{selectedBooking.vehicle}</span>
                </div>
                <div className="flex items-center gap-3 text-white text-sm">
                  <MapPin className="w-4 h-4 text-gray-dark" />
                  <span>{selectedBooking.location || "N/A"}</span>
                </div>
              </section>

              <div className="h-px bg-gray-dark w-full" />

              {/* Booking Details Section */}
              <section className="space-y-4">
                <p className="text-xs text-gray-dark">Booking Details</p>
                <div className="grid gap-3 text-sm">
                  <div className="flex gap-2">
                    <span className="text-gray-dark">Start:</span>{" "}
                    <span className="text-white">
                      {selectedBooking.start || "N/A"}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-gray-dark">End:</span>{" "}
                    <span className="text-white">
                      {selectedBooking.end || "N/A"}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-gray-dark">Amount:</span>{" "}
                    <span className="text-white font-medium">
                      {selectedBooking.amount}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-gray-dark">Escrow:</span>{" "}
                    <span className="text-white">
                      {selectedBooking.escrow || "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-dark">Status</span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${getStatusStyles(selectedBooking.status)}`}
                    >
                      {selectedBooking.status}
                    </span>
                  </div>
                </div>
              </section>

              <div className="h-px bg-gray-dark w-full" />

              {/* Owner Section */}
              <section>
                <p className="text-xs text-gray-dark mb-3">Owner Information</p>
                <h3 className="text-white font-semibold text-base">
                  {selectedBooking.owner.name}
                </h3>
                <p className="text-xs text-gray-dark">
                  {selectedBooking.owner.id}
                </p>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
