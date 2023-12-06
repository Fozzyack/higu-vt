import React from 'react'
import { motion } from 'framer-motion';

const NAVIGATION_INFO = [
    {
        section: 'About',
        href: ''
    },
    {
        section: 'Twitch Stream',
        href: ''
    },
    {
        section: 'Credits',
        href: ''
    },
    {
        section: 'Socials',
        href: ''
    },
]
const Navbar = () => {
    return (
        <section className='fixed w-full z-10 flex'>
            <motion.div
                initial={{ y: -200 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 55, delay: 3 }}
                className='w-full flex' 

            >
                <nav className='bg-[#10002B] py-4 flex flex-row w-full align-middle justify-between'>
                    <h1 className='text-white font-bold text-xl md:text-4xl mx-7'>Logo</h1>
                    <div className='hidden lg:flex flex-row space-x-10 items-center text-white font-bold pr-10'>
                        {NAVIGATION_INFO.map((navigation, index) => (
                            <p key={index}>{navigation.section}</p>

                        ))}
                    </div>
                </nav>
            </motion.div>
        </section>

    )
}

export default Navbar