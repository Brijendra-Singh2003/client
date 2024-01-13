import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { AiFillStar } from "react-icons/ai";

export default function Collection({ collection: { items, title } }: { collection: collection }) {
  return (
    <section className='flex flex-col w-screen my-1 shadow-md p-4 bg-gray-900 z-8'>
      <Link href={"/"} className='pb-4 px-4 text-xl sm:text-3xl font-bold relative flex justify-between'>
        <h2>{title}</h2>;
        <span className='bg-gray-200 aspect-square w-[1.8rem] sm:w-10 pl-0.5 sm:h-10 text-center text-black rounded-full'>{">"}</span>
      </Link>
      <div className='flex gap-4 relative overflow-x-scroll z-9 overflow-y-clip h-fit'>
        {items.map(Item)}
        <div className='flex items-center justify-center p-4'>
          <Link href={"/"} className={'rounded-full aspect-square grid place-items-center w-20 text-center cursor-pointer p-4 text-4xl bg-blue-500 mx-6 hover:bg-blue-700'}>
            <h3>{"->"}</h3>
          </Link>
        </div>
      </div>
    </section>
  )
}

const Item = (item: item) => (
  <Link key={item.id} href={'/' + item.id} className='w-48 sm:w-56 rounded relative z-10 transition-all'>
    <Image height={200} width={200} src={item.image} alt={item.name + " image"} className='h-48 w-full object-cover' />
    <h3 className='text-xs w-44 text-nowrap overflow-hidden text-ellipsis text-gray-200 px-2 py-1'>{item.name}</h3>
    <h5 className='w-fit flex gap-1 mx-2 px-1 rounded text-xs bg-green-700 items-center'>4.5<AiFillStar /></h5>
    <p className='px-2'>
      <b className='text-lg'>
        ₹{item.price - item.discount}
      </b> <span className='text-gray-400 line-through'>
        {item.price}
      </span> <span className='ml-2 text-green-500 text-xs'>
        {Math.floor(item.discount / item.price * 100)}% Off
      </span>
    </p>
  </Link>
);


type item = {
  id: string,
  name: string,
  price: number,
  discount: number,
  image: string,
}

type collection = {
  title: string,
  items: item[]
}