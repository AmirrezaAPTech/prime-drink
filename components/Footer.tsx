import Image from 'next/image'
import React from 'react'
import FaceBookImg from '@/public/Icons/facebook.svg'
import InstagramImg from '@/public/Icons/instagram.svg'
import TwitterXImg from '@/public/Icons/twitterX.svg'
import Link from 'next/link'
import { FooterItems } from '@/constants/constants'

const Footer = () => {
  return (
    <div className='w-full border-t border-[#666666] mt-10 grid xl:grid-cols-7 max-xl:grid-cols-4 max-sm:grid-cols-1 gap-20 text-white 2xl:px-20 px-5 py-16'>
        <div className='sm:col-span-2 col-span-1 flex flex-col gap-y-5'>
            <h3 className='text-2xl font-semibold'>ABOUT PRIME</h3>
            <p className='text-sm'>PRIME was developed to fill the void where great taste meets function. With bold, thirst-quenching flavors to help you refresh, replenish, and refuel, PRIME is the perfect boost for any endeavor. We're confident you'll love it as much as we do.</p>
            <div className='w-full flex justify-start items-center gap-x-5'>
                <Link href={"https://facebook.com"}><Image src={FaceBookImg} alt='FaceBookImg' className='w-5 h-5 hover:opacity-50 transition-all duration-200' /></Link>
                <Link href={"https://instagram.com"}><Image src={InstagramImg} alt='InstagramImg' className='w-5 h-5 hover:opacity-50 transition-all duration-200' /></Link>
                <Link href={"https://x.com"}><Image src={TwitterXImg} alt='TwitterXImg' className='w-5 h-5 hover:opacity-50 transition-all duration-200' /></Link>
            </div>
        </div>
        <div className='xl:col-span-1 sm:col-span-2 col-span-1 flex flex-col gap-y-5'>
            {FooterItems.PrimeTopics.map(item => (
            <Link key={item} className='uppercase hover:text-[#666666] transition-all duration-200' href={"/"}>{item}</Link>
            ))}
        </div>
        <div className='lg:col-span-1 sm:col-span-2 col-span-1 flex flex-col gap-y-5'>
        {FooterItems.PrimeSection.map(item => (
            <Link key={item} className='uppercase hover:text-[#666666] transition-all duration-200' href={"/"}>{item}</Link>
            ))}
        </div>
        <div className='lg:col-span-1 sm:col-span-2 col-span-1  flex flex-col gap-y-5'>
        {FooterItems.MoreInfo.map(item => (
            <Link key={item} className='uppercase hover:text-[#666666] transition-all duration-200' href={"/"}>{item}</Link>
            ))}
        </div>
        <div className='lg:col-span-2 sm:col-span-3 col-span-1 flex flex-col gap-y-5'>
        <h3 className='text-2xl font-semibold'>NEWSLETTER</h3>
        <p className='text-[13px] text-[#999999]'>Subscribe to receive updates, access to exclusive deals, and more.</p>
        <input type="text" placeholder='Enter your email' className='bg-[#EEEEEE] h-14 sm:mr-16 rounded-lg text-[#666666] px-3 max-w-96' />
        <input type="text" placeholder='Enter your email' className='bg-[#EEEEEE] h-14 sm:mr-16 rounded-lg text-[#666666] px-3 max-w-96' />
        <p className='text-[13px] text-[#999999]'>By subscribing, you consent to receive marketing communications from PRIME using the provided email address and phone number. Consent to receive marketing is not required for purchase. Standard data and messaging rates may apply. You can opt-out at any time by contacting us or using the unsubscribe link. See our Privacy Policy for details.</p>
        </div>
    </div>
  )
}

export default Footer