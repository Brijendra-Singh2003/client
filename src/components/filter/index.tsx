import { category } from "@/db/Product";
import React from "react";

export default function Filters({
  q,
  category,
}: {
  q?: string;
  category?: category;
}) {
  return (
    <form className="p-4 hidden md:relative col-span-1 md:flex flex-col bg-white shadow-md">
      {q && <input hidden type="text" value={q} name="q" />}
      {filters.map((filter) => (
        <Filter
          key={filter.title}
          title={filter.title}
          options={filter.options}
          category={category}
        />
      ))}
      <button className="bg-blue-600 text-white active:scale-95 transition-all px-3 py-1.5 rounded hover:bg-blue-700">
        Apply
      </button>
    </form>
  );
}

function Filter({
  title,
  options,
  category,
}: {
  title: string;
  options: string[];
  category?: category;
}) {
  return (
    <div className="px-4 py-2">
      <h1 className="py-2 capitalize text-xl w-fit">{title}</h1>
      <ul className="px-4">
        {options.map((option) => (
          <li key={option} className="flex gap-2 p-2">
            <input
              type="radio"
              value={option}
              defaultChecked={category === option}
              name={title}
              id={option}
            />
            <label htmlFor={option} className=" capitalize">
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

const filters = [
  {
    title: "category",
    options: [
      "topwear",
      "bottomwear",
      "footwear",
      "hoodie",
      "mousepad",
      "mug",
      "cap",
    ],
  },
  // {
  //   title: "Color",
  //   options: ["black", "lavender", "pink", "red", "white", "blue"],
  // },
  // {
  //   title: "Size",
  //   options: ["S", "M", "L", "XL", "XXL"],
  // },
];
