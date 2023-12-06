import React from 'react'
import NavLinks from './NavLinks'
import { motion } from 'framer-motion'
type navProp = {
    nav_info: {
        section: string,
        href:string
    }[]
}
const MobileMenu = ({nav_info}: navProp) => {
  return (
    <div className='mb-2'>
        {nav_info.map((nav, index) => (
            <motion.div
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{type: 'spring', stiffness: 50, duration: 2, delay: (index) * 0.2}}
            className='text-white font-bold text-center p-1'> 
                <NavLinks section={nav.section} href={nav.href}/>
            </motion.div>
        ))}
    </div>
  )
}

export default MobileMenu