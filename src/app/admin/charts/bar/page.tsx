import { BarChart } from "@/components/admin/Charts";
import React from "react";

export default function page() {
  return (
    <div className="h-screen overflow-y-auto pb-14  rounded-lg py-4 px-8 bg-gray-900">
      <h1 className="text-center sticky -z-1 left-0 mx-auto p-4 text-gray-200 text-3xl capitalize">
        orders throughout the year
      </h1>
      <section className="min-w-[600px] text-white p-4 max-w-3xl mx-auto">
        <BarChart
          horizontal
          data_1={[600, 444, 343, 778, 455, 900, 444, 122, 334, 800, 600, 660]}
          data_2={[]}
          title_1="Products"
          title_2=""
          bgColor_1="rgb(40, 200, 40)"
          bgColor_2=""
          labels={months}
        />
      </section>
    </div>
  );
}

const months = [
  "JAN",
  "FAB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JLY",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
