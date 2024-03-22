"use client";

import { RevalidateURL } from "@/actions/RevalidateTag";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Form({
  id,
  defaultData,
}: {
  id: string | undefined;
  defaultData: address;
}) {
  const [isSaving, setIsSaving] = useState(false);
  const [address, setAddress] = useState(defaultData);
  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setAddress((prevAddress) => {
      return { ...prevAddress, [e.target.name]: e.target.value };
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSaving(true);

    fetch("/api/address/" + (id || ""), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(address),
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) {
          toast.error("failed to add address");
          setIsSaving(false);
        } else {
          toast.success("address saved");
          setIsSaving(false);
        }
      })
      .catch((err) => {
        toast.error("failed to add address");
        setIsSaving(false);
      })
      .finally(() => {
        RevalidateURL("/address");
        router.push("/address");
      });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full max-w-2xl p-4 gap-4 bg-white shadow"
    >
      <label
        className="flex lg:items-center flex-col w-full lg:grid grid-cols-3"
        htmlFor="address-name"
      >
        <span>Name</span>
        <input
          className="col-span-2 border p-3 outline-none focus:border-gray-400"
          type="text"
          name="name"
          placeholder="Address Name..."
          id="address-name"
          required
          onChange={handleChange}
          value={address.name}
        />
      </label>
      <label
        className="flex lg:items-center flex-col w-full lg:grid grid-cols-3 "
        htmlFor="address-phone"
      >
        <span>phone</span>
        <input
          className="col-span-2 border p-3 outline-none focus:border-gray-400"
          type="number"
          name="phone"
          placeholder="Phone no..."
          id="address-phone"
          required
          onChange={handleChange}
          value={address.phone}
        />
      </label>
      <label
        className="flex lg:items-center flex-col w-full lg:grid grid-cols-3 "
        htmlFor="address-pincode"
      >
        <span>pincode</span>
        <input
          className="col-span-2 border p-3 outline-none focus:border-gray-400"
          type="number"
          name="pincode"
          placeholder="Pincode..."
          id="address-pincode"
          required
          onChange={handleChange}
          value={address.pincode}
        />
      </label>
      <label
        className="flex lg:items-center flex-col w-full lg:grid grid-cols-3 "
        htmlFor="address-city"
      >
        <span>city</span>
        <input
          className="col-span-2 border p-3 outline-none focus:border-gray-400"
          type="text"
          name="city"
          placeholder="City..."
          id="address-city"
          required
          onChange={handleChange}
          value={address.city}
        />
      </label>
      <label
        className="flex lg:items-center flex-col w-full lg:grid grid-cols-3 "
        htmlFor="address-state"
      >
        <span>state</span>
        <input
          className="col-span-2 border p-3 outline-none focus:border-gray-400"
          type="text"
          name="state"
          placeholder="State..."
          id="address-state"
          required
          onChange={handleChange}
          value={address.state}
        />
      </label>
      <label
        className="flex lg:items-center flex-col w-full lg:grid grid-cols-3 "
        htmlFor="address"
      >
        <span>address</span>
        <input
          className="col-span-2 border p-3 outline-none focus:border-gray-400"
          type="text"
          name="address"
          placeholder="Address..."
          id="address"
          required
          onChange={handleChange}
          value={address.address}
        />
      </label>
      <label
        className="flex lg:items-center flex-col w-full lg:grid grid-cols-3 "
        htmlFor="address-locality"
      >
        <span>locality(optional)</span>
        <input
          className="col-span-2 border p-3 outline-none focus:border-gray-400"
          type="text"
          name="locality"
          placeholder="Locality..."
          id="address-locality"
          onChange={handleChange}
          value={address.locality}
        />
      </label>
      <label
        className="flex lg:items-center flex-col w-full lg:grid grid-cols-3 "
        htmlFor="address-landmark"
      >
        <span>landmark(optional)</span>
        <input
          className="col-span-2 border p-3 outline-none focus:border-gray-400"
          type="text"
          name="landmark"
          placeholder="Landmark..."
          id="address-landmark"
          onChange={handleChange}
          value={address.landmark}
        />
      </label>
      <div className="col-span-3 flex">
        <button
          disabled={isSaving}
          className="bg-blue-500 text-white px-4 hover:bg-blue-600 active:scale-95 disabled:opacity-40 transition-all py-2 rounded"
        >
          SAVE
        </button>
      </div>
    </form>
  );
}
