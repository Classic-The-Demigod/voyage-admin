"use client";
import React, { useState } from "react";
import { DashboardTextHeader } from "@/components/dashboard-text-header";
import { OfferModal } from "./modals/offer-modal";
import { Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingOffer, setEditingOffer] = useState<any>(null);

  const [offers, setOffers] = useState([
    {
      id: 1,
      name: "Basic Driver Protection",
      price: "20000",
      enrolled: "450 Drivers",
      status: "Active",
      lastUpdated: "2 days ago",
    },
    {
      id: 2,
      name: "Premium Fleet Cover",
      price: "150000",
      enrolled: "120 Drivers",
      status: "Active",
      lastUpdated: "5 days ago",
    },
    {
      id: 3,
      name: "Comprehensive Gig-Worker",
      price: "35000",
      enrolled: "0 Drivers",
      status: "Draft",
      lastUpdated: "Just now",
    },
  ]);

  const handleCreateNew = () => {
    setEditingOffer(null);
    setIsModalOpen(true);
  };

  const handleEdit = (offer: any) => {
    setEditingOffer(offer);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-1 flex-col gap-8 p-6 bg-gray-light font-outfit min-h-screen">
      <DashboardTextHeader
        title="Insurance Offers"
        description="Manage your insurance packages for Voyage drivers"
        offer={true}
        onAction={handleCreateNew}
      />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {offers.map((offer) => (
    <div
      key={offer.id}
      className="relative rounded-2xl p-6 bg-gradient-to-br from-[#0B1623] to-[#060D16]
                 border border-white/10 flex flex-col gap-6 overflow-hidden"
    >
      {/* Top content */}
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h3 className="text-white font-bold text-lg leading-tight">
            {offer.name}
          </h3>

          <p className="text-gray-400 text-xs">
            Liability
          </p>
        </div>

    
      </div>

      {/* Subscribers */}
      <div className="flex justify-between ">
        <div className="space-y-1">

        <p className="text-gray-400 text-xs">Subscribers</p>
        <p className="text-white text-lg font-semibold">
          {offer.enrolled.replace(" Drivers", "")}
        </p>
        </div>


            <div className="text-right">
          <p className="text-[#CB9E4B] text-xl font-bold">
            ₦{Number(offer.price).toLocaleString()}
          </p>
          <p className="text-gray-400 text-[10px]">
            Monthly Price
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/10" />

      {/* Actions */}
      <div className="flex gap-4">
        <button
          onClick={() => handleEdit(offer)}
          className="flex-1 h-11 rounded-xl border border-white/40
                     text-white text-sm font-medium
                     flex items-center justify-center gap-2
                     hover:bg-white/5 transition"
        >
          ✏️ Edit
        </button>

        <button
          className="flex-1 h-11 rounded-xl bg-[#EF3826]
                     text-white text-sm font-medium
                     flex items-center justify-center gap-2
                     hover:bg-red-600 transition"
        >
          🗑 Delete
        </button>
      </div>

      {/* Gold bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#CB9E4B]" />
    </div>
  ))}
</div>


      <OfferModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={(data) => {
            // Logic to update state
            setIsModalOpen(false);
        }}
        initialData={editingOffer}
      />
    </div>
  );
}