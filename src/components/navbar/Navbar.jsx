"use client";

import React, { useState } from 'react';
import { menuLinks } from '@/data';
import Link from 'next/link';
import Image from 'next/image';
import NavLinks from '../nav-links/NavLinks';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md-px-12 lg:px-20 xl:px-48'>
      
      {/* desktop menu */}
      <div className=" hidden md:flex gap-4 w-1/3">
        {
          menuLinks.map((link) => {
            return (
             <NavLinks link={link} key={link.text} />
            )
          })
        }
      </div>

      {/* logo */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link href={"/"} className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
          <span className='text-white mr-1'>Biki</span>
          <span className='w-12 rounded text-black bg-white h-8 flex items-center justify-center'> Tirua</span>
        </Link>
      </div>

      <div className="hidden md:flex gap-4 w-1/3">
         <Link href={"https://github.com/"}>
            <Image src="/github.png" alt="logo" width={24} height={24}/>
         </Link>
         <Link href={"https://github.com/"}>
            <Image src="/dribbble.png" alt="logo" width={24} height={24}/>
         </Link>
         <Link href={"https://github.com/"}>
            <Image src="/facebook.png" alt="logo" width={24} height={24}/>
         </Link>
         <Link href={"https://github.com/"}>
            <Image src="/instagram.png" alt="logo" width={24} height={24}/>
         </Link>
         <Link href={"https://github.com/"}>
            <Image src="/pinterest.png" alt="logo" width={24} height={24}/>
         </Link>
      </div>


      {/* mobile menu */}
      <div className="md:hidden">
        <button className='w-10 h-8  flex flex-col gap-[6px] z-50 relative' onClick={() => setIsOpen(!isOpen)}>
          <div className="w-10 bg-black rounded h-1"></div>
          <div className="w-10 bg-black rounded h-1"></div>
          <div className="w-10 bg-black rounded h-1"></div>
        </button>
        {/* menu list */}

        {
          isOpen && (
            <div className=" absolute w-screen h-screen top-0 left-0 bg-black text-white flex justify-center items-center flex-col gap-8 text-4xl">
              {
                menuLinks.map((link) => {
                  return (
                    <Link href={link.url} key={link.text} className="">
                      {link.text}
                    </Link>
                  )
                })
              }
            </div>
          )
        }

      </div>
    </div>
  )
}

export default Navbar
