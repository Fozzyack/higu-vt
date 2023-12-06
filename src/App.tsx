import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import TwitchStream from './components/TwitchStream';
import Credits from './components/Credits';
import Socials from './components/Socials';

function App() {
  return (
    <main className='bg-[#02010a] flex flex-col'>

      <Navbar />
      <div className='pt-5 md:pt-0'>
        <Hero />
      </div>
      <div id='about'>
        <AboutMe />
      </div>
      <div id='twitch'>
        <TwitchStream />
      </div>
      <div id='credits'>
        <Credits />
      </div>
      <div id='socials'>
      <Socials />
      </div>
    </main>
  );
}

export default App;
