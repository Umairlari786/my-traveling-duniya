import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from "../assets/about-us-page.jpg"
const About = () => {
  return (
    <div>
      <Navbar />
        <Hero
         cName = "hero-mid"
         heroImg = {AboutImg}
        //  text = "Choose your Destination to Travel"
         url = "/"
        //  btn = "Show"
        //  buttonTxt = "Start Planning"
        />
    </div>
  )
}

export default About
