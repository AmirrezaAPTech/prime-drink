import React from 'react'
import BigBannerImage from '../public/Images/GB_Drop_Banner_Desktop_2000x.webp'
import SmallBannerImage from '../public/Images/GB_Drop_Banner_Mobile_600x.webp'
import MedBannerImage from '../public/Images/GB_Drop_Banner_Mobile_1600x.webp'
import BottleImage from '../public/Images/Banner-Bottle.png'
import Image from 'next/image'

const GreenHeroBanner = () => {
  return (
    <div className='w-full h-screen flex justify-center items-start relative'>
        <Image src={BigBannerImage} alt='BannerImage' className='w-full h-full object-cover rounded-b-3xl max-lg:hidden'/>
        <Image src={MedBannerImage} alt='BannerImage' className='w-full h-full object-cover object-center rounded-b-3xl lg:hidden max-sm:hidden'/>
        <Image src={SmallBannerImage} alt='BannerImage' className='w-full h-full object-cover rounded-b-3xl sm:hidden'/>
        <div className='absolute sm:bottom-12 bottom-4 sm:left-12 left-4 flex flex-col justify-center items-start gap-y-3'>
            <div className='pl-6'><Image src={BottleImage} alt='BottleImage' className='xl:w-[56px] sm:w-[50px] w-[40px] image-bounce' /></div>
            <p className='sm:text-3xl text-xl text-[#666666]'>FUEL UP</p>
            <p className='sm:text-4xl text-2xl font-semibold'>WELCOME TO YOUR PRIME</p>
            <button className='text-xl bg-[#1A1C1B] font-bold text-[#9ED364] px-5 py-3 rounded-xl transition-all duration-300 hover:bg-opacity-60 border border-[#9ED364] hover:border-[#1A1C1B] '>DRINK PRIME</button>
        </div>
    </div>
  )
}

export default GreenHeroBanner