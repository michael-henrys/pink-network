import React from 'react'
import LOGO from '../../images/LOGO.svg'
import Ticker from '../utils/Ticker'
import STAR from '../../images/STAR.svg'
import Button from '../utils/Button'
import Line from '../utils/Line'

export default function Home () {
  const description = [
    'The club is open to all who are interested in the nightlife. The club is open to all who are interested in the nightlife. The club is open to all who are interested in the nightlife.',
    'We are a group of people who enjoy the nightlife. The club is open to all who are interested in the nightlife. The club is open to all who are interested in the nightlife. The club is open to all who are interested in the nightlife.',
    'We are a group of people who enjoy the nightlife. The club is open to all who are interested in the nightlife. The club is open to all who  The club is open to all who are interested in the nightlife. The club is open to all who are interested in the nightlife.',
    'We are a group who are interested in the nightlife. The club is open to all who are interested in the nightlife. The club is open to all who are interested in the nightlife. The club is open to all who are interested in the nightlife.',
    'We are a group of people who The club is open to all who are interested in the nightlife. The club is open to all who are interested in the nightlife. The club is open.'
  ]

  return (
    <div>
      <header className='home-header'>
        <img className='home-title' src={LOGO} />
        <Ticker />
      </header>
      <main className='home-main'>
        <img className='home-star-logo' alt='Star Logo' src={STAR}/>
        <div className='home-content'>
          {description.map((item, index) => (
            <div key={index} className='home-content-block'>
              <Line position='top' color='white'/>
              <p className='home-text'>{item}</p>
              <Line />
              <Line position='bottom' color='white'/>
            </div>
          ))}
        </div>
      </main>
      <Button destination='/payment' label='GET A TICKET'/>
    </div>
  )
}
