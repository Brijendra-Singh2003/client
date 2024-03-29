"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Compress from "compress.js";
const compress = new Compress();

export default function Page(props: { params: { id: string } }) {
  const [prevProduct, setPrevProduct] = useState<Product | null>(null);
  const [product, setProduct] = useState<formData>(defaultData);
  const [base64, setBase64] = useState<string>("");

  useEffect(() => {
    // TODO: fetct product details from server
    fetch(
      process.env.NEXT_PUBLIC_SERVER_URL + "/api/products/" + props.params.id
    )
      .then((res) => res.json())
      .then((data: Product) => {
        setPrevProduct(data);
        setProduct({
          name: data.name,
          stock: data.stock,
          price: data.price,
          discount: data.discount,
          id: data.id,
          category: data.categoryId || 0,
          description: data.description,
        });
      })
      .catch((err) => console.log(err));
  }, [props.params.id]);

  function CompressAndAdd(file: File) {
    compress
      .compress([file], compressOptions)
      .then(([{ data, ext }]) => {
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

  function handleChange(e: any) {
    setProduct((prev: any) => {
      return { ...prev, [e.target.name]: e.target.value.toLowerCase() };
    });
  }

  function handleDrop(e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const fileType = file.type.split("/")[0];
    if (fileType === "image") {
      CompressAndAdd(file);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(product);
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("image", base64);

    fetch(process.env.NEXT_PUBLIC_SERVER_URL + "/api/products", {
      method: "POST",
      body: formData,
      credentials: "include",
    })
      .then((r) => r.text())
      .then((d) => console.log(d))
      .catch((e) => console.log(e));

    // setProduct(defaultData);
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
                : prevProduct?.imageUrl || "/assets/default-avatar.png"
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
              onChange={handleChange}
              value={product?.name}
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
              onChange={handleChange}
              value={product?.price}
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
              onChange={handleChange}
              value={product?.discount}
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
              onChange={handleChange}
              value={product?.stock}
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
              onChange={handleChange}
              maxLength={511}
              value={product?.description}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <button
              type="submit"
              className="bg-blue-600 active:scale-95 transition-all p-3 rounded-lg text-white"
            >
              {props.params.id === "new" ? "ADD" : "UPDATE"}
            </button>
            <button
              id="product-cancel-button"
              type="button"
              onClick={() =>
                setProduct({
                  name: prevProduct?.name || "",
                  stock: prevProduct?.stock || 0,
                  price: prevProduct?.price || 0,
                  discount: prevProduct?.discount || 0,
                  description: prevProduct?.description || "",
                  category: prevProduct?.categoryId || 0,
                })
              }
              className="border-blue-600 border-2 p-3 rounded-lg active:scale-95 transition-all"
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
  id?: number;
  name: string;
  image?: File;
  stock: number;
  price: number;
  discount: number;
  category: number;
  description: string;
};

const compressOptions = {
  size: 1, // the max size in MB, defaults to 2MB
  quality: 0.7, // the quality of the image, max is 1,
  maxHeight: 800,
  maxWidth: 600,
  resize: true,
};

const defaultData: formData = {
  id: 0,
  name: "",
  stock: 0,
  price: 0,
  discount: 0,
  category: 0,
  description: "",
};
