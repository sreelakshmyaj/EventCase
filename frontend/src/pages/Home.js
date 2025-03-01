import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Welcome from '../components/Welcome'
import Types from '../components/Types'
import GetStarted from '../components/GetStarted'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Welcome />
        <Types />
        <GetStarted />
        <Footer />
    </div>
  )
}

export default Home