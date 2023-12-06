import React, { useState, useEffect } from 'react'
import aboutMeImage from '../asset/About/git.png'
import VaraText from '../components/VaraText'
const AboutMe = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the component is in the viewport
            const component = document.getElementById('show'); // Replace with your component's ID
            if (component) {
                const rect = component.getBoundingClientRect();
                const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
                setIsVisible(isInViewport);
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='flex flex-col items-center px-10 md:items-start md:grid md:grid-cols-12 md:px-16 gap-10 py-16 bg-slate-900'>
            <div className='md:col-span-8 text-white text-center flex flex-col items-center'>
                
                <VaraText text='About-Me'/>


                <p className=''>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quis debitis at! Modi odit totam quas beatae? Eius excepturi voluptatum, sunt officiis vel, voluptates in maxime suscipit placeat obcaecati sit.
                </p>
            </div>
            <div className='md:col-span-4'>
                <img src={aboutMeImage} alt='Higu 2 uwu' />
            </div>
        </div>
    )
}

export default AboutMe