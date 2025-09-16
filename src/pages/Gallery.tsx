import React from 'react'
import HeroSection from '../components/gallery/HeroSection'
import ImageCollection from '../components/gallery/ImageCollection'
import VideoCollection from '../components/gallery/VideoCollection'

const Gallery:React.FC = () => {
  return (
      <div className="font-[roboto]">
      <section className="w-full lg:mb-30 mb-20">
        <HeroSection/>
      </section>

      <section className="md:w-5/6 mx-auto w-11/12 lg:mb-20 mb-20 ">
        <ImageCollection/>
      </section>

         <section className="md:w-5/6 mx-auto w-11/12 lg:mb-30 mb-20 ">
        <VideoCollection/>
      </section>
    </div>
  )
}

export default Gallery