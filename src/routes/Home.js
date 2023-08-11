import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
    <Navbar />
        <Hero
         cName = "hero"
         heroImg = "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
         title = "Plan Your Trip"
         text = "Choose your Destination to Travel"
         url = "/"
         btn = "Show"
         buttonTxt = "Start Planning"
        />
    </div>
  )
}

export default Home
