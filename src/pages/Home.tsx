import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home: React.FC = () => {
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

export default Home
