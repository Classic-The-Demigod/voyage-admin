"use client"
import React, { useState } from "react";
import {
  X,
  Search,
  Download,
  Info,
  Calendar,
  MapPin,
  Hash,
  Box,
} from "lucide-react";

// --- Types ---
type MediaCategory = "Inspection" | "Damage Evidence" | "Claim";

interface MediaItem {
  id: string;
  bookingId: string;
  type: MediaCategory;
  description: string;
  timestamp: string;
  location: string;
  uploadedBy: string;
  userType: string;
  images: string[];
}

// --- Mock Data ---
const MEDIA_ITEMS: MediaItem[] = [
  {
    id: "MED-001",
    bookingId: "BK-3421",
    type: "Inspection",
    description: "Vehicle pickup inspection - Front View",
    timestamp: "1/8/2026, 9:05:00 AM",
    location: "Lekki Phase 1, Lagos",
    uploadedBy: "Sarah Okonkwo",
    userType: "Rider",
    images: [
      "https://images.unsplash.com/photo-1738238703655-4eef1ed13d01?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0",
    //   "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=400",
    ],
  },

  {
    id: "MED-002",
    bookingId: "BK-3421",
    type: "Damage Evidence",
    description: "Front bumper scratch - Damage Claim",
    timestamp: "1/8/2026, 9:05:00 AM",
    location: "Ikeja GRA, Lagos",
    uploadedBy: "Sarah Okonkwo",
    userType: "Rider",
    images: [
      "https://www.reclamet.co.uk/wp-content/uploads/2023/02/Salvage.jpeg",
    ],
  },

  {
    id: "MED-003",
    bookingId: "BK-3421",
    type: "Damage Evidence",
    description: "Front bumper scratch - Damage Claim",
    timestamp: "1/8/2026, 9:05:00 AM",
    location: "Ikeja GRA, Lagos",
    uploadedBy: "Sarah Okonkwo",
    userType: "Rider",
    images: [
      "https://images.unsplash.com/photo-1738238703655-4eef1ed13d01?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  // ... more items repeated to fill grid
];

export const MediaStoreList: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const getCategoryStyles = (type: MediaCategory) => {
    switch (type) {
      case "Inspection":
        return "bg-[#3b82f6] text-white";
      case "Damage Evidence":
        return "bg-[#ef4444] text-white";
      case "Claim":
        return "bg-[#f97316] text-white";
      default:
        return "bg-gray-700";
    }
  };

  return (
    <div className="min-h-screen text-gray-300  font-outfit">
      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array(8)
          .fill(MEDIA_ITEMS[0])
          .map((item, idx) => {
            const current = idx % 2 === 0 ? MEDIA_ITEMS[0] : MEDIA_ITEMS[1];
            return (
              <div
                key={idx}
                onClick={() => setSelectedMedia(current)}
                className="bg-secondary border border-gray-800 rounded-lg cursor-pointer hover:border-gray-600 transition-all group"
              >
                <div className="relative h-52 overflow-hidden p-4">
                  <img
                    src={current.images[0]}
                    alt="car"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span
                    className={`absolute bottom-4 left-4 px-2 py-1 text-[12px] ${getCategoryStyles(current.type)}`}
                  >
                    {current.type}
                  </span>
                </div>
                <div className="flex flex-col gap-4 p-4 items-start">
                  <span className="bg-gray-light text-white text-[10px] p-4  font-bold">
                    {current.id}
                  </span>
                  <h3 className="text-white text-base font-medium">
                    {current.description}
                  </h3>

                  <div className="space-y-2 text-[11px] text-white font-medium">
                    <div className="flex items-center gap-2">
                      <Box className="w-3.5 h-3.5" /> {current.bookingId}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5" /> {current.timestamp}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5" /> {current.location}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      {/* --- MEDIA DETAILS MODAL --- */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-[#D7D7D7]/60 backdrop-blur-sm p-4">
          <div className="bg-secondary border border-gray-800 w-full max-w-[510px] rounded-xl overflow-hidden shadow-2xl">
            <div className="p-5 border-b border-gray-800 flex justify-between items-center">
              <h2 className="text-lg font-medium text-white">
                Media Details - {selectedMedia.id}
              </h2>
              <button
                onClick={() => setSelectedMedia(null)}
                className="text-gray-dark hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto custom-scrollbar">
              {/* Info Section */}
              <section className="space-y-4">
                <p className="text-xs text-gray-dark uppercase tracking-widest">
                  Media Information
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-2">
                    <span className="text-gray-dark">ID:</span>{" "}
                    <span className="text-white font-semibold">
                      {selectedMedia.id}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-gray-dark">Booking:</span>{" "}
                    <span className="text-white font-semibold">
                      {selectedMedia.bookingId}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-dark">Type</span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${getCategoryStyles(selectedMedia.type)}`}
                    >
                      {selectedMedia.type}
                    </span>
                  </div>
                  <div className="flex gap-2 leading-relaxed">
                    <span className="text-gray-dark whitespace-nowrap">
                      Description:
                    </span>
                    <span className="text-white">
                      {selectedMedia.description}
                    </span>
                  </div>
                </div>
              </section>

              <div className="h-px bg-gray-800" />

              {/* Upload Details */}
              <section className="space-y-4">
                <p className="text-xs text-gray-dark uppercase tracking-widest">
                  Upload Details
                </p>
                <div className="space-y-3 text-sm font-medium">
                  <div className="flex gap-2">
                    <span className="text-gray-dark">Uploaded By:</span>{" "}
                    <span className="text-white">
                      {selectedMedia.uploadedBy}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-gray-dark">User Type:</span>{" "}
                    <span className="text-white">{selectedMedia.userType}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-gray-dark">Timestamp:</span>{" "}
                    <span className="text-white">
                      {selectedMedia.timestamp}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-gray-dark">Location:</span>{" "}
                    <span className="text-white">{selectedMedia.location}</span>
                  </div>
                </div>
              </section>

              {/* Photos Gallery */}
              <section className="space-y-4">
                <p className="text-xs text-gray-dark uppercase tracking-widest">
                  Media ({selectedMedia.images.length} photos)
                </p>
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {selectedMedia.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="w-24 h-24 object-cover rounded-lg border border-gray-800"
                      alt="car view"
                    />
                  ))}
                </div>
              </section>

              {/* Immutable Record Notice */}
              <div className="bg-[#F7F0E4] border border-white rounded-lg p-3 flex gap-3 items-center">
                <Info className="w-5 h-5 text-[#d97706] shrink-0" />
                <p className="text-[11px] text-[#92400e] leading-relaxed">
                  <span className="font-bold uppercase">Immutable Record:</span>{" "}
                  This media file is timestamped and cannot be modified. All
                  metadata is cryptographically verified for claims and
                  insurance purposes.
                </p> 
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
