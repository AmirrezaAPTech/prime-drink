import React from 'react';
import Image from 'next/image';

interface SwiperImageSlideProps {
    image:string;
    category: string;
    name: string;
    size: { width: number; height: number };
    className?: string;
}

const SwiperSlideBox: React.FC<SwiperImageSlideProps> = ({ image, category, name, size, className }) => {

    return (
                    <div className='w-full flex justify-center items-center'>
                        <Image
                            src={`/images/${category}/${name}/${image}.png`}
                            alt={`${name} ${image}`}
                            width={size.width}
                            height={size.height}
                            className={className}
                        />
                    </div>
    );
};

export default SwiperSlideBox;
