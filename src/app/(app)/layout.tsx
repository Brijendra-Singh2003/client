import Navbar from '@/components/navbar';
import React, { ReactNode } from 'react'
import "../globals.css";
import { Inter } from "next/font/google"

const inter = Inter({ weight: "400", subsets: ["latin"] });

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body className={inter.className + " bg-gray-800"}>
        <Navbar />
        <div className='w-screen p-2 overflow-x-auto bg-gray-800'>
          <ul className='w-fit flex gap-4 mx-auto'>
            <li className='w-fit hover:bg-gray-700 bg-gray-700 sm:bg-transparent rounded-xl cursor-pointer px-3 text-nowrap'>Top wear</li>
            <li className='w-fit hover:bg-gray-700 bg-gray-700 sm:bg-transparent rounded-xl cursor-pointer px-3 text-nowrap'>Bottom wear</li>
            <li className='w-fit hover:bg-gray-700 bg-gray-700 sm:bg-transparent rounded-xl cursor-pointer px-3 text-nowrap'>Foot wear</li>
            <li className='w-fit hover:bg-gray-700 bg-gray-700 sm:bg-transparent rounded-xl cursor-pointer px-3 text-nowrap'>Hoodies</li>
            <li className='w-fit hover:bg-gray-700 bg-gray-700 sm:bg-transparent rounded-xl cursor-pointer px-3 text-nowrap'>Caps</li>
            <li className='w-fit hover:bg-gray-700 bg-gray-700 sm:bg-transparent rounded-xl cursor-pointer px-3 text-nowrap'>Mugs</li>
            <li className='w-fit hover:bg-gray-700 bg-gray-700 sm:bg-transparent rounded-xl cursor-pointer px-3 text-nowrap'>Mousepads</li>
          </ul>
        </div>
        {children}
      </body>
    </html>
  )
}

export default layout;