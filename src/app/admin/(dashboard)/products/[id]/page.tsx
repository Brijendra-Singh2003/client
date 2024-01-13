"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Compress from "compress.js";
const compress = new Compress();

// export function getServerSideProps() {}

export default function Page(props: { params: { id: string } }) {
  const [prevProduct, setPrevProduct] = useState<product>(defaultProduct);
  const [product, setProduct] = useState<formData>(defaultData);

  useEffect(() => {
    // TODO: fetct product details from server
    fetch("http://localhost:3000/api/products?id=" + props.params.id)
      .then((res) => res.json())
      .then((data) => {
        setPrevProduct(data);
        setProduct({
          name: data.name,
          stock: data.stock,
          price: data.price,
        });
      })
      .catch((err) => console.log(err));
  }, [props.params.id]);

  function CompressAndAdd(file: File) {
    compress
      .compress([file], compressOptions)
      .then(([{ data, ext }]) => {
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
      return { ...prev, [e.target.name]: e.target.value };
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

    // TODO: upload data to server

    setProduct(defaultData);
  }

  return (
    <div className="w-full bg-gray-900 h-screen overflow-y-auto pb-14 flex flex-col items-center justify-center">
      <form
        id="product-form"
        onSubmit={handleSubmit}
        className="h-full w-full max-w-[425px]  rounded-xl flex flex-col justify-evenly p-6"
      >
        <label
          htmlFor="product-image-input"
          onDragOver={(e) => e.preventDefault()}
          onDragLeave={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className="bg-transparent mb-4 text-white border border-gray-600 bg-gray-200 rounded-md"
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
            className="mx-auto aspect-[4/3] w-full object-contain"
          />
        </label>
        <input
          id="product-image-input"
          hidden
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          itemType="image/jpg"
          name="image"
          onChange={handleImageChange}
        />
        <label htmlFor="product-name-input">Name</label>
        <input
          className="p-3 mb-4 bg-transparent text-gray-200 focus:text-white outline-none border border-gray-600 bg-gray-200 rounded-md"
          required
          type="text"
          placeholder="name"
          name="name"
          id="product-name-input"
          onChange={handleChange}
          value={product?.name}
        />
        <label htmlFor="product-price-input">Price</label>
        <input
          className="p-3 mb-4 bg-transparent text-gray-200 focus:text-white outline-none border border-gray-600 bg-gray-200 rounded-md"
          required
          type="number"
          placeholder="price"
          name="price"
          id="product-price-input"
          onChange={handleChange}
          value={product?.price}
        />
        <label htmlFor="product-stock-input">Stock</label>
        <input
          className="p-3 mb-4 bg-transparent text-gray-200 focus:text-white outline-none border border-gray-600 bg-gray-200 rounded-md"
          required
          type="number"
          placeholder="stock"
          name="stock"
          id="product-stock-input"
          onChange={handleChange}
          value={product?.stock}
        />
        <div className="grid grid-cols-2 gap-4 mt-4">
          <button
            type="submit"
            className="bg-blue-600 p-3 rounded-lg text-white"
          >
            {props.params.id === "new" ? "ADD" : "UPDATE"}
          </button>
          <button
            id="product-cancel-button"
            type="button"
            onClick={() =>
              setProduct({
                name: prevProduct.name,
                stock: prevProduct.stock,
                price: prevProduct.price,
              })
            }
            className="border-blue-600 border-2 p-3 rounded-lg text-white"
          >
            CANCEL
          </button>
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
};

const compressOptions = {
  size: 0.25, // the max size in MB, defaults to 2MB
  quality: 0.6, // the quality of the image, max is 1,
  maxHeight: 254,
  maxWidth: 254,
  resize: true,
};

const defaultData: formData = {
  name: "",
  stock: 0,
  price: 0,
};

const defaultProduct: product = {
  id: "",
  name: "",
  photo: "/assets/default-avatar.png",
  stock: 0,
  price: 0,
};
