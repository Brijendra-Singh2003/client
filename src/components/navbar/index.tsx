import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai"

const Navbar: FC = () => {
  return (
    // sticky -top-16 sm:top-0
    <div className='p-4 lg:px-[10%] bg-gray-900 flex flex-wrap w-full z-10 gap-4 justify-between shadow-md '>
      <h2 className="text-3xl font-bold">
        Logo.
      </h2>

      {/* search bar */}
      <div className='hidden sm:flex w-fit flex-grow-[0.5] gap-4 bg-gray-700 focus-within:shadow-zinc-900 rounded-lg px-2 focus-within:outline focus-within:outline-1 focus-within:shadow-lg'>
        <input className='bg-transparent w-full outline-none px-2' type="text" />
        <button className='h-full p-2 flex-grow'>
          <AiOutlineSearch />
        </button>
      </div>

      <div className='flex gap-4 w-24'>
        <Link className='p-2 relative hover:bg-gray-700 rounded-3xl' href="/cart">
          <span className='absolute -top-1 -right-1 text-sm bg-red-600 h-5 px-1 rounded-xl font-mono'>0</span>
          <AiOutlineShoppingCart />
        </Link>
        <Image className='h-10 w-10 object-cover ' height={100} width={100} src="/assets/default-avatar.png" alt='' />
      </div>

      <div className='flex sm:hidden w-[calc(100vw-32px)] mx-auto h-10 flex-grow-[0.5] gap-4 bg-gray-700 focus-within:shadow-zinc-900 focus-within:outline rounded-lg px-2 focus-within:shadow-lg'>
        <input className='bg-transparent w-full outline-none px-2' type="text" />
        <button className='h-full p-2 flex-grow'>
          <AiOutlineSearch />
        </button>
      </div>
    </div>
  )
}

export default Navbar