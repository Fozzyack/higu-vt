import React from 'react'

const CREDITS_INFO = [
  {
    name: 'bellewelle',
    link: 'https://twitter.com/bellewelle1123'
  },
  {
    name: 'pikuken',
    link: 'https://www.fiverr.com/freelancers/pikuken?source=gig_page'
  },
  {
    name: 'shiery',
    link: 'https://twitter.com/shierypop'
  },
  {
    name: 'inho',
    link: 'https://twitter.com/VE_INHO25/'
  },  
]
const Credits = () => {
  return (
    <div className='flex flex-col items-center py-10 gap-5 text-white'>
      <h1 className='text-5xl font-bold'>Credits</h1>
      {
        CREDITS_INFO.map((credit, index) => (
          <div key={index}>
            <a href={credit.link}>{credit.name}</a>
          </div>
        ))
      }
    </div>
  )
}

export default Credits