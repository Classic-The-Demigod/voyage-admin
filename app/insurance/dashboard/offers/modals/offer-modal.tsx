"use client";
import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  initialData?: any; // If present, we are in "Edit" mode
}

export function OfferModal({ isOpen, onClose, onSubmit, initialData }: OfferModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "Driver",
  });

  // Sync form with initialData when editing
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({ name: "", price: "", description: "", category: "Driver" });
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#D7D7D7AB] backdrop-blur-sm p-4">
      <div className="bg-secondary border border-gray-dark w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-dark">
          <h2 className="text-xl font-bold text-white">
            {initialData ? "Edit Insurance Offer" : "Create New Offer"}
          </h2>
          <button onClick={onClose} className="text-gray-dark hover:text-white">
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-gray-dark">Offer Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Comprehensive Cover"
              className="w-full bg-transparent border border-gray-dark rounded-xl p-3 text-white focus:border-[#CB9E4B] outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-dark">Monthly Price (₦)</label>
              <input
                type="text"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                placeholder="20,000"
                className="w-full bg-transparent border border-gray-dark rounded-xl p-3 text-white focus:border-[#CB9E4B] outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-dark">Category</label>
              <select 
                className="w-full bg-secondary border border-gray-dark rounded-xl p-3 text-white focus:border-[#CB9E4B] outline-none"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              >
                <option>Driver</option>
                <option>Vehicle</option>
                <option>Health</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-dark">Description</label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-transparent border border-gray-dark rounded-xl p-3 text-white focus:border-[#CB9E4B] outline-none resize-none"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-dark flex gap-3">
          <Button onClick={onClose} variant="ghost" className="flex-1 text-white border border-gray-dark">
            Cancel
          </Button>
          <Button 
            onClick={() => onSubmit(formData)} 
            className="flex-1 bg-[#CB9E4B] text-black font-bold hover:bg-[#b38a3d]"
          >
            {initialData ? "Save Changes" : "Create Offer"}
          </Button>
        </div>
      </div>
    </div>
  );
}