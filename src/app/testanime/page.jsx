"use client";
import React from 'react';
import { motion } from 'framer-motion';
const TestPage = () => {

    const variants = {
        variant1: {
            x: 400,
            y: 300,
            opacity: 0.5,
            transition: {
                duration: 3,
            }
        },
        variant2: {
            x: 100,
            y: -300,
            rotation: 90,
        },
    }

    return (
        <div className=' flex justify-center items-center h-full'>
            <motion.h1
                className='p-3 bg-blue-300'

                // initial={{
                //     opacity: 0,
                //     x: -100
                // }}

                variants={variants}
                animate="variant2"

            // animate={{
            //     opacity: 1,
            //     x: 60
            // }}
            // transition={{
            //     duration: 1
            // }}

            >Hello Framer Motion</motion.h1>
        </div>
    )
}

export default TestPage;
