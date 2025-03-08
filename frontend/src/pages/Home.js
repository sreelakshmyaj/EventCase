import React from 'react'
import Hero from '../components/Hero'
import Welcome from '../components/Welcome'
import Types from '../components/Types'
import GetStarted from '../components/GetStarted'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Welcome />
        <Types />
        <GetStarted />
    </div>
  )
}

export default Home