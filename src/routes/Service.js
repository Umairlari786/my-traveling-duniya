import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ServiceImg from "../assets/service-page.jpg"
import Destination from '../components/Destination'
import Footer from '../components/Footer'

const Service = () => {
  return (
    <div>
    <Navbar />
    <Hero
     cName = "hero-mid"
     heroImg = {ServiceImg}
    //  text = "Choose your Destination to Travel"
     url = "/"
    //  btn = "Show"
    //  buttonTxt = "Start Planning"
    />
    <Destination />
    <Footer />
    </div>
  )
}

export default Service
