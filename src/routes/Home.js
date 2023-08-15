import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Destination from '../components/Destination';
import RecentTrips from '../components/RecentTrip';
import Footer from '../components/Footer';
import homeImg from "../assets/HomeBg.jpg";

const Home = () => {
  return (
    <div>
    <Navbar />
        <Hero
         cName = "hero"
         heroImg = {homeImg}
         title = "Plan Your Trip"
         text = "Choose your Destination to Travel"
         url = "/"
         btn = "Show"
         buttonTxt = "Start Planning"
        />
        <Destination />
        <RecentTrips />
        <Footer />
    </div>
  )
}

export default Home
