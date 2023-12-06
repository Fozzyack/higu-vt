import React from 'react'
import HeroImage from '../asset/Hero/HeroImage.png';
import backdrop from '../asset/Hero/backdrop.png';
import { motion } from 'framer-motion';

const Hero = () => {

    const [fontSize, setFontSize] = React.useState('400px');
    const [imagePos, setImagePos] = React.useState('20px');

    React.useLayoutEffect(() => {
        const handleResize = () => {
          // Calculate the font size based on the viewport width
          const vw = Math.min(document.documentElement.clientWidth, window.innerWidth || 0);
          const vh = Math.min(document.documentElement.clientWidth, window.innerHeight || 0);
          const newFontSize = (vw / 5).toString().concat('px'); // Adjust the range as needed
          let newImagePos = '100px'
          if(vw  <  1272) {
            newImagePos  = (vh / 4 + 70).toString().concat('px')
            console.log('test')
          } else {
            newImagePos = '500px'
            
          }
          setImagePos(newImagePos);
          setFontSize(newFontSize);
          console.log(newImagePos);
          console.log(vw)
        };
    
        // Initial call to set font size based on initial window width
        handleResize();
    
        // Attach the event listener for window resize
        window.addEventListener('resize', handleResize);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <section className={`flex flex-col items-center overflow-hidden `} style={{ background: `url(${backdrop})`, backgroundSize: 'cover' }}>
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

                className='justify-self-start'
                
            >

                <h1 className='font-bold text-white relative z-10 pt-12' style={{fontSize: fontSize}}>HIGU VT</h1>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4 }}
                className=''

            >
                <img src={HeroImage} id='heroImage' alt='HiguVT' className=' relative z-20' style={{marginTop: `-${imagePos}`}}/>
            </motion.div>

        </section>
    )
}

export default Hero