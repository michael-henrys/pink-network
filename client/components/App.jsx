import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Archive from './Archive/Archive'
import ArchiveItem from './ArchiveItem/ArchiveItem'

import LandingPage from './LandingPage/LandingPage'
import Home from './Home/Home'
import Payment from './Payment/Payment'
import Confirmed from './Confirmed/Confirmed'

function App () {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="safety-code" element={<safetyCode />} />
        <Route path="home" element={<Home />} />
        <Route path="payment" element={Payment} />
        <Route path="confirmed" element={Confirmed} />
        <Route path="archive" element={<Archive/>} />
        <Route path="archive/:nightId" element={<ArchiveItem />} />
      </Routes>
    </>
  )
}

export default App
