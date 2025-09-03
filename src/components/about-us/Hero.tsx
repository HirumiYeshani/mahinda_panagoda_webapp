import React from 'react'
import backgroundImage from '../../assets/img/aboutUS/HeroBg.svg'

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[70dvh]">
      <img
        src={backgroundImage}
        alt="HeaderBackgroundImage"
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-0 left-0 w-full pb-8 bg-gradient-to-t from-black/90 to-transparent">
        <div className='w-11/12 md:w-5/6 mx-auto'>
          <h1 className="lg:text-[48px] lg:leading-[62px] text-[40px] font-[belda] font-semibold mb-4 tracking-wide text-white">
          Serving Families with Dignity{' '}
          <span className="text-secondary font-[belda]">Since 2000</span>
        </h1>
        <p className="text-[20px] text-white">
          Providing trusted, affordable, and professional funeral services for over two decades.
        </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
