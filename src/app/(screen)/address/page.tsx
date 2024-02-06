import React from "react";

export default function page() {
  return (
    <main className="bg-white h-screen">
      <h1 className="py-2 px-4 text-xl">My Addresses</h1>
      <ul className="w-full p-2 flex flex-col gap-2">
        <li className="border rounded py-2 px-4">
          <h1 className="font-bold">Hostle</h1>
          <p className="text-sm opacity-75">
            <span>Bhubaneshwar</span>, <span>Odisa</span>
          </p>
        </li>
        <li className="border rounded py-2 px-4">
          <h1 className="font-bold">Hostle</h1>
          <p className="text-sm opacity-75">
            <span>Bhubaneshwar</span>, <span>Odisa</span>
          </p>
        </li>
        <li className="border rounded py-2 px-4">
          <h1 className="font-bold">Hostle</h1>
          <p className="text-sm opacity-75">
            <span>Bhubaneshwar</span>, <span>Odisa</span>
          </p>
        </li>
        <li className="border rounded py-2 px-4">
          <h1 className="font-bold">Hostle</h1>
          <p className="text-sm opacity-75">
            <span>Bhubaneshwar</span>, <span>Odisa</span>
          </p>
        </li>
      </ul>
    </main>
  );
}
