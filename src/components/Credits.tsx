import React from 'react'

const CREDITS_INFO = [
  {
    name: 'bellewelle',
    reason: 'ママ &パパ',
    link: 'https://twitter.com/bellewelle1123'
  },
  {
    name: 'reppu',
    reason: 'starting, brb, offline art',
    link: 'https://twitter.com/rept_u'
  },
  {
    name: 'pikuken',
    reason: 'starting, brb, offline rig',
    link: 'https://www.fiverr.com/freelancers/pikuken?source=gig_page'
  },
  {
    name: 'shiery',
    reason: 'Wiggle Emote',
    link: 'https://twitter.com/shierypop'
  },
  {
    name: 'inho',
    reason: 'Twitch Panels',
    link: 'https://twitter.com/VE_INHO25/'
  },
  {
    name: 'marvindi',
    reason: 'Emote Artist',
    link: 'https://www.fiverr.com/marvindi/draw-cute-chibi-emotes-and-sub-badges?source=order_page_summary_gig_link_title&funnel=6fc8c720350d267c210d51a3b4ab1df8'
  },
  {
    name: 'sweet_artisan',
    reason: 'Emote Artist',
    link: 'https://www.fiverr.com/sweet_artisan/make-custom-twitch-emotes-and-badges?context_referrer=user_page&ref_ctx_id=1ac883db768a7c07537e6386aed826ca&pckg_id=1&pos=1&imp_id=5191bc3d-fbf4-4c0f-9b51-9402a3fb10c3'
  },
  {
    name: 'sweet_artisan',
    reason: 'Sub Badges',
    link: 'https://www.fiverr.com/sweet_artisan/make-custom-twitch-emotes-and-badges?context_referrer=user_page&ref_ctx_id=1ac883db768a7c07537e6386aed826ca&pckg_id=1&pos=1&imp_id=5191bc3d-fbf4-4c0f-9b51-9402a3fb10c3'
  },
  {
    name: 'kaiyo',
    reason: 'Overlays',
    link: 'https://twitter.com/ohaiyokaiyo'
  },      
  {
    name: 'Frasier',
    reason: 'This Website',
    link: 'https://frasier-sundra.netlify.app'
  }
]
const Credits = () => {
  return (
    <div className='flex flex-col items-center py-10 gap-5 text-white bg-slate-900'>
      <h1 className='text-5xl font-bold'>Credits</h1>
      {
        CREDITS_INFO.map((credit, index) => (
          <div key={index} className='flex flex-row'>
            <p className='mr-2'>{credit.reason} -- </p> <a className='text-purple-600' href={credit.link}>{credit.name}</a>
          </div>
        ))
      }
    </div>
  )
}

export default Credits