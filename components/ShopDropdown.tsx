import { HeaderDropDownLinks } from '@/constants/constants'
import Image from 'next/image'
import React from 'react'
import HeaderAImg from '@/public/Images/Header-Img.webp'
import HeaderBImg from '@/public/Images/HeaderB-Img.webp'

const ShopDropdown = () => {
  return (
<>
    <ul className='leading-10 flex flex-col gap-y-5'>
      <li className='text-2xl'>SHOP PRIME</li>
      {HeaderDropDownLinks.shop.shopPrime.map(item => (
        <li key={item} className='hover:opacity-50 text-sm transition-colors'>
          {item}
        </li>
      ))}
    </ul>
    <ul className='leading-10 flex flex-col gap-y-5'>
      <li className='text-2xl'>SHOP PRIME</li>
      {HeaderDropDownLinks.shop.Featured.map(item => (
        <li key={item} className='hover:opacity-50 text-sm transition-colors'>
          {item}
        </li>
      ))}
    </ul>
    <Image src={HeaderAImg} alt='HeaderAImg' className='xl:w-72 lg:w-60 w-44 rounded-2xl'/>
    <Image src={HeaderBImg} alt='HeaderBImg' className='xl:w-72 lg:w-60 w-44 rounded-2xl'/>
</>
  )
}

export default ShopDropdown