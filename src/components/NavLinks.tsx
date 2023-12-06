import React from 'react'
import { motion } from 'framer-motion'
interface navigation {
    section:  string,
    href: string
}
const NavLinks = ({section, href}:navigation) => {
  return (
    <motion.div
    whileHover={{scale: 1.1}}
    
    >
        <a href={href}>
            <span className='hover:text-purple-600 hover:border-b  border-purple-600'>{section}</span>
        </a>
    </motion.div>
  )
}

export default NavLinks