import React from 'react'
import BarIcon from './BarIcon'
import barIcon from '@/public/Icons/bar.svg'
import Image from 'next/image'
import ToggleEvent from './ToggleInput'
import { HeaderDropDownLinks } from '@/constants/constants'
import HeaderAImg from '@/public/Images/Header-Img.webp'
import HeaderBImg from '@/public/Images/HeaderB-Img.webp'
import logoutIcon from '../public/Icons/logout.svg';
import ShopDropdown from './ShopDropdown'

const Sidebar = () => {
  return (
<div className="drawer drawer-start md:hidden">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button">
        <Image src={barIcon} alt='barIcon' className='w-6 h-6' />
    </label>
  </div>
  <div className="drawer-side no-scrollbar">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 py-4 flex justify-start gap-y-6">
        <div className='flex justify-between items-center'>
    <ToggleEvent />
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay text-xl text-white pr-5">X</label>
        </div>
    <div tabIndex={0} className="collapse collapse-arrow w-full">
    <div className="collapse-title text-md text-white w-full flex items-center justify-start p-0">SHOP</div>
    <div className="collapse-content flex flex-col gap-y-12">
    <ShopDropdown />
    </div>
    </div>
    <div tabIndex={0} className="collapse collapse-arrow w-full">
    <div className="collapse-title text-sm text-white w-full flex items-center justify-start p-0">ABOUT PRIME</div>
    <div className="collapse-content p-0">
        <ul className='flex flex-col gap-y-5'>
        {HeaderDropDownLinks.aboutPrime.map(item => (
            <li key={item}>{item}</li>
        ))}
        </ul>
    </div>
    </div>
    <li className='text-md text-white w-full h-[60px] flex justify-center'>WHERE TO BUY</li>
    <li className='text-md text-white w-full h-[60px] flex justify-center'>VERIFY YOUR PRIME</li>
    <li className='text-md text-red-500 w-full h-[60px] flex justify-center'>Log Out</li>
    </ul>
  </div>
</div>
  )
}

export default Sidebar