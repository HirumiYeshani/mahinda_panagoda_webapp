import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Gallery: React.FC = () => {
  return (
    <div>
      <section className='w-full'>
        <Navbar />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  )
}

export default Gallery
