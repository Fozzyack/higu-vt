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
                    
                    <button className='block lg:hidden mr-5 hover:bg-slate-500 border rounded-xl p-2'>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </nav>
            </motion.div>
        </section>

    )
}

export default Navbar