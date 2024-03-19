'use client';
import Image from "next/image";
import {motion} from 'framer-motion'
const Homepage = () => {
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}  > 
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md-px-12 lg:px-20 xl:px-48">

        {/* Image container*/}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="logo" fill className="object-contain" />
        </div>

        {/*text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold">Lorem ipsum dolor sit amet consectetur ?</h1>

          {/* Description */}
          <p className="md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab distinctio natus maxime quibusdam nihil mollitia recusandae, numquam reprehenderit magni voluptas cumque qui in animi nobis rerum molestiae nam tempora.</p>

          {/* btn group */}
          <div className="flex w-full gap-4">
            <button className="p-4 rounded ring-1 ring-black">View My Work</button>
            <button className="p-4 rounded ring-1 ring-black bg-black text-white">Contact Me</button>
          </div>

        </div>

      </div>
    </motion.div>)
};

export default Homepage;
