import { options } from "@/app/api/auth/[...nextauth]/options";
import AddToCartBtn from "@/components/btns/AddToCart";
// import Collection from "@/components/collection";
import { getProductById } from "@/db/Product";
import { addItemToCart } from "@/db/User";
import { Product } from "@prisma/client";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { FC } from "react";
import { AiFillStar } from "react-icons/ai";

export default async function page({ params }: prop) {
  const session = (await getServerSession(options)) as mySession;
  const item = (await getProductById(+params.id)) as Product;

  return (
    <>
      <main className="product-main flex flex-col gap-4 items-center sm:items-start sm:min-w-96 sm:grid grid-cols-3">
        <Image
          src={item.imageUrl}
          height={600}
          width={600}
          alt=""
          className="h-72 mx-auto w-fit sm:h-auto col-span-1 object-contain sm:sticky shadow-md top-16"
        />
        <div className="bg-white shadow-md col-span-2 flex flex-col gap-2">
          <h1 className="font-bold px-4 pt-4">{item.name}</h1>
          <h5 className="w-fit ml-4 flex gap-1 px-1 rounded text-xs bg-green-600 text-white items-center">
            4.2
            <AiFillStar />
          </h5>
          <p className="flex ml-4 gap-4 items-center">
            <b className="text-xl">₹{item.price - item.discount}</b>
            <span className=" line-through text-gray-400">₹{item.price}</span>
            <span className="text-green-600">
              {Math.floor((item.discount / item.price) * 100)}% Off
            </span>
          </p>

          <div className="mt-6 px-4 items-center">
            <p className="text-gray-600 font-bold mb-1">Exciting Offers:</p>
            <ul className="text-gray-600">
              <li className="flex items-center p-1 leading-relaxed text-xs sm:text-[14px]">
                <TagIcon />
                <span className="w-[240px] sm:w-full">
                  Get Flat 10% off on all prepaid orders above ₹249 Use coupon
                  <span className="text-teal-500 font-semibold">
                    CODESWEAR10
                  </span>
                </span>
              </li>
              <li className="flex items-center p-1 leading-relaxed text-xs sm:text-[14px]">
                <TagIcon />
                <span className="w-[240px] sm:w-full">
                  Get Customized
                  <a
                    className="text-teal-500"
                    href="/product/customized-tshirt-black-s"
                  >
                    &nbsp;T-Shirts
                  </a>{" "}
                  at only ₹549.
                </span>
              </li>
              <li className="flex items-center p-1 leading-relaxed text-xs sm:text-[14px]">
                <TagIcon />
                <span className="w-[240px] sm:w-full">
                  Buy 2 get 1 Free and buy 3 get 2 Free on all
                  <a className="text-teal-500" href="/caps">
                    &nbsp;Caps
                  </a>
                  - Prepaid orders only.
                </span>
              </li>
              <li className="flex items-center p-1 leading-relaxed text-xs sm:text-[14px]">
                <TagIcon />
                <span className="w-[240px] sm:w-full">
                  Buy 2 get 1 Free and buy 3 get 2 Free on all
                  <a className="text-teal-500" href="/mousepads">
                    &nbsp;Mousepads
                  </a>
                  - Prepaid orders only.
                </span>
              </li>
            </ul>
          </div>

          <div className="p-4">
            <h2 className="text-gray-600 font-bold mb-1">Highlights</h2>
            <ul className=" px-4 list-disc text-gray-600">
              <li>Features the Windows logo prominently on the front</li>
              <li>Adjustable strap in the back for a perfect fit</li>
              <li>
                Perfect accessory for developers, designers, or fans of Windows
              </li>
            </ul>
          </div>

          <div className="p-4">
            <h2 className="text-gray-600 font-bold mb-1">Description</h2>
            <p className=" px-4 list-disc text-gray-400">{item.description}</p>
          </div>

          <AddToCartBtn session={session} item={item} />
        </div>
      </main>

      {/* <Collection collection={recommends} /> */}
    </>
  );
}

const TagIcon: FC = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    className="text-green-500 mr-2"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"></path>
  </svg>
);

type prop = {
  params: {
    id: string;
  };
};
