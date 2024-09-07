import React from 'react'
import Image from 'next/image'
import PrimeLogo from '../public/Images/Prime-Logo_200x.png'
import UserIcon from '../public/Icons/user.svg'
import SearchIcon from '../public/Icons/search.svg'
import BasketIcon from '../public/Icons/basket.svg'
import ToggleInput from './ToggleInput'
import { HeaderLinksList } from '@/constants/constants'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='absolute top-0 flex justify-between w-full z-10 items-center text-white px-12 h-20 hover:bg-[#333333] transition-all duration-300 delay-50 cursor-pointer rounded-b-2xl pb-1'>
        <ul className='flex justify-center items-center gap-x-8 text-xl h-full'>
            {HeaderLinksList.map(item => (
            <li key={item.name} className='relative h-full flex justify-center items-center cursor-pointer'><Link href={"/"} className='header-links-animation uppercase'>{item.name}</Link></li>
            ))}
        </ul>
        <Image src={PrimeLogo} alt='PrimeLogo' className='w-28 absolute left-1/2'/>
        <ul className='flex justify-center items-center gap-x-6'>
            <ToggleInput />
            <Image src={UserIcon} alt='UserIcon' className='w-7 h-7 hover:opacity-50 transition-all duration-200'/>
            <Image src={SearchIcon} alt='SearchIcon' className='w-7 h-7 hover:opacity-50 transition-all duration-200 '/>
            <Image src={BasketIcon} alt='BasketIcon' className='w-6 h-6 hover:opacity-50 transition-all duration-200 '/>
        </ul>
    </div>
  )
}

export default Header