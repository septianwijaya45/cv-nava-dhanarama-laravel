
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
import WhatsAppButton from '@/Components/WhatsAppButton/WhatsAppButton'
import ApplicationForm from '@/Components/ApplicationForm/ApplicationForm'
import { Head } from '@inertiajs/react'
import useAnalytics from '@/hooks/useAnalytics'

export default function Index () {
  // Track page view for analytics
  useAnalytics();

  return (
    <div>
        <Head>
            <title>Nava 3D - Professional Web Development Services</title>
            <meta name="description" content="Transform your business with cutting-edge web applications. Nava 3D offers professional web development, mobile apps, and digital solutions." />
            <meta name="keywords" content="web development, mobile apps, digital solutions, Laravel, React, professional development" />
            <meta property="og:title" content="Nava 3D - Professional Web Development Services" />
            <meta property="og:description" content="Transform your business with cutting-edge web applications. Professional web development and digital solutions." />
            <meta property="og:image" content="/nava3d.png" />
            <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <Tags/>
        <Navbar/>
        <Hero/>
        <Client/>
        <Portfolio/>
        <Benefits />
        <Solution />
        <Feedback />
        <ApplicationForm />
        <Contact />
        <Footer/>
        <WhatsAppButton />
    </div>
  )
}
