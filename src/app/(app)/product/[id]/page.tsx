import Collection from "@/components/collection";
import { getProductById } from "@/db/Product";
import Image from "next/image";
import React, { FC } from "react";
import { AiFillStar } from "react-icons/ai";

export default async function page({ params }: prop) {
  const item = (await getProductById(+params.id)) as item;

  return (
    <>
      <main className="product-main bg-gray-800 flex flex-col items-center sm:items-start sm:min-w-96 sm:grid grid-cols-3">
        <Image
          src={item.imageUrl}
          height={400}
          width={400}
          alt=""
          className="h-72 w-full sm:h-auto col-span-1 object-contain p-2 sm:sticky top-16"
        />
        <div className="bg-gray-900 col-span-2 flex flex-col gap-2">
          <h1 className="font-bold px-4 pt-4">{item.name}</h1>
          <h5 className="w-fit ml-4 flex gap-1 px-1 rounded text-xs bg-green-700 items-center">
            4.2
            <AiFillStar />
          </h5>
          <p className="flex ml-4 gap-4 items-center">
            <b className="text-xl">₹{item.price}</b>
            <span className=" line-through text-gray-400">₹{item.price}</span>
            <span className="text-green-500">
              {Math.floor((item.discount / item.price) * 100)}% Off
            </span>
          </p>

          <div className="mt-6 px-4 items-center">
            <p className="text-gray-600 font-bold mb-1 dark:text-gray-100">
              Exciting Offers:
            </p>
            <ul className="text-gray-600 dark:text-gray-400">
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
            <h2 className="text-gray-600 font-bold mb-1 dark:text-gray-100">
              Highlights
            </h2>
            <ul className=" px-4 list-disc text-gray-400">
              <li>Features the Windows logo prominently on the front</li>
              <li>Adjustable strap in the back for a perfect fit</li>
              <li>
                Perfect accessory for developers, designers, or fans of Windows
              </li>
            </ul>
          </div>

          <div className="p-4">
            <h2 className="text-gray-600 font-bold mb-1 dark:text-gray-100">
              Description
            </h2>
            <p className=" px-4 list-disc text-gray-400">
              Show off your love for the popular operating system, Windows, with
              this stylish printed baseball cap. Made from high-quality cotton,
              this cap is comfortable to wear and features the Windows logo
              prominently on the front. The adjustable strap in the back ensures
              a perfect fit for any head size. Whether you&apos;re a developer,
              designer, or just a fan of Windows, this cap is the perfect
              accessory for any occasion. Show your support for the operating
              system that powers the world.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 p-4 sticky bottom-0 bg-gray-900">
            <button className="bg-teal-600 p-3 text-xl rounded-xl">
              Add To Cart
            </button>
            <button className="bg-teal-600 p-3 text-xl rounded-xl">
              Buy Now
            </button>
          </div>
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
    stroke-width="0"
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

const recommends = {
  title: "Recommendations",
  items: [
    {
      id: "1",
      rating: 4.2,
      name: "Men Printed Round Neck Cotton Blend Maroon, White T-Shirt",
      price: 1499,
      discount: 1220,
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/z/y/s/xl-ausk0569-ausk-original-imagt4rgfphkvpqb.jpeg",
    },
    {
      id: "2",
      rating: 4.2,
      name: "Men Checkered Polo Neck Cotton Blend Maroon, White T-Shirt",
      price: 1499,
      discount: 1220,
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/8/b/7/s-ausk0579-ausk-original-imagt4sybykk4ugw.jpeg",
    },
    {
      id: "3",
      rating: 4.2,
      name: 'Men Regular Fit Sol"id" Spread Collar Casual Shirt',
      price: 1499,
      discount: 1110,
      image:
        "https://rukminim2.flixcart.com/image/612/612/kzn17680/shirt/0/q/o/l-logo-shirt-infinity-choice-original-imagbhwczbphzk5f.jpeg?q=70",
    },
    {
      id: "f4i3lae98",
      rating: 4.2,
      name: "Men Cargos",
      price: 999,
      discount: 621,
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/cargo/l/n/k/28-mb-josh-original-imag3av8tyx8rkgd-bb.jpeg",
    },
    {
      id: "iygefiq",
      rating: 4.2,
      name: 'Men Sol"id" Gray Track Pants',
      price: 999,
      discount: 575,
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-track-pant/g/h/t/xxl-ss-vs-sgl-zurich-addiz-original-imagw8ynrxdrspgz.jpeg",
    },
    {
      id: "skeroiow",
      rating: 4.2,
      name: "Men Striped Blue Track Pants",
      price: 999,
      discount: 650,
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/track-pant/d/g/c/m-833-4-ftx-original-imagt6ygygr5fayg.jpeg",
    },
  ],
};

type prop = {
  params: {
    id: string;
  };
};
