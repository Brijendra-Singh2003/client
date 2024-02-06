import React from "react";

export default function ProgressBar({
  percentage,
  color,
  title,
}: {
  percentage: number;
  color: string;
  title: string;
}) {
  return (
    <div className="w-full grid grid-cols-6 items-center gap-1 py-3">
      <h2 className="col-span-2">{title}</h2>
      <div className="w-full col-span-3 bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: percentage + "%", backgroundColor: color }}
        />
      </div>
      <span className="col-span-1 text-right">{percentage}%</span>
    </div>
  );
}
