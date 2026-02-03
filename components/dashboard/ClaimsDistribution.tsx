"use client"
import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Calendar } from "lucide-react";

ChartJS.register(ArcElement, Tooltip, Legend);

// Custom plugin to render text in the center of the doughnut
const centerTextPlugin = {
  id: "centerText",
  beforeDraw: (chart: any) => {
    const { ctx, width, height } = chart;
    ctx.restore();
    const fontSize = (height / 160).toFixed(2);
    ctx.font = `bold ${fontSize}em sans-serif`;
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#FFFFFF";

    const text = "₦24,560,000";
    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = height / 2;

    ctx.fillText(text, textX, textY);
    ctx.save();
  },
};

export const ClaimsDistribution: React.FC = () => {
  const data = {
    labels: ["Service Issues", "Successful Trips", "Damage Claims", "Other"],
    datasets: [
      {
        data: [16, 10, 24, 50],
        backgroundColor: [
          "#5679FF", // Blue (Service Issues)
          "#F04438", // Red (Successful Trips)
          "#86EFAC", // Green (Damage Claims)
          "#D4A757", // Gold (Remainder)
        ],
        borderWidth: 0,
        hoverOffset: 4,
        // The "offset" creates the popped-out effect for specific segments
        offset: [20, 0, 0, 0],
        cutout: "72%",
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  const LegendItem = ({
    color,
    label,
    amount,
  }: {
    color: string;
    label: string;
    amount: string;
  }) => (
    <div className="flex items-center gap-3">
      <div
        className={`w-3 h-3 rounded-full`}
        style={{ backgroundColor: color }}
      />
      <span className="text-gray-200 text-sm">{label}</span>
      <span className="text-gray-400 text-sm font-medium">{amount}</span>
    </div>
  );

  return (
    <div className="w-full font-outfit">
      <div className="flex justify-between items-center">
        <h2 className="text-white text-lg font-bold">Claims Distribution</h2>
        <button className="p-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors">
          <Calendar className="w-4 h-4 text-[#D4A757]" />
        </button>
      </div>

      <div className="relative h-64">
        <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
        {/* Absolute positioned percentage label for the blue segment */}
        <div className="absolute top-[52%] left-[32%] text-[10px] font-bold text-white pointer-events-none">
          16%
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-4 gap-x-2">
        <LegendItem color="#5679FF" label="Service Issues" amount="₦560,000" />
        <LegendItem
          color="#F04438"
          label="Successful Trips"
          amount="₦560,000"
        />
        <LegendItem color="#86EFAC" label="Damage Claims" amount="₦560,000" />
      </div>
    </div>
  );
};
