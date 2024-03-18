"use client";

import React, { useState } from 'react';
import { menuLinks } from '@/data';
import Link from 'next/link';
import Image from 'next/image';
import NavLinks from '../nav-links/NavLinks';
import { motion } from 'framer-motion';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    }
  }


  const centerVariants = {
    closed: {
      opacity: 1
    },
    opened: {
      opacity: 0
    },
  }

  const bottomVariants = {
    closed: {
      rotate: 0
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    }
  }


  const listVariants = {
    closed: {
      x: "100vw"
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },

  }

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };



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
          <Image src="/github.png" alt="logo" width={24} height={24} />
        </Link>
        <Link href={"https://github.com/"}>
          <Image src="/dribbble.png" alt="logo" width={24} height={24} />
        </Link>
        <Link href={"https://github.com/"}>
          <Image src="/facebook.png" alt="logo" width={24} height={24} />
        </Link>
        <Link href={"https://github.com/"}>
          <Image src="/instagram.png" alt="logo" width={24} height={24} />
        </Link>
        <Link href={"https://github.com/"}>
          <Image src="/pinterest.png" alt="logo" width={24} height={24} />
        </Link>
      </div>


      {/* mobile menu */}
      <div className="md:hidden">
        <button className='w-10 h-8  flex flex-col justify-between z-50 relative' onClick={() => setIsOpen(!isOpen)}>
          <motion.div
            variants={topVariants}
            animate={isOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"

          ></motion.div>
          <motion.div variants={centerVariants}
            animate={isOpen ? "opened" : "closed"}
            className="w-10 bg-black rounded h-1"></motion.div>
          <motion.div variants={bottomVariants}
            animate={isOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* menu list */}

        {
          isOpen && (
            <motion.div
              variants={listVariants}
              initial="closed"
              animate="opened"
              className="absolute w-screen h-screen top-0 left-0 bg-black text-white flex justify-center items-center flex-col gap-8 text-4xl z-40">
              {
                menuLinks.map((link) => {
                  return (
                    <motion.div key={link.text}
                      variants={listItemVariants}
                      className=""
                    >
                      <Link href={link.url} >
                        {link.text}
                      </Link>
                    </motion.div>
                  )
                })
              }
            </motion.div>
          )
        }

      </div>
    </div>
  )
}

export default Navbar
