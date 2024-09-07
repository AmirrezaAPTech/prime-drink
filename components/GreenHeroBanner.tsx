import React from 'react'
import BannerImage from '../public/Images/GB_Drop_Banner_Desktop_2000x.webp'
import BottleImage from '../public/Images/Banner-Bottle.png'
import Image from 'next/image'

const GreenHeroBanner = () => {
  return (
    <div className='w-full h-screen flex justify-center items-start relative'>
        <Image src={BannerImage} alt='BannerImage' className='w-full h-full object-cover rounded-b-3xl'/>
        <div className='absolute bottom-12 left-12 flex flex-col justify-center items-start gap-y-3'>
            <div className='pl-6'><Image src={BottleImage} alt='BottleImage' className='w-14 image-bounce' /></div>
            <p className='text-3xl text-[#666666]'>FUEL UP</p>
            <p className='text-4xl font-semibold'>WELCOME TO YOUR PRIME</p>
            <button className='text-xl bg-[#1A1C1B] font-bold text-[#9ED364] px-5 py-3 rounded-xl transition-all duration-300 hover:bg-opacity-60 border border-[#9ED364] hover:border-[#1A1C1B] '>DRINK PRIME</button>
        </div>
    </div>
  )
}

export default GreenHeroBanner