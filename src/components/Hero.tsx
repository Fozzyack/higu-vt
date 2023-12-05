import React from 'react'
import HeroImage from '../asset/Hero/HeroImage.png';
import backdrop from '../asset/Hero/backdrop.png';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className='flex flex-col items-center lg:h-screen overflow-hidden ' style={{ background: `url(${backdrop})`, backgroundSize: 'cover' }}>
            <motion.div
                animate={{

                    opacity: [0, 0, 1, 1, 1, 1, 1, 1, 0]
                  }}
                transition={{
                    duration: 10,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                className='font-bold text-white mt-[50px] text-7xl md:text-[10rem] md:mt-[100px] lg:text-[14rem] lg:mt-[140px]'
            >
                
                <h1 >HIGU VT</h1>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4 }}

            >
                <img src={HeroImage} alt='HiguVT' className='w-[500px] mt-[-120px] md:w-[800px] md:mt-[-230px] lg:w-[1024px] lg:mt-[-300px] relative z-10 ' />
            </motion.div>

        </section>
    )
}

export default Hero