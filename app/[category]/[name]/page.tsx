import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ImageSwipperBox from '@/components/ProductPage/ImageSwipperBox';
import { PrimeGroupOptions } from '@/constants/constants';
import ProductInfo from '@/components/ProductPage/ProductInfo';

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

export default async function ProductPage({ params }: ProductPageProps) {
  const { category, name } = params;
  const filePath = path.join(process.cwd(), 'public/data/prime_energy_products.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');

  // Log data for debugging
  console.log('JSON Data:', jsonData);

  let categories: Category[] = [];
  try {
    const parsedData = JSON.parse(jsonData);
    if (parsedData && Array.isArray(parsedData.categories)) {
      categories = parsedData.categories;
    } else {
      throw new Error('Parsed data does not contain categories array');
    }
  } catch (error) {
    console.error('Error parsing JSON data:', error);
    notFound();
  }

  // Log parsed categories for debugging
  console.log('Parsed Categories:', categories);

  const categoryData = categories.find((cat) => 
    cat.name.toLowerCase() === category.toLowerCase()
  );
  
  if (!categoryData) {
    notFound();
  }

  const product = categoryData.products.find((prod) => 
    prod.name.toLowerCase().replace(/\s+/g, '-') === name.toLowerCase()
  );

  if (!product) {
    notFound();
  }

  return (
    <div className='pb-20 md:pt-40 pt-28 xl:w-[1200px] w-full mx-auto flex justify-center items-center max-sm:px-2'>
        <div className='flex max-xl:flex-col justify-center items-center gap-10 w-full'>
        <div className='max-w-[500px] w-full'>
      <ImageSwipperBox category={category} name={name} />
        </div>
        <ProductInfo product={product} />
        </div>
    </div>
  );
}
