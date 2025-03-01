import React from 'react'

const GetStarted = () => {
  return (
    <div className='get-started'>
            <h1 style={{textAlign: 'center'}}>Get Started With EventCase Now!</h1>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className='box'>
                    <div className='top'>
                        <h2 style={{marginBottom: '10px'}}>Join as Client</h2>
                        <p>Plan your perfect event with ease</p>
                    </div>
                    <button className='primary-btn'>Login</button>
                </div>
                <div className='box'>
                    <div className='top'>
                        <h2 style={{marginBottom: '10px'}}>Join as Vendor</h2>
                        <p>Join us and showcase your services</p>
                    </div>
                    <button className='primary-btn'>Login</button>
                </div>
            </div>
    </div>
  )
}

export default GetStarted