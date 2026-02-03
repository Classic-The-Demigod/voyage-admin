"use client"
import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { ChevronLeft, ChevronRight } from "lucide-react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const stats = [
  { label: "Booking Initiated", count: 310, color: "#D4A757" },
  { label: "Owner Listed", count: 100, color: "#D4A757" },
  { label: "Escrow Created", count: 250, color: "#D4A757" },
];

export const MonthlyActivityChart: React.FC = () => {
  const data = {
    labels: ["JAN", "FEB", "MAR", "APR", "MAY"],
    datasets: [
      {
        data: [150, 310, 180, 220, 160],
        backgroundColor: (context: any) => {
          // Highlight MAY with a different shade as seen in the screenshot
          return context.dataIndex === 4 ? "#FCA37D" : "#D4A757";
        },
        borderRadius: 4,
        barThickness: 8,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: false, // Using the custom callout UI to match pixel perfection
      },
    },
    scales: {
      y: {
        display: false,
        grid: { display: false },
      },
      x: {
        grid: { display: false },
        ticks: {
          color: "#9CA3AF",
          font: { size: 10, weight: "bold" },
        },
      },
    },
  };

  return (
    <div className="bg-secondary rounded-xl p-6 w-full  font-sans">
      {/* Header Navigation */}
      <div className="flex justify-between items-center mb-10">
        <button className="text-gray-500 hover:text-white transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h2 className="text-white text-sm font-semibold">March 2026</h2>
        <button className="text-gray-500 hover:text-white transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Chart Area */}
      <div className="relative h-40 mb-10">
        {/* The Golden Tooltip Callout */}
        <div className="absolute top-[-10px] left-[32%] z-10 pointer-events-none">
          <div className="bg-[#D4A757] p-2 rounded shadow-lg relative after:content-[''] after:absolute after:top-1/2 after:right-full after:-translate-y-1/2 after:border-8 after:border-transparent after:border-right-[#D4A757]">
            <p className="text-[10px] text-white font-medium">
              Booking Initiated
            </p>
            <p className="text-xs font-bold text-white">Count:310</p>
          </div>
        </div>

        {/* Horizontal Dashed Lines */}
        <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none">
          <div className="border-t border-dashed border-gray-800 w-full h-0" />
          <div className="border-t border-dashed border-gray-800 w-full h-0" />
          <div className="border-t border-dashed border-gray-800 w-full h-0" />
        </div>

        <Bar data={data} options={options} />
      </div>

      {/* Stats List */}
      <div className="space-y-6">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">{item.label}</span>
              <span className="text-white text-sm font-bold">{item.count}</span>
            </div>
            {index !== stats.length - 1 && (
              <div className="border-b border-gray-800 mt-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
