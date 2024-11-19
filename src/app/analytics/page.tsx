import React from "react";



export default function AnalyticsPage() {
  const stats = [
    { label: "Total Scans", value: 150 },
    { label: "Most Scanned Item", value: "Apple" },
    { label: "Calories Analyzed", value: "12,450" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-6">Analytics</h1>
      <p className="text-secondary-foreground mb-4">
        Insights and trends from your scanned food data:
      </p>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 text-center"
          >
            <h2 className="text-lg font-semibold text-secondary">
              {stat.label}
            </h2>
            <p className="text-xl font-bold text-primary">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Placeholder for Chart Section */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold text-primary mb-4">Trends</h2>
        <div className="flex justify-center items-center h-64 text-gray-500">
          <p>Chart Placeholder (Integrate a chart library)</p>
        </div>
      </div>
    </div>
  );
}
