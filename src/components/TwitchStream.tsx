import React from 'react'
import { TwitchEmbed } from 'react-twitch-embed'
import VaraText from './VaraText';
import useOnScreen from './InView';
const TwitchStream = () => {

  const [clientWidth, setClientWidth] = React.useState('300px');
  const [clientheight, setClientHeight] = React.useState('400px')
  React.useLayoutEffect(() => {
    const handleResize = () => {
      const vw = Math.min(document.documentElement.clientWidth, window.innerWidth || 0);
      const vh = (vw / 12 * 4);
      setClientWidth((vw - vw / 3).toString().concat('px'));
      setClientHeight(vh.toString().concat('px'))

    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const ref = React.useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref)
  return (



    <div ref={ref} className='flex flex-col items-center gap-5 p-10 border-rounded-xl bg-[#1d1936]'>
      {
        isVisible && <VaraText text='My Stream' contName='my-stream' fontSize={40} />
      }
      <div className='p-4 bg-slate-900 rounded-xl shadow-xl '>
        <TwitchEmbed
          channel='higuvt'
          onAuthenticate={function noRefCheck() { }}
          onVideoPause={function noRefCheck() { }}
          onVideoPlay={function noRefCheck() { }}
          onVideoReady={function noRefCheck() { }}
          withChat={false}
          style={{ width: clientWidth, height: clientheight }}
        />
      </div>

    </div>
  )
}

export default TwitchStream