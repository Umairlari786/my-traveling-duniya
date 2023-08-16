import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from "../assets/about-us-page.jpg"
import "./about.css";
import Footer from '../components/Footer';
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
        <div className='about-container'>
        <div className='box1'>
        <h2>Our History</h2>
        <p>The trip history registers describe the last 10 encountered trips. The trip history format corresponds to a series of 10 records saved in a FIFO (first in first out) stack. The last record erases the oldest.The trip history registers describe the last 10 encountered trips. The trip history format corresponds to a series of 10 records saved in a FIFO (first in first out) stack. The last record erases the oldest.</p>
        </div>
        <div className='box1'>
        <h2>Our Vision</h2>
        <p>The trip history registers describe the last 10 encountered trips. The trip history format corresponds to a series of 10 records saved in a FIFO (first in first out) stack. The last record erases the oldest.The trip history registers describe the last 10 encountered trips. The trip history format corresponds to a series of 10 records saved in a FIFO (first in first out) stack. The last record erases the oldest.</p>
        </div>
        <div className='box1'>
        <h2>Our Mission</h2>
        <p>The trip history registers describe the last 10 encountered trips. The trip history format corresponds to a series of 10 records saved in a FIFO (first in first out) stack. The last record erases the oldest.The trip history registers describe the last 10 encountered trips. The trip history format corresponds to a series of 10 records saved in a FIFO (first in first out) stack. The last record erases the oldest.</p>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default About
