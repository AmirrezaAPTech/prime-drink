'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import PrimeLogo from '../public/Images/Prime-Logo_200x.png'
import UserIcon from '../public/Icons/user.svg'
import SearchIcon from '../public/Icons/search.svg'
import BasketIcon from '../public/Icons/basket.svg'
import ToggleInput from './ToggleInput'
import { HeaderDropDownLinks, HeaderLinksList } from '@/constants/constants'
import Link from 'next/link'

const Header = () => {
  const [shopDropDownVisible, setShopDropDownVisible] = useState(false)

  return (
    <div className='relative group'>
    <div className='fixed top-0 flex max-xl:flex-col-reverse xl:justify-between max-xl:py-5 w-full items-center z-50 text-white sm:px-12 px-5 xl:h-20 sm:h-36 group-hover:bg-[#333333] transition-all duration-300 delay-50 cursor-pointer hover:rounded-b-2xl pb-1'>
        <ul className='flex justify-center items-center gap-x-8 2xl:text-xl h-full max-sm:hidden'>
            {HeaderLinksList.map(item => (
            <li key={item.name} className='relative h-full flex justify-center items-center cursor-pointer' onMouseEnter={() => item.name === "SHOP" && setShopDropDownVisible(true)} onMouseLeave={() => item.name === "SHOP" && setShopDropDownVisible(false)}><Link href={"/"} className='header-links-animation uppercase'>{item.name}</Link></li>
            ))}
        </ul>
        <Image src={PrimeLogo} alt='PrimeLogo' className='w-28 absolute left-1/2 transform -translate-x-1/2 top-[13px]'/>
        <ul className='flex xl:justify-center justify-between max-xl:w-full items-center gap-x-6'>
          <div className='max-sm:hidden'>
            <ToggleInput />
          </div>
            <div className='flex justify-center items-center gap-x-6'>
            <Image src={UserIcon} alt='UserIcon' className='w-7 h-7 hover:opacity-50 transition-all duration-200 max-sm:hidden'/>
            <Image src={SearchIcon} alt='SearchIcon' className='sm:w-7 sm:h-7 w-6 h-6 hover:opacity-50 transition-all duration-200 '/>
            <Image src={BasketIcon} alt='BasketIcon' className='sm:w-6 sm:h-6 w-5 h-5 hover:opacity-50 transition-all duration-200 '/>
            </div>
        </ul>
    </div>
    {shopDropDownVisible && 
    <div onMouseEnter={() => setShopDropDownVisible(true)} onMouseLeave={() => setShopDropDownVisible(false)} className='fixed top-20 left-0 right-0 w-full h-96 z-50 bg-[#222222] rounded-b-2xl border-b border-b-[#666666] py-5 px-12'>
      <ul className='leading-10'>
      <li className='text-3xl'>SHOP Prime</li>
      {HeaderDropDownLinks.shop.shopPrime.map(item => <li key={item} className=''>{item}</li>)}
      </ul>
    </div>
      }
    </div>
  )
}

export default Header