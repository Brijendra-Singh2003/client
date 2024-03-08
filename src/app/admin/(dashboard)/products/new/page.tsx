"use client";

import Image from "next/image";
import React, { useState } from "react";
import Compress from "compress.js";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
const compress = new Compress();

export default function Page() {
  const prevProduct = defaultProduct;
  const [product, setProduct] = useState<formData>(defaultData);
  const [base64, setBase64] = useState<string>("");
  const [loading, setloading] = useState<boolean>(false);
  const router = useRouter();

  function CompressAndAdd(file: File) {
    compress
      .compress([file], compressOptions)
      .then(([{ data, ext }]) => {
        console.log(data);
        setBase64(data);
        setProduct((prev) => {
          return { ...prev, image: Compress.convertBase64ToFile(data, ext) };
        });
      })
      .catch((err) => console.log(err));
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files;
    CompressAndAdd(file?.item(0) as File);
  }

  function handleDrop(e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    console.log(file);
    const fileType = file?.type.split("/")[0];
    if (fileType === "image") {
      CompressAndAdd(file);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setloading(true);
    console.log(product);

    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("image", base64);

    fetch(process.env.NEXT_PUBLIC_SERVER_URL + "/api/products", {
      method: "POST",
      body: formData,
      credentials: "include",
    })
      .then((r) => r.json())
      .then((d) => {
        console.log(d);
        setloading(false);
        if (d.id) {
          toast.success("Item Added To Cart");
        } else {
          toast.error("failed to add item");
        }
      })
      .catch((e) => {
        console.log(e);
        toast.error("failed to add item");
      })
      .finally(() => {
        router.push("/admin/products");
      });
  }

  return (
    <div className="w-full bg-white">
      <form
        id="product-form"
        onSubmit={handleSubmit}
        className="w-full flex flex-col max-w-96 mx-auto md:max-w-none md:grid grid-cols-3 gap-4 p-4"
      >
        <label
          htmlFor="product-image-input"
          onDragOver={(e) => e.preventDefault()}
          onDragLeave={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className="bg-transparent aspect-square w-full md:sticky top-14 p-4 border grid place-items-center col-span-1 rounded-md"
        >
          <Image
            src={
              product?.image
                ? URL.createObjectURL(product.image)
                : prevProduct.photo
            }
            height={254}
            width={254}
            alt="input image"
            className="mx-auto h-full w-full object-contain"
          />
          <input
            id="product-image-input"
            hidden
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            itemType="image/jpg"
            onChange={handleImageChange}
          />
        </label>

        <div className="col-span-2 flex flex-col gap-4 md:p-4">
          <div className="w-full flex flex-col md:grid grid-cols-2 md:items-center">
            <label htmlFor="product-name-input">Name</label>
            <input
              className="p-3 w-full bg-transparent capitalize focus:shadow-md outline-none border focus:border-black rounded-md"
              required
              spellCheck={false}
              type="text"
              placeholder="name"
              name="name"
              id="product-name-input"
            />
          </div>
          <div className="w-full flex flex-col md:grid grid-cols-2 md:items-center">
            <label htmlFor="product-category-input">Category</label>
            <select
              name="category"
              className="w-full h-12 bg-transparent rounded-md border px-2 focus:shadow-md outline-none focus:border-black"
              id="product-category-input"
            >
              <option value="1">Topwear</option>
              <option value="2">Bottomwear</option>
              <option value="4">Footwear</option>
              <option value="6">Cap</option>
              <option value="7">Hoodie</option>
              <option value="5">Mug</option>
              <option value="3">Mousepad</option>
            </select>
          </div>
          <div className="w-full flex flex-col md:grid grid-cols-2 md:items-center">
            <label htmlFor="product-price-input">Price</label>
            <input
              className="p-3 w-full bg-transparent capitalize focus:shadow-md outline-none border focus:border-black rounded-md"
              required
              spellCheck={false}
              type="number"
              placeholder="price"
              name="price"
              id="product-price-input"
            />
          </div>
          <div className="w-full flex flex-col md:grid grid-cols-2 md:items-center">
            <label htmlFor="product-discount-input">Discount</label>
            <input
              className="p-3 w-full bg-transparent capitalize focus:shadow-md outline-none border focus:border-black rounded-md"
              required
              spellCheck={false}
              type="number"
              placeholder="discount"
              name="discount"
              id="product-discount-input"
            />
          </div>
          <div className="w-full flex flex-col md:grid grid-cols-2 md:items-center">
            <label htmlFor="product-stock-input">Stock</label>
            <input
              className="p-3 w-full bg-transparent capitalize focus:shadow-md outline-none border focus:border-black rounded-md"
              required
              spellCheck={false}
              type="number"
              placeholder="stock"
              name="stock"
              id="product-stock-input"
            />
          </div>
          <div className="w-full flex flex-col md:grid grid-cols-2 md:items-center">
            <label htmlFor="product-discription-input">Discription</label>
            <textarea
              className="p-3 w-full h-48 bg-transparent focus:shadow-md outline-none border focus:border-black rounded-md"
              required
              placeholder="discription"
              name="discription"
              id="product-discription-input"
              maxLength={511}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 transition-all p-3 rounded-lg text-white"
            >
              ADD
            </button>
            <button
              id="product-cancel-button"
              type="button"
              disabled={loading}
              onClick={() => router.back()}
              className="border-blue-600 disabled:opacity-40 disabled:cursor-not-allowed border-2 p-3 rounded-lg active:scale-95 transition-all"
            >
              CANCEL
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

type formData = {
  id?: string;
  name: string;
  image?: File;
  stock: number;
  price: number;
  discount: number;
  category: string;
  discription: string;
};

const compressOptions = {
  size: 1, // the max size in MB, defaults to 2MB
  quality: 0.7, // the quality of the image, max is 1,
  maxHeight: 800,
  maxWidth: 600,
  resize: true,
};

const defaultData: formData = {
  id: "",
  name: "",
  stock: 0,
  price: 0,
  discount: 0,
  category: "",
  discription: "",
};

const defaultProduct: product = {
  id: "",
  name: "",
  photo: "/assets/default-avatar.png",
  stock: 0,
  price: 0,
  discount: 0,
  category: "topwear",
  discription: "",
};
