import React from 'react'
import backgroundImage from '../../assets/img/aboutUS/HeroBg.svg'

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[70vh]">
      <img src={backgroundImage} alt="Header Background" className="w-full h-full object-cover"/>

      <div className="absolute bottom-0 left-0 w-full px-6 md:px-20 pb-8 bg-gradient-to-t from-black/90 to-transparent">
        <h1 className="text-[48px] leading-[62px] font-[belda] font-semibold mb-4 tracking-wide text-white">
          Serving Families with Dignity <span className="text-secondary font-[belda]">Since 2000</span>
        </h1>
        <p className="text-[20px] text-white">
          Providing trusted, affordable, and professional funeral services for over two decades.
        </p>
      </div>
    </div>
  )
}

export default Hero
