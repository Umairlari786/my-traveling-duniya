import React from 'react'
import"./hero.css";

const Hero = () => {
  return (
    <div className='hero'>
        <img alt='hero-img' src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"></img>

        <div className='hero-text'>
        <h1>Plan Your Trip</h1>
        <p>choose your destination</p>
        <a href='/'>
            Travel Plan
        </a>
        </div>
    </div>
  )
}

export default Hero
