import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ContactImg from "../assets/contact-us.jpg"

const Contact = () => {
  return (
    <div>
    <Navbar />
    <Hero
     cName = "hero-Contact"
     heroImg = {ContactImg}
    //  text = "Choose your Destination to Travel"
     url = "/"
    //  btn = "Show"
    //  buttonTxt = "Start Planning"
    />
    </div>
  )
}

export default Contact
