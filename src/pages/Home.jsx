import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Services from '../components/Services'

function Home() {
  return (
    <div className='w-full h-screen relative overflow-hidden'>
        <div className='w-full h-full absolute inset-0 bg-img bg-center bg-cover'>
            <Nav/>
            <Hero/>
            <Services/>
        </div>
    </div>
  )
}

export default Home