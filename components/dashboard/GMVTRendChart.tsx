"use client"
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  ChartOptions,
  Plugin,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Calendar } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
);

// Custom plugin to draw the vertical dashed grid lines
const verticalGridPlugin: Plugin<"line"> = {
  id: "verticalGrid",
  beforeDraw: (chart) => {
    const {
      ctx,
      chartArea: { top, bottom },
      scales: { x },
    } = chart;
    ctx.save();
    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
    ctx.lineWidth = 1;

    x.ticks.forEach((_, index) => {
      const xPos = x.getPixelForTick(index);
      ctx.beginPath();
      ctx.moveTo(xPos, top);
      ctx.lineTo(xPos, bottom);
      ctx.stroke();
    });
    ctx.restore();
  },
};

export const GMVTrendChart: React.FC = () => {
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "GMV",
        data: [30, 25, 65, 55, 85, 45, 20, 35, 30, 55, 40],
        borderColor: "#D4A757",
        backgroundColor: "rgba(212, 167, 87, 0.2)",
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHitRadius: 10,
        borderWidth: 2,
      },
      {
        label: "Bookings Sem",
        data: [15, 20, 25, 60, 40, 30, 45, 35, 15, 30, 45],
        borderColor: "#5679FF",
        backgroundColor: "rgba(86, 121, 255, 0.15)",
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHitRadius: 10,
        borderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: false, // Custom tooltip handled via external UI
        external: ({ tooltip }) => {
          // You can implement custom HTML tooltips here to match the gold box perfectly
        },
      },
    },
    scales: {
      y: { display: false },
      x: {
        grid: { display: false },
        ticks: { color: "#9CA3AF", font: { size: 12 } },
      },
    },
  };

  return (
    <div className="bg-secondary border border-gray-800 rounded-xl p-6 w-full font-sans">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-white text-lg font-bold">GMV & Bookings Trend</h2>
        <div className="flex items-center gap-4">
          <div className="flex bg-[#121417] rounded-lg p-1 border border-gray-800">
            {["Day", "Week", "Month"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${
                  tab === "Day"
                    ? "bg-[#D4A757] text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <button className="p-2 bg-[#121417] border border-gray-800 rounded-lg text-gray-400">
            <Calendar className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="relative h-64">
        {/* The Golden Tooltip Mockup */}
        <div className="absolute top-[10%] left-[51%] z-10">
          <div className="bg-[#D4A757] p-2 rounded shadow-lg relative after:content-[''] after:absolute after:top-1/2 after:right-full after:-translate-y-1/2 after:border-8 after:border-transparent after:border-right-[#D4A757]">
            <p className="text-[10px] text-white opacity-80">June 16</p>
            <p className="text-sm font-bold text-white">₦24,560,000</p>
          </div>
        </div>

        <Line data={data} options={options} plugins={[verticalGridPlugin]} />
      </div>

      {/* <div className="mt-6 pt-6 border-t border-gray-800 flex justify-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#D4A757]" />
          <span className="text-white text-xs font-bold uppercase tracking-wider">
            GMV
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#5679FF]" />
          <span className="text-white text-xs font-bold uppercase tracking-wider">
            Bookings Sem
          </span>
        </div>
      </div> */}
    </div>
  );
};
