"use client";

import React, { useState } from "react";

export default function Filters() {
  return (
    <form className="p-4 hidden w-64 md:relative md:flex flex-col bg-gray-900">
      {filters.map((filter) => (
        <Filter
          key={filter.title}
          title={filter.title}
          options={filter.options}
        />
      ))}
      <button className="bg-blue-600 px-3 py-1.5 rounded hover:bg-blue-700">
        Apply
      </button>
    </form>
  );
}

function Filter({ title, options }: { title: string; options: string[] }) {
  return (
    <div className="px-4 py-2 md:w-80">
      <h1 className="py-2 text-xl w-fit">{title}</h1>
      <ul className="px-4">
        {options.map((option) => (
          <li key={option} className="flex gap-2 p-2">
            <input type="checkbox" name={option} id={option} />
            <label htmlFor={option}>{option}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

const filters = [
  {
    title: "Theme",
    options: ["Anime", "Coding", "Gaming", "Gym", "Motivation", "Plain"],
  },
  {
    title: "Color",
    options: ["Black", "Lavender", "Pink", "Red", "White", "Blue"],
  },
  {
    title: "Size",
    options: ["S", "M", "L", "XL", "XXL"],
  },
];