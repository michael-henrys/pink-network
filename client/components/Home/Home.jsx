import React from 'react'
import LOGO from '../../images/LOGO.svg'
import Ticker from './Ticker'
import STAR from '../../images/STAR.svg'
import Button from '../utils/Button'

export default function Home () {
  const description = [
    'The club is open to all who are interested in the nightlife.',
    'We are a group of people who enjoy the nightlife.',
    'We are a group of people who enjoy the nightlife.',
    'We are a group of people who enjoy the nightlife.',
    'We are a group of people who enjoy the nightlife.',
    'We are a group of people who enjoy the nightlife.',
    'We are a group of people who enjoy the nightlife.',
    'We are a group of people who enjoy the nightlife.',
    'We are a group of people who enjoy the nightlife.',
    'We are a group of people who enjoy the nightlife.',
    'We are a group of people who enjoy the nightlife.',
    'We are a group of people who enjoy the nightlife.',
    'We are a group of people who enjoy the nightlife.',
    'We are a group of people who enjoy the nightlife.'
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
            <p key={index}>{item}</p>
          ))}
        </div>
      </main>
      <Button destination='/payment' label='GET A TICKET'/>
    </div>
  )
}
