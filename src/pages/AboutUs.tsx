import React from 'react'
import Hero from '../components/about-us/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import VisionMission from '../components/about-us/VisionMission'
import OurStory from '../components/about-us/OurStory'

const AboutUs:React.FC = () => {
  return (
    <div>
      <section className='w-full'>
        <Navbar />
      </section>

      <section className='mb-[90px]'>
        <Hero />
      </section>

      <section className='mb-[90px]'>
        <OurStory />
      </section>

      <section className='mb-[90px]'>
        <VisionMission />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  )
}

export default AboutUs
