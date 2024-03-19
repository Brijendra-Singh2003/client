"use client";

import React, { useState } from "react";
import { formData } from "./page";

export default function Form({ profile }: { profile: formData }) {
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [enableEdit, setenableEdit] = useState(!profile);
  const [currProfile, setCurrProfile] = useState<formData>(
    profile || {
      firstName: "",
      lastName: "",
      phone: "",
      gender: undefined,
    }
  );

  function handleChange(e: any) {
    setCurrProfile((prev) => {
      const temp = { ...prev, [e.target.name]: e.target.value };
      return temp;
    });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    setDisableSubmit(true);
    // console.log(currProfile);
    const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + "/api/user/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(currProfile),
    });
    // console.log("updated data: ", await res.json());
    setCurrProfile(await res.json());
    setDisableSubmit(false);
    setenableEdit(false);
  }

  return enableEdit ? (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 md:grid grid-cols-2 xl:gap-14"
    >
      <div className="flex flex-col">
        <label className="py-2" htmlFor="first-name">
          First name
        </label>
        <input
          className="p-3 rounded-md bg-transparent focus:outline-none border border-gray-400"
          type="text"
          name="firstName"
          id="first-name"
          placeholder="First name..."
          required
          value={currProfile?.firstName}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col">
        <label className="py-2" htmlFor="last-name">
          Last name
        </label>
        <input
          className="p-3 rounded-md bg-transparent focus:outline-none border border-gray-400"
          type="text"
          name="lastName"
          id="last-name"
          placeholder="Last name..."
          value={currProfile?.lastName}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col">
        <label className="py-2" htmlFor="phone">
          Mobile Number
        </label>
        <input
          className="p-3 rounded-md bg-transparent focus:outline-none border border-gray-400"
          type="text"
          name="phone"
          id="phone"
          placeholder="eg: +91 1234567890"
          value={currProfile?.phone}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col">
        <div className="py-2">Gender:</div>
        <div className="flex gap-4 h-full px-4">
          <label className="flex items-center gap-2">
            <input
              name="gender"
              type="radio"
              value="male"
              defaultChecked={currProfile?.gender === "male"}
              onChange={handleChange}
            />
            Male
          </label>
          <label className="flex items-center gap-2">
            <input
              name="gender"
              type="radio"
              value="female"
              defaultChecked={currProfile?.gender === "female"}
              onChange={handleChange}
            />
            Female
          </label>
        </div>
      </div>
      <div className="col-span-2 flex justify-end gap-4">
        <button
          className="py-1.5 w-24 focus:scale-95 disabled:cursor-not-allowed transition-all hover:bg-blue-700 rounded-md bg-blue-600 text-white disabled:opacity-40"
          disabled={disableSubmit}
        >
          Save
        </button>

        <button
          type="button"
          className="py-1.5 w-24 focus:scale-95 disabled:cursor-not-allowed transition-all hover:bg-blue-700 rounded-md border border-blue-600 hover:text-white"
          onClick={() => setenableEdit(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  ) : (
    <div className="flex flex-col gap-4 md:grid grid-cols-2 xl:gap-14">
      <div className="flex flex-col">
        <h3 className="py-2 text-gray-400">First name</h3>
        <div className="p-2">{currProfile?.firstName}</div>
      </div>

      <div className="flex flex-col">
        <h3 className="py-2 text-gray-400">Last name</h3>
        <div className="p-2">{currProfile?.lastName}</div>
      </div>

      <div className="flex flex-col">
        <h3 className="py-2 text-gray-400">Mobile Number</h3>
        <div className="p-2">{currProfile?.phone}</div>
      </div>

      <div className="flex flex-col">
        <h3 className="py-2 text-gray-400">Gender</h3>
        <div className="p-2">{currProfile?.gender?.toUpperCase()}</div>
      </div>

      <button
        className="col-span-2 py-1.5 focus:scale-95 disabled:cursor-not-allowed transition-all hover:bg-blue-700 px-8 rounded-md ml-auto mt-4 bg-blue-600 text-white w-fit disabled:opacity-40"
        onClick={() => setenableEdit(true)}
      >
        Edit
      </button>
    </div>
  );
}

// { ? (
//     <Form profile={profile} userId={user?.id as number} />
//   ) : (

//   )}
