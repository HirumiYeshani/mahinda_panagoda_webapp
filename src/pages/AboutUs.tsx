import React from 'react'
import Hero from '../components/about-us/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AboutUs:React.FC = () => {
  return (
    <div>
      <section className='w-full'>
        <Navbar />
      </section>

      <section className='mb-[90px]'>
        <Hero />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  )
}

export default AboutUs
