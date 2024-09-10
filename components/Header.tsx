'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import PrimeLogo from '../public/Images/Prime-Logo_200x.png';
import UserIcon from '../public/Icons/user.svg';
import SearchIcon from '../public/Icons/search.svg';
import BasketIcon from '../public/Icons/basket.svg';
import HeaderAImg from '@/public/Images/Header-Img.webp'
import HeaderBImg from '@/public/Images/HeaderB-Img.webp'
import ToggleInput from './ToggleInput';
import { HeaderDropDownLinks, HeaderLinksList } from '@/constants/constants';
import Link from 'next/link';
import BarIcon from './BarIcon';
import Sidebar from './Sidebar';
import ShopDropdown from './ShopDropdown';
import Basket from './Basket';

const Header = () => {
  const [shopDropDownVisible, setShopDropDownVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Change state when user scrolls down
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='relative group'>
      <div className={`fixed top-0 flex max-xl:flex-col-reverse xl:justify-between max-xl:py-5 w-full items-center z-50 text-white sm:px-12 px-5 xl:h-20 md:h-32 gap-y-8 group-hover:bg-[#333333] transition-all duration-150 cursor-pointer ${shopDropDownVisible ? "hover:rounded-b-none" : " hover:rounded-b-2xl"} ${isScrolled ? 'bg-[#333333] text-white' : 'bg-none'}`}>
        
        {/* Main navigation links */}
        <ul className='flex justify-center items-center gap-x-8 2xl:text-xl h-full max-md:hidden'>
          {HeaderLinksList.map(item => (
            <li 
              key={item.name} 
              className='relative text-[17px] h-full flex justify-center items-center cursor-pointer'
              onMouseEnter={() => item.name === "SHOP" && setShopDropDownVisible(true)}
              onMouseLeave={() => item.name === "SHOP" && setShopDropDownVisible(false)}
            >
              <Link href={"/"} className='uppercase header-links-animation'>
                {item.name}
              </Link>
              {/* Dropdown for SHOP */}
              {item.name === "SHOP" && shopDropDownVisible && (
                    <div
                    onMouseEnter={() => setShopDropDownVisible && setShopDropDownVisible(true)}
                    onMouseLeave={() => setShopDropDownVisible && setShopDropDownVisible(false)}
                    className='fixed xl:top-20 top-32 left-0 right-0 w-screen z-50 bg-[#222222] border-b border-b-[#666666] py-12 rounded-b-2xl flex lg:justify-center justify-between items-start xl:gap-x-24 lg:gap-x-12 max-lg:px-4'
                  >
                <ShopDropdown />
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Logo */}
        <Image 
          src={PrimeLogo} 
          alt='PrimeLogo' 
          className='sm:w-28 w-24 absolute left-1/2 transform -translate-x-1/2 sm:top-[13px] top-[11px]' 
        />

        {/* Icons and toggle */}
        <ul className='flex xl:justify-center justify-between max-xl:w-full items-center gap-x-6'>
          <div className='max-md:hidden'>
            <ToggleInput />
          </div>
          <Sidebar />
          <div className='flex justify-center items-center sm:gap-x-6 gap-x-4'>
            <Image src={UserIcon} alt='UserIcon' className='w-7 h-7 hover:opacity-50 transition-all duration-200 max-md:hidden' />
            <Image src={SearchIcon} alt='SearchIcon' className='sm:w-7 sm:h-7 w-6 h-6 hover:opacity-50 transition-all duration-200' />
            {/* <Image src={BasketIcon} alt='BasketIcon' className='sm:w-6 sm:h-6 w-5 h-5 hover:opacity-50 transition-all duration-200' /> */}
            <Basket />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;


