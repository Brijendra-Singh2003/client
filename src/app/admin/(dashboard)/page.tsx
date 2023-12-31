"use client";

import Tile, { TileSkeleton } from "@/components/Tile";
import { BarChart, DoughnutChart } from "@/components/Charts";
import DashboardTable from "@/components/DashboardTable";
import data from "./data.json";
import ProgressBar from "@/components/ProgressBar";
import { BiMaleFemale } from "react-icons/bi";

export default function page() {
  return (
    <>
      <section className="px-4 mt-4 gap-4 flex flex-wrap justify-between w-full">
        <Tile
          title="Revenue"
          value={"$" + 6900}
          percentage={40}
          color="rgb(80 255 80)"
        />
        <Tile
          title="Users"
          value={700}
          percentage={-14}
          color="rgb(80 80 255)"
        />
        <Tile
          title="Transactions"
          value={500}
          percentage={80}
          color="rgb(255 255 80)"
        />
        <Tile
          title="Products"
          value={50}
          percentage={30}
          color="rgb(80 255 255)"
        />
      </section>

      <section className="w-full p-4 flex xl:grid grid-cols-3 flex-col items-center gap-4">
        <div className="shadow-md shadow-black col-span-2 w-full p-4 bg-zinc-900 rounded-lg flex-col gap-2 flex items-center justify-center ">
          <h1 className="text-center py-2 text-2xl">REVENUE & TRANSACTION</h1>
          <div className="w-full max-w-3xl mx-auto flex items-center justify-center">
            <BarChart
              data_1={[10, 8, 12, 14, 6, 10, 7]}
              data_2={[10, 6, 14, 12, 8, 10, 7]}
              title_1="Revenue"
              title_2="Transaction"
              bgColor_1="red"
              bgColor_2="blue"
              horizontal={false}
            />
          </div>
        </div>

        <div className="shadow-md shadow-black h-full col-span-1 w-full p-4 bg-zinc-900 rounded-lg flex-col gap-2 flex items-center justify-center ">
          <h1 className="text-center py-4 text-2xl">INVENTORY</h1>
          <ProgressBar
            title="Laptops"
            percentage={40}
            color="rgb(77, 179, 145)"
          />
          <ProgressBar
            title="Shoes"
            percentage={100}
            color="rgb(255, 170, 0)"
          />
          <ProgressBar
            title="Cameras"
            percentage={80}
            color="rgb(230, 26, 161)"
          />
          <ProgressBar title="Jeans" percentage={60} color="rgb(51, 51, 204)" />
        </div>

        <div className="shadow-md shadow-black h-[372px] w-full col-span-1 gap-4 flex flex-col items-center p-4 bg-zinc-900 rounded-lg">
          <h1 className="text-center text-xl p-2">GENDER RATIO</h1>
          <p className="h-72 grid place-items-center">
            <span className="absolute scale-150 -translate-y-14">
              <BiMaleFemale />
            </span>
            <DoughnutChart
              labels={["MALE", "FEMALE"]}
              data={[19, 12]}
              backgroundColor={["rgb(20, 20, 200)", "rgb(200, 22, 130)"]}
              legends
              cutout={0}
            />
          </p>
        </div>

        <div className="shadow-md shadow-black w-full max-w-[calc(100vw-32px)] overflow-x-auto col-span-2 flex flex-col gap-4 p-4 bg-zinc-900 rounded-lg">
          <h2 className="text-center w-full text-xl p-2">TOP TRANSACTIONS</h2>
          <DashboardTable data={data.transaction} />
        </div>
      </section>
    </>
  );
}
