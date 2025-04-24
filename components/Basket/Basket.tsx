import Image from 'next/image';
import React from 'react';
import BasketIcon from '../../public/Icons/basket.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store'; // Adjust the import path for your store
import BasketCard from './BasketCard';

const Basket = () => {
  // Access the cart state from Redux
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity);

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-5" className="drawer-button">
          <Image src={BasketIcon} alt="BasketIcon" className="sm:w-6 sm:h-6 w-12 hover:opacity-50 transition-all duration-200" />
        </label>
      </div>
      <div className="drawer-side no-scrollbar">
        <label htmlFor="my-drawer-5" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="bg-[#101214] text-base-content min-h-full w-80 py-4 flex flex-col justify-start items-center h-full border-l border-l-[#9dd3644b]">
          <li className='border-b border-b-[#9dd3644b] w-full flex flex-row justify-between items-center pb-2 px-2'>
            <p className='text-xl p-0'>Cart</p> 
            <label htmlFor="my-drawer-5" aria-label="close sidebar" className="drawer-overlay text-xl p-0 cursor-pointer hover:opacity-45">X</label>
          </li>

          {/* List of items in the cart */}
          <li className='flex flex-col justify-start items-center w-full h-full overflow-y-auto'>
            {cartItems.length === 0 ? (
              <p className='text-center mt-4'>Your cart is empty</p>
            ) : (
              cartItems.map((item, index) => (
                <BasketCard item={item} key={index} />
              ))
            )}
          </li>

          {/* Total summary and checkout button */}
          <li className='w-full px-3 flex flex-col justify-start items-center gap-y-2  border-t border-t-[#9dd3644b] pt-2'>
            <div className='w-full flex justify-between items-center'>
              <p>Total Items: {totalQuantity}</p>
              <p className='text-lg'>${totalAmount.toFixed(2)}</p>
            </div>
            <button className='bg-[#1A1C1B] w-full py-3 rounded-2xl text-[#9ED364] text-lg font-semibold border border-[#9ED364]'>
              CHECKOUT
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Basket;
