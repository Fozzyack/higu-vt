import React from 'react'
import { TwitchEmbed } from 'react-twitch-embed'
const TwitchStream = () => {
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
      />
    </div>
  )
}

export default TwitchStream