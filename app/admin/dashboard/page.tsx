import React from "react";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6 bg-gray-light font-outfit">
      <div className="bg-secondary p-6 space-y-2 rounded-xl border border-gray-dark">
        <h1 className="text-3xl text-white">Admin Dashboard</h1>
        <p className="text-gray-dark text-base">
          Comprehensive overview of your platform performance and management
        </p>
      </div>

      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-secondary aspect-video rounded-xl" />
        <div className="bg-secondary aspect-video rounded-xl" />
        <div className="bg-secondary aspect-video rounded-xl" />
      </div>
      <div className="bg-secondary min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
    </div>
  );
}
