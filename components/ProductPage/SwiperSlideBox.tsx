import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface SwiperImageSlideProps {
    image: StaticImageData;
    size: { width: number; height: number };
    className?: string;
}

const SwiperSlideBox: React.FC<SwiperImageSlideProps> = ({ image, size, className }) => {

    return (
                    <div className='w-full flex justify-center items-center'>
                        <Image
                            src={image}
                            alt={`${image}`}
                            width={size.width}
                            height={size.height}
                            className={className}
                        />
                    </div>
    );
};

export default SwiperSlideBox;
