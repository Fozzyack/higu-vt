import React from 'react'
import { TwitchEmbed } from 'react-twitch-embed'
const TwitchStream = () => {

  const [clientWidth,  setClientWidth] = React.useState('300px');
  const [clientheight, setClientHeight] = React.useState('400px')
  React.useLayoutEffect(() => {
    const handleResize = () => {
      const vw = Math.min(document.documentElement.clientWidth, window.innerWidth || 0);
      const vh  = (vw / 12 * 4);
      setClientWidth(vw.toString().concat('px'));
      setClientHeight(vh.toString().concat('px'))
      
    };

    handleResize();
    window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
  }, []);

  return (

    

    <div className='flex flex-col items-center'>
      <h1 className='font-bold text-4xl text-white'> My Stream </h1>
      <TwitchEmbed
        channel='higuvt'
        onAuthenticate={function noRefCheck() { }}
        onVideoPause={function noRefCheck() { }}
        onVideoPlay={function noRefCheck() { }}
        onVideoReady={function noRefCheck() { }}
        withChat={false}
        style={{width: clientWidth,  height: clientheight}}
      />
    </div>
  )
}

export default TwitchStream