import React from 'react'
import BannerImage from '../public/Images/PrimeX_Web_DropBanner_Desktop_4320x1926_a7e7aff7-d6c3-488d-8286-b3be0c6529ad_2000x.webp'
import BottleImage from '../public/Images/Pink-Banner-Bottle.png'
import Image from 'next/image'
import Link from 'next/link'

const PinkHeroBanner = () => {
  return (
    <div className='w-full h-screen flex justify-center items-start relative'>
    <Image src={BannerImage} alt='BannerImage' className='w-full h-full object-cover rounded-b-3xl'/>
    <div className='absolute bottom-12 left-12 flex flex-col justify-center items-start gap-y-7'>
        <div className='pl-6'><Image src={BottleImage} alt='BottleImage' className='w-[56px] image-bounce' /></div>
        <p className='w-[550px] text-[#666666] leading-7'><span className='font-semibold text-[#EEEEEE]'>PURCHASE REQUIRED.</span> Must be <span className='font-bold text-[#EEEEEE]'>16</span> or older. Program ends <span className='font-bold text-[#EEEEEE]'>December 31, 2024</span> (or while Codes last). Points must be redeemed by <span className='font-bold text-[#EEEEEE]'>January 9, 2025.</span> See
        <Link href="/pages/prime-x-promotion" title="PRIME X REWARDS T&amp;C"><span className='text-white font-semibold hover:text-[#FF0886] transition-all duration-200'> Rewards Terms </span></Link>
        for full details.</p>
        <button className='text-xl bg-[#1A1C1B] font-bold text-[#FF0886] px-5 py-3 rounded-xl transition-all duration-300 hover:bg-opacity-60 border border-[#FF0886] hover:border-[#1A1C1B] '>JOIN THE HUNT</button>
    </div>
</div>
  )
}

export default PinkHeroBanner