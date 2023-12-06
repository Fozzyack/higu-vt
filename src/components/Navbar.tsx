import React from 'react'
import { motion } from 'framer-motion';
import logo from '../asset/Nav/Logo.png'
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';
const NAVIGATION_INFO = [
    {
        section: 'About',
        href: '#about'
    },
    {
        section: 'Twitch Stream',
        href: '#twitch'
    },
    {
        section: 'Credits',
        href: '#credits'
    },
    {
        section: 'Socials',
        href: '#socials'
    },
]
const Navbar = () => {
    const [openMenu, setOpenMenu] = React.useState(false);
    const [zVal, setZVal] = React.useState(15)
    const toggleMenu = () => {

        if (!openMenu) {
            setOpenMenu(true);
            console.log('press')
            return setZVal(29)
        }

        setZVal(15)
        setOpenMenu(false);
    }

    const variants = {
        showMenu: { scale: 1 },
        hideMenu: { scale: 0 }
    }

    return (
        <div className='flex flex-row '>
            <motion.div
                initial={{ y: -200 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 55, delay: 3 }}
                className='fixed z-30 w-full flex justify-end'
            >
                <button className='block lg:hidden mr-5 rounded-xl pt-8' onClick={() => { toggleMenu() }}>
                    {openMenu ? <svg className="w-10 h-10 text-gray-800 dark:text-white border rounded-xl p-2 hover:bg-slate-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg> :
                        <svg className="w-10 h-10 text-gray-800 dark:text-white border rounded-xl p-2 hover:bg-slate-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    }


                </button>

                <div className='hidden lg:flex flex-row space-x-10 text-white font-bold pr-10 pt-10'>
                    {NAVIGATION_INFO.map((navigation, index) => (
                        <div key={index}>
                            <NavLinks section={navigation.section} href={navigation.href} />
                        </div>


                    ))}
                </div>
            </motion.div>

            <section className='fixed w-full' style={{ zIndex: zVal }} >
                <motion.div
                    initial={{ y: -200 }}
                    animate={{ y: 0 }}
                    transition={{ type: 'spring', stiffness: 55, delay: 3 }}
                    className='w-full flex'
                >
                    <nav className='bg-[#10002B] py-4 flex flex-row w-full align-middle justify-between'>
                        <button className='flex flex-row items-center'>
                            <img src={logo} className='w-[60px] md:w-[80px] ml-6' />
                            <h1 className='text-white font-bold text-xl md:text-4xl mx-4 md:mx-7 block'>Higu 日ぐ</h1>

                        </button>
                    </nav>

                </motion.div>
                {openMenu ?
                    <MobileMenu nav_info={NAVIGATION_INFO} />
                    : null}
            </section>

        </div>


    )
}

export default Navbar