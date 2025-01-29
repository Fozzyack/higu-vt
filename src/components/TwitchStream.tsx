import React from 'react'
import VaraText from './VaraText';
import useOnScreen from './InView';
const TwitchStream = () => {


  const ref = React.useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref)
  return (



    <div ref={ref} className='flex flex-col relative items-center gap-5 p-10 border-rounded-xl bg-[#1d1936]'>
      {
        isVisible && <VaraText text='My Stream' contName='my-stream' fontSize={40} />
      }
      <div className='p-4 bg-slate-900 relative w-min-[300px] h-min-[400px] rounded-xl shadow-xl '>
        <iframe
            src="https://player.twitch.tv/?channel=higuvt&parent=higuvt.starlightvoyger.dev&muted=true"
            title="Stream"
            className="md:w-[800px] md:h-[500px]"
            >
        </iframe>

      </div>

    </div>
  )
}

export default TwitchStream
