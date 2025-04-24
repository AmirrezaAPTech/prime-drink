'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import SwiperSlideBox from './SwiperSlideBox';
import { Product } from '@/app/[category]/[name]/page';
import { ProductItem } from '@/constants/constants';

interface ImageSwipperBoxProps {
    product: ProductItem;
}

const ImageSwipperBox: React.FC<ImageSwipperBoxProps> = ({ product }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

    return (
        <div className='w-full'>
            {/* Main Swiper */}
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                } as React.CSSProperties}
                spaceBetween={10} // Added space between slides
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {product.imageUrl.map((image, index) => (
                    <SwiperSlide key={index}>
                        <SwiperSlideBox
                            image={image}
                            size={{ width: 200, height: 350 }}
                            className="max-xl:w-1/2"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Thumbnail Swiper */}
            <div className='w-full flex justify-center items-center gap-x-3'>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={3}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper w-full mt-5 cursor-pointer"
                >
                    {product.imageUrl.map((img, index) => (
                        <SwiperSlide key={index}>
                            <SwiperSlideBox
                                image={img}
                                size={{ width: 25, height: 30 }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ImageSwipperBox;
