import React from 'react'
import { TwitchEmbed } from 'react-twitch-embed'
const TwitchStream = () => {
  return (
    <div className='flex-col'>
      <h1> My Stream </h1>
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