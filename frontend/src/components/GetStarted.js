import React from 'react'
import { useNavigate } from 'react-router-dom'

const GetStarted = () => {
    const navigate = useNavigate();
  return (
    <div className='get-started'>
            <h1 style={{textAlign: 'center'}}>Get Started With EventCase Now!</h1>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className='box'>
                    <div className='top'>
                        <h2 style={{marginBottom: '10px'}}>Join as Client</h2>
                        <p>Plan your perfect event with ease</p>
                    </div>
                    <button className='primary-btn' onClick={() => navigate("/login?type=client")}>Login</button>
                </div>
                <div className='box'>
                    <div className='top'>
                        <h2 style={{marginBottom: '10px'}}>Join as Vendor</h2>
                        <p>Join us and showcase your services</p>
                    </div>
                    <button className='primary-btn' onClick={() => navigate("/login?type=vendor")}>Login</button>
                </div>
            </div>
    </div>
  )
}

export default GetStarted