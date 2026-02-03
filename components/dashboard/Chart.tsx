"use client"
import React, { useEffect, useRef } from "react";
import {
  Chart,
  ChartConfiguration,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Filler,
  Legend,
  TooltipItem,
} from "chart.js";

// Register Chart.js components
Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Filler,
  Legend,
);

const RevenueChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    // Exact data points extracted from the original image (72 points, 6 per month)
    const data: number[] = [
      39, 39, 39, 39, 75, 90, 163, 129, 129, 129, 175, 134, 95, 85, 85, 93, 392,
      392, 392, 392, 392, 392, 392, 392, 392, 155, 152, 139, 142, 178, 137, 132,
      132, 186, 186, 209, 119, 52, 77, 77, 72, 59, 147, 152, 152, 145, 276, 250,
      222, 201, 222, 245, 227, 227, 204, 204, 204, 204, 204, 206, 206, 147, 147,
      186, 186, 178, 191, 191, 170, 157, 175, 175,
    ];

    const monthLabels: string[] = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];

    // Create labels array - show month name every 6 data points
    const labels: string[] = data.map((_, i) => {
      if (i % 6 === 0 || i === 0) {
        return monthLabels[Math.floor(i / 6)] || "";
      }
      return "";
    });

    // Create gradient for area fill - exact colors from image
    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "rgba(110, 96, 59, 0.4)");
    gradient.addColorStop(0.3, "rgba(110, 96, 59, 0.25)");
    gradient.addColorStop(0.7, "rgba(80, 70, 50, 0.1)");
    gradient.addColorStop(1, "rgba(80, 70, 50, 0)");

    // Destroy existing chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Chart configuration
    const config: ChartConfiguration<"line"> = {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            borderColor: "rgb(110, 96, 59)",
            backgroundColor: gradient,
            borderWidth: 1.5,
            fill: true,
            tension: 0.35,
            pointRadius: 0,
            pointHoverRadius: 0,
            pointHoverBackgroundColor: "rgb(110, 96, 59)",
            pointHoverBorderColor: "rgb(255, 255, 255)",
            pointHoverBorderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          intersect: false,
          mode: "index",
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
            backgroundColor: "rgb(204, 168, 90)",
            titleColor: "rgb(0, 0, 0)",
            bodyColor: "rgb(0, 0, 0)",
            padding: {
              top: 6,
              right: 10,
              bottom: 6,
              left: 10,
            },
            displayColors: false,
            titleFont: {
              size: 11,
              weight: "bold",
              family:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            },
            bodyFont: {
              size: 11,
              weight: "bold",
              family:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            },
            cornerRadius: 4,
            caretSize: 5,
            caretPadding: 8,
            callbacks: {
              title: function (): string {
                return "";
              },
              label: function (context: TooltipItem<"line">): string {
                // The tooltip shows ₦923,560,000 at the peak
                // Peak value is 392, so we calculate proportionally
                const multiplier = 923560000 / 392;
                const value = Math.round(context.parsed.y * multiplier);
                return "₦" + value.toLocaleString("en-US");
              },
            },
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              color: "rgb(40, 47, 55)",
              font: {
                size: 10,
                weight: "400",
                family:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              },
              maxRotation: 0,
              autoSkip: false,
              padding: 6,
            },
            border: {
              display: false,
            },
          },
          y: {
            min: 0,
            max: 400,
            ticks: {
              stepSize: 100,
              color: "rgb(40, 47, 55)",
              font: {
                size: 10,
                weight: "normal",
                family:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              },
              padding: 8,
              callback: function (value: string | number): string | number {
                return value;
              },
            },
            grid: {
              color: "rgba(255, 255, 255, 0.03)",
              lineWidth: 1,
              drawBorder: false,
            },
            border: {
              display: false,
            },
          },
        },
        layout: {
          padding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0,
          },
        },
      },
    };

    // Create new chart
    chartInstanceRef.current = new Chart(ctx, config);

    // Show tooltip at the peak (April - index where value is 392)
    const timeoutId = setTimeout(() => {
      const peakIndex = data.findIndex((val) => val === 392);
      if (peakIndex !== -1 && chartInstanceRef.current) {
        chartInstanceRef.current.setActiveElements([
          { datasetIndex: 0, index: peakIndex },
        ]);
        chartInstanceRef.current.tooltip?.setActiveElements(
          [{ datasetIndex: 0, index: peakIndex }],
          { x: 0, y: 0 },
        );
        chartInstanceRef.current.update();
      }
    }, 100);

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div
      className="bg-secondary min-h-[100vh] md:min-h-min  rounded-xl  px-6 py-10"
      //   style={{
      //     background:
      //       "linear-gradient(180deg, rgb(8, 16, 27) 0%, rgb(9, 16, 24) 100%)",
      //     borderRadius: "8px",
      //     padding: "20px 24px 18px 24px",
      //     width: "701px",
      //     height: "281px",
      //     boxSizing: "border-box",
      //     position: "relative",
      //   }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
          }}
        >
          <div
            style={{
              color: "rgb(44, 49, 55)",
              fontSize: "11px",
              fontWeight: "400",
              lineHeight: "1",
            }}
          >
            Platform Revenue
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "8px",
            }}
          >
            <span
              style={{
                color: "rgb(247, 252, 255)",
                fontSize: "24px",
                fontWeight: "600",
                letterSpacing: "-0.3px",
                lineHeight: "1",
              }}
            >
              ₦923,560,000
            </span>
            <span
              style={{
                color: "rgb(34, 197, 94)",
                fontSize: "12px",
                fontWeight: "600",
                lineHeight: "1",
              }}
            >
              +32%
            </span>
          </div>
        </div>
        <div
          style={{
            background: "rgba(20, 25, 30, 0.8)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "4px",
            color: "rgb(255, 255, 255)",
            padding: "4px 10px 4px 8px",
            fontSize: "11px",
            fontWeight: "500",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          April
          <span
            style={{
              fontSize: "8px",
              color: "rgba(255, 255, 255, 0.5)",
            }}
          >
            ▼
          </span>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "200px",
          position: "relative",
        }}
      >
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default RevenueChart;
