import { PrimeItems, PrimeItemsProps, ProductItem } from '@/constants/constants'
import Image from 'next/image'
import React from 'react'

interface ProductsBoxProps {
  title: string;
  itemsList: ProductItem[]
}

const ProductsBox: React.FC<ProductsBoxProps> = ({title, itemsList}) => {
  return (
    <div className='flex justify-center items-center relative w-full py-7 max-sm:p-3'>
        <p className='text-center w-full text-[#333333] tracking-[.25em] absolute lg:top-0 top-12' style={{ fontSize: 'clamp(30px, 10vw, 150px)' }}>{title}</p>
        <div className='xl:flex xl:justify-center xl:items-start grid lg:grid-cols-3 grid-cols-2 justify-items-center items-items-start w-full h-full sm:gap-32 gap-12 z-10 pt-44'>
        {itemsList.map((item: ProductItem) => (
          <div key={item.name} className='max-xl:col-span-1 flex flex-col items-center xl:w-24 sm:w-36 w-28 gap-y-5 xl:hover:w-28 transition-all duration-200 cursor-pointer group'>
            <Image src={item.imageUrl} alt='Product Image' className='w-full group-hover:rotate-12 transition-all duration-300' />
            <div className='flex flex-col items-center gap-y-1'>
            <p className='uppercase text-center font-semibold'>{item.name}</p>
            <p className='text-center text-[#666666] font-semibold text-sm'>{item.priceDollar}-{item.pricePK}</p>
            </div>
          </div>
        ))}
        </div>
    </div>
  )
}

export default ProductsBox