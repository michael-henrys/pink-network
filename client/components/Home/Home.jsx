import React from 'react'
import LOGO from '../../images/LOGO.svg'
import Ticker from './Ticker'
import STAR from '../../images/STAR.svg'
export default function Home () {
  return (
    <div>
      <header className='home-header'>
        <img className='home-title' src={LOGO} />
        <Ticker />
      </header>
      <main className='home-main'>
        <img className='home-star-logo' alt='Star Logo' src={STAR}/>
        <div className='home-content'>
          <p>
            The club is open to all who are interested in the nightlife.
          </p>
          <p>
            We are open to any kind of music, from the classics to the latest.
          </p>
          <p>
            We are open to any kind of music, from the classics to the latest.
          </p>
          <p>
            The club is open to all who are interested in the nightlife.
          </p>
          <p>
            We are open to any kind of music, from the classics to the latest.
          </p>
          <p>
            We are open to any kind of music, from the classics to the latest.
          </p>
          <p>
            The club is open to all who are interested in the nightlife.
          </p>
          <p>
            We are open to any kind of music, from the classics to the latest.
          </p>
          <p>
            We are open to any kind of music, from the classics to the latest.
          </p>
          <p>
            The club is open to all who are interested in the nightlife.
          </p>
          <p>
            We are open to any kind of music, from the classics to the latest.
          </p>
          <p>
            We are open to any kind of music, from the classics to the latest.
          </p>
          <p>
            The club is open to all who are interested in the nightlife.
          </p>
          <p>
            We are open to any kind of music, from the classics to the latest.
          </p>
          <p>
            We are open to any kind of music, from the classics to the latest.
          </p>
        </div>
      </main>
    </div>
  )
}
