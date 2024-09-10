import React from 'react'
import BigBannerImage from '@/public/Images/PrimeX_Web_DropBanner_Desktop_4320x1926_a7e7aff7-d6c3-488d-8286-b3be0c6529ad_2000x.webp'
import SmallBannerImage from '@/public/Images/PrimeX_Web_DropBanner_Mobile_1125x1881_b6aff639-4255-46e6-a942-1344144e4db8_600x.webp'
import MedBannerImage from '@/public/Images/PrimeX_Web_DropBanner_Mobile_1125x1881_b6aff639-4255-46e6-a942-1344144e4db8_600x.webp'
import BottleImage from '@/public/Images/Pink-Banner-Bottle.png'
import Image from 'next/image'
import Link from 'next/link'

const PinkHeroBanner = () => {
  return (
    <div className='w-full h-screen flex justify-center items-start relative'>
    <Image src={BigBannerImage} alt='BannerImage' className='w-full h-full object-cover object-right rounded-b-3xl max-lg:hidden'/>
    <Image src={MedBannerImage} alt='BannerImage' className='w-full h-full object-cover object-center rounded-b-3xl lg:hidden max-sm:hidden'/>
    <Image src={SmallBannerImage} alt='BannerImage' className='w-full h-full object-cover object-center rounded-b-3xl sm:hidden'/>
    <div className='absolute sm:bottom-12 bottom-4 sm:left-12 left-4 flex flex-col justify-center  sm:items-start items-center sm:gap-y-7 gap-y-4'>
        <div className='sm:pl-6'><Image src={BottleImage} alt='BottleImage' className='xl:w-[56px] sm:w-[50px] w-[40px] image-bounce' /></div>
        <p className='xl:w-[550px] sm:w-[400px] text-[#666666] leading-7 max-xl:text-sm max-sm:text-[12px]'><span className='font-semibold text-[#EEEEEE]'>PURCHASE REQUIRED.</span> Must be <span className='font-bold text-[#EEEEEE]'>16</span> or older. Program ends <span className='font-bold text-[#EEEEEE]'>December 31, 2024</span> (or while Codes last). Points must be redeemed by <span className='font-bold text-[#EEEEEE]'>January 9, 2025.</span> See
        <Link href="/pages/prime-x-promotion" title="PRIME X REWARDS T&amp;C"><span className='text-white font-semibold hover:text-[#FF0886] transition-all duration-200'> Rewards Terms </span></Link>
        for full details.</p>
        <button className='xl:text-xl sm:text-md text-sm bg-[#1A1C1B] font-bold text-[#FF0886] sm:px-5 px-3 sm:py-3 py-2 rounded-xl transition-all duration-300 hover:bg-opacity-60 border border-[#FF0886] hover:border-[#1A1C1B] '>JOIN THE HUNT</button>
    </div>
</div>
  )
}

export default PinkHeroBanner