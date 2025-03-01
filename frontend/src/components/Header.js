import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <div className='header_top'>
            <h1>EventCase</h1>
        </div>
        <div className='header_bottom'>
            <ul>
                <li><Link to='/'>home</Link></li>
                <li><Link to='/about'>about us</Link></li>
                <li><Link to='/contact'>contact</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Header