import { ProductItem } from '@/constants/constants';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import React, { useState } from 'react'
import { addToCart, updateQuantity } from '@/features/cartSlice';

interface BasketCardProps {
  item: ProductItem;
  key: number;
}


const BasketCard: React.FC<BasketCardProps> = ({item, key}) => {
    const dispatch = useDispatch();
    const [quantityValue, setQuantityValue] = useState(item.quantity);

    const handleAddToCart = (quantity: number) => {
        dispatch(
            updateQuantity({
            name: item.name,
            quantity: quantity,
          })
        );
      };

  return (
    <div key={key} className='w-full py-4 px-8 border-b border-b-[#9dd3644b] flex justify-start items-center gap-x-2'>
      <Image src={item.imageUrl[0]} alt={item.name} width={50} height={50} className="mr-2" />
    <div className='flex flex-col gap-y-3'>
      <p>{item.name}</p>
      <input type="number" value={item.quantity} onChange={(e) => handleAddToCart(Number(e.target.value)) } defaultValue={1} min={1} max={10} className="w-24 h-10 bg-[#1A1C1B] text-white pl-5 block rounded-md border border-white" />
      <p className='text-lg'>{item.priceDollar}</p>
    </div>
  </div>
  )
}

export default BasketCard