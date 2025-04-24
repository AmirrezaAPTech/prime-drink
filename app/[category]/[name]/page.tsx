'use client'
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ImageSwipperBox from '@/components/ProductPage/ImageSwipperBox';
import { PrimeGroupOptions, PrimeItems, ProductItem } from '@/constants/constants';
import ProductInfo from '@/components/ProductPage/ProductInfo';
import { Provider } from 'react-redux';
import { store } from '../../../features/store';
import ClientProvider from '@/components/ClientProvider';

export interface Product {
  name: string;
  image: string[];
  price: string;
  pack_size: string;
  quantity: number;
}

interface Category {
  name: string;
  products: Product[];
}

interface ProductPageProps {
  params: {
    category: string;
    name: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { category, name } = params;
  const productCategory = PrimeItems[category];
  console.log(productCategory)
  

  if (!productCategory) {
    return notFound();
  }
  
  const product = productCategory.find((item) => item.name.replace(/\s+/g, '').toLowerCase() === name.toLowerCase());
  
  if (!product) {
    return notFound();
  }

  return (
    <ClientProvider>
    <div className='pb-20 md:pt-40 pt-28 xl:w-[1200px] w-full mx-auto flex justify-center items-center max-sm:px-2'>
        <div className='flex max-xl:flex-col justify-center items-center gap-10 w-full'>
        <div className='max-w-[500px] w-full'>
      <ImageSwipperBox product={product} />
        </div>
        <ProductInfo product={product} />
        </div>
    </div>
    </ClientProvider>
  );
}
