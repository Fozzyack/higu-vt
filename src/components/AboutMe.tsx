import React, { useState, useEffect } from 'react'
import aboutMeImage from '../asset/About/git.png'
import VaraText from './VaraText'
import useOnScreen from './InView';
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

    const ref = React.useRef<HTMLDivElement>(null);
    const loadEl = useOnScreen(ref)

    return (
        <div ref={ref} className='flex flex-col items-center px-10 md:items-start md:grid md:grid-cols-12 md:px-16 gap-10 py-16 bg-slate-900'>
            <div className='md:col-span-8 text-white text-center flex flex-col items-center'>

                {loadEl && <VaraText text='About Me' contName={'about-me'} />}



                <p className=''>
                    Greetings, lovely viewers! 🌟 Virtual hugs from your friendly neighborhood VTuber! 🎮✨

                    I'm HiguVT, your digital companion on this wild adventure through the virtual realms. Nestled in the heart of the internet, I bring a blend of gaming, entertainment, and a sprinkle of delightful chaos to your screens.

                    Imagine a fusion of pixels and personality – that's me! 🌈 Whether we're embarking on epic quests in virtual lands or sharing a laugh over the latest memes, our time together is bound to be an unforgettable experience.

                    A little about the human behind the avatar: I'm <br></br> [- REDACTED -], a passionate gamer, storyteller, and all-around enthusiast for the wonders of the virtual universe. My mission? To create a community where fun knows no bounds and where every viewer is not just a spectator but a cherished member of this fantastical journey.

                    So, buckle up, my dear viewers, as we navigate the digital seas together, exploring new horizons, conquering challenges, and, of course, having a blast along the way! 🚀✨

                    Join me in this virtual escapade, and let's make memories that transcend the boundaries of reality. Ready, set, game on! 🎮🌟
                </p>
            </div>
            <div className='md:col-span-4'>
                <img src={aboutMeImage} alt='Higu 2 uwu' />
            </div>
        </div>
    )
}

export default AboutMe