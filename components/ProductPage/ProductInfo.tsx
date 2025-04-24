'use client'
import { Product } from '@/app/[category]/[name]/page'
import { PrimeGroupOptions, ProductItem } from '@/constants/constants'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';
import bellIcon from '@/public/Icons/bell.svg'
import mapIcon from '@/public/Icons/map.svg'
import Image from 'next/image'
import React, { useState } from 'react'

interface ProductInfoProps {
    product: ProductItem
}
const ProductInfo: React.FC<ProductInfoProps> = ({product}) => {
  const dispatch = useDispatch();
  const [quantityValue, setQuantityValue] = useState(1);

  const handleAddToCart = (quantity: number) => {
    dispatch(
      addToCart({
        name: product.name,
        priceDollar: product.priceDollar,  // Assuming 'price' corresponds to 'priceDollar'
        pricePK: product.pricePK,  // Assuming 'pack_size' corresponds to 'pricePK'
        imageUrl: product.imageUrl,  // Assuming the first image from 'image' array is used
        quantity: quantity,
      })
    );
    setQuantityValue(1)
  };
  return (
    <div className='h-full col-span-4 flex flex-col w-full max-w-[500px] gap-y-5'>
    <h1 className='text-4xl'>{product.name}</h1>
    <p className='text-lg'>{product.pricePK}</p>
    <p className='text-2xl'>{product.priceDollar}</p>
  { product.quantity <= 0 ? <>
    <div className='flex justify-start items-center'>
    <input type="text" placeholder='Enter your email' className='bg-[#EEEEEE] h-14 sm:w-96 w-full rounded-l-lg text-[#666666] px-3' />
    <button className='sm:text-md text-sm bg-[#1A1C1B] font-bold text-[#EEEEEE] sm:px-6 px-5 h-14 rounded-r-lg transition-all duration-300 hover:bg-opacity-60 border border-[#EEEEEE] hover:border-[#1A1C1B] flex justify-center items-center flex-nowrap gap-x-2 text-nowrap'>NOTIFY ME<Image src={bellIcon} alt='BellIcon' className='sm:w-7 sm:h-7 w-5 h-5' /></button>
    </div>
    <button className='sm:text-md text-sm bg-[#1A1C1B] font-bold text-[#EEEEEE] px-3 h-14 rounded-lg transition-all duration-300 hover:bg-opacity-60 border border-[#EEEEEE] hover:border-[#1A1C1B] flex justify-center items-center flex-nowrap gap-x-2'>FIND IN STORE<Image src={mapIcon} alt='mapIcon' className='w-7 h-6' /></button>
    </> : <>
    <input type="number" value={quantityValue} onChange={(e) => setQuantityValue(Number(e.target.value))} defaultValue={1} min={1} max={10} className="w-24 h-12 bg-[#1A1C1B] mt-3 text-white pl-5 block rounded-md border border-white" />
    <button onClick={() => handleAddToCart(quantityValue)} className='sm:text-md text-sm bg-[#1A1C1B] font-bold text-[#EEEEEE] px-3 h-14 rounded-lg transition-all duration-300 hover:bg-opacity-60 border border-[#EEEEEE] hover:border-[#1A1C1B] flex justify-center items-center flex-nowrap gap-x-2'>ADD TO CART</button>
    </> }
    <div className='grid sm:grid-cols-5 grid-cols-3 gap-3 border-b border-b-[#66666670] pb-1'>
  {PrimeGroupOptions.map((option, index) => (
      <Image key={index} src={option} alt='Option' className='col-span-1 w-20 option-animation'/>
  ))}
  </div>
  <ul className='list-disc list-inside text-white ml-2 text-sm leading-8'>
      <li>Zero Added Sugar​</li>
      <li>25 Calories​​</li>
      <li>10% Coconut Water​​</li>
      <li>BCAAs + B Vitamins​​</li>
      <li>Antioxidants + Electrolytes</li>
      <li>Caffeine-Free</li>
  </ul>
    </div>
  )
}

export default ProductInfo