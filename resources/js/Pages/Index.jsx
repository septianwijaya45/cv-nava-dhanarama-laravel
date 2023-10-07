
import Client from '@/Components/Client/Client'
import Hero from '@/Components/Hero/Hero'
import Navbar from '@/Components/Navbar/Navbar'
import Portfolio from '@/Components/Portfolio/Portfolio'
import Tags from '@/Components/Tags/Tags'
import React from 'react'
import '@/Pages/Index.css'
import Benefits from '@/Components/Benefits/Benefits'
import Solution from '@/Components/Solution/Solution'
import Feedback from '@/Components/Feedback/Feedback'
import Contact from '@/Components/ContactUs/Contact'
import Footer from '@/Components/Footer/Footer'

export default function Index () {
  return (
    <div>
        <Tags/>
        <Navbar/>
        <Hero/>
        <Client/>
        <Portfolio/>
        <Benefits />
        <Solution />
        <Feedback />
        <Contact />
        <Footer/>
    </div>
  )
}
