import Image, { StaticImageData } from 'next/image'
import React from 'react'

import { PrimeGroupOptions } from '@/constants/constants'

interface BottlesGroupProps {
    groupImg: StaticImageData,
    OptionsList: StaticImageData[]
}

const BottlesGroup: React.FC<BottlesGroupProps> = ({groupImg, OptionsList}) => {
  return (
    <div className='flex max-xl:flex-col justify-center items-center max-xl:w-full max-xl:px-16 max-sm:px-2 gap-x-36 gap-y-16 py-12'>
    <Image src={groupImg} alt='BottlesImg' className='image-bounce' />
    <div className='grid grid-cols-3 gap-7'>
    {OptionsList.map((option, index) => (
        <Image key={index} src={option} alt='Option' className='md:w-52 w-full option-animation'/>
    ))}
    </div>
    </div>
  )
}

export default BottlesGroup