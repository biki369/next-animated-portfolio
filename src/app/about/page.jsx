'use client'
import React from 'react'
import { motion } from 'framer-motion';
import Image from "next/image";
import { skills } from '@/data';



const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};



const AboutPage = () => {
  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}  >

      {/* container dev */}
      <div className=' h-full overflow-scroll'>
        {/* left dev */}
        <div className="p-4 sm:p-8 md-p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          {/* biography or about me*/}
          <div className="flex flex-col gap-12 justify-center ">
            <h1 className='font-bold text-2xl'>Biography </h1>
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo natus quasi nostrum cumque doloribus aliquam ea velit? Expedita nihil, libero exercitationem mollitia pariatur, tenetur, aut modi consectetur quia vel eos.</p>
            <span className='italic'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, earum!</span>
            <div className="">
              <Image src="/signature.png" alt="signature" width={150} height={100} />
            </div>
            {/* scroll img */}
            <div className="">
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </div>

          </div>
          {/* skills */}
          <div className="flex flex-col gap-12 justify-center ">
            <h1 className='font-bold text-2xl uppercase'>skills</h1>
            {/* skill lists */}
            <div className=" flex gap-4 flex-wrap">
              {
                skills.map((skill, index) => (
                  <div key={index} className="rounded p-2 uppercase bg-black cursor-pointer text-sm text-white hover:bg-white hover:text-black">{skill}</div>
                ))
              }
            </div>
          </div>
          {/* experience container */}
          <div className="flex flex-col gap-12 justify-center pb-48">
          <h1 className='font-bold text-2xl uppercase'>experience</h1>
             {/* experience lists */}
            <div className="">
              {/* experience list items */}
              
              {/* item 1 */}
              <div className=" flex justify-between h-48">
                {/* left item */}
                <div className="w-1/3 "></div>

                {/* center item */}
                <div className=" w-1/6 ">
                  <div className="w-1 h-full bg-gray-600 relative rounded">
                    {/* line */}
                    <div className="absolute -left-2 w-5 h-5 rounded-full ring-4 ring-red-400 bg-white">
                      {/* line circle */}
                      <div className=""></div>
                    </div>
                  </div>
                </div>
                {/* right item */}
                <div className=" w-1/3 ">
                  {/* job title */}
                  <div className=" bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Senior Dev</div>
                  {/* job description  */}
                  <div className="p-3 text-sm italic">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, explicabo! Rem ipsum.</div>
                  {/* job date */}
                  <div className="text-red-400 p-3 text-sm font-semibold">2024-present</div>
                  {/* company name */}
                  <div className=" text-sm font-semibold bg-white p-1 w-fit">Apple</div>

                </div>
              </div>

              {/* item 2 */}
              <div className=" flex justify-between h-48">
                {/* left item */}
                <div className=" w-1/3 ">
                  {/* job title */}
                  <div className=" bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Senior Dev</div>
                  {/* job description  */}
                  <div className="p-3 text-sm italic">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, explicabo! Rem ipsum.</div>
                  {/* job date */}
                  <div className="text-red-400 p-3 text-sm font-semibold">2024-present</div>
                  {/* company name */}
                  <div className=" text-sm font-semibold bg-white p-1 w-fit">Apple</div>

                </div>
                {/* center item */}
                <div className=" w-1/6 ">
                  <div className="w-1 h-full bg-gray-600 relative rounded">
                    {/* line */}
                    <div className="absolute -left-2 w-5 h-5 rounded-full ring-4 ring-red-400 bg-white">
                      {/* line circle */}
                      <div className=""></div>
                    </div>
                  </div>
                </div>
                {/* right item */}
                <div className="w-1/3 "></div>
              </div>

              {/* item 3 */}
              <div className=" flex justify-between h-48">
                {/* left item */}
                <div className="w-1/3 "></div>

          
                {/* center item */}
                <div className=" w-1/6 ">
                  <div className="w-1 h-full bg-gray-600 relative rounded">
                    {/* line */}
                    <div className="absolute -left-2 w-5 h-5 rounded-full ring-4 ring-red-400 bg-white">
                      {/* line circle */}
                      <div className=""></div>
                    </div>
                  </div>
                </div>
                {/* right item */}
                <div className=" w-1/3 ">
                  {/* job title */}
                  <div className=" bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Senior Dev</div>
                  {/* job description  */}
                  <div className="p-3 text-sm italic">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, explicabo! Rem ipsum.</div>
                  {/* job date */}
                  <div className="text-red-400 p-3 text-sm font-semibold">2024-present</div>
                  {/* company name */}
                  <div className=" text-sm font-semibold bg-white p-1 w-fit">Apple</div>

                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right dev */}
        <div className="hidden">
              
        </div>
      </div>
    </motion.div>
  )
}

export default AboutPage
