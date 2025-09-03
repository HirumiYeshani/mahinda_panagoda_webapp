import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Packages: React.FC = () => {
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

export default Packages
