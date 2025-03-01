import React from 'react'
import heroImg from '../images/hero1.png'

const Hero = () => {
  return (
    <div className='hero'>
        <img src='https://cdn.pixabay.com/photo/2022/01/10/04/37/event-6927353_960_720.jpg' className='img_side left' alt='' />
        <img src={heroImg} alt='' />
        <img src='https://cdn.pixabay.com/photo/2016/12/28/20/30/wedding-1937022_960_720.jpg' className='img_side right' alt='' />
    </div>
  )
}

export default Hero