import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import TwitchStream from './components/TwitchStream';
import Credits from './components/Credits';

function App() {
  return (
    <main className='bg-[#02010a] flex flex-col'>

      <Navbar />
      <div className='pt-20 md:pt-0'>
        <Hero />
      </div>
      <div>
        <AboutMe />
      </div>
      <div>
        <TwitchStream />
      </div>
      <div>
        <Credits />
      </div>
    </main>
  );
}

export default App;
